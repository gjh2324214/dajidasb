package org.example.entity;

import lombok.Data;

@Data
public class ScoreEntity {
    private int id;
    private int eventId;
    private int userId;
    private String name;
    private String category;
    private String username;
    private String phone;
    private String avatar;
    private String score;
}
