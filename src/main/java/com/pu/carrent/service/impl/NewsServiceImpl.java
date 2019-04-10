package com.pu.carrent.service.impl;

import com.pu.carrent.dao.NewsMapper;
import com.pu.carrent.entity.News;
import com.pu.carrent.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsMapper newsMapper;

    @Override
    public List<News> findAllNews() {
        return newsMapper.selectNewsWithDetail();
    }

    @Override
    public int addNews(News record) {
        return newsMapper.insert(record);
    }

    @Override
    public int changeNews(News record) {
        return newsMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int deleteNewsById(Integer newsId) {
        return newsMapper.deleteByPrimaryKey(newsId);
    }

    @Override
    public News findNewsById(Integer newsId) {
        return newsMapper.selecNewsWithDetailById(newsId);
    }
}
