package com.spacetokens.spacetokensapp.controllers;

import com.spacetokens.spacetokensapp.entities.Capsule;
import com.spacetokens.spacetokensapp.services.CapsuleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/capsules")
public class CapsuleController {

    //depend. injection --> only one in an application; it is injected into different areas but all use the same thing
    private CapsuleService capsuleService;

    public CapsuleController(CapsuleService capsuleService){
        this.capsuleService = capsuleService;
    }

    @PostMapping("/new")
    public ResponseEntity<Capsule> createNewCapsule(@RequestParam String capsuleName){
        Capsule capsule = capsuleService.createNewCapsule(capsuleName);
        return new ResponseEntity<>(capsule, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Capsule>> getAllCapsules(){
        List<Capsule> list = capsuleService.findAllCapsules();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Capsule>> getAllByUserId(@PathVariable Integer userId){
        List<Capsule> capsuleList = capsuleService.findCapsulesByUserId(userId);
        return new ResponseEntity<>(capsuleList, HttpStatus.OK);

    }

    @GetMapping("/capsuleId")
    public ResponseEntity<Capsule> getCapsuleById(@RequestParam Integer id){
        Capsule capsule = capsuleService.findCapsuleById(id);
        return new ResponseEntity<>(capsule, HttpStatus.OK);
    }
}
