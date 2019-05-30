package com.pu.carrent.controller;

import com.pu.carrent.dao.CarDao;
import com.pu.carrent.entity.OrderData;
import com.pu.carrent.entity.Province;
import com.pu.carrent.entity.User;
import com.pu.carrent.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class DataController {

    @Autowired
    private CarDao carDao;

    @Autowired
    private OrderSerivce orderSerivce;

    @Autowired
    private UserTypeService userTypeService;

    @Autowired
    private ProvinceService provinceService;

    @RequestMapping(value = "/findTopCarData", method = RequestMethod.GET)
    public String findTopCarData(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            Map<String, Double> tResult = carDao.findTotalTopCarData();
            Map<String, Double> dResult = carDao.findTodayTopCarData();
            model.addAttribute("tResult", tResult);
            model.addAttribute("dResult", dResult);
            return "carData";
        } else {
            model.addAttribute("msg", "无权限");
            return "fail";
        }
    }

    @RequestMapping(value = "/findTopCityData", method = RequestMethod.GET)
    public String findTopCityData(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<OrderData> orderData = orderSerivce.findOrderDataByProvince();
            List<Province> provinces = provinceService.findAllProvince();
            model.addAttribute("orderData", orderData);
            model.addAttribute("provinces", provinces);
            return "cityData";
        } else {
            model.addAttribute("msg", "无权限");
            return "fail";
        }
    }
}
