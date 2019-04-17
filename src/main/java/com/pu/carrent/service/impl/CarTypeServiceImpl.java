package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CarTypeMapper;
import com.pu.carrent.entity.CarType;
import com.pu.carrent.entityExample.CarTypeExample;
import com.pu.carrent.service.CarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarTypeServiceImpl implements CarTypeService {

    @Autowired
    private CarTypeMapper carTypeMapper;

    @Override
    public List<CarType> findAllCarType() {
        return carTypeMapper.selectByExample(null);
    }

    @Override
    public int deleteCarTypeById(Integer cTypeId) {
        return carTypeMapper.deleteByPrimaryKey(cTypeId);
    }

    @Override
    public int addCarType(CarType record) {
        return carTypeMapper.insert(record);
    }

    @Override
    public Integer findTypeIdByWithName(String cTypeName) {
        CarTypeExample example = new CarTypeExample();
        example.createCriteria().andCtypenameEqualTo(cTypeName);
        return carTypeMapper.selectByExample(example).get(0).getCtypeid();
    }
}
