package com.pu.carrent.entityExample;

import java.util.ArrayList;
import java.util.List;

public class GearExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public GearExample() {
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

        public Criteria andGearnameIsNull() {
            addCriterion("gearName is null");
            return (Criteria) this;
        }

        public Criteria andGearnameIsNotNull() {
            addCriterion("gearName is not null");
            return (Criteria) this;
        }

        public Criteria andGearnameEqualTo(String value) {
            addCriterion("gearName =", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameNotEqualTo(String value) {
            addCriterion("gearName <>", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameGreaterThan(String value) {
            addCriterion("gearName >", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameGreaterThanOrEqualTo(String value) {
            addCriterion("gearName >=", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameLessThan(String value) {
            addCriterion("gearName <", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameLessThanOrEqualTo(String value) {
            addCriterion("gearName <=", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameLike(String value) {
            addCriterion("gearName like", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameNotLike(String value) {
            addCriterion("gearName not like", value, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameIn(List<String> values) {
            addCriterion("gearName in", values, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameNotIn(List<String> values) {
            addCriterion("gearName not in", values, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameBetween(String value1, String value2) {
            addCriterion("gearName between", value1, value2, "gearname");
            return (Criteria) this;
        }

        public Criteria andGearnameNotBetween(String value1, String value2) {
            addCriterion("gearName not between", value1, value2, "gearname");
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