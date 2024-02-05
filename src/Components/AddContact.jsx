import React, { useState, useEffect } from "react";

const AddContact = ({
  closeAddContact,
  onFormDataArrayChange,
  singleFormDataArray,
}) => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [formDataArray, setFormDataArray] = useState([]);

  const [selectedContact, setSelectedContact] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleUpdate = () => {
    const updatedFormDataArray = [
      ...singleFormDataArray,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
    ];
    onFormDataArrayChange(updatedFormDataArray);
  };

  useEffect(() => {}, [formDataArray]);

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };



  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="header">
          <span className="title">Add Contact</span>
          <button
            className="close-button"
            onClick={() => closeAddContact(false)}
          >
            X
          </button>
        </div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your  Email"
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Your Phone Number"
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your Address"
          />
        </label>
        <div className="button-group">
          <button
            className="Submit-btn"
            type="button"
            onClick={(event) => {
              event.preventDefault();
              handleUpdate();
              closeAddContact(false);
            }}
          >
            Submit
          </button>
          <button className="Reset-btn" type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      <div className="contact-list">
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <span>{contact.name}</span>
              <button type="button" onClick={() => handleEdit(index)}>
                Update
              </button>
              <button type="button" onClick={() => handleDelete(index)}>
                Reset
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddContact;