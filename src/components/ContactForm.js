import React from "react";
import { Button, TextField, FormGroup } from "@material-ui/core";

const ContactForm = ({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  addContact,
}) => {
  const handleAddContact = (e) => {
    addContact(e);
    document.getElementById("name").value = ""; // Clear the name input field
  };
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
      </FormGroup>
      <FormGroup>
        <TextField
          type="email"
          name="email"
          margin="normal"
          label="Email/Phone"
          value={email}
          onChange={(e)=>handleEmailChange(e)}
        />
        {/* {emailError ? "The email already exists!" : ""} */}
        {/* {email} */}
      </FormGroup>
      <FormGroup>
        <Button
          // onClick={(e)=>addContact(e)}
          onClick={handleAddContact}
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
