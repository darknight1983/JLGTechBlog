package com.JLGBlog.JLGTechBlog.service;


import com.JLGBlog.JLGTechBlog.entity.Blog;
import com.JLGBlog.JLGTechBlog.exception.BlogNotFoundException;
import com.JLGBlog.JLGTechBlog.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public List<Blog> getBlogs() {
        return (List<Blog>) blogRepository.findAll();
    }

    @Override
    public Blog getBlog(Long id) {
        Optional<Blog> optionalBlog = blogRepository.findById(id);

        if (optionalBlog.isPresent()) {
            return optionalBlog.get();
        } else {
            throw new BlogNotFoundException("Blog not found");
        }
    }

    @Override
    public Blog save(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }
}
