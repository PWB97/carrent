package com.pu.carrent.service;

import com.pu.carrent.entity.CarType;

import java.util.List;

public interface CarTypeService {

    List<CarType> findAllCarType();

    int deleteCarTypeById(Integer cTypeId);

    int addCarType(CarType record);

    Integer findTypeIdByWithName(String cTypeName);
}
