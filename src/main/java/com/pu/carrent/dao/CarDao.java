package com.pu.carrent.dao;

import com.pu.carrent.entity.Car;
import org.bson.Document;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.mapreduce.GroupBy;
import org.springframework.data.mongodb.core.mapreduce.GroupByResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.*;

@Repository
public class CarDao {

    @Resource
    MongoTemplate mongoTemplate;

    public Map<String, Double> findTotalTopCarData() {
        Map<String, Double> result = new HashMap<>();
        GroupBy groupBy = GroupBy.key("carname").initialDocument("{count:0}").reduceFunction("function(doc, out){out.count++}")
                .finalizeFunction("function(out){return out;}");
        GroupByResults<Car> res = mongoTemplate.group("car", groupBy, Car.class);
        Document document = res.getRawResults();
        ArrayList cars  = (ArrayList) document.get("retval");
        for (Object car : cars) {
            Document d = (Document) car;
            result.put((String) d.get("carname"), (Double) d.get("count"));
        }
        return result;
    }

    public Map<String, Double> findTodayTopCarData() {
        Map<String, Double> tResult = new HashMap<>();
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(new Date());
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        Date today = calendar.getTime();
        calendar.add(calendar.DATE, 1);
        Date tomorrow = calendar.getTime();
        GroupBy groupBy = GroupBy.key("carname").initialDocument("{count:0}").reduceFunction("function(doc, out){out.count++}")
                .finalizeFunction("function(out){return out;}");
        GroupByResults<Car> res = mongoTemplate.group(Criteria.where("recordDate").gt(today).lt(tomorrow),"car", groupBy, Car.class);
        Document document = res.getRawResults();
        ArrayList cars  = (ArrayList) document.get("retval");
        for (Object car : cars) {
            Document d = (Document) car;
            tResult.put((String) d.get("carname"), (Double) d.get("count"));
        }
        return tResult;
    }
}
