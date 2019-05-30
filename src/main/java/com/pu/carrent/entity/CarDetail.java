package com.pu.carrent.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "carDetail")
public class CarDetail {

    @Id
    private String id;

    private Integer cdid;

    @Transient
    private String productyear;

    private String level;

    @Transient
    private Integer seats;

    @Transient
    private Integer doors;

    @Transient
    private Integer energyid;

    @Transient
    private Integer gearid;

    @Transient
    private String displacement;

    @Transient
    private Integer drive;

    @Transient
    private Integer upwindow;

    @Transient
    private Integer radar;

    @Transient
    private Integer gps;

    @Transient
    private Integer carid;

    @Transient
    private Integer lisence;

    @Transient
    private Integer fsfile;

    private Integer isdeleted;

    private Integer isonline;

    @Transient
    private Integer userid;

    @Transient
    private String plate;

    @Transient
    private Energy energy;

    @Transient
    private Gear gear;

    @Transient
    private Integer photos;

    @DBRef
    private Car car;

    @Transient
    private User owner;

    private int accidentType;

    private Date accidentTime;

    private int isDamage;

    private int isScrap;

    private int thirdParty;

    private int injury;

    private int robbing;

    private String aLocation;

    public String getaLocation() {
        return aLocation;
    }

    public void setaLocation(String aLocation) {
        this.aLocation = aLocation;
    }

    public int getIsDamage() {
        return isDamage;
    }

    public void setIsDamage(int isDamage) {
        this.isDamage = isDamage;
    }

    public int getIsScrap() {
        return isScrap;
    }

    public void setIsScrap(int isScrap) {
        this.isScrap = isScrap;
    }

    public int getThirdParty() {
        return thirdParty;
    }

    public void setThirdParty(int thirdParty) {
        this.thirdParty = thirdParty;
    }

    public int getInjury() {
        return injury;
    }

    public void setInjury(int injury) {
        this.injury = injury;
    }

    public int getRobbing() {
        return robbing;
    }

    public void setRobbing(int robbing) {
        this.robbing = robbing;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getAccidentType() {
        return accidentType;
    }

    public void setAccidentType(int accidentType) {
        this.accidentType = accidentType;
    }

    public Date getAccidentTime() {
        return accidentTime;
    }

    public void setAccidentTime(Date accidentTime) {
        this.accidentTime = accidentTime;
    }

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