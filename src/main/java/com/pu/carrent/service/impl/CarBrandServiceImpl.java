package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CarBrandMapper;
import com.pu.carrent.entity.CarBrand;
import com.pu.carrent.entityExample.CarBrandExample;
import com.pu.carrent.service.CarBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarBrandServiceImpl implements CarBrandService {

    @Autowired
    private CarBrandMapper carBrandMapper;

    @Override
    public List<CarBrand> findAllCarBrand() {
        return carBrandMapper.selectByExample(null);
    }

    @Override
    public int deleteCarBrandeById(Integer brandId) {
        return carBrandMapper.deleteByPrimaryKey(brandId);
    }

    @Override
    public int addCarBrand(CarBrand record) {
        return carBrandMapper.insert(record);
    }

    @Override
    public Integer findBrandIdByName(String brandName) {
        CarBrandExample example = new CarBrandExample();
        example.createCriteria().andBrandnameEqualTo(brandName);
        return carBrandMapper.selectByExample(example).get(0).getBrandid();
    }
}
