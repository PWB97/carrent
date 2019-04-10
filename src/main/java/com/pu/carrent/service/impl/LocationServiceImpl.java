package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CityMapper;
import com.pu.carrent.dao.LocationMapper;
import com.pu.carrent.dao.ProvinceMapper;
import com.pu.carrent.entity.City;
import com.pu.carrent.entity.Location;
import com.pu.carrent.entity.Province;
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
    public int addLocations(String province, String city, String location) {

        Province recordP = new Province();
        recordP.setPname(province);
        provinceMapper.insertSelective(recordP);
        City recordC = new City();
        recordC.setCname(city);
        cityMapper.insertSelective(recordC);
        Location recordL = new Location();
        recordL.setLname(location);
        return locationMapper.insertSelective(recordL);
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
}
