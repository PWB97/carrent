package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CityMapper;
import com.pu.carrent.dao.ProvinceMapper;
import com.pu.carrent.entity.City;
import com.pu.carrent.entity.Province;
import com.pu.carrent.entityExample.CityExample;
import com.pu.carrent.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProvinceServiceImpl implements ProvinceService {

    @Autowired
    private ProvinceMapper provinceMapper;

    @Autowired
    private CityMapper cityMapper;

    @Override
    public int addProvince(Province province) {
        return provinceMapper.insertSelective(province);
    }

    @Override
    public List<City> findCitiesByPid(Integer pId) {
        CityExample  example = new CityExample();
        example.createCriteria().andPidEqualTo(pId);
        return cityMapper.selectByExample(example);
    }

    @Override
    public List<Province> findAllProvince() {
        return provinceMapper.selectByExample(null);
    }
}
