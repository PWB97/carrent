package com.pu.carrent.controller;

import com.pu.carrent.entity.News;
import com.pu.carrent.entity.User;
import com.pu.carrent.service.NewsService;
import com.pu.carrent.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

@Controller
public class NewsController {

    @Autowired
    private NewsService newsService;

    @Autowired
    private UserTypeService userTypeService;

    @RequestMapping(value = "/News", method = RequestMethod.GET)
    public String showAllNews(Model model, HttpSession session) {
        User user = (User) session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(user.getUtypeid())) == 0) {
            List<News> newsList = newsService.findAllNews();
            model.addAttribute("newsList", newsList);
            return "backNews";
        } else if ("用户".compareTo(userTypeService.finduTypeNameById(user.getUtypeid())) == 0) {
            List<News> newsList = newsService.findAllNews();
            model.addAttribute("newsList", newsList);
            return "frontNews";
        } else return "fail";
    }

    @RequestMapping(value = "/backManage/addNews", method = RequestMethod.GET)
    public String addNews(HttpSession session) {
        User user = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(user.getUtypeid())) == 0) return "addNews";
        else return "fail";
    }

    @RequestMapping(value = "/backManage/addNews", method = RequestMethod.POST)
    public String addNews(String title, String content, HttpSession session) {
        User user = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(user.getUtypeid())) == 0) {
            News news = new News();
            news.setTitle(title);
            news.setContent(content);
            news.setUserid(user.getUserid());
            news.setCreattime(new Date());
            newsService.addNews(news);
            return "addNews";
        } else return "fail";
    }

}
