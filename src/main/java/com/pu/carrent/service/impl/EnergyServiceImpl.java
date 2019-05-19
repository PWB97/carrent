package com.pu.carrent.service.impl;

import com.pu.carrent.dao.EnergyMapper;
import com.pu.carrent.entity.Energy;
import com.pu.carrent.service.EnergyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EnergyServiceImpl implements EnergyService {

    @Autowired
    private EnergyMapper energyMapper;

    @Override
    public List<Energy> findAllEnergy() {
        return energyMapper.selectByExample(null);
    }
}
