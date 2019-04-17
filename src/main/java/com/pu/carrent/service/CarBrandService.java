package com.pu.carrent.service;

import com.pu.carrent.entity.CarBrand;

import java.util.List;

public interface CarBrandService {

    List<CarBrand> findAllCarBrand();

    int deleteCarBrandeById(Integer brandId);

    int addCarBrand(CarBrand record);

    Integer findBrandIdByName(String brandName);
}
