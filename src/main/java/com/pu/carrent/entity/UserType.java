package com.pu.carrent.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "userType")
public class UserType {

    @Id
    private String id;

    private Integer utypeid;

    private String utypename;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getUtypeid() {
        return utypeid;
    }

    public void setUtypeid(Integer utypeid) {
        this.utypeid = utypeid;
    }

    public String getUtypename() {
        return utypename;
    }

    public void setUtypename(String utypename) {
        this.utypename = utypename == null ? null : utypename.trim();
    }
}