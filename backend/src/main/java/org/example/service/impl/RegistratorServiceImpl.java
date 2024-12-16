package org.example.service.impl;

import org.example.entity.RegistratorEntity;
import org.example.mapper.RegistratorMapper;
import org.example.service.RegistratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistratorServiceImpl implements RegistratorService {

    @Autowired
    private RegistratorMapper registratorMapper;
    @Override
    public List<RegistratorEntity> getRegistratorInfoList() {
        return registratorMapper.getRegistratorInfoList();
    }

    @Override
    public boolean registration(int id, int eventId, int userId) {
        return registratorMapper.registration(id,eventId,userId) > 0;
    }

    @Override
    public boolean approve(int id, int eventId, int userId) {
        return registratorMapper.approve(id,eventId,userId) > 0;
    }
}
