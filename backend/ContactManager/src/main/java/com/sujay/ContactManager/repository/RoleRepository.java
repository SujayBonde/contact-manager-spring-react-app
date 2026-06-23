package com.sujay.ContactManager.repository;

import com.sujay.ContactManager.model.ERole;
import com.sujay.ContactManager.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(ERole name);
}
