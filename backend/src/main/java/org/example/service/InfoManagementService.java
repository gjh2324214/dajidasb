package org.example.service;

import org.example.entity.EventInfoEntity;

import java.util.List;

public interface InfoManagementService {
    List<EventInfoEntity> getEventInfoList();

    boolean deleteById(String id);

    boolean updateInfo(EventInfoEntity eventInfoEntity);

    int add(EventInfoEntity eventInfoEntity);
}
