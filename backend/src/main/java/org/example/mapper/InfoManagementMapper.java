package org.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.example.entity.EventInfoEntity;

import java.util.List;

@Mapper
public interface InfoManagementMapper {
    List<EventInfoEntity> getEventInfoList();

    int deleteById(@Param("id") String id);

    int updateInfo(@Param("eventInfoEntity") EventInfoEntity eventInfoEntity);

    int add(@Param("eventInfoEntity") EventInfoEntity eventInfoEntity);

    Integer getEventIdByName(@Param("name") String name);
}
