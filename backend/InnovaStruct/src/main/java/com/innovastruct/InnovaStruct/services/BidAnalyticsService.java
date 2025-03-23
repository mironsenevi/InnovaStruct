package com.example.backend.service;

import com.example.backend.model.Bid;
import com.example.backend.model.Tender;
import com.example.backend.model.Company;
import com.example.backend.repository.BidRepository;
import com.example.backend.repository.TenderRepository;
import com.example.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;
import java.util.DoubleSummaryStatistics;