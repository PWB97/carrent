package com.pu.carrent.controller;

import com.pu.carrent.dao.UserDao;
import com.pu.carrent.entity.*;
import com.pu.carrent.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
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

    @Autowired
    private UserDao userDao;

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
        } else {
            model.addAttribute("msg", "查找失败");
            return "fail";
        }
    }

    @RequestMapping(value = "/carDetail", method = RequestMethod.GET)
    public String showCarDetail(Integer carId, HttpSession session, Model model) {
        Car car = carService.findCarById(carId);
        if (car != null) {
            model.addAttribute("carDetail", car);
            User currentUser = (User) session.getAttribute("userDetail");
            if (currentUser != null && car.getIsonline() == 1) {
                currentUser.setCarRecord(car);
                userDao.insertUserRecord(currentUser);
            }
            return "carDetail";
        } else {
            model.addAttribute("msg", "查找失败");
            return "fail";
        }
    }

    @RequestMapping(value = "/uploadCar", method = RequestMethod.GET)
    public String uploadCar(HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            List<CarBrand> carBrands = carBrandService.findAllCarBrand();
            List<CarType> carTypes = carTypeService.findAllCarType();
            List<Province> locations = locationService.findLocations();
            model.addAttribute("carTypes", carTypes);
            model.addAttribute("carBrands", carBrands);
            model.addAttribute("locations", locations);
            return "uploadCar";
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }

    @RequestMapping(value = "/uploadCar", method = RequestMethod.POST)
    public String uploadCar(String carName, Integer brandId, Integer typeId, String plate, String detail,
                            Integer lId, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Car car = new Car();
            if (carName != null) car.setCarname(carName);
            if (brandId != null) car.setBrandid(brandId);
            if (typeId != null) car.setCtypeid(typeId);
            if (plate != null) car.setPlate(plate);
            if (detail != null) car.setDetail(detail);
            if (lId != null) car.setLid(lId);
            car.setUserid(currentUser.getUserid());
            car.setIsdeleted(0);
            car.setIsonline(-1);
            carService.addCar(car);
            return "redirect:/uploadCar";
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }

    // TODO: 2019-04-28  
    @RequestMapping(value = "/uploadCarFiles", method = RequestMethod.POST)
    public String uploadCarFiles(Integer carId, @RequestParam("files[]") MultipartFile[] files, HttpSession session, Model model) {

        try {
            if (files != null && files.length > 0) {

            }
            return "";
        } catch (Exception e) {
            return "";
        }
    }

    @RequestMapping(value = "/backManage/showCars", method = RequestMethod.GET)
    public String showCars(Model model, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Car> cars = carService.findAllCars();
            if (cars != null) {
                model.addAttribute("cars", cars);
                return "showCars";
            } else {
                model.addAttribute("msg", "查找失败");
                return "fail";
            }
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/online", method = RequestMethod.POST)
    public String online(Integer carId, Integer price, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            Car car = new Car();
            car.setCarid(carId);
            car.setIsonline(1);
            car.setPrice(new BigDecimal(price.toString()));
            carService.changeCar(car);
            return "redirect:/backManage/carsNotOnline";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/carsNotOnline", method = RequestMethod.GET)
    public String showCarsNotOnline(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Car> cars = carService.findCarsNotOnline();
            model.addAttribute("cars", cars);
            return "carsNotOnline";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/offline", method = RequestMethod.GET)
    public String offline(Integer carId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            Car car = new Car();
            car.setCarid(carId);
            car.setIsonline(0);
            carService.changeCar(car);
            return "redirect:/backManage/carsNotOnline";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/addCarType", method = RequestMethod.POST)
    public String addCarType(String carTypeName, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            CarType carType = new CarType();
            carType.setCtypename(carTypeName);
            carTypeService.addCarType(carType);
            return "redirect:/backManage/showCarConditions";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @Transactional
    @RequestMapping(value = "/backManage/addCarBrand", method = RequestMethod.POST)
    public String addCarBrand(String brandName, @RequestParam("file") MultipartFile file, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            if (file.isEmpty()) {
                model.addAttribute("msg", "上传失败，请选择文件");
                return "fail";
            }
            try {
                CarBrand carBrand = new CarBrand();
                carBrand.setBrandname(brandName);
                carBrandService.addCarBrand(carBrand);
                String fileName = "" + carBrandService.findBrandIdByName(brandName) + ".JPG";
                String filePath = "/Users/pu/Desktop/carrent/src/main/webapp/images/log/";
                File dest = new File(filePath + fileName);
                file.transferTo(dest);
                return "redirect:/backManage/showCarConditions";
            } catch (Exception e) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                model.addAttribute("msg", "上传失败");
                return "fail";
            }
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/addLocation", method = RequestMethod.POST)
    public String addLocation(String pId, String cId, String name, HttpSession session, Model model) {
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
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
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
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/deleteCarType", method = RequestMethod.POST)
    public  String deleteCarType(Integer cTypeId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            carTypeService.deleteCarTypeById(cTypeId);
            return "redirect:/backManage/showCarConditions";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/deleteCarBrand", method = RequestMethod.GET)
    public  String deleteCarBrand(Integer brandId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            carBrandService.deleteCarBrandeById(brandId);
            return "redirect:/backManage/showCarConditions";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/deleteLocation", method = RequestMethod.POST)
    public  String deleteLocation(Integer lId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            locationService.deleteLocationById(lId);
            return "redirect:/backManage/showCarConditions";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/deleteCar", method = RequestMethod.GET)
    public String deleteCar(Integer carId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            carService.deleteCarByCarId(carId);
            return "redirect:/backManage/carsNotOnline";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/showMyUploadCars", method = RequestMethod.GET)
    public String showMyUploadCars(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if (currentUser != null) {
            List<Car> userCars = carService.findCarsByUserId(currentUser.getUserid());
            model.addAttribute("userCars", userCars);
            return "showMyUploadCars";
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }

    @RequestMapping(value = "/DeleteMyUploadCar", method = RequestMethod.GET)
    public String DeleteMyUploadCar(Integer carId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if (currentUser != null) {
            Car record = carService.findCarById(carId);
            if (currentUser.getUserid().compareTo(record.getUserid()) == 0) {
                carService.deleteCarByCarId(carId);
                return "redirect:/showMyUploadCars";
            } else {
                model.addAttribute("msg", "无权限访问");
                return "fail";
            }
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }
}
