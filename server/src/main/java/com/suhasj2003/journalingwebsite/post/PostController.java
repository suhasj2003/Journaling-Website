package com.suhasj2003.journalingwebsite.post;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "api/v1/post")
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Post> getPosts() {
        return postService.getPosts();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/")
    public void addNewPost(@RequestBody Map<String, Object> payLoad) {
        postService.addNewPost(new Post( (String) payLoad.get("title"), (String) (payLoad.get("body"))));
    }
    
}
