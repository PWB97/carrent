package com.pu.carrent.service;

import com.pu.carrent.entity.User;

import java.util.List;

public interface UserService {

    List<User> findAllUsers();

    User findUserById(Integer userId);

    User login(String userName, String password);

    int addUser(User record);

    int changeUser(User record);

    int deleteUserById(Integer userId);

    List<User> findUserByName(String userName);

    User findUserByPhone(String phone);
}
