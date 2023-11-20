package com.spacetokens.spacetokensapp.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.DateTimeException;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name="Capsule")
@NoArgsConstructor
@AllArgsConstructor
public class Capsule {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String capsuleName;
    private Timestamp startDate;
    private Timestamp unlockDate;
    private String description;
    private Integer userId;

    // will have an id, name of capsule, start date
    public Capsule (String capsuleName) {

        this.capsuleName = capsuleName;
        this.startDate = Timestamp.valueOf(LocalDateTime.now());
        this.unlockDate = null;
        this.description = null;
        this.userId = 333;
    }

        public Timestamp getStartTime() {
            return startDate;
        }

        public String description() {
            return description;
        }
    }

}