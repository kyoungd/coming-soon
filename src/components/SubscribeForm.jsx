import React, { useEffect, useRef } from "react";
import { landingPageData } from "../config/dataConfig";
import { toast } from "react-toastify";

const SubscribeForm = ({
  subscribe,
  status,
  message,
  isDark = false,
  isPrimary = false,
}) => {
  const emailRef = useRef();
  useEffect(() => {
    console.log(status, message);
    if (status === "success") {
      emailRef.current.value = "";
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (status === "error") {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [status, message]);

  return (
    <div className="subscribe-form">
      <form
        className={isDark ? "form-dark" : ""}
        onSubmit={(e) => {
          e.preventDefault();
          subscribe({ EMAIL: e.target.EMAIL.value });
        }}
      >
        <div className="input-group">
          <input
            type="email"
            id="mce-EMAIL"
            name="EMAIL"
            ref={emailRef}
            className="form-control border-2 required"
            required
            placeholder={landingPageData.notify.placeholder}
          />
          <button
            id="subscribe-form-submit"
            name="subscribe-form-submit"
            className={
              "btn px-4 shadow-none " + (isPrimary ? "btn-dark" : "btn-primary")
            }
            type="submit"
          >
            <span className="d-none d-sm-block">
              {status === "sending" ? (
                <i
                  role="status"
                  aria-hidden="true"
                  className="spinner-border spinner-border-sm"
                ></i>
              ) : (
                <>{landingPageData.notify.button}</>
              )}
            </span>
            <span className="text-4 d-block d-sm-none">
              <i className="fas fa-arrow-right" />
            </span>
          </button>
        </div>
      </form>
      <div className="subscribe-form-result mt-3" />
    </div>
  );
};

export default SubscribeForm;
