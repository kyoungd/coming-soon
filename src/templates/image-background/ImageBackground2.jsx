import React from "react";
import Countdown from "react-countdown";
import AboutUsModal from "../../components/AboutUsModal";
import CountDownComponent from "../../components/CountDownComponent";
import { countDownEndTime, showCountDown } from "../../config/themeConfig";
import { landingPageData, socialMediaData } from "../../config/dataConfig";
import { mailChimpUrl } from "../../config/themeConfig";
import { Tooltip } from "../../components/Tooltip";
import { contactData } from "../../config/dataConfig";
import ContactForm2 from "../../components/ContactForm2";
import SubscribeForm from "../../components/SubscribeForm";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const ImageBackground2 = () => {
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
            <div className="col navbar-accordion px-0">
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
                className="collapse navbar-collapse justify-content-end"
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
                </ul>
              </div>
            </div>
            <div className="col-auto d-flex justify-content-end">
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
      {/* Hero Backgroung
  ========================= */}
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />
        <div
          className="hero-bg hero-bg-scroll"
          style={{ backgroundImage: 'url("./images/intro-bg.jpg")' }}
        />
        <div className="hero-content py-4 py-lg-0">
          <div className="container">
            <div className="row min-vh-100">
              {/* Coming Soon Information
    ============================== */}
              <div className="col-lg-8 align-items-center d-flex flex-column py-5">
                <div className="row py-5 my-auto text-center text-lg-start">
                  {showCountDown && (
                    <div className="col-auto text-white text-center mx-auto mx-lg-0 mb-4 pb-2 ">
                      <Countdown
                        zeroPadTime={3}
                        date={countDownEndTime}
                        renderer={CountDownComponent}
                      ></Countdown>
                    </div>
                  )}
                  <div className="col-12 mx-auto">
                    <h1 className="text-9 text-white bg-danger d-inline-block fw-700 rounded px-3 py-2 mb-4">
                      {landingPageData.coming_soon}
                    </h1>
                    <h2 className="text-15 fw-600 text-white mb-4">
                      {landingPageData.heading}
                    </h2>
                  </div>
                  <div className="col-md-8 col-lg-9 col-xl-8 mx-auto me-lg-auto ms-lg-0">
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
              {/* Coming Soon Information End */}
              {/* Contact Us
    ========================= */}
              <div className="col-lg-4 my-auto py-lg-5">
                <div className="row bg-light rounded text-center mx-0 py-4 mb-4 mb-lg-0">
                  <div className="col-11 mx-auto">
                    <h3 className="fw-600 mb-3 mt-3">Contact Us</h3>
                    <p className="text-black-50 mb-4">
                      {contactData.support_note}
                    </p>
                    {/* Contact Form */}
                    <ContactForm2></ContactForm2>
                    {/* Contact Form end */}
                  </div>
                </div>
              </div>
              {/* Contact Us End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Backgroung End */}
      <AboutUsModal />
    </div>
  );
};

export default ImageBackground2;
