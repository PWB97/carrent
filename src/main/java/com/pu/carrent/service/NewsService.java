package com.pu.carrent.service;

import com.pu.carrent.entity.News;

import java.util.List;

public interface NewsService {

    List<News> findAllNews();

    int addNews(News record);

    int changeNews(News record);

    int deleteNewsById(Integer newsId);

    News findNewsById(Integer newsId);
}
