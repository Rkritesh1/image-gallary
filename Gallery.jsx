import { useState } from "react";
import { images } from "./data";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="gallery-container">
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "Nature", "Tech", "Art"].map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="gallery-grid">
        {filteredImages.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.category}
            onClick={() => setModalImage(img.url)}
          />
        ))}
      </div>

      {/* Image Modal */}
      {modalImage && <ImageModal imgUrl={modalImage} onClose={() => setModalImage(null)} />}
    </div>
  );
};

export default Gallery;
