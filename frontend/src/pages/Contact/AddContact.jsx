import React, { useState, useEffect } from "react";
import { apiService } from "../../api/axiosAPI.js";

const AddContact = ({ selectedContact, onSuccess }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Prefill form when editing
  useEffect(() => {
    if (selectedContact) {
      setContactData({
        name: selectedContact.name,
        email: selectedContact.email,
        phone: selectedContact.phone
      });
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedContact) {
        // Update existing
        await apiService.updateContact(selectedContact.id, contactData);
      } else {
        // Create new
        await apiService.createContact(contactData);
      }
      setContactData({ name: "", email: "", phone: "" });
      if (onSuccess) onSuccess(); // reload list
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-900 p-6 rounded-xl shadow-lg flex flex-col gap-4 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold text-green-400 text-center">
        {selectedContact ? "Update Contact" : "Add Contact"}
      </h2>

      <input
        type="text"
        name="name"
        value={contactData.name}
        onChange={handleChange}
        placeholder="Enter Name"
        className="p-2 rounded bg-slate-800 text-white border border-green-400"
      />
      <input
        type="email"
        name="email"
        value={contactData.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className="p-2 rounded bg-slate-800 text-white border border-green-400"
      />
      <input
        type="text"
        name="phone"
        value={contactData.phone}
        onChange={handleChange}
        placeholder="Enter Phone"
        className="p-2 rounded bg-slate-800 text-white border border-green-400"
      />

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-2 rounded"
      >
        {selectedContact ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddContact;
