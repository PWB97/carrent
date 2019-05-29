package com.pu.carrent.dao;

import com.pu.carrent.entity.Order;
import com.pu.carrent.entity.OrderData;
import com.pu.carrent.entityExample.OrderExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface OrderMapper {
    int countByExample(OrderExample example);

    int deleteByExample(OrderExample example);

    int deleteByPrimaryKey(Integer orderid);

    int insert(Order record);

    int insertSelective(Order record);

    List<Order> selectByExample(OrderExample example);

    Order selectByPrimaryKey(Integer orderid);

    int updateByExampleSelective(@Param("record") Order record, @Param("example") OrderExample example);

    int updateByExample(@Param("record") Order record, @Param("example") OrderExample example);

    int updateByPrimaryKeySelective(Order record);

    int updateByPrimaryKey(Order record);

    List<Order> selectOrdersNotPaidWithDetail();

    List<Order> selectOrdersWithDetail();

    Order selectOrderWithDetailById(Integer orderId);

    List<Order> findOrdersByUserId(Integer userId);

    List<Order> findRefunds();

    List<Order> findRefundsByUserId(Integer userId);

    List<OrderData> findOrderDataByProvince();
}