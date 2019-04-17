package com.pu.carrent.service;

import com.pu.carrent.entity.Car;

import java.math.BigDecimal;
import java.util.List;

public interface CarService {

    List<Car> findAllCars();

    List<Car> findCarsNotOnline();

    int addCar(Car record);

    int deleteCarByCarId(Integer carId);

    Car findCarById(Integer carId);

    List<Car> findCarsWithConditions(Integer typeId, Integer brandId, Integer lId, BigDecimal lowPrice, BigDecimal highPrice);

    int changeCar(Car car);
}
