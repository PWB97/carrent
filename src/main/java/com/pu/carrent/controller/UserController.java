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
            } else return "redirect:/rentCar";
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
        if (userService.addUser(user) != 0) return "redirect:/user/login";
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

    @RequestMapping(value = "/backManage/changeUserType", method = RequestMethod.GET)
    public String changeUserType(Integer userId, Integer userTypeId, HttpSession session) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            User user = new User();
            user.setUserid(userId);
            if (userTypeId.equals(1)) user.setUtypeid(2);
            if (userTypeId.equals(2)) user.setUtypeid(1);
            userService.changeUser(user);
            return "redirect:/backManage/showUsers";
        }
        else return "fail";
    }

    @RequestMapping(value = "/backManage/deleteUser", method = RequestMethod.GET)
    public String deleteUser(Integer userId, HttpSession session) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            userService.deleteUserById(userId);
            return "redirect:/backManage/showUsers";
        } else return "fail";
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
            if (userName != null && "".compareTo(userName) != 0) user.setUsername(userName);
            if (email != null && "".compareTo(email) != 0) user.setEmail(email);
            if (phone != null && "".compareTo(phone) != 0) user.setPhone(phone);
            if (password != null && "".compareTo(password) != 0) user.setPassword(password);
            if (info != null && "".compareTo(info) != 0) user.setInfo(info);
            if (icon != null && "".compareTo(icon) != 0) user.setIcon(icon);
            user.setUserid(currentUser.getUserid());
            userService.changeUser(user);
            return "redirect:/userDetail";
        } else return "fail";
    }
}
