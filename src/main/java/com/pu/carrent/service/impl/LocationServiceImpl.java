package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CityMapper;
import com.pu.carrent.dao.LocationMapper;
import com.pu.carrent.dao.ProvinceMapper;
import com.pu.carrent.entity.Location;
import com.pu.carrent.entity.Province;
import com.pu.carrent.entityExample.LocationExample;
import com.pu.carrent.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationServiceImpl implements LocationService {

    @Autowired
    private ProvinceMapper provinceMapper;

    @Autowired
    private LocationMapper locationMapper;

    @Autowired
    private CityMapper cityMapper;

    @Override
    public List<Province> findLocations() {
        return provinceMapper.selectLoactionsWithDetail();
    }

    @Override
    public int addLocation(Location location) {
        return locationMapper.insertSelective(location);
    }

    @Override
    public int deleteLocationById(Integer lId) {
        return locationMapper.deleteByPrimaryKey(lId);
    }

    @Override
    public int deleteCityById(Integer cId) {
        return cityMapper.deleteByPrimaryKey(cId);
    }

    @Override
    public int deleteProvinceById(Integer pId) {
        return provinceMapper.deleteByPrimaryKey(pId);
    }

    @Override
    public Integer findlIdBylName(String lName) {
        LocationExample example = new LocationExample();
        example.createCriteria().andLnameEqualTo(lName);
        return locationMapper.selectByExample(example).get(0).getLid();
    }
}
