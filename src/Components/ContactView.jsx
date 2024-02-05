import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";

function ContactView() {
  const [isAddContactOpen, setIsAddContactOpen] = useState(false);
  const [singleFormDataArray, setSingleFormDataArray] = useState([]);

  const handleAllContactsClick = (event) => {
    event.preventDefault();
    setIsAddContactOpen(true);
  };

  const handleFormDataArrayChange = (newFormDataArray) => {
    setSingleFormDataArray(newFormDataArray);
  };

  useEffect(() => {
    console.log("-----------", singleFormDataArray);
  });

  return (
    <>
      <div className="Contact-Form">
        <form action="" className="Form">
          <button
            className="All-Contacts"
            onClick={handleAllContactsClick}
            disabled={isAddContactOpen}
          >
            All Contacts
            <i className="Plus-icon">
              <i className="fa-solid fa-circle-plus"></i>
            </i>
          </button>
          <br />
          <input
            type="text"
            className="Search-input"
            placeholder="Search Contact"
          />
        </form>
        <div className="show-data">
          <div className="name-phone-data">
            {singleFormDataArray.map((formData, index) => {
              return <p key={index}>{formData.name}</p>;
            })}
          </div>
          <div className="mail-address-data">
            {singleFormDataArray.map((formData, index) => {
              return <p key={index}>{formData.email}</p>;
            })}
          </div>
          <div className="name-phone-data">
            {singleFormDataArray.map((formData, index) => {
              return <p key={index}>{formData.phone}</p>;
            })}
          </div>
          <div className="mail-address-data">
            {singleFormDataArray.map((formData, index) => {
              return <p key={index}>{formData.address}</p>;
            })}
          </div>
        </div>
      </div>

      {isAddContactOpen && (
        <AddContact
          closeAddContact={() => setIsAddContactOpen(false)}
          onFormDataArrayChange={handleFormDataArrayChange}
          singleFormDataArray={singleFormDataArray}
        />
      )}
    </>
  );
}

export default ContactView;
