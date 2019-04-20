package com.pu.carrent.controller;

import com.pu.carrent.entity.Car;
import com.pu.carrent.entity.Order;
import com.pu.carrent.entity.User;
import com.pu.carrent.service.CarService;
import com.pu.carrent.service.OrderSerivce;
import com.pu.carrent.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
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
    public String makeOrder(Integer carId, int days, BigDecimal price, HttpSession session) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = new Order();
            order.setCarid(carId);
            order.setTotalprice(price.multiply(new BigDecimal(days)));
            Date create = new Date();
            Calendar c = Calendar.getInstance();
            c.setTime(create);
            c.add(5, days);
            order.setEndtime(c.getTime());
            order.setIspaid(0);
            orderSerivce.addOrder(order);
            Car car = new Car();
            car.setCarid(carId);
            car.setIsdeleted(days);
            carService.changeCar(car);
            return "orders";
        } else return "fail";
    }

    @RequestMapping(value = "/orders", method = RequestMethod.GET)
    public String orders(HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            List<Order> orders = orderSerivce.findOrdersByUserId(currentUser.getUserid());
            model.addAttribute("orders", orders);
            return "orders";
        } else return "fail";
    }

    @RequestMapping(value = "/pay", method = RequestMethod.POST)
    public String pay(HttpSession session, Integer orderId) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Order order = new Order();
            order.setOrderid(orderId);
            order.setIspaid(1);
            orderSerivce.changeOrder(order);
            return "orders";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/showOrdersNotPaid", method = RequestMethod.GET)
    public String showOrdersNotPaid(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Order> orders = orderSerivce.findOrdersNotPaid();
            model.addAttribute("orders", orders);
            return "showOrdersNotPaid";
        } else return "fail";
    }
}
