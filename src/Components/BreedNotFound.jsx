import React from 'react'

const BreedNotFound = ({searchTerm}) => {
  return (
        <> 
        <div className="container-fluid bg-primary py-5 mb-3 notFound-header" style={{height:"600px"}}>
        <div className="container pt-1">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="fw-bold text-capitalize mb-lg-4 ">No breeds found for {searchTerm}</h1>
                    <h1 className="text-uppercase mb-lg-4 text-secondary text-capitalize">Try a Different Breed !!!</h1>
                    <p className="fs-4 text-white mb-lg-4 text-primary">We'll notify you when it's available!</p>

                </div>
            </div>
        </div>
    </div>
        </>
      )
}

export default BreedNotFound