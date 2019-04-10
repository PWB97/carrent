package com.pu.carrent.entity;

public class UserType {
    private Integer utypeid;

    private String utypename;

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