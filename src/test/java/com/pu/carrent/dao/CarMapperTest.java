package com.pu.carrent.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CarMapperTest {

    @Autowired
    private CarMapper carMapper;

    @Test
    public void selectCarsWithConditions() {
        BigDecimal decimal = new BigDecimal("200.00");
        System.out.println(carMapper.selectCarsWithConditions(1,null,null,null,null, decimal, null).size());
    }
}