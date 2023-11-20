package com.spacetokens.spacetokensapp.services;

import com.spacetokens.spacetokensapp.entities.Capsule;
import com.spacetokens.spacetokensapp.repositories.CapsuleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CapsuleService {

    private CapsuleRepository capsuleRepository;
    public CapsuleService(CapsuleRepository capsuleRepository){
        this.capsuleRepository = capsuleRepository;
    }

    public Capsule createNewCapsule(String name){
        Capsule newCapsule = new Capsule(name);
        capsuleRepository.save(newCapsule);
        return newCapsule;
    }

    public List<Capsule> findAllCapsules(){
        return capsuleRepository.findAll();
    }

    // find all  by user
    public List<Capsule> findCapsulesByUserId(Integer userId){
        return capsuleRepository.findAllByUserId(userId);
    }

    //find capsules by id
    public Capsule findCapsuleById(Integer id){
        Optional<Capsule> capsuleOptional = capsuleRepository.findById(id);
        //if value is found then return it
        if (capsuleOptional.isPresent()){
            return capsuleOptional.get();
        } else {
            //this is where you could throw an exception and then handle it with @ControllerAdvice controller
            //for now we'll just be bad and return null
            return null;
        }
    }
}