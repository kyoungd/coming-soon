import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { contactData } from "../config/dataConfig";
import { emailjsConfig } from "../config/themeConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsModal = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        {
          publicKey: emailjsConfig.userId,
        }

      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <div id="contact" className="modal fade" role="dialog" aria-hidden="true">
      <div
        className="modal-dialog modal-md modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-600 text-7 mx-auto">Contact Us</h5>
            <button
              type="button"
              className="btn-close ms-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4 p-lg-5">
            <p className="lead text-muted text-center mb-5">
              {contactData.desc}
            </p>
            <div className="row">
              <div className="col-xl-12">
                {/* Contact Form */}
                <form
                  id="contact-form"
                  method="post"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      {contactData.form.nameLable}
                    </label>
                    <input
                      id="name"
                      name="user_name"
                      type="text"
                      className="form-control border-2"
                      placeholder={contactData.form.namePlaceholder}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      {contactData.form.emailLable}
                    </label>
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      className="form-control border-2"
                      placeholder={contactData.form.emailPlaceholder}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="form-message">
                      {contactData.form.messageLable}
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      className="form-control border-2"
                      rows={3}
                      placeholder={contactData.form.messagePlaceholder}
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="d-grid mt-4">
                    <button
                      id="submit-btn"
                      className="btn btn-primary"
                      type="submit"
                    >
                      {sendingMail ? (
                        <>
                          <span
                            role="status"
                            aria-hidden="true"
                            class="spinner-border spinner-border-sm align-self-center me-2"
                          ></span>
                          Sending.....
                        </>
                      ) : (
                        <>{contactData.form.submitButton}</>
                      )}
                    </button>
                  </div>
                </form>
                {/* Contact Form end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
