import React from "react";
import Countdown from "react-countdown";
import AboutUsModal from "../../components/AboutUsModal";
import ContactUsModal from "../../components/ContactUsModal";
import CountDownComponent from "../../components/CountDownComponent";
import {
  backgroundVideo,
  countDownEndTime,
  showCountDown,
} from "../../config/themeConfig";
import { landingPageData, socialMediaData } from "../../config/dataConfig";
import { mailChimpUrl } from "../../config/themeConfig";
import { Tooltip } from "../../components/Tooltip";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "../../components/SubscribeForm";

const YouTubeVideo1 = () => {
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
                      data-bs-target="#about"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
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
          <div className="hero-mask opacity-5 bg-dark" />
          <div className="player hero-bg ">
            <video
              src={backgroundVideo}
              autoPlay
              muted
              loop
			  playsinline="true"
              style={{
                width: "100%",
                height: "100vh",
                minHeight: "100%",
                objectFit: "cover",
              }}
            ></video>
          </div>{" "}
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
                  <h1 className="text-9 text-white bg-danger d-inline-block fw-700 rounded px-3 py-2 mb-4">
                    {landingPageData.coming_soon}
                  </h1>
                  <h2 className="text-15 fw-600 text-white mb-4">
                    {landingPageData.heading}
                  </h2>
                </div>
                <div className="col-md-8 col-lg-6 col-xl-5 mx-auto text-center">
                  <p className="text-5 text-light mb-3">
                    {landingPageData.notify.text}
                  </p>
                  {/* Subscribe Form */}
                  <MailchimpSubscribe
                    url={mailChimpUrl}
                    render={({ subscribe, status, message }) => (
                      <SubscribeForm
                        subscribe={subscribe}
                        status={status}
                        message={message}
                      ></SubscribeForm>
                    )}
                  />
                  {/* Subscribe End */}
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="container text-center">
              <p className="text-light text-2 mb-2">
                Copyright © 2021{" "}
                <a className="fw-600" href="/">
                  Zoon
                </a>
                . All Rights Reserved.
              </p>
            </footer>
          </div>
        </section>
      </div>
      <AboutUsModal />
      <ContactUsModal />
    </div>
  );
};

export default YouTubeVideo1;
