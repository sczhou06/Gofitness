package com.flagcamp.gofitness.repository;

import com.flagcamp.gofitness.model.Trainer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrainerRepository extends MongoRepository<Trainer, String> {

    Trainer findTrainerByEmail(String email);

    Trainer findTrainerByEmailAndPassword(String email, String password);

}
