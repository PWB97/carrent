package com.pu.carrent.controller;

import com.pu.carrent.entity.*;
import com.pu.carrent.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
import java.util.List;

@Controller
public class CarController {

    @Autowired
    private CarService carService;

    @Autowired
    private CarTypeService carTypeService;

    @Autowired
    private CarBrandService carBrandService;

    @Autowired
    private LocationService locationService;

    @Autowired
    private UserTypeService userTypeService;

    @RequestMapping(value = "/rentCar", method = RequestMethod.GET)
    public String showCarsWithConditions(String carBrand, String carType, String location, BigDecimal lowPrice, BigDecimal highPrice, Model model, HttpSession session){
        List<CarType> carTypes = carTypeService.findAllCarType();
        List<CarBrand> carBrands = carBrandService.findAllCarBrand();
        List<Province> locations = locationService.findLocations();
        session.setAttribute("carTypes", carTypes);
        session.setAttribute("carBrands", carBrands);
        session.setAttribute("locations", locations);
        Integer brandId = null;
        Integer typeId = null;
        Integer lId = null;
        if (carBrand != null) brandId = carBrandService.findBrandIdByName(carBrand);
        if (carType != null) typeId = carTypeService.findTypeIdByWithName(carType);
        if (location != null) lId = locationService.findlIdBylName(location);
        List<Car> cars = carService.findCarsWithConditions(typeId, brandId, lId, lowPrice, highPrice);
        if (cars != null) {
            model.addAttribute("cars", cars);
            return "rentCar";
        } else return "fail";
    }

    @RequestMapping(value = "/carDetail", method = RequestMethod.POST)
    public String showCarDetail(Integer carId, Model model) {
        Car car = carService.findCarById(carId);
        if (car != null) {
            model.addAttribute("carDetail", car);
            return "carDetail";
        } else return "fail";
    }

    @RequestMapping(value = "/uploadCar", method = RequestMethod.POST)
    public String uploadCar(String carName, Integer brandId, Integer typeId, String plate, String detail, String pictures, String files, HttpSession session) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Car car = new Car();
            if (carName != null) car.setCarname(carName);
            if (brandId != null) car.setBrandid(brandId);
            if (typeId != null) car.setCtypeid(typeId);
            if (plate != null) car.setPlate(plate);
            if (detail != null) car.setDetail(detail);
            if (pictures != null) car.setPictures(pictures);
            if (files != null) car.setFiles(files);
            car.setUserid(currentUser.getUserid());
            carService.addCar(car);
            return "uploadCar";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/showCars", method = RequestMethod.POST)
    public String showCars(Model model, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Car> cars = carService.findAllCars();
            if (cars != null) {
                model.addAttribute("cars", cars);
                return "showCars";
            } else return "fail";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/online", method = RequestMethod.POST)
    public String online(Integer carId, Integer price, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            Car car = new Car();
            car.setCarid(carId);
            car.setIsonline(1);
            car.setPrice(new BigDecimal(price.toString()));
            carService.changeCar(car);
            return "carsNotOnline";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/carsNotOnline", method = RequestMethod.GET)
    public String showCarsNotOnline(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Car> cars = carService.findCarsNotOnline();
            model.addAttribute("cars", cars);
            return "carsNotOnline";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/offline", method = RequestMethod.POST)
    public String offline(Integer carId, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            Car car = new Car();
            car.setCarid(carId);
            car.setIsonline(0);
            carService.changeCar(car);
            return "showCars";
        } else return "fail";
    }
}
