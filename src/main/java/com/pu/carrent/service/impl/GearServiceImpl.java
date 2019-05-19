package com.pu.carrent.service.impl;

import com.pu.carrent.dao.GearMapper;
import com.pu.carrent.entity.Gear;
import com.pu.carrent.service.GearService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GearServiceImpl implements GearService {

    @Autowired
    private GearMapper gearMapper;

    @Override
    public List<Gear> findAllGear() {
        return gearMapper.selectByExample(null);
    }
}
