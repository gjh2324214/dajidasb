package org.example.service;

import org.example.entity.RegistratorEntity;
import org.example.entity.ScoreEntity;

import java.util.List;

public interface ScoreService {
    List<ScoreEntity> getScoreInfoList();

    boolean add(ScoreEntity scoreEntity);

    boolean update(ScoreEntity scoreEntity);
}
