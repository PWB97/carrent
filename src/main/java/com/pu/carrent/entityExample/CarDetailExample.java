package com.pu.carrent.entityExample;

import java.util.ArrayList;
import java.util.List;

public class CarDetailExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CarDetailExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andCdidIsNull() {
            addCriterion("cdId is null");
            return (Criteria) this;
        }

        public Criteria andCdidIsNotNull() {
            addCriterion("cdId is not null");
            return (Criteria) this;
        }

        public Criteria andCdidEqualTo(Integer value) {
            addCriterion("cdId =", value, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidNotEqualTo(Integer value) {
            addCriterion("cdId <>", value, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidGreaterThan(Integer value) {
            addCriterion("cdId >", value, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidGreaterThanOrEqualTo(Integer value) {
            addCriterion("cdId >=", value, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidLessThan(Integer value) {
            addCriterion("cdId <", value, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidLessThanOrEqualTo(Integer value) {
            addCriterion("cdId <=", value, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidIn(List<Integer> values) {
            addCriterion("cdId in", values, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidNotIn(List<Integer> values) {
            addCriterion("cdId not in", values, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidBetween(Integer value1, Integer value2) {
            addCriterion("cdId between", value1, value2, "cdid");
            return (Criteria) this;
        }

        public Criteria andCdidNotBetween(Integer value1, Integer value2) {
            addCriterion("cdId not between", value1, value2, "cdid");
            return (Criteria) this;
        }

        public Criteria andProductyearIsNull() {
            addCriterion("productYear is null");
            return (Criteria) this;
        }

        public Criteria andProductyearIsNotNull() {
            addCriterion("productYear is not null");
            return (Criteria) this;
        }

        public Criteria andProductyearEqualTo(String value) {
            addCriterion("productYear =", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearNotEqualTo(String value) {
            addCriterion("productYear <>", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearGreaterThan(String value) {
            addCriterion("productYear >", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearGreaterThanOrEqualTo(String value) {
            addCriterion("productYear >=", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearLessThan(String value) {
            addCriterion("productYear <", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearLessThanOrEqualTo(String value) {
            addCriterion("productYear <=", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearLike(String value) {
            addCriterion("productYear like", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearNotLike(String value) {
            addCriterion("productYear not like", value, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearIn(List<String> values) {
            addCriterion("productYear in", values, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearNotIn(List<String> values) {
            addCriterion("productYear not in", values, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearBetween(String value1, String value2) {
            addCriterion("productYear between", value1, value2, "productyear");
            return (Criteria) this;
        }

        public Criteria andProductyearNotBetween(String value1, String value2) {
            addCriterion("productYear not between", value1, value2, "productyear");
            return (Criteria) this;
        }

        public Criteria andLevelIsNull() {
            addCriterion("level is null");
            return (Criteria) this;
        }

        public Criteria andLevelIsNotNull() {
            addCriterion("level is not null");
            return (Criteria) this;
        }

        public Criteria andLevelEqualTo(String value) {
            addCriterion("level =", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotEqualTo(String value) {
            addCriterion("level <>", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelGreaterThan(String value) {
            addCriterion("level >", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelGreaterThanOrEqualTo(String value) {
            addCriterion("level >=", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelLessThan(String value) {
            addCriterion("level <", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelLessThanOrEqualTo(String value) {
            addCriterion("level <=", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelLike(String value) {
            addCriterion("level like", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotLike(String value) {
            addCriterion("level not like", value, "level");
            return (Criteria) this;
        }

        public Criteria andLevelIn(List<String> values) {
            addCriterion("level in", values, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotIn(List<String> values) {
            addCriterion("level not in", values, "level");
            return (Criteria) this;
        }

        public Criteria andLevelBetween(String value1, String value2) {
            addCriterion("level between", value1, value2, "level");
            return (Criteria) this;
        }

        public Criteria andLevelNotBetween(String value1, String value2) {
            addCriterion("level not between", value1, value2, "level");
            return (Criteria) this;
        }

        public Criteria andSeatsIsNull() {
            addCriterion("seats is null");
            return (Criteria) this;
        }

        public Criteria andSeatsIsNotNull() {
            addCriterion("seats is not null");
            return (Criteria) this;
        }

        public Criteria andSeatsEqualTo(Integer value) {
            addCriterion("seats =", value, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsNotEqualTo(Integer value) {
            addCriterion("seats <>", value, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsGreaterThan(Integer value) {
            addCriterion("seats >", value, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsGreaterThanOrEqualTo(Integer value) {
            addCriterion("seats >=", value, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsLessThan(Integer value) {
            addCriterion("seats <", value, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsLessThanOrEqualTo(Integer value) {
            addCriterion("seats <=", value, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsIn(List<Integer> values) {
            addCriterion("seats in", values, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsNotIn(List<Integer> values) {
            addCriterion("seats not in", values, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsBetween(Integer value1, Integer value2) {
            addCriterion("seats between", value1, value2, "seats");
            return (Criteria) this;
        }

        public Criteria andSeatsNotBetween(Integer value1, Integer value2) {
            addCriterion("seats not between", value1, value2, "seats");
            return (Criteria) this;
        }

        public Criteria andDoorsIsNull() {
            addCriterion("doors is null");
            return (Criteria) this;
        }

        public Criteria andDoorsIsNotNull() {
            addCriterion("doors is not null");
            return (Criteria) this;
        }

        public Criteria andDoorsEqualTo(Integer value) {
            addCriterion("doors =", value, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsNotEqualTo(Integer value) {
            addCriterion("doors <>", value, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsGreaterThan(Integer value) {
            addCriterion("doors >", value, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsGreaterThanOrEqualTo(Integer value) {
            addCriterion("doors >=", value, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsLessThan(Integer value) {
            addCriterion("doors <", value, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsLessThanOrEqualTo(Integer value) {
            addCriterion("doors <=", value, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsIn(List<Integer> values) {
            addCriterion("doors in", values, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsNotIn(List<Integer> values) {
            addCriterion("doors not in", values, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsBetween(Integer value1, Integer value2) {
            addCriterion("doors between", value1, value2, "doors");
            return (Criteria) this;
        }

        public Criteria andDoorsNotBetween(Integer value1, Integer value2) {
            addCriterion("doors not between", value1, value2, "doors");
            return (Criteria) this;
        }

        public Criteria andEnergyidIsNull() {
            addCriterion("energyId is null");
            return (Criteria) this;
        }

        public Criteria andEnergyidIsNotNull() {
            addCriterion("energyId is not null");
            return (Criteria) this;
        }

        public Criteria andEnergyidEqualTo(Integer value) {
            addCriterion("energyId =", value, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidNotEqualTo(Integer value) {
            addCriterion("energyId <>", value, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidGreaterThan(Integer value) {
            addCriterion("energyId >", value, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidGreaterThanOrEqualTo(Integer value) {
            addCriterion("energyId >=", value, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidLessThan(Integer value) {
            addCriterion("energyId <", value, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidLessThanOrEqualTo(Integer value) {
            addCriterion("energyId <=", value, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidIn(List<Integer> values) {
            addCriterion("energyId in", values, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidNotIn(List<Integer> values) {
            addCriterion("energyId not in", values, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidBetween(Integer value1, Integer value2) {
            addCriterion("energyId between", value1, value2, "energyid");
            return (Criteria) this;
        }

        public Criteria andEnergyidNotBetween(Integer value1, Integer value2) {
            addCriterion("energyId not between", value1, value2, "energyid");
            return (Criteria) this;
        }

        public Criteria andGearidIsNull() {
            addCriterion("gearId is null");
            return (Criteria) this;
        }

        public Criteria andGearidIsNotNull() {
            addCriterion("gearId is not null");
            return (Criteria) this;
        }

        public Criteria andGearidEqualTo(Integer value) {
            addCriterion("gearId =", value, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidNotEqualTo(Integer value) {
            addCriterion("gearId <>", value, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidGreaterThan(Integer value) {
            addCriterion("gearId >", value, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidGreaterThanOrEqualTo(Integer value) {
            addCriterion("gearId >=", value, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidLessThan(Integer value) {
            addCriterion("gearId <", value, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidLessThanOrEqualTo(Integer value) {
            addCriterion("gearId <=", value, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidIn(List<Integer> values) {
            addCriterion("gearId in", values, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidNotIn(List<Integer> values) {
            addCriterion("gearId not in", values, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidBetween(Integer value1, Integer value2) {
            addCriterion("gearId between", value1, value2, "gearid");
            return (Criteria) this;
        }

        public Criteria andGearidNotBetween(Integer value1, Integer value2) {
            addCriterion("gearId not between", value1, value2, "gearid");
            return (Criteria) this;
        }

        public Criteria andDisplacementIsNull() {
            addCriterion("displacement is null");
            return (Criteria) this;
        }

        public Criteria andDisplacementIsNotNull() {
            addCriterion("displacement is not null");
            return (Criteria) this;
        }

        public Criteria andDisplacementEqualTo(String value) {
            addCriterion("displacement =", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementNotEqualTo(String value) {
            addCriterion("displacement <>", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementGreaterThan(String value) {
            addCriterion("displacement >", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementGreaterThanOrEqualTo(String value) {
            addCriterion("displacement >=", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementLessThan(String value) {
            addCriterion("displacement <", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementLessThanOrEqualTo(String value) {
            addCriterion("displacement <=", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementLike(String value) {
            addCriterion("displacement like", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementNotLike(String value) {
            addCriterion("displacement not like", value, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementIn(List<String> values) {
            addCriterion("displacement in", values, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementNotIn(List<String> values) {
            addCriterion("displacement not in", values, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementBetween(String value1, String value2) {
            addCriterion("displacement between", value1, value2, "displacement");
            return (Criteria) this;
        }

        public Criteria andDisplacementNotBetween(String value1, String value2) {
            addCriterion("displacement not between", value1, value2, "displacement");
            return (Criteria) this;
        }

        public Criteria andDriveIsNull() {
            addCriterion("drive is null");
            return (Criteria) this;
        }

        public Criteria andDriveIsNotNull() {
            addCriterion("drive is not null");
            return (Criteria) this;
        }

        public Criteria andDriveEqualTo(Integer value) {
            addCriterion("drive =", value, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveNotEqualTo(Integer value) {
            addCriterion("drive <>", value, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveGreaterThan(Integer value) {
            addCriterion("drive >", value, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveGreaterThanOrEqualTo(Integer value) {
            addCriterion("drive >=", value, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveLessThan(Integer value) {
            addCriterion("drive <", value, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveLessThanOrEqualTo(Integer value) {
            addCriterion("drive <=", value, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveIn(List<Integer> values) {
            addCriterion("drive in", values, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveNotIn(List<Integer> values) {
            addCriterion("drive not in", values, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveBetween(Integer value1, Integer value2) {
            addCriterion("drive between", value1, value2, "drive");
            return (Criteria) this;
        }

        public Criteria andDriveNotBetween(Integer value1, Integer value2) {
            addCriterion("drive not between", value1, value2, "drive");
            return (Criteria) this;
        }

        public Criteria andUpwindowIsNull() {
            addCriterion("upwindow is null");
            return (Criteria) this;
        }

        public Criteria andUpwindowIsNotNull() {
            addCriterion("upwindow is not null");
            return (Criteria) this;
        }

        public Criteria andUpwindowEqualTo(Integer value) {
            addCriterion("upwindow =", value, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowNotEqualTo(Integer value) {
            addCriterion("upwindow <>", value, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowGreaterThan(Integer value) {
            addCriterion("upwindow >", value, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowGreaterThanOrEqualTo(Integer value) {
            addCriterion("upwindow >=", value, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowLessThan(Integer value) {
            addCriterion("upwindow <", value, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowLessThanOrEqualTo(Integer value) {
            addCriterion("upwindow <=", value, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowIn(List<Integer> values) {
            addCriterion("upwindow in", values, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowNotIn(List<Integer> values) {
            addCriterion("upwindow not in", values, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowBetween(Integer value1, Integer value2) {
            addCriterion("upwindow between", value1, value2, "upwindow");
            return (Criteria) this;
        }

        public Criteria andUpwindowNotBetween(Integer value1, Integer value2) {
            addCriterion("upwindow not between", value1, value2, "upwindow");
            return (Criteria) this;
        }

        public Criteria andRadarIsNull() {
            addCriterion("radar is null");
            return (Criteria) this;
        }

        public Criteria andRadarIsNotNull() {
            addCriterion("radar is not null");
            return (Criteria) this;
        }

        public Criteria andRadarEqualTo(Integer value) {
            addCriterion("radar =", value, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarNotEqualTo(Integer value) {
            addCriterion("radar <>", value, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarGreaterThan(Integer value) {
            addCriterion("radar >", value, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarGreaterThanOrEqualTo(Integer value) {
            addCriterion("radar >=", value, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarLessThan(Integer value) {
            addCriterion("radar <", value, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarLessThanOrEqualTo(Integer value) {
            addCriterion("radar <=", value, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarIn(List<Integer> values) {
            addCriterion("radar in", values, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarNotIn(List<Integer> values) {
            addCriterion("radar not in", values, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarBetween(Integer value1, Integer value2) {
            addCriterion("radar between", value1, value2, "radar");
            return (Criteria) this;
        }

        public Criteria andRadarNotBetween(Integer value1, Integer value2) {
            addCriterion("radar not between", value1, value2, "radar");
            return (Criteria) this;
        }

        public Criteria andGpsIsNull() {
            addCriterion("gps is null");
            return (Criteria) this;
        }

        public Criteria andGpsIsNotNull() {
            addCriterion("gps is not null");
            return (Criteria) this;
        }

        public Criteria andGpsEqualTo(Integer value) {
            addCriterion("gps =", value, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsNotEqualTo(Integer value) {
            addCriterion("gps <>", value, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsGreaterThan(Integer value) {
            addCriterion("gps >", value, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsGreaterThanOrEqualTo(Integer value) {
            addCriterion("gps >=", value, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsLessThan(Integer value) {
            addCriterion("gps <", value, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsLessThanOrEqualTo(Integer value) {
            addCriterion("gps <=", value, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsIn(List<Integer> values) {
            addCriterion("gps in", values, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsNotIn(List<Integer> values) {
            addCriterion("gps not in", values, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsBetween(Integer value1, Integer value2) {
            addCriterion("gps between", value1, value2, "gps");
            return (Criteria) this;
        }

        public Criteria andGpsNotBetween(Integer value1, Integer value2) {
            addCriterion("gps not between", value1, value2, "gps");
            return (Criteria) this;
        }

        public Criteria andCaridIsNull() {
            addCriterion("carId is null");
            return (Criteria) this;
        }

        public Criteria andCaridIsNotNull() {
            addCriterion("carId is not null");
            return (Criteria) this;
        }

        public Criteria andCaridEqualTo(Integer value) {
            addCriterion("carId =", value, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridNotEqualTo(Integer value) {
            addCriterion("carId <>", value, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridGreaterThan(Integer value) {
            addCriterion("carId >", value, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridGreaterThanOrEqualTo(Integer value) {
            addCriterion("carId >=", value, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridLessThan(Integer value) {
            addCriterion("carId <", value, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridLessThanOrEqualTo(Integer value) {
            addCriterion("carId <=", value, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridIn(List<Integer> values) {
            addCriterion("carId in", values, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridNotIn(List<Integer> values) {
            addCriterion("carId not in", values, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridBetween(Integer value1, Integer value2) {
            addCriterion("carId between", value1, value2, "carid");
            return (Criteria) this;
        }

        public Criteria andCaridNotBetween(Integer value1, Integer value2) {
            addCriterion("carId not between", value1, value2, "carid");
            return (Criteria) this;
        }

        public Criteria andLisenceIsNull() {
            addCriterion("lisence is null");
            return (Criteria) this;
        }

        public Criteria andLisenceIsNotNull() {
            addCriterion("lisence is not null");
            return (Criteria) this;
        }

        public Criteria andLisenceEqualTo(Integer value) {
            addCriterion("lisence =", value, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceNotEqualTo(Integer value) {
            addCriterion("lisence <>", value, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceGreaterThan(Integer value) {
            addCriterion("lisence >", value, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceGreaterThanOrEqualTo(Integer value) {
            addCriterion("lisence >=", value, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceLessThan(Integer value) {
            addCriterion("lisence <", value, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceLessThanOrEqualTo(Integer value) {
            addCriterion("lisence <=", value, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceIn(List<Integer> values) {
            addCriterion("lisence in", values, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceNotIn(List<Integer> values) {
            addCriterion("lisence not in", values, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceBetween(Integer value1, Integer value2) {
            addCriterion("lisence between", value1, value2, "lisence");
            return (Criteria) this;
        }

        public Criteria andLisenceNotBetween(Integer value1, Integer value2) {
            addCriterion("lisence not between", value1, value2, "lisence");
            return (Criteria) this;
        }

        public Criteria andFsfileIsNull() {
            addCriterion("fsfile is null");
            return (Criteria) this;
        }

        public Criteria andFsfileIsNotNull() {
            addCriterion("fsfile is not null");
            return (Criteria) this;
        }

        public Criteria andFsfileEqualTo(Integer value) {
            addCriterion("fsfile =", value, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileNotEqualTo(Integer value) {
            addCriterion("fsfile <>", value, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileGreaterThan(Integer value) {
            addCriterion("fsfile >", value, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileGreaterThanOrEqualTo(Integer value) {
            addCriterion("fsfile >=", value, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileLessThan(Integer value) {
            addCriterion("fsfile <", value, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileLessThanOrEqualTo(Integer value) {
            addCriterion("fsfile <=", value, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileIn(List<Integer> values) {
            addCriterion("fsfile in", values, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileNotIn(List<Integer> values) {
            addCriterion("fsfile not in", values, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileBetween(Integer value1, Integer value2) {
            addCriterion("fsfile between", value1, value2, "fsfile");
            return (Criteria) this;
        }

        public Criteria andFsfileNotBetween(Integer value1, Integer value2) {
            addCriterion("fsfile not between", value1, value2, "fsfile");
            return (Criteria) this;
        }

        public Criteria andIsdeletedIsNull() {
            addCriterion("isDeleted is null");
            return (Criteria) this;
        }

        public Criteria andIsdeletedIsNotNull() {
            addCriterion("isDeleted is not null");
            return (Criteria) this;
        }

        public Criteria andIsdeletedEqualTo(Integer value) {
            addCriterion("isDeleted =", value, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedNotEqualTo(Integer value) {
            addCriterion("isDeleted <>", value, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedGreaterThan(Integer value) {
            addCriterion("isDeleted >", value, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedGreaterThanOrEqualTo(Integer value) {
            addCriterion("isDeleted >=", value, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedLessThan(Integer value) {
            addCriterion("isDeleted <", value, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedLessThanOrEqualTo(Integer value) {
            addCriterion("isDeleted <=", value, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedIn(List<Integer> values) {
            addCriterion("isDeleted in", values, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedNotIn(List<Integer> values) {
            addCriterion("isDeleted not in", values, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedBetween(Integer value1, Integer value2) {
            addCriterion("isDeleted between", value1, value2, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsdeletedNotBetween(Integer value1, Integer value2) {
            addCriterion("isDeleted not between", value1, value2, "isdeleted");
            return (Criteria) this;
        }

        public Criteria andIsonlineIsNull() {
            addCriterion("isOnline is null");
            return (Criteria) this;
        }

        public Criteria andIsonlineIsNotNull() {
            addCriterion("isOnline is not null");
            return (Criteria) this;
        }

        public Criteria andIsonlineEqualTo(Integer value) {
            addCriterion("isOnline =", value, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineNotEqualTo(Integer value) {
            addCriterion("isOnline <>", value, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineGreaterThan(Integer value) {
            addCriterion("isOnline >", value, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineGreaterThanOrEqualTo(Integer value) {
            addCriterion("isOnline >=", value, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineLessThan(Integer value) {
            addCriterion("isOnline <", value, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineLessThanOrEqualTo(Integer value) {
            addCriterion("isOnline <=", value, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineIn(List<Integer> values) {
            addCriterion("isOnline in", values, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineNotIn(List<Integer> values) {
            addCriterion("isOnline not in", values, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineBetween(Integer value1, Integer value2) {
            addCriterion("isOnline between", value1, value2, "isonline");
            return (Criteria) this;
        }

        public Criteria andIsonlineNotBetween(Integer value1, Integer value2) {
            addCriterion("isOnline not between", value1, value2, "isonline");
            return (Criteria) this;
        }

        public Criteria andUseridIsNull() {
            addCriterion("userId is null");
            return (Criteria) this;
        }

        public Criteria andUseridIsNotNull() {
            addCriterion("userId is not null");
            return (Criteria) this;
        }

        public Criteria andUseridEqualTo(Integer value) {
            addCriterion("userId =", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotEqualTo(Integer value) {
            addCriterion("userId <>", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridGreaterThan(Integer value) {
            addCriterion("userId >", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridGreaterThanOrEqualTo(Integer value) {
            addCriterion("userId >=", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridLessThan(Integer value) {
            addCriterion("userId <", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridLessThanOrEqualTo(Integer value) {
            addCriterion("userId <=", value, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridIn(List<Integer> values) {
            addCriterion("userId in", values, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotIn(List<Integer> values) {
            addCriterion("userId not in", values, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridBetween(Integer value1, Integer value2) {
            addCriterion("userId between", value1, value2, "userid");
            return (Criteria) this;
        }

        public Criteria andUseridNotBetween(Integer value1, Integer value2) {
            addCriterion("userId not between", value1, value2, "userid");
            return (Criteria) this;
        }

        public Criteria andPlateIsNull() {
            addCriterion("plate is null");
            return (Criteria) this;
        }

        public Criteria andPlateIsNotNull() {
            addCriterion("plate is not null");
            return (Criteria) this;
        }

        public Criteria andPlateEqualTo(String value) {
            addCriterion("plate =", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateNotEqualTo(String value) {
            addCriterion("plate <>", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateGreaterThan(String value) {
            addCriterion("plate >", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateGreaterThanOrEqualTo(String value) {
            addCriterion("plate >=", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateLessThan(String value) {
            addCriterion("plate <", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateLessThanOrEqualTo(String value) {
            addCriterion("plate <=", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateLike(String value) {
            addCriterion("plate like", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateNotLike(String value) {
            addCriterion("plate not like", value, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateIn(List<String> values) {
            addCriterion("plate in", values, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateNotIn(List<String> values) {
            addCriterion("plate not in", values, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateBetween(String value1, String value2) {
            addCriterion("plate between", value1, value2, "plate");
            return (Criteria) this;
        }

        public Criteria andPlateNotBetween(String value1, String value2) {
            addCriterion("plate not between", value1, value2, "plate");
            return (Criteria) this;
        }

        public Criteria andPhotosIsNull() {
            addCriterion("photos is null");
            return (Criteria) this;
        }

        public Criteria andPhotosIsNotNull() {
            addCriterion("photos is not null");
            return (Criteria) this;
        }

        public Criteria andPhotosEqualTo(Integer value) {
            addCriterion("photos =", value, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosNotEqualTo(Integer value) {
            addCriterion("photos <>", value, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosGreaterThan(Integer value) {
            addCriterion("photos >", value, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosGreaterThanOrEqualTo(Integer value) {
            addCriterion("photos >=", value, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosLessThan(Integer value) {
            addCriterion("photos <", value, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosLessThanOrEqualTo(Integer value) {
            addCriterion("photos <=", value, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosIn(List<Integer> values) {
            addCriterion("photos in", values, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosNotIn(List<Integer> values) {
            addCriterion("photos not in", values, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosBetween(Integer value1, Integer value2) {
            addCriterion("photos between", value1, value2, "photos");
            return (Criteria) this;
        }

        public Criteria andPhotosNotBetween(Integer value1, Integer value2) {
            addCriterion("photos not between", value1, value2, "photos");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}