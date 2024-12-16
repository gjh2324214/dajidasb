package org.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.example.entity.RegistratorEntity;
import org.example.entity.ScoreEntity;

import java.util.List;

@Mapper
public interface ScoreMapper {
    List<ScoreEntity> getScoreInfoList();

    void deleteInfoByEventId(@Param("id") String id);

    int add(@Param("scoreEntity") ScoreEntity scoreEntity);

    int update(@Param("scoreEntity") ScoreEntity scoreEntity);
}
