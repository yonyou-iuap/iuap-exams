package com.yonyou.iuap.exams.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {
    /***
     * 跳转到Templates首页
     * @return
     */
    @GetMapping("/index")
    public String toIndex(){
        return "/index";
    }

    @GetMapping("/html")
    public String html(){
        return "redirect:/index.html";
    }

    @GetMapping("/tmp")
    public String templateHtml(){
        return "/index.html";
    }

    @GetMapping("/")
    public String toRoot(){
        return "/index";
    }

    @GetMapping("/welcome")
    public String toWelcome(){
        return "/welcome";
    }

}
