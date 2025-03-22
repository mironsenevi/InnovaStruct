import React from 'react'

const contacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Sam Johnson', email: 'sam.johnson@example.com', phone: '555-555-5555' },
    { id: 4, name: 'Mike Jones', email: ' ' , phone: ' ' }          
];

const ContactsTable = () => {
    return (
      <div>
        <h1>Contacts Table</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ContactsTable;