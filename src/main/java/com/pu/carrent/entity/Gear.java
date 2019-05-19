package com.pu.carrent.entity;

public class Gear {
    private Integer gearid;

    private String gearname;

    public Integer getGearid() {
        return gearid;
    }

    public void setGearid(Integer gearid) {
        this.gearid = gearid;
    }

    public String getGearname() {
        return gearname;
    }

    public void setGearname(String gearname) {
        this.gearname = gearname == null ? null : gearname.trim();
    }
}