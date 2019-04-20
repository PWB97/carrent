package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CityMapper;
import com.pu.carrent.entity.City;
import com.pu.carrent.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityMapper cityMapper;

    @Override
    public int addCity(City city) {
        return cityMapper.insertSelective(city);
    }
}
