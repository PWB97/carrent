package com.pu.carrent.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "user")
public class User {

    @Id
    private String id;

    private Integer userid;

    private String username;

    private Integer utypeid;

    private String email;

    private String phone;

    private String password;

    private String info;

    private String icon;

    private Integer isdeleted;

    @Transient
    private List<Order> orders;

    @DBRef
    private UserType userType;

    @DBRef
    private Car carRecord;

    private Date browseDate;

    public Date getBrowseDate() {
        return browseDate;
    }

    public void setBrowseDate(Date browseDate) {
        this.browseDate = browseDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Car getCarRecord() {
        return carRecord;
    }

    public void setCarRecord(Car carRecord) {
        this.carRecord = carRecord;
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public Integer getUtypeid() {
        return utypeid;
    }

    public void setUtypeid(Integer utypeid) {
        this.utypeid = utypeid;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info == null ? null : info.trim();
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon == null ? null : icon.trim();
    }

    public Integer getIsdeleted() {
        return isdeleted;
    }

    public void setIsdeleted(Integer isdeleted) {
        this.isdeleted = isdeleted;
    }
}