package com.JLGBlog.JLGTechBlog.web;


import com.JLGBlog.JLGTechBlog.entity.Blog;
import com.JLGBlog.JLGTechBlog.exception.BlogNotFoundException;
import com.JLGBlog.JLGTechBlog.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
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
        return new ResponseEntity<>("Hello, Jacolby! Lets get bootin wit SpringBoot", HttpStatus.OK);
    }

    @GetMapping(value = "/blogs")
    public ResponseEntity<List<Blog>> getBlogs() {
        List<Blog> blogs = blogService.getBlogs();
        return new ResponseEntity<>(blogs, HttpStatus.OK);
    }

    @GetMapping(value = "/blog/{id}")
    public ResponseEntity<Blog> getBlog(@PathVariable("id") Long id) {
        try {
            return new ResponseEntity<Blog>(blogService.getBlog(id), HttpStatus.OK);
        } catch(BlogNotFoundException exception) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Blog Not Found");
        }
    }

    @PostMapping(value = "/blog", consumes = "application/json")
    public ResponseEntity<Blog> createBlog(@RequestBody Blog blog) throws URISyntaxException {
        Blog result = blogService.save(blog);
        return ResponseEntity.created(new URI("/api/blog" + result.getId())).body(result);
    }


    // The @PatchMapping annotation would work here also and would probably be more descriptive.
    @PutMapping(value = "/blog/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable("id") Long id, @RequestBody Blog patch) throws URISyntaxException {
        Blog blog = blogService.getBlog(id);

        if (patch.getTitle() != null) {
            blog.setTitle(patch.getTitle());
        }

        if (patch.getPost() != null) {
            blog.setPost(patch.getPost());
        }

        blogService.save(blog);

        return ResponseEntity.ok().body(blog);
    }

    @DeleteMapping(value = "/blog/{id}")
    @ResponseStatus(code=HttpStatus.NO_CONTENT)
    public void deleteBlog(@PathVariable("id") Long id) {
        try {
            blogService.deleteBlog(id);
        } catch(EmptyResultDataAccessException e) {

        }
    }


}
