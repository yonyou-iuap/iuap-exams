package com.yonyou.iuap.exams.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CopyRightController {
    @Value("${info}")
    private String info="Welcome to iuap5.0 world!";
    @GetMapping("/info")
    public String hello(Model model){
        model.addAttribute("info", info);

        return "copyright";
    }
}
