import aboutImage from '../assets/about.jpg'

const NavBar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
         <div className="navbar-nav ms-auto py-0">
            <h1 className="nav-item nav-link active fs-5"><i className="bi bi-shop fs-2 text-primary me-2"></i>PET SHOP</h1>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 me-3">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="about.html" className="nav-item nav-link">Contact</a>
                <a href="service.html" className="nav-item nav-link">Login</a>
                <a href="product.html" className="nav-item nav-link">SignUp</a>
            </div>
        </div>
    </nav>

    {/*  */}

    {/* <!-- Hero Start --> */}
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-5  fw-bolder text-uppercase text-dark mb-lg-4">Pet Shop</h1>
                    <h1 className="text-uppercase text-white mb-lg-4">Make Your Pets Happy</h1>
                    <p className="fs-4 text-white mb-lg-4">Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd. Kasd clita ea justo est sed kasd erat clita sea</p>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <a href="" className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5">Read More</a>
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">Play Video</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Hero End --> */}


    {/* <!-- Video Modal Start --> */}
    <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content rounded-0">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {/* <!-- 16:9 aspect ratio --> */}
                    <div className="ratio ratio-16x9">
                    <iframe
                    className="embed-responsive-item"
                    src="https://www.youtube.com/embed/UFpAwT6Gir4"
                    id="video"
                    allowFullScreen
                    allow="autoplay"
                    ></iframe>                   

                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Video Modal End --> */}
    </>
  )
}

export default NavBar
