package org.example.service.impl;

import org.example.entity.EventInfoEntity;
import org.example.mapper.InfoManagementMapper;
import org.example.mapper.RegistratorMapper;
import org.example.mapper.ScoreMapper;
import org.example.service.InfoManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InfoManagementServiceImpl implements InfoManagementService {
    @Autowired
    private InfoManagementMapper infoManagementMapper;

    @Autowired
    private RegistratorMapper registratorMapper;

    @Autowired
    private ScoreMapper scoreMapper;

    @Override
    public List<EventInfoEntity> getEventInfoList() {
        return infoManagementMapper.getEventInfoList();
    }

    @Override
    public boolean deleteById(String id) {
        registratorMapper.deleteInfoByEventId(id);
        scoreMapper.deleteInfoByEventId(id);
        return infoManagementMapper.deleteById(id) > 0;
    }

    @Override
    public boolean updateInfo(EventInfoEntity eventInfoEntity) {
        return infoManagementMapper.updateInfo(eventInfoEntity)>0;
    }

    @Override
    public int add(EventInfoEntity eventInfoEntity) {
        return infoManagementMapper.add(eventInfoEntity);
    }
}
