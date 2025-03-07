package com.innovastruct.Innovastruct.services;

import com.innovastruct.Innovastruct.models.Tender ;
import com.innovastruct.Innovastruct.repositories.TenderRepository ;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TenderService {
    private final TenderRepository tenderRepository;

    public TenderService(TenderRepository tenderRepository) {
        this.tenderRepository = tenderRepository;
    }

    public Tender createTender(Tender tender) {
        return tenderRepository.save(tender);
    }

    public List<Tender> getAllOpenTenders() {
        return tenderRepository.findByStatus("open");
    }

    public Tender getTenderById(String id) {
        return tenderRepository.findById(id).orElse(null);
    }
}
