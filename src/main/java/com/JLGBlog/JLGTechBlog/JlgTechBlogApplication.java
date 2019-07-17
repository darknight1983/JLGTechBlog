package com.JLGBlog.JLGTechBlog;

import com.JLGBlog.JLGTechBlog.entity.Blog;
import com.JLGBlog.JLGTechBlog.repository.BlogRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JlgTechBlogApplication {

	private static final Logger log = LoggerFactory.getLogger(JlgTechBlogApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(JlgTechBlogApplication.class, args);
	}


	@Bean
	public CommandLineRunner demo(BlogRepository blogRepository) {
		return (args) -> {
			blogRepository.save(new Blog().builder().title("T-Paint").post("Hi there testing").build());
			blogRepository.save(new Blog().builder().title("Yuna").post("Hi there testing").build());
			blogRepository.save(new Blog().builder().title("Craig Mac").post("Hi there testing").build());

			for (Blog blog : blogRepository.findAll()) {
				log.info("The blog is:" + blog.toString());
			}
		};
	}
}
