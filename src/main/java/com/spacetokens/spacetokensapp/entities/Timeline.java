package com.spacetokens.spacetokensapp.entities;

import java.util.ArrayList;
import java.util.List;

public class Timeline {
    private String userId;
    private List<Capsule> capsules;

    public Timeline(String userId) {
        this.userId = userId;
        this.capsules = new ArrayList<>();
    }

    // Method to add a capsule to the timeline
    public void addCapsule(Capsule capsule) {
        capsules.add(capsule);
    }

    // Method to get capsules at a specific time
    public List<Capsule> getCapsulesAtTime(int specificTime) {
        List<Capsule> result = new ArrayList<>();
        for (Capsule capsule : capsules) {
            if (capsule.getStartTime() == specificTime) {
                result.add(capsule);
            }
        }
        return result;
    }

    // Method to handle user sign-up (assuming this is called through a POST request)
    public static Timeline createUserTimeline(String userId) {
        return new Timeline(userId);
    }

//    public static void main(String[] args) {
//        // Example usage
//        Timeline userTimeline = createUserTimeline("user123");
//
//        // Assuming Capsule class has a constructor with time parameter
//        Capsule capsule1 = new Capsule(10, "Content1");
//        Capsule capsule2 = new Capsule(20, "Content2");
//
//        userTimeline.addCapsule(capsule1);
//        userTimeline.addCapsule(capsule2);
//
//        int specificTime = 20;
//        List<Capsule> capsulesAtTime = userTimeline.getCapsulesAtTime(specificTime);
//
//        // Print the capsules at the specific time
//        for (Capsule capsule : capsulesAtTime) {
//            System.out.println("Capsule at time " + specificTime + ": " + capsule.getContent());
//        }
//    }
}

