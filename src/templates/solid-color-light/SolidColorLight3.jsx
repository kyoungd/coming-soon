import React from "react";
import Countdown from "react-countdown";
import AboutUsModal from "../../components/AboutUsModal";
import CountDownComponent from "../../components/CountDownComponent";
import { countDownEndTime, showCountDown } from "../../config/themeConfig";
import { landingPageData, socialMediaData } from "../../config/dataConfig";
import { mailChimpUrl } from "../../config/themeConfig";
import { Tooltip } from "../../components/Tooltip";
import { contactData } from "../../config/dataConfig";
import ContactForm3 from "../../components/ContactForm3";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "../../components/SubscribeForm";

const SolidColorLight3 = () => {
  return (
    <div id="main-wrapper">
      <div className="container-fluid px-0">
        <div className="row g-0 min-vh-100">
          {/* Intro
========================= */}
          <div className="col-lg-7 d-flex flex-column">
            {/* Domain Details */}
            <div className="container py-5 px-4 px-lg-5 my-auto">
              <div className="row text-center">
                {showCountDown && (
                  <div className="col-auto text-center mx-auto mb-4 pb-2">
                    <Countdown
                      zeroPadTime={3}
                      date={countDownEndTime}
                      renderer={CountDownComponent}
                    ></Countdown>
                  </div>
                )}
                <div className="col-12 mx-auto mb-4">
                  {/* Logo */}
                  <a className="logo" href="index.html" title="Zoon">
                    {" "}
                    <img src="images/logo.png" alt="Zoon" />{" "}
                  </a>
                  {/* Logo End */}
                </div>
                <div className="col-12 mx-auto">
                  <h1 className="text-9 text-white bg-danger d-inline-block fw-700 rounded px-3 py-2 mb-4">
                    {landingPageData.coming_soon}
                  </h1>
                  <h2 className="text-15 fw-600 mb-4">
                    {landingPageData.heading}
                  </h2>
                </div>
                <div className="col-md-9 col-xl-8 mx-auto">
                  <p className="text-5 text-muted mb-3">
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
                  />{" "}
                  {/* Subscribe End */}
                </div>
              </div>
            </div>
            <div className="container pb-2 px-3">
              <div className="row">
                <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start">
                  <span className="me-2">
                    <i className="fas fa-info-circle" />
                  </span>
                  <a
                    className="text-body"
                    data-bs-toggle="modal"
                    data-bs-target="#about"
                    href="/"
                  >
                    About Us
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 d-flex align-items-center justify-content-center mt-2 mt-sm-0">
                  <span className="me-2">
                    <i className="fas fa-phone-alt" />
                  </span>
                  {contactData.contact}
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-end mt-2 mt-md-0">
                  <ul className="social-icons">
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
            </div>
          </div>
          {/* Intro End */}
          {/* Contact Us
========================= */}
          <div className="col-lg-5 d-flex flex-column bg-light text-center ">
            <div className="container my-auto py-5 pt-lg-4 pb-lg-2">
              <div className="row mx-0">
                <div className="col-11 col-lg-10 mx-auto">
                  <h3 className="mb-3 fw-600">Contact Us</h3>
                  <p className="text-black-50 mb-4">{contactData.desc}</p>
                  {/* Contact Form */}
                  <ContactForm3></ContactForm3>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="container">
              <p className="text-2 text-muted mb-2">
                Copyrigh © 2023 <a href="/">Zoon</a>. All Rights Reserved.
              </p>
            </footer>
          </div>
          {/* Contact Us End */}
        </div>
      </div>
      <AboutUsModal />
    </div>
  );
};

export default SolidColorLight3;
