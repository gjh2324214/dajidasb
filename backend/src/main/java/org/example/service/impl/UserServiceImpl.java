package org.example.service.impl;

import org.example.entity.UserEntity;
import org.example.mapper.UserMapper;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Override
    public UserEntity getUserInfo(String id) {
        return userMapper.getUserInfo(id);
    }

    @Override
    public boolean updateUserInfo(UserEntity userEntity) {
        return userMapper.updateUserInfo(userEntity) > 0;
    }

    @Override
    public UserEntity login(String userName, String password) {
        return userMapper.getUserInfoCountByUserNameAndPassword(userName, password);
    }

    @Override
    public boolean add(UserEntity userEntity) {
        return userMapper.add(userEntity)>0;
    }

    @Override
    public boolean update(UserEntity userEntity) {
        return userMapper.updateUserInfo(userEntity)>0;
    }

    @Override
    public boolean delete(int id) {
        return userMapper.delete(id)>0;
    }

    @Override
    public List<UserEntity> getUserInfoList() {
        return userMapper.getUserInfoList();
    }
}
