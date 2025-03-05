package com.innovastruct.Innovastruct.controllers;




import com.innovastruct.Innovastruct.services.FileStorageService ;
import org.bson.types.ObjectId;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/api/files")
public class FileController {
    private final FileStorageService fileStorageService;

    public FileController(FileStorageService fileStorageService) {
        this.fileStorageService = fileStorageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String fileId = fileStorageService.storeFile(file);
            return ResponseEntity.ok(fileId); // Return the file ID
        } catch (IOException e) {
            return ResponseEntity.status(500).body("File upload failed");
        }
    }

    @GetMapping("/{fileId}")
    public ResponseEntity<byte[]> getFile(@PathVariable String fileId) throws IOException {
        InputStream fileStream = fileStorageService.getFile(fileId);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(fileStream.readAllBytes());
    }
}

