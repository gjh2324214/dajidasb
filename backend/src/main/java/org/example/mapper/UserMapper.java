package org.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.example.entity.UserEntity;

import java.util.List;

@Mapper
public interface UserMapper {
    UserEntity getUserInfo(@Param("id") String id);

    int updateUserInfo(@Param("user") UserEntity user);

    UserEntity getUserInfoCountByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);

    int add(@Param("userEntity") UserEntity userEntity);

    int delete(@Param("id") int id);

    List<UserEntity> getUserInfoList();

    Integer getUserIdByName(@Param("personalName") String personalName);
}
