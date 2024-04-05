import React, { useState } from "react";
import "./contact.css";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
function Contact() {
  const [contactList, setContactList] = useState([]);
  const [query, setQuery] = useState("");

  const handleUserQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const addContactHandler = (e) => {
    e.preventDefault();
    if (query !== "") {
      setContactList([...contactList, query]);
      setQuery("");
    }
  };
  const deleteContactHandler = (index) => {
    console.log(index, "d");
    const updatedContactList = [...contactList];
    updatedContactList.splice(index, 1);
    setContactList(updatedContactList);
  };
  const editContactHandler = (index) => {
    const editedContact = [...contactList];
    setQuery(editedContact[index]);
    editedContact.splice(index, 1);
    setContactList(editedContact);
  };

  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="headContainer">
          <h1>Contact</h1>
        </div>
        <div className="body">
          <ContactList
            contactList={contactList}
            deleteContactHandler={deleteContactHandler}
            editContactHandler={editContactHandler}
          />
          <AddContact
            handleUserQuery={handleUserQuery}
            addContact={addContactHandler}
            query={query}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
