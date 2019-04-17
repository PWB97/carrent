package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CarMapper;
import com.pu.carrent.entity.Car;
import com.pu.carrent.entityExample.CarExample;
import com.pu.carrent.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class CarServiceImpl implements CarService {

    @Autowired
    private CarMapper carMapper;

    @Override
    public List<Car> findAllCars() {
        return carMapper.selectCarsWithDetail();
    }

    @Override
    public List<Car> findCarsNotOnline() {
        return carMapper.selectCarsNotOnlineWithDetail();
    }

    @Override
    public int addCar(Car record) {
        return carMapper.insert(record);
    }

    @Override
    public int deleteCarByCarId(Integer carId) {
        return carMapper.deleteByPrimaryKey(carId);
    }

    @Override
    public Car findCarById(Integer carId) {
        return carMapper.selectCarWithDetailById(carId);
    }

    @Override
    public List<Car> findCarsWithConditions(Integer typeId, Integer brandId, Integer lId, BigDecimal lowPrice, BigDecimal highPrice) {
        CarExample example = new CarExample();
        CarExample.Criteria c = example.createCriteria();
        if (typeId != null) c.andCtypeidEqualTo(typeId);
        if (brandId != null) c.andBrandidEqualTo(brandId);
        if (lId != null) c.andLidEqualTo(lId);
        if (lowPrice != null) c.andPriceGreaterThanOrEqualTo(lowPrice);
        if (highPrice != null) c.andPriceLessThanOrEqualTo(highPrice);
        return carMapper.selectByExample(example);
    }

    @Override
    public int changeCar(Car car) {
        return carMapper.updateByPrimaryKeySelective(car);
    }
}
