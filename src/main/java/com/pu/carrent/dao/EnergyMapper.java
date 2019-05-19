package com.pu.carrent.dao;

import com.pu.carrent.entity.Energy;
import com.pu.carrent.entityExample.EnergyExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface EnergyMapper {
    int countByExample(EnergyExample example);

    int deleteByExample(EnergyExample example);

    int deleteByPrimaryKey(Integer energeid);

    int insert(Energy record);

    int insertSelective(Energy record);

    List<Energy> selectByExample(EnergyExample example);

    Energy selectByPrimaryKey(Integer energeid);

    int updateByExampleSelective(@Param("record") Energy record, @Param("example") EnergyExample example);

    int updateByExample(@Param("record") Energy record, @Param("example") EnergyExample example);

    int updateByPrimaryKeySelective(Energy record);

    int updateByPrimaryKey(Energy record);
}