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

    @Autowired
    private CityService cityService;

    @Autowired
    private ProvinceService provinceService;

    @RequestMapping(value = "/rentCar", method = RequestMethod.GET)
    public String showCarsWithConditions(String carBrand, String carType, String province, String city, String location, String lowPrice, String highPrice, Model model, HttpSession session){

        List<CarType> carTypes = carTypeService.findAllCarType();
        List<CarBrand> carBrands = carBrandService.findAllCarBrand();
        List<Province> locations = locationService.findLocations();
        session.setAttribute("carTypes", carTypes);
        session.setAttribute("carBrands", carBrands);
        session.setAttribute("locations", locations);

        Integer brandId = null;
        Integer typeId = null;
        Integer pId = null;
        Integer cId = null;
        Integer lId = null;
        BigDecimal lp = null;
        BigDecimal hp = null;
        if (province != null && "请选择省".compareTo(province) != 0) pId = Integer.parseInt(province);
        if (city != null && "请选择市".compareTo(city) != 0) cId = Integer.parseInt(city);
        if (location != null && "请选择门店".compareTo(location) != 0) lId = Integer.parseInt(location);
        if (carBrand != null && "请选择品牌".compareTo(carBrand) != 0) brandId = Integer.parseInt(carBrand);
        if (carType != null && "请选择类型".compareTo(carType) != 0) typeId = Integer.parseInt(carType);
        if (lowPrice != null && "".compareTo(lowPrice) != 0 ) lp = new BigDecimal(lowPrice);
        if (highPrice != null && "".compareTo(highPrice) != 0) hp = new BigDecimal(highPrice);
        List<Car> cars = carService.findCarsWithConditions(typeId, brandId, pId, cId, lId, lp, hp);
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

    @RequestMapping(value = "/backManage/showCars", method = RequestMethod.GET)
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

    @RequestMapping(value = "/backManage/addCarType", method = RequestMethod.POST)
    public String addCarType(String carTypeName, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            CarType carType = new CarType();
            carType.setCtypename(carTypeName);
            carTypeService.addCarType(carType);
            return "redirect:/backManage/showCarConditions";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/addCarBrand", method = RequestMethod.POST)
    public String addCarBrand(String brandName, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            CarBrand carBrand = new CarBrand();
            carBrand.setBrandname(brandName);
            carBrandService.addCarBrand(carBrand);
            return "redirect:/backManage/showCarConditions";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/addLocation", method = RequestMethod.POST)
    public String addLocation(String pId, String cId, String name, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            if ("请选择市".compareTo(cId) != 0  && "请选择省".compareTo(pId) != 0) {
                Location location = new Location();
                location.setCid(Integer.parseInt(cId));
                location.setLname(name);
                locationService.addLocation(location);
            }
            if ("请选择市".compareTo(cId) == 0  && "请选择省".compareTo(pId) != 0) {
                City city = new City();
                city.setCname(name);
                city.setPid(Integer.parseInt(pId));
                cityService.addCity(city);
            }
            if ("请选择市".compareTo(cId) == 0  && "请选择省".compareTo(pId) == 0) {
                Province province = new Province();
                province.setPname(name);
                provinceService.addProvince(province);
            }
            return "redirect:/backManage/showCarConditions";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/showCarConditions", method = RequestMethod.GET)
    public String showCarConditions(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<CarType> carTypes = carTypeService.findAllCarType();
            List<CarBrand> carBrands = carBrandService.findAllCarBrand();
            List<Province> locations = locationService.findLocations();
            model.addAttribute("carTypes", carTypes);
            model.addAttribute("carBrands", carBrands);
            model.addAttribute("locations", locations);
            return "showConditions";
        } else return "fail";
    }

}
