package com.innovastruct.Innovastruct.services;

import com.mongodb.client.gridfs.GridFSBucket;
import com.mongodb.client.gridfs.model.GridFSUploadOptions;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@Service
public class FileStorageService {
    private final GridFSBucket gridFSBucket;

    public FileStorageService(GridFSBucket gridFSBucket) {
        this.gridFSBucket = gridFSBucket;
    }

    public String storeFile(MultipartFile file) throws IOException {
        ObjectId fileId = new ObjectId();
        GridFSUploadOptions options = new GridFSUploadOptions();

        try (InputStream inputStream = file.getInputStream()) {
            ObjectId fieldId = gridFSBucket.uploadFromStream(file.getOriginalFilename(), inputStream, options);
            return fieldId.toHexString();
        }
    }

    public InputStream getFile(String field) {
        return gridFSBucket.openDownloadStream(new ObjectId(field));
    }
}