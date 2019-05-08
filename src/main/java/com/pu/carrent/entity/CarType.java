package com.pu.carrent.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "carType")
public class CarType {

    @Id
    private String id;

    private Integer ctypeid;

    private String ctypename;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getCtypeid() {
        return ctypeid;
    }

    public void setCtypeid(Integer ctypeid) {
        this.ctypeid = ctypeid;
    }

    public String getCtypename() {
        return ctypename;
    }

    public void setCtypename(String ctypename) {
        this.ctypename = ctypename == null ? null : ctypename.trim();
    }
}