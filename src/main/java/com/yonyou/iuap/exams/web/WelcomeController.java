package com.yonyou.iuap.exams.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {
    @GetMapping("/welcome")
    public String welcome(){
        return "welcome";
    }

    @GetMapping("/welcomejsp")
    public String welcomeJsp(){
        return "welcome.jsp";
    }
}
