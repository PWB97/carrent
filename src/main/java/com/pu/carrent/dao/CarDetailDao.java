package com.pu.carrent.dao;

import com.pu.carrent.entity.CarDetail;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

@Repository
public class CarDetailDao {

    @Resource
    private MongoTemplate mongoTemplate;

    public void insertCarDetail(CarDetail carDetail) {
        mongoTemplate.save(carDetail);
    }

    public List<CarDetail> findCarDetail(){
        return mongoTemplate.findAll(CarDetail.class);
    }

    public void changeCarDetail(Integer cdId, int isDamage, int isScrap, int thirdParty, int injury, int robbing) {
        mongoTemplate.updateFirst(new Query(Criteria.where("cdid").is(cdId)),
                Update.update("accidentType", "1")
                        .set("isDamage", isDamage)
                        .set("isScrap", isScrap)
                        .set("thirdParty", thirdParty)
                        .set("injury", injury)
                        .set("robbing", robbing),
                CarDetail.class);
    }
}
