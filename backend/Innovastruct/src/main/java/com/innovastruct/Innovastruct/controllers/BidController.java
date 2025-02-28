package com.innovastruct.Innovastruct.controllers;


import com.innovastruct.Innovastruct.models.Bid ;
import com.innovastruct.Innovastruct.services.BidService ;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bids")
public class BidController {
    private final BidService bidService;

    public BidController(BidService bidService) {
        this.bidService = bidService;
    }

    @PostMapping
    public ResponseEntity<Bid> submitBid(@RequestBody Bid bid) {
        return ResponseEntity.ok(bidService.submitBid(bid));
    }

    @GetMapping("/{tenderId}")
    public ResponseEntity<List<Bid>> getBidsForTender(@PathVariable String tenderId) {
        return ResponseEntity.ok(bidService.getBidsByTenderId(tenderId));
    }
}

