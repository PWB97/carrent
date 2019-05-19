package com.pu.carrent.entityExample;

import java.util.ArrayList;
import java.util.List;

public class EnergyExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public EnergyExample() {
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

        public Criteria andEnergeidIsNull() {
            addCriterion("energeId is null");
            return (Criteria) this;
        }

        public Criteria andEnergeidIsNotNull() {
            addCriterion("energeId is not null");
            return (Criteria) this;
        }

        public Criteria andEnergeidEqualTo(Integer value) {
            addCriterion("energeId =", value, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidNotEqualTo(Integer value) {
            addCriterion("energeId <>", value, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidGreaterThan(Integer value) {
            addCriterion("energeId >", value, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidGreaterThanOrEqualTo(Integer value) {
            addCriterion("energeId >=", value, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidLessThan(Integer value) {
            addCriterion("energeId <", value, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidLessThanOrEqualTo(Integer value) {
            addCriterion("energeId <=", value, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidIn(List<Integer> values) {
            addCriterion("energeId in", values, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidNotIn(List<Integer> values) {
            addCriterion("energeId not in", values, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidBetween(Integer value1, Integer value2) {
            addCriterion("energeId between", value1, value2, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergeidNotBetween(Integer value1, Integer value2) {
            addCriterion("energeId not between", value1, value2, "energeid");
            return (Criteria) this;
        }

        public Criteria andEnergenameIsNull() {
            addCriterion("energeName is null");
            return (Criteria) this;
        }

        public Criteria andEnergenameIsNotNull() {
            addCriterion("energeName is not null");
            return (Criteria) this;
        }

        public Criteria andEnergenameEqualTo(String value) {
            addCriterion("energeName =", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameNotEqualTo(String value) {
            addCriterion("energeName <>", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameGreaterThan(String value) {
            addCriterion("energeName >", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameGreaterThanOrEqualTo(String value) {
            addCriterion("energeName >=", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameLessThan(String value) {
            addCriterion("energeName <", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameLessThanOrEqualTo(String value) {
            addCriterion("energeName <=", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameLike(String value) {
            addCriterion("energeName like", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameNotLike(String value) {
            addCriterion("energeName not like", value, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameIn(List<String> values) {
            addCriterion("energeName in", values, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameNotIn(List<String> values) {
            addCriterion("energeName not in", values, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameBetween(String value1, String value2) {
            addCriterion("energeName between", value1, value2, "energename");
            return (Criteria) this;
        }

        public Criteria andEnergenameNotBetween(String value1, String value2) {
            addCriterion("energeName not between", value1, value2, "energename");
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