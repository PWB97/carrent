package com.pu.carrent.service;

import com.pu.carrent.entity.Order;
import com.pu.carrent.entity.OrderData;

import java.util.List;

public interface OrderSerivce {

    List<Order> findAllOrders();

    List<Order> findOrdersNotPaid();

    Order findOrderById(Integer orderId);

    int addOrder(Order record);

    int changeOrder(Order record);

    int deleteOrderById(Integer orderId);

    List<Order> findOrdersByUserId(Integer userId);

    List<Order> findRefunds();

    List<Order> findRefundsByUserId(Integer userId);

    List<OrderData> findOrderDataByProvince();
}
