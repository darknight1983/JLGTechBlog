package com.JLGBlog.JLGTechBlog.repository;

import com.JLGBlog.JLGTechBlog.entity.Blog;
import org.springframework.data.repository.CrudRepository;

public interface BlogRepository extends CrudRepository<Blog, Long> {
}
