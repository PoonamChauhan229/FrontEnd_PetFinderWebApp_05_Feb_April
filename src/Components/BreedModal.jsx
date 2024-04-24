import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BreedModal = ({ breed, onClose, updateBreed }) => {
  const [editedBreed, setEditedBreed] = useState({
    name: breed.name,
    origin: breed.origin,
    weight: breed.weight?.imperial,
    bred_for: breed.bred_for,
    temperament: breed.temperament,
    image: breed.image?.url,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBreed(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`https://6624dd2604457d4aaf9d281d.mockapi.io/dogs/${breed.id}`, editedBreed);
      console.log('Updated Breed:', response.data);
      updateBreed(response.data); // Update breed data in parent component
      onClose(); // Close the modal after successful update
    } catch (error) {
      console.error('Error updating breed:', error);
    }
  };

  return (

    <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Breed: {breed.name}</h5>
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
                value={editedBreed.name}
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
                value={editedBreed.origin}
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
                value={editedBreed.weight}
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
                value={editedBreed.bred_for}
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
                value={editedBreed.temperament}
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
                value={editedBreed.image}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default BreedModal;
