package com.pu.carrent.service;

import com.pu.carrent.entity.City;
import com.pu.carrent.entity.Province;

import java.util.List;

public interface ProvinceService {

    int addProvince(Province province);

    List<City> findCitiesByPid(Integer pId);

    List<Province> findAllProvince();

}
