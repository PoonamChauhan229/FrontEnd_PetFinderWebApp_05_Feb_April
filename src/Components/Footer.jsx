import React from 'react'
import Hero from './Hero'

const Footer = () => {
  return (
    <>
     {/* <!-- Footer Start --> */}
     <div className="container-fluid bg-light pb-3">
        <div className="container pt-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
                    <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                    <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-body" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Popular Links</h5>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                        <a className="text-body mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                        <a className="text-body" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Follow Us</h5>
                    <div className="d-flex">
                        <a className="btn btn-outline-primary btn-square me-2" href="#"><i className="bi bi-twitter"></i></a>
                        <a className="btn btn-outline-primary btn-square me-2" href="#"><i className="bi bi-facebook"></i></a>
                        <a className="btn btn-outline-primary btn-square me-2" href="#"><i className="bi bi-linkedin"></i></a>
                        <a className="btn btn-outline-primary btn-square" href="#"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-white-50 py-4">
        <div className="container">
            <div className="row g-5">
                <div className="col-md-6 text-center text-md-start">
                    <p className="mb-md-0">&copy; <a className="text-white" href="#">Pet Shop</a>. All Rights Reserved.</p>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <p className="mb-0">Designed by <a className="text-white">Poonam Chauhan</a></p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}
    </>
  )
}

export default Footer