package org.example.service;

import org.example.entity.RegistratorEntity;

import java.util.List;

public interface RegistratorService {
    List<RegistratorEntity> getRegistratorInfoList();

    boolean registration(int id, int eventId, int userId);

    boolean approve(int id, int eventId, int userId);
}
