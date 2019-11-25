package com.yonyou.iuap.exams.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexController {
    /***
     * 跳转到Templates首页
     * @return
     */
    @GetMapping("/index")
    public String index(){
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
    public String welcome(){
        return "welcome";
    }
}
