package com.pu.carrent.entityExample;

import java.util.ArrayList;
import java.util.List;

public class UserTypeExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public UserTypeExample() {
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

        public Criteria andUtypeidIsNull() {
            addCriterion("uTypeId is null");
            return (Criteria) this;
        }

        public Criteria andUtypeidIsNotNull() {
            addCriterion("uTypeId is not null");
            return (Criteria) this;
        }

        public Criteria andUtypeidEqualTo(Integer value) {
            addCriterion("uTypeId =", value, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidNotEqualTo(Integer value) {
            addCriterion("uTypeId <>", value, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidGreaterThan(Integer value) {
            addCriterion("uTypeId >", value, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidGreaterThanOrEqualTo(Integer value) {
            addCriterion("uTypeId >=", value, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidLessThan(Integer value) {
            addCriterion("uTypeId <", value, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidLessThanOrEqualTo(Integer value) {
            addCriterion("uTypeId <=", value, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidIn(List<Integer> values) {
            addCriterion("uTypeId in", values, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidNotIn(List<Integer> values) {
            addCriterion("uTypeId not in", values, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidBetween(Integer value1, Integer value2) {
            addCriterion("uTypeId between", value1, value2, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypeidNotBetween(Integer value1, Integer value2) {
            addCriterion("uTypeId not between", value1, value2, "utypeid");
            return (Criteria) this;
        }

        public Criteria andUtypenameIsNull() {
            addCriterion("uTypeName is null");
            return (Criteria) this;
        }

        public Criteria andUtypenameIsNotNull() {
            addCriterion("uTypeName is not null");
            return (Criteria) this;
        }

        public Criteria andUtypenameEqualTo(String value) {
            addCriterion("uTypeName =", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameNotEqualTo(String value) {
            addCriterion("uTypeName <>", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameGreaterThan(String value) {
            addCriterion("uTypeName >", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameGreaterThanOrEqualTo(String value) {
            addCriterion("uTypeName >=", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameLessThan(String value) {
            addCriterion("uTypeName <", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameLessThanOrEqualTo(String value) {
            addCriterion("uTypeName <=", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameLike(String value) {
            addCriterion("uTypeName like", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameNotLike(String value) {
            addCriterion("uTypeName not like", value, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameIn(List<String> values) {
            addCriterion("uTypeName in", values, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameNotIn(List<String> values) {
            addCriterion("uTypeName not in", values, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameBetween(String value1, String value2) {
            addCriterion("uTypeName between", value1, value2, "utypename");
            return (Criteria) this;
        }

        public Criteria andUtypenameNotBetween(String value1, String value2) {
            addCriterion("uTypeName not between", value1, value2, "utypename");
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