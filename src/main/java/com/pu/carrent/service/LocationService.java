package com.pu.carrent.service;

import com.pu.carrent.entity.Location;
import com.pu.carrent.entity.Province;

import java.util.List;

public interface LocationService {

    List<Province> findLocations();

    int addLocation(Location location);

    int deleteLocationById(Integer lId);

    int deleteCityById(Integer cId);

    int deleteProvinceById(Integer pId);

    Integer findlIdBylName(String lName);
}
