package com.pu.carrent.entity;

public class CarDetail {
    private Integer cdid;

    private String productyear;

    private String level;

    private Integer seats;

    private Integer doors;

    private Integer energyid;

    private Integer gearid;

    private String displacement;

    private Integer drive;

    private Integer upwindow;

    private Integer radar;

    private Integer gps;

    private Integer carid;

    private Integer lisence;

    private Integer fsfile;

    private Integer isdeleted;

    private Integer isonline;

    private Integer userid;

    private String plate;

    private Energy energy;

    private Gear gear;

    private Integer photos;

    private Car car;

    private User owner;

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public Integer getPhotos() {
        return photos;
    }

    public void setPhotos(Integer photos) {
        this.photos = photos;
    }

    public Energy getEnergy() {
        return energy;
    }

    public void setEnergy(Energy energy) {
        this.energy = energy;
    }

    public Gear getGear() {
        return gear;
    }

    public void setGear(Gear gear) {
        this.gear = gear;
    }

    public Integer getCdid() {
        return cdid;
    }

    public void setCdid(Integer cdid) {
        this.cdid = cdid;
    }

    public String getProductyear() {
        return productyear;
    }

    public void setProductyear(String productyear) {
        this.productyear = productyear == null ? null : productyear.trim();
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

    public Integer getSeats() {
        return seats;
    }

    public void setSeats(Integer seats) {
        this.seats = seats;
    }

    public Integer getDoors() {
        return doors;
    }

    public void setDoors(Integer doors) {
        this.doors = doors;
    }

    public Integer getEnergyid() {
        return energyid;
    }

    public void setEnergyid(Integer energyid) {
        this.energyid = energyid;
    }

    public Integer getGearid() {
        return gearid;
    }

    public void setGearid(Integer gearid) {
        this.gearid = gearid;
    }

    public String getDisplacement() {
        return displacement;
    }

    public void setDisplacement(String displacement) {
        this.displacement = displacement == null ? null : displacement.trim();
    }

    public Integer getDrive() {
        return drive;
    }

    public void setDrive(Integer drive) {
        this.drive = drive;
    }

    public Integer getUpwindow() {
        return upwindow;
    }

    public void setUpwindow(Integer upwindow) {
        this.upwindow = upwindow;
    }

    public Integer getRadar() {
        return radar;
    }

    public void setRadar(Integer radar) {
        this.radar = radar;
    }

    public Integer getGps() {
        return gps;
    }

    public void setGps(Integer gps) {
        this.gps = gps;
    }

    public Integer getCarid() {
        return carid;
    }

    public void setCarid(Integer carid) {
        this.carid = carid;
    }

    public Integer getLisence() {
        return lisence;
    }

    public void setLisence(Integer lisence) {
        this.lisence = lisence;
    }

    public Integer getFsfile() {
        return fsfile;
    }

    public void setFsfile(Integer fsfile) {
        this.fsfile = fsfile;
    }

    public Integer getIsdeleted() {
        return isdeleted;
    }

    public void setIsdeleted(Integer isdeleted) {
        this.isdeleted = isdeleted;
    }

    public Integer getIsonline() {
        return isonline;
    }

    public void setIsonline(Integer isonline) {
        this.isonline = isonline;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getPlate() {
        return plate;
    }

    public void setPlate(String plate) {
        this.plate = plate == null ? null : plate.trim();
    }
}