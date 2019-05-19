package com.pu.carrent.dao;

import com.pu.carrent.entity.Car;
import com.pu.carrent.entityExample.CarExample;

import java.math.BigDecimal;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface CarMapper {
    int countByExample(CarExample example);

    int deleteByExample(CarExample example);

    int deleteByPrimaryKey(Integer carid);

    int insert(Car record);

    int insertSelective(Car record);

    List<Car> selectByExample(CarExample example);

    Car selectByPrimaryKey(Integer carid);

    int updateByExampleSelective(@Param("record") Car record, @Param("example") CarExample example);

    int updateByExample(@Param("record") Car record, @Param("example") CarExample example);

    int updateByPrimaryKeySelective(Car record);

    int updateByPrimaryKey(Car record);

    List<Car> selectCarsWithDetail();

    Car selctCarWithDetailById(Integer carId);

    List<Car> selectCarsWithConditions(@Param("typeId") Integer typeId, @Param("brandId") Integer brandId, @Param("pId") Integer pId,
                                       @Param("cId") Integer cId, @Param("lId") Integer lId, @Param("lowPrice") BigDecimal lowPrice, @Param("highPrice") BigDecimal highPrice);
}