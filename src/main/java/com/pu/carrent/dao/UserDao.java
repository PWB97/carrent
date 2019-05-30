package com.pu.carrent.dao;

import com.pu.carrent.entity.*;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.*;

@Repository
public class UserDao {

    @Resource
    private MongoTemplate mongoTemplate;

    public void insertUserRecord(User user) {
        Car car = new Car();
        UserType userType = new UserType();
        CarBrand carBrand = new CarBrand();
        CarType carType = new CarType();
        Province province = new Province();
        City city = new City();
        Location location = new Location();

        car.setCarname(user.getCarRecord().getCarname());
        car.setCarid(user.getCarRecord().getCarid());
        car.setPrice(user.getCarRecord().getPrice());
        car.setPlate(user.getCarRecord().getPlate());
        car.setBrandid(user.getCarRecord().getBrandid());
        carBrand.setBrandname(user.getCarRecord().getCarBrand().getBrandname());
        carType.setCtypename(user.getCarRecord().getCarType().getCtypename());
        userType.setUtypename(user.getUserType().getUtypename());
        province.setPname(user.getCarRecord().getLocation().getCity().getProvince().getPname());
        city.setCname(user.getCarRecord().getLocation().getCity().getCname());
        location.setLname(user.getCarRecord().getLocation().getLname());

        city.setProvince(province);
        location.setCity(city);
        car.setLocation(location);
        car.setCarBrand(carBrand);
        car.setCarType(carType);
        car.setRecordDate(new Date());
        user.setUserType(userType);
        user.setCarRecord(car);
        user.setBrowseDate(new Date());

        mongoTemplate.save(province);
        mongoTemplate.save(city);
        mongoTemplate.save(location);
        mongoTemplate.save(carBrand);
        mongoTemplate.save(carType);
        mongoTemplate.save(userType);
        mongoTemplate.save(car);
        mongoTemplate.save(user);
    }

    public List<User> findUserByUserId(Integer userId) {

        return mongoTemplate.find(new Query(Criteria.where("userid").is(userId)).with(new Sort(Sort.Direction.DESC, "browseDate")), User.class);
    }

    public void deleteRecords(Integer userId) {
        mongoTemplate.remove(new Query(Criteria.where("userid").is(userId)), User.class);
    }
}
