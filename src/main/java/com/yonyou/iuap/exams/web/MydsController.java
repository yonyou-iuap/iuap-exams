package com.yonyou.iuap.exams.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/***
 * 我的小店
 */
@Controller
public class MydsController {
    @RequestMapping("/myds")
    public String toMyds(Model model){
        model.addAttribute("myds","gsjzhbj");
        return "myds";
    }
}
