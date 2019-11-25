package com.yonyou.iuap.exams;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@ServletComponentScan
public class Application extends SpringBootServletInitializer {
	private static Logger logger= LoggerFactory.getLogger("iuap");

	public static void main(String[] args) {
		logger.info("iuap考试项目启动。");
		SpringApplication.run(Application.class, args);
	}
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		// 注意这里要指向原先用main方法执行的Application启动类
		return builder.sources(Application.class);
	}

}
