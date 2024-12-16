package org.example.entity;


import lombok.Data;

@Data
public class UserEntity {
    private int id;
    private String userName;
    private String password;
    private String email;
    private String phone;

    private String sex;
    private String avatar;
    private int level;
}
