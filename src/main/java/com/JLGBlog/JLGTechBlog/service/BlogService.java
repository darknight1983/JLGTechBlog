package com.JLGBlog.JLGTechBlog.service;

import com.JLGBlog.JLGTechBlog.entity.Blog;

import java.util.List;

public interface BlogService {
    List<Blog> getBlogs();
    Blog getBlog(Long id);
    Blog save(Blog blog);
    void deleteBlog(Long id);
}
