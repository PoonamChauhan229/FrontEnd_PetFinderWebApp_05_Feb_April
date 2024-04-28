import aboutImage from '../assets/about.jpg'
const About = () => {
  return (
   <>
   {/* About Page */}
   <div className="container-fluid mt-5">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-5 mb-lg-0" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 rounded" src={aboutImage} style={{objectFit: "cover",height:"373px"}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="border-start border-5 border-primary ps-5 mb-3">
                        <h5 className="text-primary text-uppercase">About Us</h5>
                        <h5 className=" text-uppercase mb-1 mt-2">We Keep Your Pets Happy All Time</h5>
                    </div>
                    <h6 className="text-body mb-3">Diam dolor diam ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h6>
                    <div className="bg-light" style={{padding:"32px"}}>
                        <ul className="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link text-uppercase w-100 active " id="pills-1-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                    aria-selected="true">Our Mission</button>
                            </li>
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                    aria-selected="false">Our Vission</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                            </div>
                            <div className="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                <p className="mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default About