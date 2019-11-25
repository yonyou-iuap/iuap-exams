package com.yonyou.iuap.exams.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @Value("${info}")
    private String info="Welcome to iuap5.0 world!";
    @GetMapping("/")
    public String hello(){
        return info;
    }
}
