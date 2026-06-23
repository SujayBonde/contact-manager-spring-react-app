package com.sujay.ContactManager.service;

import com.sujay.ContactManager.model.Contact;
import com.sujay.ContactManager.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    private ContactRepository contactRepository;
    public ContactService(ContactRepository contactRepository){
        this.contactRepository=contactRepository;
    }

    public void create(Contact contact) {
        contactRepository.save(contact);
    }

    public List<Contact> getContacts() {
        return contactRepository.findAll();
    }

    public boolean deleteContactById(int id) {
        Optional<Contact> contact = contactRepository.findById(id);
        if (contact.isPresent()) {
            contactRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Contact updateContact(int id, Contact updatedContact) {
        Optional<Contact> existing = contactRepository.findById(id);

        if (existing.isPresent()) {
            Contact contact = existing.get();
            contact.setName(updatedContact.getName());
            contact.setEmail(updatedContact.getEmail());
            contact.setPhone(updatedContact.getPhone());
            return contactRepository.save(contact);
        }
        return null; // not found
    }
}
