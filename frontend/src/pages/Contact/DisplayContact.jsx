import React, { useEffect, useState } from "react";
import { apiService } from "../../api/axiosAPI.js";
import AddContact from "./AddContact";

const DisplayContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  const fetchContacts = async () => {
    try {
      const data = await apiService.getContacts();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await apiService.deleteContact(id);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleUpdate = (contact) => {
    setSelectedContact(contact); // open in AddContact form
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 bg-slate-950 text-white h-fit pb-10">
      {/* Left: Add/Update Form */}
      <AddContact selectedContact={selectedContact} onSuccess={fetchContacts} />

      {/* Right: Contact List */}
      <div className="w-full max-w-3xl bg-slate-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-green-400 mb-4 text-center">
          Contact List
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : contacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <table className="w-full border-collapse border border-green-400">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800">
                  <td className="border px-4 py-2 text-center">{c.id}</td>
                  <td className="border px-4 py-2">{c.name}</td>
                  <td className="border px-4 py-2">{c.email}</td>
                  <td className="border px-4 py-2">{c.phone}</td>
                  <td className="border px-4 py-2 flex gap-2 justify-center">
                    <button
                      onClick={() => handleUpdate(c)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DisplayContact;
