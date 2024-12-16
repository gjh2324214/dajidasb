package org.example.service.impl;

import org.example.entity.RegistratorEntity;
import org.example.entity.ScoreEntity;
import org.example.mapper.RegistratorMapper;
import org.example.mapper.ScoreMapper;
import org.example.service.RegistratorService;
import org.example.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    private ScoreMapper scoreMapper;
    @Override
    public List<ScoreEntity> getScoreInfoList() {
        return scoreMapper.getScoreInfoList();
    }

    @Override
    public boolean add(ScoreEntity scoreEntity) {
        return scoreMapper.add(scoreEntity) >0;
    }

    @Override
    public boolean update(ScoreEntity scoreEntity) {
        return scoreMapper.update(scoreEntity) >0;
    }

}
