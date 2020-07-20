import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageModal.module.scss";
import closeX from "../../../resources/close_x.svg";

const ImageModal = ({ showModal, setShowModal, imageURL, setImageURL }) => {
  const modalClose = () => {
    setShowModal(false);
    setImageURL("");
  };

  return (
    <>
      {showModal ? (
        <div className={styles.ModalDiv}>
          <div className={styles.mainModal}>
            {/* <div className={styles.imageDiv}> */}
            {/* <img
              className={styles.closeX}
              onClick={modalClose}
              src={closeX}
              alt="Close image"
            /> */}
            <img
              className={styles.mainImg}
              onClick={modalClose}
              src={imageURL}
            />
          </div>
          {/* </div> */}
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
