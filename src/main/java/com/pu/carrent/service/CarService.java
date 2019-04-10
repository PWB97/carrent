package com.pu.carrent.service;

import com.pu.carrent.entity.Car;

import java.util.List;

public interface CarService {

    List<Car> findAllCars();

    List<Car> findCarsNotOnline();

    int addCar(Car record);

    int deleteCarByCarId(Integer carId);

    Car findCarById(Integer carId);
}
