import { useState } from "react";
import BreedModal from "./BreedModal"; // Import your modal component
import { useNavigate } from "react-router-dom";

const BreedCard = ({  image, origin, weight, name, bred_for, temperament, breed, updateBreed ,deleteBreed }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleDeleteClick = () => {
    deleteBreed(breed.id);
  };

  return (
    <div className="col-lg-6">
      <div className="blog-item">
        <div className="row g-0 bg-light overflow-hidden">
          <div className="col-12 col-sm-5 h-100">
            <img className="img-fluid h-100" src={image?.url} style={{ objectFit: "cover" }} alt={name} />
          </div>
          <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
            <div className="p-4">
              <div className="d-flex mb-3">
                {origin && <small className="me-3"><i className="bi bi-bookmarks me-2"></i>{origin}</small>}
                <small><i className="bi bi-bookmark me-2"></i>{weight?.imperial}</small>
              </div>
              <h5 className="text-uppercase mb-3">{name}</h5>
              <p><b>Bred_For: </b>{bred_for}</p>
              <p><b>Temperament:</b> {temperament}</p>

              <i onClick={handleEditClick} className="text-primary bi bi-pencil-square p-2 fs-3"></i>
             <i onClick={handleDeleteClick} className="text-danger bi bi-archive p-2 fs-3"></i>
      
            </div>
          </div>
        </div>
      </div>

      {/* Render the modal conditionally */}
      {showModal && (
        <BreedModal
          onClose={() => setShowModal(false)}
          breed={breed}
          updateBreed={updateBreed} // Pass updateBreed function to BreedModal
        />
      )} </div>
  );
};

export default BreedCard;
