package org.example.entity;

import lombok.Data;

import java.util.Date;

@Data
public class EventInfoEntity {
    private int id;
    private String name;
    private String category;
    private String responsible;
    private String personalName;
    private String timePeriod;
    private Date date;
    private String status;
    private String score;
}
