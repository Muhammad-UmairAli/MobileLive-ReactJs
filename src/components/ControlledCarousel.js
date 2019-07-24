import React, { Component } from 'react';

const ControlledCarousel = () => {
  return (
    <div id="demo" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active" />
        <li data-target="#demo" data-slide-to="1" />
        <li data-target="#demo" data-slide-to="2" />
      </ul>

      <div className="carousel-inner ">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-md-6 carousel-back text-center">
              <div className="row">
                <div className="col text-light text-justify p-4">
                  <h4 className="text-dark">
                    device testing and technical acceptance for a global mobile
                    device manufacturer
                  </h4>
                  <p className="text-secondary h5">
                    streamlined device and software certification, shortened
                    test cycles, and reduced time-to-market
                  </p>
                  <button className="btn btn-primary float-right p-3">
                    explore
                  </button>
                </div>
                <div className="col">
                  <img
                    className="float-right mt-5"
                    src="https://images.ctfassets.net/6krz4kg7somr/tChXfgAeOGC66QmCm06oQ/cecf3b701ea9f05d3b1dcf9bc86c6590/device_certification.png"
                    height="150"
                    width="230"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 carousel-back text-center">
              <div className="row">
                <div className="col text-light text-justify p-4">
                  <h4 className="text-dark">
                    automated large scale testing for a global manufacturer
                  </h4>
                  <p className="text-secondary h5">
                    created an intelligent, robust, and scalable multi-rack
                    platform for testing 1000’s of set-top boxes simultaneously
                  </p>
                  <button className="btn btn-primary float-right p-3">
                    explore
                  </button>
                </div>
                <div className="col">
                  <img
                    className="float-right mt-5"
                    src="https://images.ctfassets.net/6krz4kg7somr/21Rq7hLlfCAiWQc0UmewS2/0747f73c7f65fdb6067bcdabfb765f88/stb-case.png"
                    height="150"
                    width="230"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6 carousel-back text-center">
              <div className="row">
                <div className="col text-light text-justify p-4">
                  <h4 className="text-dark">
                    end-to-end digital experience for a large Canadian telco
                  </h4>
                  <br />
                  <p className="text-secondary h5">
                    created a buying, upgrading, and price plan changing
                    experience on digital channels
                  </p>
                  <p>.</p>
                  <button className="btn btn-primary float-right p-3">
                    explore
                  </button>
                </div>
                <div className="col">
                  <img
                    className="float-right mt-5"
                    src="https://images.ctfassets.net/6krz4kg7somr/3prziqnCu4cIsCQIMCC6Ke/94cfb2324e78534443084249be6b599a/telco-case.png"
                    height="155"
                    width="230"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 carousel-back text-center">
              <div className="row">
                <div className="col text-light text-justify p-4">
                  <h4 className="text-dark">
                    reducing time-to-market for a big 5 Canadian bank
                  </h4>
                  <br />
                  <p className="text-secondary h5">
                    streamlined and automated end-to-end testing to minimize
                    inefficiencies
                  </p>

                  <button className="btn btn-danger float-right p-3">
                    explore
                  </button>
                </div>
                <div className="col">
                  <img
                    className="float-right mt-5"
                    src="https://images.ctfassets.net/6krz4kg7somr/6ATB6VD6E02O8cCA0kQSMY/888a0f548c04c6d482511f8f21c07a63/UAT.png"
                    height="150"
                    width="230"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col-md-6 carousel-back text-center">
              <div className="row">
                <div className="col text-light text-justify p-4">
                  <h4 className="text-dark">
                    device testing and technical acceptance for a global mobile
                    device manufacturer
                  </h4>
                  <p className="text-secondary h5">
                    streamlined device and software certification, shortened
                    test cycles, and reduced time-to-market
                  </p>
                  <button className="btn btn-primary float-right p-3">
                    explore
                  </button>
                </div>
                <div className="col">
                  <img
                    className="float-right mt-5"
                    src="https://images.ctfassets.net/6krz4kg7somr/tChXfgAeOGC66QmCm06oQ/cecf3b701ea9f05d3b1dcf9bc86c6590/device_certification.png"
                    height="150"
                    width="230"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 carousel-back text-center">
              <div className="row">
                <div className="col text-light text-justify p-4">
                  <h4 className="text-dark">
                    automated large scale testing for a global manufacturer
                  </h4>
                  <p className="text-secondary h5">
                    created an intelligent, robust, and scalable multi-rack
                    platform for testing 1000’s of set-top boxes simultaneously
                  </p>
                  <button className="btn btn-primary float-right p-3">
                    explore
                  </button>
                </div>
                <div className="col">
                  <img
                    className="float-right mt-5"
                    src="https://images.ctfassets.net/6krz4kg7somr/21Rq7hLlfCAiWQc0UmewS2/0747f73c7f65fdb6067bcdabfb765f88/stb-case.png"
                    height="150"
                    width="230"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="carousel-control-prev " href="#demo" data-slide="prev">
        <span className="carousel-control-prev-icon" />
      </a>
      <a className="carousel-control-next " href="#demo" data-slide="next">
        <span className="carousel-control-next-icon" />
      </a>
    </div>
  );
};
export default ControlledCarousel;
