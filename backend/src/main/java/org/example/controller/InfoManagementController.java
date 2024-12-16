package org.example.controller;

import org.example.entity.EventInfoEntity;
import org.example.service.InfoManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/info")
public class InfoManagementController {

    @Autowired
    private InfoManagementService infoManagementService;

    @GetMapping("get")
    public List<EventInfoEntity> getEventInfoList(){
        return infoManagementService.getEventInfoList();
    }

    @DeleteMapping("delete")
    public boolean deleteById(@RequestParam String id){
        return infoManagementService.deleteById(id);
    }

    @PostMapping("update")
    public boolean updateInfo(@RequestBody EventInfoEntity eventInfoEntity){
        return infoManagementService.updateInfo(eventInfoEntity);
    }

    @PostMapping("add")
    public int add(@RequestBody EventInfoEntity eventInfoEntity) {
        return infoManagementService.add(eventInfoEntity);
    }
}
