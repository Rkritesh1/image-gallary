import { motion } from "framer-motion";

const ImageModal = ({ imgUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        <img src={imgUrl} alt="Selected" />
      </motion.div>
    </div>
  );
};

export default ImageModal;
