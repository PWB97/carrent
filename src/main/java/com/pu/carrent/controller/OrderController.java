package com.pu.carrent.controller;

import com.alibaba.fastjson.JSONObject;
import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.alipay.api.request.AlipayTradeRefundRequest;
import com.pu.carrent.Util.AlipayConfig;
import com.pu.carrent.dao.CarDetailDao;
import com.pu.carrent.entity.CarDetail;
import com.pu.carrent.entity.Order;
import com.pu.carrent.entity.User;
import com.pu.carrent.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.math.BigDecimal;
import java.nio.charset.StandardCharsets;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Controller
public class OrderController {

    @Autowired
    private OrderSerivce orderSerivce;

    @Autowired
    private CarDetailService carDetailService;

    @Autowired
    private UserTypeService userTypeService;

    @Autowired
    private CarDetailDao carDetailDao;

    @Transactional
    @RequestMapping(value = "/makeOrder", method = RequestMethod.POST)
    public String makeOrder(Integer cdId, String startDate, String endDate, String price, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = new Order();
            order.setCarid(cdId);
            order.setUserid(currentUser.getUserid());
            DateFormat format = new SimpleDateFormat("dd.MM.yyyy");
            Date end;
            int days;
            try {
                Date start = format.parse(startDate);
                end = format.parse(endDate);
                Calendar c = Calendar.getInstance();
                c.setTime(end);
                int day1 = c.get(Calendar.DAY_OF_YEAR);
                c.setTime(start);
                int day2 = c.get(Calendar.DAY_OF_YEAR);
                days = day1 - day2 + 1;
                order.setCreattime(start);
                order.setEndtime(end);
                CarDetail carDetail = carDetailService.findCarDetailById(cdId);
                carDetail.setIsdeleted(days);
                order.setTotalprice(new BigDecimal(price).multiply(new BigDecimal(days)));
                order.setIspaid(0);
                orderSerivce.addOrder(order);
                carDetailService.changeCarDetailById(carDetail);
            } catch (ParseException e) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                e.printStackTrace();
            }
            return "redirect:/orders";
        }  else {
            model.addAttribute("msg", "未知错误");
            return "fail";
        }
    }

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public String orders(HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            List<Order> orders = orderSerivce.findOrdersByUserId(currentUser.getUserid());
            List<CarDetail> carDetails = carDetailDao.findCarDetail();
            CarDetail record;
            for (Order order : orders) {
                record = order.getCarDetail();
                int f = 0;
                for (CarDetail carDetail : carDetails) {
                    if (order.getCarDetail().getCdid().equals(carDetail.getCdid())) {
                        record.setAccidentType(carDetail.getAccidentType());
                        record.setAccidentTime(carDetail.getAccidentTime());
                        order.setCarDetail(record);
                        f = 1;
                    }
                } if (f == 0) record.setAccidentType(-2);
            }
            model.addAttribute("orders", orders);
            return "orders";
        }  else {
            model.addAttribute("msg", "请登录");
            return "fail";
        }
    }

    @RequestMapping(value = "/alipay", method = RequestMethod.GET)
    public String ali(Integer orderId, BigDecimal price, HttpServletResponse response, HttpSession session, Model model) throws IOException, AlipayApiException {

        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null && orderSerivce.findOrderById(orderId).getUserid().compareTo(currentUser.getUserid()) == 0) {
            // 获得初始化的AlipayClient
            AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id,
                    AlipayConfig.merchant_private_key, "json", AlipayConfig.charset,
                    AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
            // 设置请求参数
            AlipayTradePagePayRequest alipayRequest = new AlipayTradePagePayRequest();
            alipayRequest.setReturnUrl(AlipayConfig.return_url);
            alipayRequest.setNotifyUrl(AlipayConfig.notify_url);

            Order order = orderSerivce.findOrderById(orderId);
            String out_trade_no = String.valueOf(orderId);
            // 付款金额，必填
            String total_amount = String.valueOf(price);
            alipayRequest.setBizContent("{\"out_trade_no\":\"" + out_trade_no
                    + "\"," + "\"total_amount\":\"" + total_amount
                    + "\"," + "\"subject\":\"" + order.getCarDetail().getCar().getCarname() + "\","
                    + "\"body\":\"" + order.getCarDetail().getCar().getPlate() + "\","
                    + "\"product_code\":\"FAST_INSTANT_TRADE_PAY\"}");
            // 请求
            String result = alipayClient.pageExecute(alipayRequest).getBody();
            response.setContentType("text/html; charset=gbk");
            PrintWriter out = response.getWriter();
            out.print(result);
            return null;
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping("notify_url")
    public void Notify(HttpServletResponse response, HttpServletRequest request) throws Exception {
        String out_trade_no = new String(request.getParameter("out_trade_no").getBytes(StandardCharsets.ISO_8859_1), "GBK");
        String trade_status = new String(request.getParameter("trade_status").getBytes(StandardCharsets.ISO_8859_1), "GBK");
        if (trade_status.equals("TRADE_SUCCESS")) {//支付成功商家操作
            Order order = new Order();
            order.setOrderid(Integer.parseInt(out_trade_no));
            order.setIspaid(1);
            orderSerivce.changeOrder(order);
        }
    }

    @RequestMapping("return_url")
    public String Return_url() {
        return "redirect:/orders";
    }

    @RequestMapping(value = "/cancelOrder", method = RequestMethod.GET)
    public String cancelOrder(Integer orderId, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = orderSerivce.findOrderById(orderId);
            if (order.getIspaid() == 0 || order.getIspaid() == 2) {
                orderSerivce.deleteOrderById(orderId);
                CarDetail carDetail = new CarDetail();
                carDetail.setCdid(order.getCarid());
                carDetail.setIsdeleted(0);
                carDetailService.changeCarDetailById(carDetail);
                return "redirect:/orders";
            }  else {
                model.addAttribute("msg", "订单已支付");
                return "fail";
            }
        }  else {
            model.addAttribute("msg", "未知错误");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/showOrdersNotPaid", method = RequestMethod.GET)
    public String showOrdersNotPaid(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Order> orders = orderSerivce.findOrdersNotPaid();
            model.addAttribute("orders", orders);
            return "showOrdersNotPaid";
        }  else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/showMyRefunds", method = RequestMethod.GET)
    public String showMyRefunds(HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            List<Order> orders = orderSerivce.findRefundsByUserId(currentUser.getUserid());
            model.addAttribute("orders", orders);
            return "showMyRefunds";
        }  else {
            model.addAttribute("msg", "未知错误");
            return "fail";
        }
    }
    
    @RequestMapping(value = "/refund", method = RequestMethod.GET)
    public String refund(Integer orderId ,HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = new Order();
            order.setOrderid(orderId);
            order.setIspaid(-1);
            orderSerivce.changeOrder(order);
            return "redirect:/showMyRefunds";
        }  else {
            model.addAttribute("msg", "未知错误");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/showRefund", method = RequestMethod.GET)
    public String backRefund(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Order> orders = orderSerivce.findRefunds();
            model.addAttribute("orders", orders);
            return "refund";
        }  else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/refund", method = RequestMethod.GET)
    public String refund(Integer orderId, HttpServletResponse response, HttpSession session, Model model) throws IOException, AlipayApiException {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            response.setContentType("text/html;charset=utf-8");
            PrintWriter out = response.getWriter();
            //获得初始化的AlipayClient
            AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
            //设置请求参数
            AlipayTradeRefundRequest alipayRequest = new AlipayTradeRefundRequest();
            //商户订单号，必填
            String out_trade_no = String.valueOf(orderId);
            //需要退款的金额，该金额不能大于订单金额，必填
            Order order = orderSerivce.findOrderById(orderId);
            String refund_amount = String.valueOf(order.getTotalprice());
            //标识一次退款请求，同一笔交易多次退款需要保证唯一，如需部分退款，则此参数必传
            String out_request_no = UUID.randomUUID().toString();

            alipayRequest.setBizContent("{\"out_trade_no\":\"" + out_trade_no + "\","
                    + "\"refund_amount\":\"" + refund_amount + "\","
                    + "\"out_request_no\":\"" + out_request_no + "\"}");
            //请求
            String result = alipayClient.execute(alipayRequest).getBody();
            //输出
            JSONObject object = (JSONObject) JSONObject.parse(result);
            object = (JSONObject)object.get("alipay_trade_refund_response");
            String msg = object.getString("msg");
            if ("Success".compareTo(msg) == 0) {
                Order record = new Order();
                record.setOrderid(orderId);
                record.setIspaid(2);
                orderSerivce.changeOrder(record);
                model.addAttribute("msg", "完成");
                return "fail";
            } else {
                model.addAttribute("msg", msg);
                return "fail";
            }
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/showOrderDetail", method = RequestMethod.GET)
    public String showOrderDetail(Integer orderId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0
            || orderSerivce.findOrderById(orderId).getUserid().equals(currentUser.getUserid())) {
            Order order = orderSerivce.findOrderById(orderId);
            List<CarDetail> carDetails = carDetailDao.findCarDetail();
            CarDetail record;
            for (CarDetail carDetail : carDetails) {
                record = order.getCarDetail();
                if (carDetail.getCdid().equals(order.getCarDetail().getCdid())) {
                    record.setAccidentType(carDetail.getAccidentType());
                    record.setAccidentTime(carDetail.getAccidentTime());
                    record.setIsDamage(carDetail.getIsDamage());
                    record.setIsScrap(carDetail.getIsScrap());
                    record.setThirdParty(carDetail.getThirdParty());
                    record.setInjury(carDetail.getInjury());
                    record.setRobbing(carDetail.getRobbing());
                    record.setaLocation(carDetail.getaLocation());
                    order.setCarDetail(record);
                }
            }
            model.addAttribute("orderDetail", order);
            return "orderDetail";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }
}
