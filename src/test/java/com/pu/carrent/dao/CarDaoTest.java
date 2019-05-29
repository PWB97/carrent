package com.pu.carrent.dao;

import com.mongodb.BasicDBList;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.pu.carrent.entity.Car;
import com.pu.carrent.entity.OrderData;
import com.pu.carrent.entity.User;
import com.pu.carrent.service.impl.OrderServiceImpl;
import org.bson.Document;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.LookupOperation;
import org.springframework.data.mongodb.core.mapreduce.GroupBy;
import org.springframework.data.mongodb.core.mapreduce.GroupByResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

import java.text.SimpleDateFormat;
import java.util.*;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CarDaoTest {


    @Autowired
    private OrderServiceImpl orderServiceImpl;

    @Test
    public void findTopCarData() {
       List<OrderData> orderData = orderServiceImpl.findOrderDataByProvince();

    }
}