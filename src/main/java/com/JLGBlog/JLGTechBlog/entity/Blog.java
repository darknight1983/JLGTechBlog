package com.JLGBlog.JLGTechBlog.entity;


import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@NonNull
@Entity
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "blog_id")
    private Long id;

    @Column(name = "blog_title")
    private String title;

    @Column(name = "blog_post")
    private String post;


}
