import React from "react";
import Countdown from "react-countdown";
import Slider from "react-slick";
import CountDownComponent from "../../components/CountDownComponent";
import {
  countDownEndTime,
  showCountDown,
  sliderImages,
} from "../../config/themeConfig";
import { landingPageData, socialMediaData } from "../../config/dataConfig";
import { Tooltip } from "../../components/Tooltip";
import ContactUsModal from "../../components/ContactUsModal";

const Slider1 = () => {
  const sliderOptions = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="main-wrapper">
      {/* Header */}
      <header id="header">
        {/* Navbar */}
        <nav className="primary-menu navbar navbar-expand-md navbar-text-light bg-transparent border-bottom-0">
          <div className="container position-relative">
            <div className="col-auto col-lg-2">
              {/* Logo */}
              <a className="logo" href="index.html" title="Zoon">
                {" "}
                <img src="images/logo.png" alt="Zoon" />{" "}
              </a>
              {/* Logo End */}
            </div>
            <div className="col col-lg-8 navbar-accordion px-0">
              <button
                className="navbar-toggler ms-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#header-nav"
              >
                <span />
                <span />
                <span />
              </button>
              <div
                id="header-nav"
                className="collapse navbar-collapse justify-content-center"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="modal"
                      data-bs-target="#contact"
                      href="/"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-auto col-lg-2 d-flex justify-content-end">
              <ul className="social-icons social-icons-light">
                {socialMediaData.length > 0 &&
                  socialMediaData.map((value, index) => (
                    <li className={value.class} key={index}>
                      <Tooltip text={value.name} placement="top">
                        <a
                          data-bs-toggle="tooltip"
                          href={value.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={value.name}
                        >
                          <i className={value.icon} />
                        </a>
                      </Tooltip>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
      </header>
      {/* Header End */}
      <div className="container-fluid px-0">
        <section className="hero-wrap">
          <div className="hero-mask opacity-6 bg-dark" />
          <Slider className="hero-bg-slideshow" {...sliderOptions}>
            {sliderImages.length &&
              sliderImages.map((value, index) => (
                <div>
                  <div
                    className="item"
                    key={index}
                    style={{ backgroundImage: `url("./${value}")` }}
                  >
                    {/* <img src={value} alt="" /> */}
                  </div>
                </div>
              ))}
          </Slider>
          <div className="hero-content min-vh-100 d-flex flex-column">
            <div className="container py-5 px-4 px-lg-5 my-auto">
              <div className="row py-5 py-sm-4">
                {showCountDown && (
                  <div className="col-auto text-white text-center mx-auto mb-4 pb-2">
                    <Countdown
                      zeroPadTime={3}
                      date={countDownEndTime}
                      renderer={CountDownComponent}
                    ></Countdown>
                  </div>
                )}
                <div className="col-12 text-center mx-auto">
                  <h1 className="text-15 text-white d-inline-block fw-700 rounded px-3 py-2 mb-4">
                    {landingPageData.coming_soon}
                  </h1>
                  <h2 className="text-9 fw-600 text-white mb-4" style={{ opacity: '0.60' }}>
                    {landingPageData.heading}
                  </h2>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto text-center">
                  <p className="text-5 text-light mb-3">
                    {landingPageData.notify.text}
                  </p>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="container text-center">
              <p className="text-light text-2 mb-2">
                Copyright © 2024{" "}
                <a className="fw-600" href="/">
                  Belgravia Associates.
                </a>
                All Rights Reserved.
              </p>
            </footer>
          </div>
        </section>
      </div>
      <ContactUsModal />
    </div>
  );
};

export default Slider1;
