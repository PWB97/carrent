package com.pu.carrent.dao;

import com.pu.carrent.entity.CarDetail;
import com.pu.carrent.entityExample.CarDetailExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface CarDetailMapper {
    int countByExample(CarDetailExample example);

    int deleteByExample(CarDetailExample example);

    int deleteByPrimaryKey(Integer cdid);

    int insert(CarDetail record);

    int insertSelective(CarDetail record);

    List<CarDetail> selectByExample(CarDetailExample example);

    CarDetail selectByPrimaryKey(Integer cdid);

    int updateByExampleSelective(@Param("record") CarDetail record, @Param("example") CarDetailExample example);

    int updateByExample(@Param("record") CarDetail record, @Param("example") CarDetailExample example);

    int updateByPrimaryKeySelective(CarDetail record);

    int updateByPrimaryKey(CarDetail record);

    List<CarDetail> selectCarDetailByCarId(Integer carId);

    CarDetail selectCarDetailById(Integer cdId);

    List<CarDetail> selectCarDetailNotOnline();

    List<CarDetail> selectCarDetailByUserId(Integer userId);
}