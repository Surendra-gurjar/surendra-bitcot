

import React, { useState } from "react";

const AllContact = () => {
  const [formDataList, setFormDataList] = useState([]);

  const handleView = (id) => {
    console.log(`View contact with id: ${id}`);
    
  };

  const handleDelete = (id) => {
    console.log(`Delete contact with id: ${id}`);
  };

  const handleEdit = (id) => {
    console.log(`Edit contact with id: ${id}`);
  };

  return (
    <div className="All-contact-list">
      {formDataList.map((formData) => (
        <div key={formData.id} className="All-form">
          <div className="btn-icons">
            <i className="user-icon">
              <i className="fa-solid fa-user"></i>
            </i>
            <p>{formData.name}</p>
            <p>{formData.mobile}</p>
            <p>{formData.email}</p>

            <button onClick={() => handleView(formData.id)}>
              <i className="fa-solid fa-eye"></i>
            </button>
            <button onClick={() => handleDelete(formData.id)}>
              <i className="fa-solid fa-trash"></i>
            </button>
            <button onClick={() => handleEdit(formData.id)}>
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllContact;

