package com.JLGBlog.JLGTechBlog;


import com.JLGBlog.JLGTechBlog.entity.Blog;
import com.JLGBlog.JLGTechBlog.repository.BlogRepository;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class BlogService {

    @Autowired
    private BlogRepository blogRepository;


    public Iterable<Blog> getBlogs() {
        // Return all blogs in the datastore
        return blogRepository.findAll();
    }

    // This method is structure in correct because it can throw an exception
    public Optional<Blog> getBlog(Long id) {
        return blogRepository.findById(id);
    }
}
