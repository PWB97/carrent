package com.pu.carrent.service;

import com.pu.carrent.entity.UserType;

import java.util.List;

public interface UserTypeService {

    List<UserType> findAllUserType();

    int addUserType(UserType record);

    int deleteUserTypeById(Integer uTypeId);

    String finduTypeNameById(Integer uTypeId);
}
