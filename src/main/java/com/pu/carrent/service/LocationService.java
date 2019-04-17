package com.pu.carrent.service;

import com.pu.carrent.entity.Province;

import java.util.List;

public interface LocationService {

    List<Province> findLocations();

    int addLocations(String province, String city, String location);

    int deleteLocationById(Integer lId);

    int deleteCityById(Integer cId);

    int deleteProvinceById(Integer pId);

    Integer findlIdBylName(String lName);
}
