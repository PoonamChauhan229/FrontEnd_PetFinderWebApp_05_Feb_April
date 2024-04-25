import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

const AddBreedModal = ({ onClose, addNewBreed }) => {
  const initialBreedState = {
    name: '',
    origin: '',
    weight: '',
    bred_for: '',
    temperament: '',
    image: '',
  };

  const [newBreed, setNewBreed] = useState(initialBreedState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBreed((prevBreed) => ({
      ...prevBreed,
      [name]: value,
    }));
  };

  // Email.js
  const sendEmail = async (recipientEmail, breedName) => {
    const templateParams = {
      to_email: recipientEmail,
      breed_name: breedName,
    };

    try {
      await emailjs.send('service_m5ltwz9', 'template_zfh733s', templateParams, 'wa3SGpo3GO9zHG9rn');
      console.log('Email sent successfully to:', recipientEmail,breedName);
    } catch (error) {
      console.error('Email sending failed:', error);
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('https://6624dd2604457d4aaf9d281d.mockapi.io/dogs', newBreed);
      console.log('Added New Breed:', response.data);
      addNewBreed(response.data); // Update breed list in parent component

       // Check if the new breed matches any user's searched breed and send email notification
       const apiUrl = `https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata`;
       const usersResponse = await axios.get(apiUrl);
 
       usersResponse.data.forEach((user) => {
         if (user.Searched_Breed_Outof_stock.includes(newBreed.name)) {
           sendEmail(user.email, newBreed.name);
         }
       });
      onClose(); // Close the modal after successful add
    } catch (error) {
      console.error('Error adding new breed:', error);
    }
  };

  return (
    <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Breed</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newBreed.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="origin" className="form-label">Origin:</label>
              <input
                type="text"
                className="form-control"
                id="origin"
                name="origin"
                value={newBreed.origin}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">Weight (imperial):</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                name="weight"
                value={newBreed.weight}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bred_for" className="form-label">Bred For:</label>
              <input
                type="text"
                className="form-control"
                id="bred_for"
                name="bred_for"
                value={newBreed.bred_for}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="temperament" className="form-label">Temperament:</label>
              <input
                type="text"
                className="form-control"
                id="temperament"
                name="temperament"
                value={newBreed.temperament}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image URL:</label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={newBreed.image}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Add Breed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBreedModal;
