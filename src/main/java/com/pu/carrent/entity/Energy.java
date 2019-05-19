package com.pu.carrent.entity;

public class Energy {
    private Integer energeid;

    private String energename;

    public Integer getEnergeid() {
        return energeid;
    }

    public void setEnergeid(Integer energeid) {
        this.energeid = energeid;
    }

    public String getEnergename() {
        return energename;
    }

    public void setEnergename(String energename) {
        this.energename = energename == null ? null : energename.trim();
    }
}