package com.pu.carrent.service.impl;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.pu.carrent.AlipayConfig;
import com.pu.carrent.dao.OrderMapper;
import com.pu.carrent.entity.Order;
import com.pu.carrent.service.OrderSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderSerivce {

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public List<Order> findAllOrders() {
        return orderMapper.selectOrdersWithDetail();
    }

    @Override
    public List<Order> findOrdersNotPaid() {
        return orderMapper.selectOrdersNotPaidWithDetail();
    }

    @Override
    public List<Order> findOrdersByUserId(Integer userId) {
        return orderMapper.findOrdersByUserId(userId);
    }

    @Override
    public List<Order> findRefunds() {
        return orderMapper.findRefunds();
    }

    @Override
    public List<Order> findRefundsByUserId(Integer userId) {
        return orderMapper.findRefundsByUserId(userId);
    }

    @Override
    public Order findOrderById(Integer orderId) {
        return orderMapper.selectOrderWithDetailById(orderId);
    }

    @Override
    public int addOrder(Order record) {
        return orderMapper.insert(record);
    }

    @Override
    public int changeOrder(Order record) {
        return orderMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int deleteOrderById(Integer orderId) {
        return orderMapper.deleteByPrimaryKey(orderId);
    }
}
