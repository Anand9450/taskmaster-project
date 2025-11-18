package com.taskManager.demo; // ⚠️ Make sure this matches your other files!

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")      // Apply to ALL endpoints
                .allowedOrigins("*")    // Allow ALL websites (Vercel, Localhost, etc.)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow ALL actions
                .allowedHeaders("*");   // Allow ALL info
    }
}