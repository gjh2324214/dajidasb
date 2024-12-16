package org.example.service;

import org.example.entity.UserEntity;

import java.util.List;

public interface UserService {
    UserEntity getUserInfo(String id);

    boolean updateUserInfo(UserEntity userEntity);

    UserEntity login(String userName, String password);

    boolean add(UserEntity userEntity);

    boolean update(UserEntity userEntity);

    boolean delete(int id);

    List<UserEntity> getUserInfoList();
}
