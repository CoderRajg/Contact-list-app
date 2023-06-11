import React from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";

const App = () => {
  const [contacts, setcontacts] = useState([{ name: "", email: "" }]);
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setcontacts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();
    if (name === "" && email === "") return;

    const newContact = {
      name: name,
      email: email,
    };

    setcontacts([...contacts, newContact]);
    setName("");
    setemail("");

    // setNameError(false);
    // setemailError(false);
  };

  const deleteContact = (email) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.email !== email;
    });
    setcontacts(filteredContacts);
  };

  // const editContact = (email, name) => {
  //   const edited = contacts.filter((contact) => {
  //     return contact.email === email || contact.name === name;
  //   });
  //   setName(edited[0].name);
  //   // setName(name);
  //   setemail(email);
  // };
  const editContact = (email, name) => {
    const editedContact = contacts.find(
      (contact) => contact.email === email && contact.name === name
    );
  
    if (editedContact) {
      setName(editedContact.name);
      setemail(editedContact.email);
    }
  };
  return (
    <Grid className="App" mx="auto" container justifyContent="center">
      <Grid item xs={12} sm={12} md={6}>
        <Contacts
          contacts={contacts}
          addContact={addContact}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          formInputName={name}
          email={email}
          editContact={editContact}
          deleteContact={deleteContact}
          
        />
      </Grid>
    </Grid>
  );
};

export default App;
