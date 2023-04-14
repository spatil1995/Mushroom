import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="fluid-container">
        <div className="container">
          <div className="row">
            <div className="col">
              <img
                src="./img/office-sym.jpg"
                className="office-sym my-4"
                alt="a"
              ></img>
            </div>
            <div className="col">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <div className=" mail-box">
                   <i class="fa fa-envelope  fs-1 my-5 email-bg"></i>
                </div>
                <div>
                  <div className="">
                    <h5 className="head-text" >Email</h5>
                  </div>
                  <div>
                    <p  className="head-text-1">Mushroomfuturetech@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <div className=" call-box">
                  <i className="fa fa-phone fs-1 my-5 call-bg"></i>
                </div>
                <div>
                  <div className="">
                    <h5 className="head-text">Call</h5>
                  </div>
                  <div>
                    <p className="head-text-1">Call-Us : +91-8554939668</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
               <button type="button"  class=" p-2 my-5 float-end apply-button">Apply Now</button>
            </div>
          </div>
        </div>
        <div className="container p-0">
          <nav className="navbar navbar-expand-lg  ">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">j</Link>
              <button
                className="navbar-toggler   bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link " aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/h">
                      Service
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/n">OurCoreValue</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ">Careers</a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search  "
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search{" "}
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
        <div className="fluid-container bg-img ">
          <div className="row landing-page-text">
            <p className="landing-page-heading  ">
            WE ARE <br/>MUSHROOM WORLD FUTURE TECH , <br /> TOGETHER WE BUILD ANY
            FUTURE .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
