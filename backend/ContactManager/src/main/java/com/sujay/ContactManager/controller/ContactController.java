package com.sujay.ContactManager.controller;

import com.sujay.ContactManager.model.Contact;
import com.sujay.ContactManager.service.ContactService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private ContactService contactService;
    public ContactController(ContactService contactService){
        this.contactService=contactService;
    }

    @PostMapping("/create")
    public void create(@RequestBody Contact contact){
        contactService.create(contact);
    }

    @GetMapping("/get-contact")
    public List<Contact> getContacts(){
        return contactService.getContacts();
    }

    @DeleteMapping("/delete-contact/{id}")
    public ResponseEntity<Void> deleteContactById(@PathVariable int id) {
        boolean deleted = contactService.deleteContactById(id);
        if (deleted) {
            return ResponseEntity.noContent().build(); // 204 No Content
        } else {
            return ResponseEntity.notFound().build(); // 404 Not Found
        }
    }

    @PutMapping("/update-contact/{id}")
    public ResponseEntity<Contact> updateContact(
            @PathVariable int id,
            @RequestBody Contact updatedContact) {

        Contact contact = contactService.updateContact(id, updatedContact);

        if (contact != null) {
            return ResponseEntity.ok(contact); // 200 OK with updated contact
        } else {
            return ResponseEntity.notFound().build(); // 404 if not found
        }
    }

}
