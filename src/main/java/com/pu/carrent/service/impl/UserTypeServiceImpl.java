package com.pu.carrent.service.impl;

import com.pu.carrent.dao.UserTypeMapper;
import com.pu.carrent.entity.UserType;
import com.pu.carrent.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserTypeServiceImpl implements UserTypeService {

    @Autowired
    private UserTypeMapper userTypeMapper;

    @Override
    public List<UserType> findAllUserType() {
        return userTypeMapper.selectByExample(null);
    }

    @Override
    public int addUserType(UserType record) {
        return userTypeMapper.insert(record);
    }

    @Override
    public int deleteUserTypeById(Integer uTypeId) {
        return userTypeMapper.deleteByPrimaryKey(uTypeId);
    }

    @Override
    public String finduTypeNameById(Integer uTypeId) {
        return userTypeMapper.selectByPrimaryKey(uTypeId).getUtypename();
    }
}
