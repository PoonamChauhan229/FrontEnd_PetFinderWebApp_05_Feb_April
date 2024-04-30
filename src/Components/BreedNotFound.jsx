import React from 'react'

const BreedNotFound = ({searchTerm}) => {
  return (
        <> 
        <div className="container-fluid bg-primary py-5 mb-3 hero-header">
        <div className="container pt-1">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-6  fw-bolder text-uppercase text-dark mb-lg-4">No breeds found for {searchTerm}</h1>
                    <h1 className="text-uppercase text-white mb-lg-4">Try a Different Breed !!!</h1>
                   
                </div>
            </div>
        </div>
    </div>
        </>
      )
}

export default BreedNotFound