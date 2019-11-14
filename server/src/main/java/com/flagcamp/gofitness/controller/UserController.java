package com.flagcamp.gofitness.controller;


import com.flagcamp.gofitness.model.User;
import com.flagcamp.gofitness.model.UserReservation;
import com.flagcamp.gofitness.repository.UserRepository;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @RequestMapping(value = "/{email}", method = RequestMethod.GET)
    public User getUserByEmail(@PathVariable String email) {
        return userRepository.findUserByEmail(email);
    }

    @PostMapping(value = "/register")
    @ResponseBody
    public JSONObject userRegister() {
        JSONObject obj = new JSONObject();
        User user = userRepository.findUserByEmail("sss@aaa.com");
        if (user != null) {
            obj.put("status", "email already exist");
        } else {
            user = new User("aaaa", "bbbb", "aaa@bbb.com", "1111");
            userRepository.save(user);
            obj.put("status", "OK");
        }
        return obj;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public JSONObject userLogin() {
        JSONObject obj = new JSONObject();
        User user = userRepository.findUserByEmailAndPassword("sss@aaa.com", "1111");
        if (user == null) {
            obj.put("status", "error");
        } else {
            obj.put("status", "OK");
        }
        return obj;
    }

}
