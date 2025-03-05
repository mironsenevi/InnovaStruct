package com.innovastruct.Innovastruct.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.GridFSBuckets;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MongoConfig {

    private final MongoClient mongoClient;

    public MongoConfig(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }

    @Bean
    public GridFSBucket gridFSBucket() {
        MongoDatabase database = mongoClient.getDatabase("your_database_name"); // Change to your actual DB name
        return GridFSBuckets.create(database);
    }
}
