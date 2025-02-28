package com.innovastruct.Innovastruct.controllers;


import com.innovastruct.Innovastruct.models.Tender ;
import com.innovastruct.Innovastruct.services.TenderService ;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tenders")
public class TenderController {
    private final TenderService tenderService;

    public TenderController(TenderService tenderService) {
        this.tenderService = tenderService;
    }

    @PostMapping
    public ResponseEntity<Tender> createTender(@RequestBody Tender tender) {
        return ResponseEntity.ok(tenderService.createTender(tender));
    }

    @GetMapping
    public ResponseEntity<List<Tender>> getOpenTenders() {
        return ResponseEntity.ok(tenderService.getAllOpenTenders());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tender> getTenderById(@PathVariable String id) {
        return ResponseEntity.ok(tenderService.getTenderById(id));
    }
}
