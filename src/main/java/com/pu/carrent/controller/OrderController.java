package com.pu.carrent.controller;

import com.pu.carrent.entity.Car;
import com.pu.carrent.entity.Order;
import com.pu.carrent.entity.User;
import com.pu.carrent.service.CarService;
import com.pu.carrent.service.OrderSerivce;
import com.pu.carrent.service.UserService;
import com.pu.carrent.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Controller
public class OrderController {

    @Autowired
    private OrderSerivce orderSerivce;

    @Autowired
    private CarService carService;

    @Autowired
    private UserTypeService userTypeService;

    @RequestMapping(value = "/makeOrder", method = RequestMethod.POST)
    public String makeOrder(Integer carId, String date, String price, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = new Order();
            order.setCarid(carId);
            order.setUserid(currentUser.getUserid());
            Date createTime = new Date();
            order.setCreattime(createTime);
            DateFormat format = new SimpleDateFormat("MM/dd/yyyy");
            Date end;
            int days;
            try {
                end = format.parse(date);
                order.setEndtime(end);
                Calendar c = Calendar.getInstance();
                c.setTime(end);
                int day1 = c.get(Calendar.DAY_OF_YEAR);
                c.setTime(createTime);
                int day2 = c.get(Calendar.DAY_OF_YEAR);
                days = day1 - day2 + 1;
                Car car = new Car();
                car.setIsdeleted(days);
                order.setTotalprice(new BigDecimal(price).multiply(new BigDecimal(days)));
                order.setIspaid(0);
                orderSerivce.addOrder(order);
                car.setCarid(carId);
                carService.changeCar(car);
            } catch (ParseException e) {
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
            model.addAttribute("orders", orders);
            return "orders";
        }  else {
            model.addAttribute("msg", "未知错误");
            return "fail";
        }
    }

    // TODO: 2019/4/23
    @RequestMapping(value = "/pay", method = RequestMethod.GET)
    public String pay(HttpSession session, Integer orderId, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = new Order();
            order.setOrderid(orderId);
            order.setIspaid(1);
            orderSerivce.changeOrder(order);
            return "redirect:/orders";
        }  else {
            model.addAttribute("msg", "未知错误");
            return "fail";
        }
    }

    @RequestMapping(value = "/cancelOrder", method = RequestMethod.GET)
    public String cancelOrder(Integer orderId, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = orderSerivce.findOrderById(orderId);
            if (order.getIspaid() == 0) {
                orderSerivce.deleteOrderById(orderId);
                Car car = new Car();
                car.setCarid(order.getCarid());
                car.setIsdeleted(0);
                carService.changeCar(car);
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
    public String backRefund(Integer orderId,  HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            // TODO: 2019/4/23 refund
            return "redirect:/backManage/showRefund";
        }  else {
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
            model.addAttribute("orderDetail", order);
            return "orderDetail";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }
}
