package com.innovastruct.Innovastruct.services;


import com.innovastruct.Innovastruct.models.Bid ;
import com.innovastruct.Innovastruct.repositories.BidRepository ;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BidService {
    private final BidRepository bidRepository;

    public BidService(BidRepository bidRepository) {
        this.bidRepository = bidRepository;
    }

    public Bid submitBid(Bid bid) {
        return bidRepository.save(bid);
    }

    public List<Bid> getBidsByTenderId(String tenderId) {
        return bidRepository.findByTenderId(tenderId);
    }
}

