import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactData } from "../config/dataConfig";
import { emailjsConfig } from "../config/themeConfig";

const ContactForm3 = ({ isDark = false }) => {
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
        emailjsConfig.userId
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
    <form
      id="contact-form"
      className={isDark ? "form-dark" : ""}
      ref={form}
      onSubmit={sendEmail}
      method="post"
    >
      <div className="mb-3">
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
        <textarea
          id="form-message"
          name="message"
          className="form-control border-2"
          rows={2}
          placeholder={contactData.form.messagePlaceholder}
          required
          defaultValue={""}
        />
      </div>
      <div className="d-grid mt-4">
        <button id="submit-btn" className="btn btn-primary" type="submit">
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
  );
};

export default ContactForm3;
