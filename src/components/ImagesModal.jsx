import React from "react";

const ImagesModal = ({
  setIsOpen,
  projects,
  selectedProject,
  setSelectedProject,
}) => {
  const onNext = (e) => {
    e.stopPropagation();
    if (selectedProject === projects.length - 1) {
      setSelectedProject(0);
    } else {
      setSelectedProject(selectedProject + 1);
    }
  };

  const onPrev = (e) => {
    e.stopPropagation();
    if (selectedProject === 0) {
      setSelectedProject(projects.length - 1);
    } else {
      setSelectedProject(selectedProject - 1);
    }
  };

  return (
    <div className="portfolio-image-modal" onClick={() => setIsOpen(false)}>
      <img
        src={projects[selectedProject].img}
        alt={projects[selectedProject].title}
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        className="btn-close btn-close-white opacity-10"
        onClick={() => setIsOpen(false)}
      ></button>
      <button className="btn-right" onClick={onNext}>
        <i className="fas fa-arrow-circle-right" />
      </button>
      <button className="btn-left" onClick={onPrev}>
        <i className="fas fa-arrow-circle-left" />
      </button>
    </div>
  );
};

export default ImagesModal;
