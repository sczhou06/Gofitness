package com.flagcamp.gofitness.controller;


import com.flagcamp.gofitness.model.Coach;
import com.flagcamp.gofitness.repository.CoachRepository;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/coach")
public class CoachController {

    @Autowired
    private CoachRepository coachRepository;

    @RequestMapping(value = "/{email}", method = RequestMethod.GET)
    public Coach getCoachByEmail(@PathVariable String email) {
        return coachRepository.findCoachByEmail(email);
    }

    @PostMapping("/register")
    @ResponseBody
    public JSONObject register() {
        JSONObject obj = new JSONObject();
        Coach coach = coachRepository.findCoachByEmail("aaa@bbb.com");
        if (coach != null) {
            obj.put("status", "email already exist");
        } else {
            coach = new Coach("1111", "2222", "111@222.com", "abcd");
            coachRepository.save(coach);
            obj.put("status", "OK");
        }
        return obj;
    }

    @PostMapping("/login")
    @ResponseBody
    public JSONObject login() {
        JSONObject obj = new JSONObject();
        Coach coach = coachRepository.findCoachByEmailAndPassword("111@222.com", "abcd");
        if (coach == null) {
            obj.put("status", "error");
        } else {
            obj.put("status", "OK");
        }
        return obj;
    }

}
