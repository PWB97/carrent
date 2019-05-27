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
    public int addCar(Car record) {
        return carMapper.insert(record);
    }

    @Override
    public int deleteCarByCarId(Integer carId) {
        return carMapper.deleteByPrimaryKey(carId);
    }

    @Override
    public Car findCarById(Integer carId) {
        return carMapper.selctCarWithDetailById(carId);
    }

    @Override
    public int findCarId(Car car) {
        CarExample example = new CarExample();
        example.createCriteria().andCarnameEqualTo(car.getCarname());
        return carMapper.selectByExample(example).get(0).getCarid();
    }

    @Override
    public List<Car> findCarsWithConditions(Integer typeId, Integer brandId, Integer pId, Integer cId, Integer lId, BigDecimal lowPrice, BigDecimal highPrice) {
        return carMapper.selectCarsWithConditions(typeId, brandId, pId, cId, lId, lowPrice, highPrice);
    }

    @Override
    public int changeCar(Car car) {
        return carMapper.updateByPrimaryKeySelective(car);
    }

}