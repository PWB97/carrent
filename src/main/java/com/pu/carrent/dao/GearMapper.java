package com.pu.carrent.dao;

import com.pu.carrent.entity.Gear;
import com.pu.carrent.entityExample.GearExample;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface GearMapper {
    int countByExample(GearExample example);

    int deleteByExample(GearExample example);

    int deleteByPrimaryKey(Integer gearid);

    int insert(Gear record);

    int insertSelective(Gear record);

    List<Gear> selectByExample(GearExample example);

    Gear selectByPrimaryKey(Integer gearid);

    int updateByExampleSelective(@Param("record") Gear record, @Param("example") GearExample example);

    int updateByExample(@Param("record") Gear record, @Param("example") GearExample example);

    int updateByPrimaryKeySelective(Gear record);

    int updateByPrimaryKey(Gear record);
}