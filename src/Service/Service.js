import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

function Service() {
  return (
    <>
      <div className="fluid-container  service-bg">
        <div className="container text-center">
          <div className="row gap-3 my-3">
            <div>
                <h1 className="my-5  service-title ">Our Services</h1>
            </div>
            <div className="col">
              <div className="card ">
                <img src="./img/mobile-8.png" className="card-img-top" alt="mobile-app" />
                <div className="card-body">
                  <h5 className="card-title my-3  ">Mobile Application Development</h5>
                  <p className="card-text">
                    Smart application for Smartphones.<br/>We design and Develop application for android  and IOS platform.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="./img/web-dev-img2.jpg" className="card-img-top" alt="web-app" />
                <div className="card-body">
                  <h5 className="card-title my-3">Website Development</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="./img/customize-img1.jpg" className="card-img-top" alt="a" />
                <div className="card-body">
                  <h5 className="card-title my-3">Customized Software</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                 
                </div>
              </div>
            </div>
            <div className="container text-center">
            <div className="row gap-3 my-5">
             
              <div className="col">
                <div className="card ">
                  <img src="./img/game-dev-img.jpg" className="card-img-top" alt="mobile-app" />
                  <div className="card-body">
                    <h5 className="card-title my-3  ">Game Development</h5>
                    <p className="card-text">
                      Fun is part of life.We develop inovative games for you to enjoy your liesure time.
                    </p>
                   
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./img/AR-VR-XR.jpg" className="card-img-top" alt="web-app" />
                  <div className="card-body">
                    <h5 className="card-title my-3">AR/VR/XR</h5>
                    <p className="card-text">
                     Enter the future.latest technology atyour fingertips,we develope augmented,virtual and mixedreality application
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src="./img/2d-3d.jpg" className="card-img-top" alt="a" />
                  <div className="card-body">
                    <h5 className="card-title my-3">2D & 3D Graphics</h5>
                    <p className="card-text">
                     We design high quality 2D computer graphics content,logo design,etc.We also create high quality static & animated 3D models for games films & AR/VR/XR interactions.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Service;
