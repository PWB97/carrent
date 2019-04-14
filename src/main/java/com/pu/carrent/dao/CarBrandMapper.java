package com.pu.carrent.dao;

import com.pu.carrent.entity.CarBrand;
import com.pu.carrent.entityExample.CarBrandExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface CarBrandMapper {
    int countByExample(CarBrandExample example);

    int deleteByExample(CarBrandExample example);

    int deleteByPrimaryKey(Integer brandid);

    int insert(CarBrand record);

    int insertSelective(CarBrand record);

    List<CarBrand> selectByExample(CarBrandExample example);

    CarBrand selectByPrimaryKey(Integer brandid);

    int updateByExampleSelective(@Param("record") CarBrand record, @Param("example") CarBrandExample example);

    int updateByExample(@Param("record") CarBrand record, @Param("example") CarBrandExample example);

    int updateByPrimaryKeySelective(CarBrand record);

    int updateByPrimaryKey(CarBrand record);
}