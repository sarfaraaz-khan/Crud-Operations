import React from "react";

function AddContact({ handleUserQuery, addContact, query }) {
  return (
    <form onSubmit={addContact}>
      <input type="text" value={query} onChange={handleUserQuery} />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;
