package org.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.example.entity.RegistratorEntity;

import java.util.List;

@Mapper
public interface RegistratorMapper {
    List<RegistratorEntity> getRegistratorInfoList();

    Integer registration(@Param("id") int id, @Param("eventId") int eventId, @Param("userId") int userId);

    void deleteInfoByEventId(@Param("id") String id);

    int approve(int id, int eventId, int userId);
}
