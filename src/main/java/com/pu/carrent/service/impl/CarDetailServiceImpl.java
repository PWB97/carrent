package com.pu.carrent.service.impl;

import com.pu.carrent.dao.CarDetailMapper;
import com.pu.carrent.entity.CarDetail;
import com.pu.carrent.entityExample.CarDetailExample;
import com.pu.carrent.service.CarDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarDetailServiceImpl implements CarDetailService {

    @Autowired
    private CarDetailMapper carDetailMapper;

    @Override
    public int addCarDetail(CarDetail carDetail) {
        return carDetailMapper.insert(carDetail);
    }

    @Override
    public int changeCarDetailById(CarDetail record) {
        return carDetailMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public CarDetail findCarDetailById(Integer cdId) {
        return carDetailMapper.selectCarDetailById(cdId);
    }

    @Override
    public int findCdId(CarDetail carDetail) {
        CarDetailExample example = new CarDetailExample();
        example.createCriteria().andCaridEqualTo(carDetail.getCarid()).andUseridEqualTo(carDetail.getUserid()).andLevelEqualTo(carDetail.getLevel());
        return carDetailMapper.selectByExample(example).get(0).getCdid();
    }

    @Override
    public List<CarDetail> findAllCarDetailByCarId(Integer carId) {
        return carDetailMapper.selectCarDetailByCarId(carId);
    }

    @Override
    public int deleteCarDetail(Integer cdId) {
        return carDetailMapper.deleteByPrimaryKey(cdId);
    }

    @Override
    public List<CarDetail> findCarDetailByUserId(Integer userId) {
        return carDetailMapper.selectCarDetailByUserId(userId);
    }

    @Override
    public List<CarDetail> findCarDetailNotOnline() {
        return carDetailMapper.selectCarDetailNotOnline();
    }
}
