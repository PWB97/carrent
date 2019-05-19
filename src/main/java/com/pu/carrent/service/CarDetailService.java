package com.pu.carrent.service;

import com.pu.carrent.entity.CarDetail;

import java.util.List;

public interface CarDetailService {

    int addCarDetail(CarDetail carDetail);

    int changeCarDetailById(CarDetail record);

    CarDetail findCarDetailById(Integer cdId);

    List<CarDetail> findAllCarDetailByCarId(Integer carId);

    List<CarDetail> findCarDetailNotOnline();

    List<CarDetail> findCarDetailByUserId(Integer userId);

    int deleteCarDetail(Integer cdId);

    int findCdId(CarDetail carDetail);
}