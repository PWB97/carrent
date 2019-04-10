package com.pu.carrent.entity;

public class CarType {
    private Integer ctypeid;

    private String ctypename;

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