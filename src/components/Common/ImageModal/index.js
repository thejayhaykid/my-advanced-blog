import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";
import styles from "./ImageModal.module.scss";

const ImageModal = ({ showModal, setShowModal, imageURL, setImageURL }) => {
  const modalClose = () => {
    setShowModal(false);
    setImageURL("");
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, modalClose);

  const openImageInNewTab = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.open(imageURL, "_blank");
    }
  };

  return (
    <>
      {showModal ? (
        <div className={styles.ModalDiv}>
          <div className={styles.mainModal} ref={wrapperRef}>
            <img
              className={styles.mainImg}
              onClick={openImageInNewTab}
              src={imageURL}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

ImageModal.protoTypes = {
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  setImageURL: PropTypes.func.isRequired,
};

export default ImageModal;
