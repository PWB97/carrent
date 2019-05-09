package com.pu.carrent.controller;

import com.pu.carrent.dao.UserDao;
import com.pu.carrent.entity.User;
import com.pu.carrent.entity.UserType;
import com.pu.carrent.service.UserService;
import com.pu.carrent.service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserTypeService userTypeService;

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/user/login", method = RequestMethod.GET)
    public String login() {
        return "login";
    }

    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public String login(String userName, String password, HttpSession session, Model model) {
        User user = userService.login(userName, password);
        if (user != null) {
            User detail = userService.findUserById(user.getUserid());
            session.setAttribute("currentUser", user);
            session.setAttribute("userDetail", detail);
            String userType = userTypeService.finduTypeNameById(user.getUtypeid());
            if ("管理员".compareTo(userType) == 0) {
                return "redirect:/backManage/showCars";
            } else return "redirect:/rentCar";
        } else {
            model.addAttribute("msg", "用户名或密码错误");
            return "fail";
        }
    }

    @RequestMapping(value = "/user/logout", method = RequestMethod.GET)
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/user/login";
    }

    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public String register(String userName, String password, String phone, Model model) {
        if ("".compareTo(userName) == 0 || "".compareTo(password) == 0 || "".compareTo(phone) == 0) {
            model.addAttribute("msg", "字段不能为空");
            return "fail";
        }
        User user = new User();
        user.setUsername(userName);
        user.setPassword(password);
        user.setPhone(phone);
        user.setUtypeid(2);
        if (userService.addUser(user) != 0) return "redirect:/user/login";
        else {
            model.addAttribute("msg", "注册失败");
            return "fail";
        }
    }

    @RequestMapping(value = "/user/isValidName", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public @ResponseBody int isValidName(String userName) {
        return userService.findUserByName(userName).size();
    }

    @RequestMapping(value = "/user/isValidPhone", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    public @ResponseBody int isValidPhone(String phone) {
        return userService.findUserByPhone(phone).size();
    }

    @RequestMapping(value = "/backManage/addManager", method = RequestMethod.POST)
    public String addManager(String userName, String password, String email, String phone, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            User user = new User();
            user.setUsername(userName);
            user.setPassword(password);
            user.setEmail(email);
            user.setPhone(phone);
            user.setUtypeid(1);
            if (userService.addUser(user) != 0) return "addManager";
            else {
                model.addAttribute("msg", "添加失败");
                return "fail";
            }
        }
        else return "fail";
    }

    @RequestMapping(value = "/backManage/addManager", method = RequestMethod.GET)
    public String addManager(HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) return "addManager";
        else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
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
        else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/changeUserType", method = RequestMethod.GET)
    public String changeUserType(Integer userId, Integer userTypeId, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if ("管理员".compareTo(userTypeService.finduTypeNameById(currentUser.getUtypeid())) == 0) {
            User user = new User();
            user.setUserid(userId);
            if (userTypeId.equals(1)) user.setUtypeid(2);
            if (userTypeId.equals(2)) user.setUtypeid(1);
            userService.changeUser(user);
            return "redirect:/backManage/showUsers";
        }
        else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/backManage/deleteUser", method = RequestMethod.GET)
    public String deleteUser(Integer userId, HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            userService.deleteUserById(userId);
            return "redirect:/backManage/showUsers";
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }

    @RequestMapping(value = "/userDetail", method = RequestMethod.GET)
    public String showUserDetail(HttpSession session, Model model) {
        User currentUser = (User) session.getAttribute("currentUser");
        if (currentUser != null) {
            List<User> userBrowse = userDao.findUserByUserId(currentUser.getUserid());
            model.addAttribute("userBrowse", userBrowse);
            return "userDetail";
        }
        else {
            model.addAttribute("msg", "您未登录");
            return "fail";
        }
    }

    @RequestMapping(value = "/changeUser", method = RequestMethod.POST)
    public String changeUser(String userName, String email, String phone, String password,
                             String info, String icon, HttpSession session, Model model) {
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
        }  else {
            model.addAttribute("msg", "未知错误");
            return "fail";
        }
    }

    @RequestMapping(value = "/uploadUserImg", method = RequestMethod.POST)
    public String uploadUserImg(@RequestParam("file") MultipartFile file, HttpSession session, Model model) {
        User currentUser = (User)session.getAttribute("currentUser");
        if (currentUser != null) {
            if (file.isEmpty()) {
                model.addAttribute("msg", "上传失败，请选择文件");
                return "fail";
            } else {
                String fileName = "" + currentUser.getUserid() + ".JPG";
                String filePath = "/Users/pu/Desktop/carrent/src/main/webapp/images/user/";
                File dest = new File(filePath + fileName);
                try {
                    file.transferTo(dest);
                    currentUser.setIcon("true");
                    userService.changeUser(currentUser);
                    return "redirect:/userDetail";
                } catch (IOException e) {
                    model.addAttribute("msg", "创建文件失败");
                    e.printStackTrace();
                    return "fail";
                }
            }
        } else {
            model.addAttribute("msg", "无权限访问");
            return "fail";
        }
    }
}
