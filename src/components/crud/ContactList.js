import React from "react";
import Delete from "../../assets/images/delete.png";
import Edit from "../../assets/images/edit.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
function ContactList({
  contactList,
  editContactHandler,
  deleteContactHandler,
}) {
  console.log(contactList);
  return (
    <>
      <table>
        <tr>
          <th>Title</th>
          <th>Edit</th>
          <th>Delet</th>
        </tr>
        {contactList?.map((contact, index) => {
          return (
            <tr key={index}>
              <td>{contact}</td>
              <td>
                <EditIcon onClick={() => editContactHandler(index)} id="edit" />
              </td>
              <td>
                <DeleteForeverIcon
                  id="delete"
                  onClick={() => deleteContactHandler(index)}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default ContactList;
