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
        InputStream inputStream = file.getInputStream();
        GridFSUploadOptions options = new GridFSUploadOptions();

        ObjectId fileId = gridFSBucket.uploadFromStream(file.getOriginalFilename(), inputStream, options);
        return fileId.toHexString(); // Return file ID to store in MongoDB
    }

    public InputStream getFile(String fileId) {
        return gridFSBucket.openDownloadStream(new ObjectId(fileId));
    }
}

