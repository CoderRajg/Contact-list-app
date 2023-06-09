import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const Contacts = ({
  handleNameChange,
  handleEmailChange,
  name,
  email,
  nameError,
  emailError,
  addContact,
  contacts,
  editContact,
  deleteContact,
}) => {
  return (
    <div>
      <Grid item xs={12} sm={12} align="center">
        <Typography variant="h5">Add / Edit Contact</Typography>
        <ContactForm
          addContact={addContact}
          handleNameChange={handleNameChange}
          handleEmailChange={handleEmailChange}
          name={name}
          email={email}
          nameError={nameError}
          emailError={emailError}
        />
      </Grid>
      <Grid item>
        <Typography className="contacts-header" align="center" variant="h5">
          Contacts
        </Typography>
        <ContactList
          contacts={contacts}
          editContact={editContact}
          deleteContact={deleteContact}
        />
      </Grid>
    </div>
  );
};

export default Contacts;
