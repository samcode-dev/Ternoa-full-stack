import React from 'react';
import { Link } from 'react-router-dom';
// import Form from './Form'

import "./Style.css";
import cover from './images/cover.png'
import mbr from './images/mbr.jpg'
import mbr1 from './images/mbr-561x396.jpg'
import mbr2 from './images/mbr-561x561.jpg'
import mbr3 from './images/mbr-561x768.jpg'
import mbr4 from './images/mbr-561x845.jpg'

function App() {
  return (
    <div>
      <section
        data-bs-version="5.1"
        className="menu menu2 cid-sWpuz02crK"
        once="menu"
        id="menu2-5"
      >
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand">
              <span className="navbar-logo">
                <a href="/">
                  <img
                    src={cover}
                    alt="Mobirise"
                    style={{ height: "3rem" }}
                  />
                </a>
              </span>
              <span className="navbar-caption-wrap">
                <a
                  className="navbar-caption text-black display-7"
                  href="/"
                >
                  SamNft
                </a>
              </span>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-bs-toggle="collapse"
              data-target="#navbarSupportedContent"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="hamburger">
                <span />
                <span />
                <span />
                <span />
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="https://mobiri.se"
                  >
                    Explore
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="/form"
                  >
                    Create
                  </a>
                </li>
              </ul>
              <div className="navbar-buttons mbr-section-btn">
                <a
                  className="btn btn-primary display-4"
                  href="https://mobiri.se"
                >
                  Connect &nbsp;Metamask
                </a>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <section
        data-bs-version="5.1"
        className="header14 cid-sWmHsYQUYm mbr-fullscreen"
        id="header14-2"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 image-wrapper">
              <img src={mbr} alt="Mobirise" />
            </div>
            <div className="col-12 col-md">
              <div className="text-wrapper">
                <h1 className="mbr-section-title mbr-fonts-style mb-3 display-2">
                  <strong>Create, edit or sell</strong>
                  <br />
                  <strong>digital items.</strong>
                </h1>
                <p className="mbr-text mbr-fonts-style display-7">
                  Unit of data stored on a digital ledger, called a blockchain,
                  that certifies a digital asset to be unique and therefore not
                  interchangeable
                </p>
                <div className="mbr-section-btn mt-3">
                  <a
                    className="btn btn-secondary display-4"
                    href="https://mobiri.se"
                  >
                    Explore all features
                  </a>
                  <a
                    className="btn btn-black-outline display-4"
                    href="https://mobiri.se"
                  >
                    Create &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        data-bs-version="5.1"
        className="gallery3 cid-sWmILzviYg"
        id="gallery3-4"
      >
        <div className="container-fluid">
          <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Nft Gallery</strong>
            </h4>
            <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-2 display-5">
              Explore, edit or create nft
            </h5>
          </div>
          <div className="row mt-4">
            <div className="item features-image сol-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src={mbr4} alt="" />
                </div>
                <div className="item-content">
                  <h5 className="item-title mbr-fonts-style display-7">
                    <strong>Face of queen unknown</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis et massa neque. Curabitur vestibulum, enim sit amet
                    pellentesque vestibulum, eros ex mollis dolor, et pretium
                    ante diam quis nisl
                  </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2">
                  <a
                    href
                    className="btn btn-primary item-btn display-7"
                    target="_blank"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src={mbr1} alt="" />
                </div>
                <div className="item-content">
                  <h5 className="item-title mbr-fonts-style display-7">
                    <strong>Painted flowers</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    This is a coding assessment from ternoa to an upcoming full
                    stack developer by the name Samuel Oluwatimileyin. If you
                    guys at ternoa love it, i will appreciate you getting back
                    to me.
                  </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2">
                  <a
                    href
                    className="btn btn-primary item-btn display-7"
                    target="_blank"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src={mbr2} alt="" />
                </div>
                <div className="item-content">
                  <h5 className="item-title mbr-fonts-style display-7">
                    <strong>Collage Face</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    Here goes my best fruit. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Duis et massa neque. Curabitur
                    vestibulum, enim sit amet pellentesque vestibulum, eros ex
                    mollis dolor, et pretium ante diam quis nisl
                    <br />
                  </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2">
                  <a
                    href
                    className="btn btn-primary item-btn display-7"
                    target="_blank"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
            <div className="item features-image сol-12 col-md-6 col-lg-3">
              <div className="item-wrapper">
                <div className="item-img">
                  <img src={mbr3} alt="" title />
                </div>
                <div className="item-content">
                  <h5 className="item-title mbr-fonts-style display-7">
                    <strong>Sketched art</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis et massa neque. Curabitur vestibulum, enim sit amet
                    pellentesque vestibulum, eros ex mollis dolor, et pretium
                    ante diam quis nisl
                    <br />
                  </p>
                </div>
                <div className="mbr-section-btn item-footer mt-2">
                  <a
                    href
                    className="btn btn-primary item-btn display-7"
                    target="_blank"
                  >
                    Edit
                    <br />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <Form /> */}
    </div>
  );
}

export default App;
