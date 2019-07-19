package com.JLGBlog.JLGTechBlog.web;


import com.JLGBlog.JLGTechBlog.BlogService;
import com.JLGBlog.JLGTechBlog.entity.Blog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BlogController {

    private BlogService blogService;

    @Autowired
    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @GetMapping(value = "/index")
    public ResponseEntity<String> getIndex() {
        return new ResponseEntity<String>("Hello, Jacolby! Lets get bootin wit SpringBoot", HttpStatus.OK);
    }

    @GetMapping(value = "/blogs")
    public ResponseEntity<List<Blog>> getBlogs() {

    }
}
