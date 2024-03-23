import React from "react";
import { aboutData } from "../config/dataConfig";
import { useState } from "react";
import ImagesModal from "./ImagesModal";

const AboutUsModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);

  const onClickImage = (n) => {
    setSelectedProject(n);
    setIsOpen(true);
  };
  return (
    <div id="about" className="modal fade" role="dialog" aria-hidden="true">
      <div
        className="modal-dialog modal-xl modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-600 text-7 mx-auto">About Us</h5>
            <button
              type="button"
              className="btn-close ms-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p className="lead text-center">{aboutData.desc}</p>
            <div className="row">
              {aboutData.cards.length &&
                aboutData.cards.map((value, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="featured-box text-center">
                      <div className="featured-box-icon text-primary">
                        <i className={value.icon} />
                      </div>
                      <h4 className="fw-600">{value.title}</h4>
                      <p className="text-3">{value.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
            <hr className="my-5" />
            {/* Recent Work */}
            <h3 className="text-center my-5">{aboutData.projects_title}</h3>
            <div className="portfolio popup-img-gallery">
              <div className="row g-4">
                {aboutData.projects.length &&
                  aboutData.projects.map((value, index) => (
                    <div className="col-sm-6 col-lg-4" key={index}>
                      <div className="portfolio-box rounded">
                        <div className="portfolio-img rounded">
                          <img
                            className="img-fluid d-block"
                            src={value.img}
                            alt={value.title}
                          />
                          <div className="portfolio-overlay">
                            <button
                              className="popup-img stretched-link border-0 p-0"
                              onClick={() => {
                                onClickImage(index);
                              }}
                            />
                            <div className="portfolio-overlay-details">
                              <h5 className="text-white fw-400">
                                {value.title}
                              </h5>
                              <span className="text-light">
                                {value.category}
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="text-center mt-5 mb-4">
              <button
                className="btn btn-outline-dark shadow-none"
                data-bs-toggle="modal"
                data-bs-target="#contact"
                data-bs-dismiss="modal"
                href
              >
                {aboutData.get_in_touch}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ImagesModal
          setIsOpen={setIsOpen}
          projects={aboutData.projects}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        ></ImagesModal>
      )}
    </div>
  );
};

export default AboutUsModal;
