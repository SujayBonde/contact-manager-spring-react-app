package com.sujay.ContactManager.payload.rsponse;

import lombok.AllArgsConstructor;
import lombok.Data;

// ==============================
// MessageResponse — generic success/error message DTO
// ==============================
@Data
@AllArgsConstructor
public class MessageResponse {
    private String message;
}
