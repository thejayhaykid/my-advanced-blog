import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./ImageModal.module.scss";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("click");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const ImageModal = ({ showModal, setShowModal, imageURL, setImageURL }) => {
  const modalClose = () => {
    setShowModal(false);
    setImageURL("");
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      {showModal ? (
        <div className={styles.ModalDiv}>
          <div className={styles.mainModal} ref={wrapperRef}>
            <img
              className={styles.mainImg}
              onClick={modalClose}
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
