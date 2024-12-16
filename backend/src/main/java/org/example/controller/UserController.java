package org.example.controller;

import org.example.entity.UserEntity;
import org.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("getUserInfo")
    public UserEntity getUserInfo(@RequestParam String id) {
        System.out.println("getUserInfo");
        return userService.getUserInfo(id);
    }

    @PostMapping("updateUserInfo")
    public boolean updateUserInfo(@RequestBody UserEntity userEntity) {
        return userService.updateUserInfo(userEntity);
    }

    @PostMapping("login")
    public UserEntity login(@RequestBody UserEntity userEntity) {
        UserEntity login = userService.login(userEntity.getUserName(), userEntity.getPassword());
        return login == null ? new UserEntity() : login;
    }

    @PostMapping("add")
    public boolean add(@RequestBody UserEntity userEntity) {
        return userService.add(userEntity);
    }

    @PostMapping("update")
    public boolean update(@RequestBody UserEntity userEntity) {
        return userService.update(userEntity);
    }

    @DeleteMapping("delete")
    public boolean delete(@RequestParam int id) {
        return userService.delete(id);
    }

    @GetMapping("getUserInfoList")
    public List<UserEntity> getUserInfoList() {
        return userService.getUserInfoList();
    }
}
