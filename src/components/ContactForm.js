import React from "react";
import { Button, TextField, FormGroup } from "@material-ui/core";

const ContactForm = ({
  name,
  handleNameChange,
  handleEmailChange,
  nameError,
  email,
  emailError,
  addContact,
}) => {
  return (
    <form>
      <FormGroup>
        <TextField
          type="text"
          name="name"
          id="name"
          label="Name"
          margin="normal"
          value={name}
          onChange={(e)=>handleNameChange(e)}
          required
        />
        {nameError ? "error" : ""}
      </FormGroup>
      <FormGroup>
        <TextField
          label="Email/Phone"
          type="email"
          name="email"
          margin="normal"
          value={email}
          onChange={(e)=>handleEmailChange(e)}
        />
        {emailError ? "The email already exists!" : ""}
      </FormGroup>
      <FormGroup>
        <Button
          onClick={addContact}
          variant="contained"
          color="primary"
          className="add-button"
        >
          Add Contact
        </Button>
      </FormGroup>
    </form>
  );
};

export default ContactForm;
