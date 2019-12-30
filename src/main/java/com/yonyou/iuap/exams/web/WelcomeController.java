package com.yonyou.iuap.exams.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WelcomeController {
    Logger logger = LoggerFactory.getLogger("iuap-exams");
    @GetMapping("/welcome")
    public String welcome(){
        return "welcome";
    }

    @GetMapping("/jsp")
    public String welcomeJsp(){
        logger.debug("welcome jsp.");
        return "test";
    }
}
