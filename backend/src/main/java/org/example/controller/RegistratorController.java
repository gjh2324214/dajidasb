package org.example.controller;

import org.example.entity.RegistratorEntity;
import org.example.service.RegistratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registration")
public class RegistratorController {

    @Autowired
    private RegistratorService registratorService;

    @GetMapping("get")
    public List<RegistratorEntity> get(){
        return registratorService.getRegistratorInfoList();
    }

    @PostMapping("registration")
    public boolean registration(@RequestBody RegistratorEntity registratorEntity){
        return registratorService.registration(registratorEntity.getId(), registratorEntity.getEventId(),registratorEntity.getUserId());
    }

    @PostMapping("approve")
    public boolean approve(@RequestBody RegistratorEntity registratorEntity){
        return registratorService.approve(registratorEntity.getId(), registratorEntity.getEventId(),registratorEntity.getUserId());
    }
}
