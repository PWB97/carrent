package com.pu.carrent.controller;

import com.pu.carrent.dao.CarDetailDao;
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
import java.math.BigDecimal;
import java.util.Date;
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
    private CarDetailService carDetailService;

    @Autowired
    private UserDao userDao;

    @Autowired
    private GearService gearService;

    @Autowired
    private EnergyService energyService;

    @Autowired
    private OrderSerivce orderSerivce;

    @Autowired
    private CarDetailDao carDetailDao;

    @RequestMapping(value = "/rentCar", method = RequestMethod.GET)
    public String showCarsWithConditions(String carBrand, String carType, String province, String city, String location,
                                         String price, Model model, HttpSession session){

        if (session.getAttribute("carTypes") == null) {
            List<CarType> carTypes = carTypeService.findAllCarType();
            session.setAttribute("carTypes", carTypes);
        }
        if (session.getAttribute("carBrands") == null) {
            List<CarBrand> carBrands = carBrandService.findAllCarBrand();
            session.setAttribute("carBrands", carBrands);
        }
        if (session.getAttribute("locations") == null) {
            List<Province> locations = locationService.findLocations();
            session.setAttribute("locations", locations);
        }

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
        if (carType != null && "".compareTo(carType) != 0 && "请选择类型".compareTo(carType) != 0) typeId = Integer.parseInt(carType);
        if (price != null && "".compareTo(price) != 0 ) {
            String[] strings = price.split(";");
            lp = new BigDecimal(strings[0] + ".00");
            hp = new BigDecimal(strings[1] + ".00");
        }
        List<Car> cars = carService.findCarsWithConditions(typeId, brandId, pId, cId, lId, lp, hp);
        if (cars != null) {
            model.addAttribute("cars", cars);
            User currentUser = (User) session.getAttribute("currentUser");
            if (currentUser != null)
                if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0)
                    return "showCars";
                else
                    return "rentCar";
            else
                return "rentCar";
        } else {
            model.addAttribute("msg", "查找失败");
            return "fail";
        }
    }

    @RequestMapping(value = "/carDetail", method = RequestMethod.GET)
    public String showCarDetail(Integer carId, Integer cdId, HttpSession session, Model model) {
        if (carId != null) {
            Car car = carService.findCarById(carId);
            List<CarDetail> carDetails = carDetailService.findAllCarDetailByCarId(carId);
            if (cdId == null)
                if (carDetails.size() == 0) {
                    model.addAttribute("msg", "无此类型的汽车");
                    return "fail";
                } else {
                    model.addAttribute("carDetail", carDetails.get(0));
                    User currentUser = (User) session.getAttribute("userDetail");
                    if (currentUser != null && carDetails.get(0).getIsonline() == 1) {
                        currentUser.setCarRecord(car);
                        userDao.insertUserRecord(currentUser);
                    }
                }
            else {
                model.addAttribute("carDetail", carDetailService.findCarDetailById(cdId));
            }
            model.addAttribute("car", car);
            model.addAttribute("carDetails", carDetails);
        } else
            model.addAttribute("carDetail", carDetailService.findCarDetailById(cdId));
        return "carDetail";
    }

    @Transactional
    @RequestMapping(value = "/uploadCar", method = RequestMethod.POST)
    public String uploadCar(String carName, Integer brandId, Integer typeId, String detail,
                            Integer location, MultipartFile carPicture, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            Car car = new Car();
            if (carName != null) car.setCarname(carName);
            if (brandId != null) car.setBrandid(brandId);
            if (typeId != null) car.setCtypeid(typeId);
            if (detail != null) car.setDetail(detail);
            if (location != null) car.setLid(location);
            if (carPicture.isEmpty()) {
                model.addAttribute("msg", "上传失败，请选择文件");
                return "fail";
            }
            try {
                car.setIsdeleted(0);
                car.setIsonline(1);
                carService.addCar(car);
                int carId = carService.findCarId(car);
                String pictureName = "" + carId + ".JPG";
                String filePath = "/Users/pu/Desktop/carrent/src/main/webapp/images/car/";
                File dest = new File(filePath + pictureName);
                carPicture.transferTo(dest);
                car.setFiles("true");
                carService.changeCar(car);
                return "redirect:/rentCar";
            } catch (Exception e) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                model.addAttribute("msg", "上传失败");
                return "fail";
            }
        } else {
            model.addAttribute("msg", "无权限");
            return "fail";
        }
    }

    @RequestMapping(value = "/uploadCarDetail", method = RequestMethod.GET)
    public String uploadCarDetail(Integer carId, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            Car car = carService.findCarById(carId);
            List<Energy> energyList = energyService.findAllEnergy();
            List<Gear> gears = gearService.findAllGear();
            model.addAttribute("car", car);
            model.addAttribute("energyList", energyList);
            model.addAttribute("gears", gears);
            return "uploadCar";
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }

    @Transactional
    @RequestMapping(value = "/uploadCarDetail", method = RequestMethod.POST)
    public String uploadCarDetail(Integer carId, String productYear, String level, String plate, Integer seats,
                                  Integer doors, Integer eId, Integer gId, String displacement, Integer drive,
                                  Integer upWindow, Integer radar, Integer gps, MultipartFile lisence,
                                  MultipartFile fsFile, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            CarDetail carDetail = new CarDetail();
            if (productYear != null) carDetail.setProductyear(productYear);
            if (level != null) carDetail.setLevel(level);
            if (plate != null) carDetail.setPlate(plate);
            if (seats != null) carDetail.setSeats(seats);
            if (doors != null) carDetail.setDoors(doors);
            if (eId != null) carDetail.setEnergyid(eId);
            if (gId != null) carDetail.setGearid(gId);
            if (displacement != null) carDetail.setDisplacement(displacement);
            if (drive != null) carDetail.setDrive(drive);
            if (upWindow != null) carDetail.setUpwindow(upWindow);
            if (radar != null) carDetail.setRadar(radar);
            if (gps != null) carDetail.setGps(gps);
            if (carId != null) carDetail.setCarid(carId);
            carDetail.setUserid(currentUser.getUserid());
            carDetail.setIsdeleted(0);
            carDetail.setIsonline(-1);
            carDetailService.addCarDetail(carDetail);
            int cdId = carDetailService.findCdId(carDetail);
            carDetail.setCdid(cdId);
            if (lisence.isEmpty()) {
                model.addAttribute("msg", "上传失败，请选择文件");
                return "fail";
            }
            try {
                String lisenceNmae = "lisence" + cdId + ".docx";
                String fsFileName = "fsFile" + cdId + ".docx";
                String filePath = "/Users/pu/Desktop/carrent/src/main/webapp/files/";
                File dest = new File(filePath + lisenceNmae);
                lisence.transferTo(dest);
                carDetail.setLisence(1);
                dest = new File(filePath + fsFileName);
                fsFile.transferTo(dest);
                carDetail.setFsfile(1);
                carDetailService.changeCarDetailById(carDetail);
                return "redirect:/uploadCarDetail";
            } catch (Exception e) {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                model.addAttribute("msg", "上传失败");
                return "fail";
            }
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }

    @Transactional
    @RequestMapping(value = "/uploadCarDetailPictures", method = RequestMethod.POST)
    public String uploadCarFiles(Integer cdId, MultipartFile file, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        Integer times = (Integer) session.getAttribute("times");
        if (currentUser != null) {
            CarDetail record = carDetailService.findCarDetailById(cdId);
            if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0 ||
                    currentUser.getUserid().compareTo(record.getUserid()) == 0) {
                if (file.isEmpty()) {
                    model.addAttribute("msg", "上传失败，请选择文件");
                    return "fail";
                }
                try {
                    if (times == null || times == 6) times = 1;
                    else times += 1;
                    session.setAttribute("times", times);
                    String fileName = "" + times + ".jpg";
                    String filePath = "/Users/pu/Desktop/carrent/src/main/webapp/images/carDetail/"+cdId+"/";
                    File path = new File(filePath);
                    if (!path.exists()) path.mkdirs();
                    File dest = new File(filePath + fileName);
                    file.transferTo(dest);
                    record.setPhotos(1);
                    carDetailService.changeCarDetailById(record);
                    return "redirect:/carDetail";
                } catch (Exception e) {
                    model.addAttribute("msg", "上传失败");
                    return "fail";
                }
            } else {
                TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
                model.addAttribute("msg", "无权限访问");
                return "fail";
            }
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/online", method = RequestMethod.GET)
    public String online(Integer cdId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            CarDetail carDetail = new CarDetail();
            carDetail.setCdid(cdId);
            carDetail.setIsonline(1);
            carDetailService.changeCarDetailById(carDetail);
            return "redirect:/backManage/carsNotOnline";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/refuseOnline", method = RequestMethod.GET)
    public String refuseOnline(Integer cdId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            CarDetail carDetail = new CarDetail();
            carDetail.setCdid(cdId);
            carDetail.setIsonline(-2);
            carDetailService.changeCarDetailById(carDetail);
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
            List<CarDetail> carDetails = carDetailService.findCarDetailNotOnline();
            for (CarDetail carDetail : carDetails) {
                carDetail.setCar(carService.findCarById(carDetail.getCarid()));
            }
            model.addAttribute("carDetails", carDetails);
            return "carsNotOnline";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/offline", method = RequestMethod.GET)
    public String offline(Integer cdId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            CarDetail carDetail = new CarDetail();
            carDetail.setCdid(cdId);
            carDetail.setIsonline(0);
            carDetailService.changeCarDetailById(carDetail);
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
                String filePath = "/Users/pu/Desktop/carrent/src/main/webapp/images/logo/";
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

    @RequestMapping(value = "/backManage/deleteCarType", method = RequestMethod.GET)
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

    @RequestMapping(value = "/backManage/deleteLocation", method = RequestMethod.GET)
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
            for (CarDetail carDetail : carDetailService.findAllCarDetailByCarId(carId)) {
                if (carDetail.getIsdeleted() == 0) {
                    model.addAttribute("msg", "有具体车辆未下线，无法删除");
                    return "fail";
                }
            }
            Car car = carService.findCarById(carId);
            car.setIsdeleted(1);
            car.setIsonline(0);
            carService.changeCar(car);
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
            List<CarDetail> userCars = carDetailService.findCarDetailByUserId(currentUser.getUserid());
            for (CarDetail userCar : userCars) {
                userCar.setCar(carService.findCarById(userCar.getCarid()));
            }
            model.addAttribute("userCars", userCars);
            return "showMyUploadCars";
        } else {
            model.addAttribute("msg", "未登录");
            return "fail";
        }
    }

    @RequestMapping(value = "/DeleteMyUploadCar", method = RequestMethod.GET)
    public String DeleteMyUploadCar(Integer cdId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if (currentUser != null) {
            CarDetail record = carDetailService.findCarDetailById(cdId);
            if (currentUser.getUserid().compareTo(record.getUserid()) == 0 && record.getIsonline() != 1) {
                carDetailService.deleteCarDetail(cdId);
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

    @RequestMapping(value = "/findCarOnRent", method = RequestMethod.GET)
    public String findCarOnRent(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            List<Order> orders = orderSerivce.findAllOrders();
            List<CarDetail> carDetails = carDetailDao.findCarDetail();
            CarDetail record;
            for (Order order : orders) {
                record = order.getCarDetail();
                for (CarDetail carDetail : carDetails) {
                    if (order.getCarDetail().getCdid().equals(carDetail.getCdid())) {
                        record.setAccidentType(carDetail.getAccidentType());
                        record.setAccidentTime(carDetail.getAccidentTime());
                        record.setIsDamage(carDetail.getIsDamage());
                        record.setIsScrap(carDetail.getIsScrap());
                        record.setThirdParty(carDetail.getThirdParty());
                        record.setInjury(carDetail.getInjury());
                        record.setaLocation(carDetail.getaLocation());
                        record.setRobbing(carDetail.getRobbing());
                        order.setCarDetail(record);
                    }
                }
            }
            model.addAttribute("orders", orders);
            return "findCarOnRent";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/accident", method = RequestMethod.POST)
    public String accident(Integer cdId, String aLocation,HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        List<Order> orders =  orderSerivce.findOrdersByUserId(currentUser.getUserid());
        for (Order order : orders) {
            if (order.getCarDetail().getCdid().equals(cdId)) {
                CarDetail carDetail = carDetailService.findCarDetailById(cdId);
                carDetail.setAccidentTime(new Date());
                carDetail.setAccidentType(-1);
                carDetail.setaLocation(aLocation);
                carDetailDao.insertCarDetail(carDetail);
                return "redirect:/orders";
            }
        }
        model.addAttribute("msg", "无权限访问");
        return "fail";
    }

    @RequestMapping(value = "/defineAccident", method = RequestMethod.POST)
    public String defineAccident(Integer cdId, Integer isDamage, Integer isScrap, Integer thirdParty, Integer injury, Integer robbing, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            if (isDamage == null) isDamage = 0;
            if (isScrap == null) isScrap = 0;
            if (thirdParty == null) thirdParty = 0;
            if (injury == null) injury = 0;
            if (robbing == null) robbing = 0;
            carDetailDao.changeCarDetail(cdId, isDamage, isScrap, thirdParty, injury, robbing);
            return "redirect:/findCarOnRent";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }
}
