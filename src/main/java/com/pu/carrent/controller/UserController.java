package com.pu.carrent.controller;

import com.pu.carrent.entity.User;
import com.pu.carrent.entity.UserType;
import com.pu.carrent.service.UserService;
import com.pu.carrent.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserTypeService userTypeService;

    @RequestMapping(value = "/user/login", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public String login(String userName, String password, HttpSession session) {
        User user = userService.login(userName, password);
        if (user != null) {
            session.setAttribute("currentUser", user);
            String userType = userTypeService.finduTypeNameById(user.getUtypeid());
            if ("管理员".compareTo(userType) == 0) {
                return "redirect:/backManage/showCars";
            } else return "redirect:/user/index";
        } else
            return "fail";
    }

    @RequestMapping(value = "/user/logout", method = RequestMethod.GET)
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/user/login";
    }

    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public String register(String userName, String password, String email) {
        User user = new User();
        user.setUsername(userName);
        user.setPassword(password);
        user.setEmail(email);
        user.setUtypeid(2);
        if (userService.addUser(user) != 0) return "login";
        else return "fail";
    }

    @RequestMapping(value = "/backManage/addManager", method = RequestMethod.POST)
    public String addManager(String userName, String password, String email, String phone, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            User user = new User();
            user.setUsername(userName);
            user.setPassword(password);
            user.setEmail(email);
            user.setPhone(phone);
            user.setUtypeid(1);
            if (userService.addUser(user) != 0) return "addManager";
            else return "fail";
        }
        else return "fail";
    }

    @RequestMapping(value = "/backManage/addManager", method = RequestMethod.GET)
    public String addManager(HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) return "addManager";
        else return "fail";
    }

    @RequestMapping(value = "/backManage/showUsers", method = RequestMethod.GET)
    public String showUsers(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
           List<User> users = userService.findAllUsers();
           List<UserType> userTypes = userTypeService.findAllUserType();
           model.addAttribute("users", users);
           model.addAttribute("userTypes", userTypes);
           return "showUsers";
        }
        else return "fail";
    }

    @RequestMapping(value = "/backManage/changeUserType", method = RequestMethod.POST)
    public String changeUserType(Integer userId, Integer userTypeId, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            User user = new User();
            user.setUserid(userId);
            user.setUtypeid(userTypeId);
            userService.changeUser(user);
            return "showUsers";
        }
        else return "fail";
    }

    @RequestMapping(value = "/userDetail", method = RequestMethod.GET)
    public String showUserDetail(HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            User detail = userService.findUserById(currentUser.getUserid());
            model.addAttribute("userDetail", detail);
            return "userDetail";
        } else return "fail";
    }

    @RequestMapping(value = "/changeUser", method = RequestMethod.POST)
    public String changeUser(String userName, String email, String phone, String password, String info, String icon, HttpSession session) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            User user = new User();
            if (userName != null ) user.setUsername(userName);
            if (email != null) user.setEmail(email);
            if (phone != null) user.setPhone(phone);
            if (password != null) user.setPassword(password);
            if (info != null) user.setInfo(info);
            if (icon != null) user.setIcon(icon);
            user.setUserid(currentUser.getUserid());
            userService.changeUser(user);
            return "changeUser";
        } else return "fail";
    }
}
