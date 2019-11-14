package com.flagcamp.gofitness.repository;

import com.flagcamp.gofitness.model.Coach;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CoachRepository extends MongoRepository<Coach, String> {

    Coach findCoachByEmail(String email);

    Coach findCoachByEmailAndPassword(String email, String password);
}
