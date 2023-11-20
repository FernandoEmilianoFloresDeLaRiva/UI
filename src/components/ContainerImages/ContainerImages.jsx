import { useState } from "react";
import "./ContainerImages.css";
import previous from "../../images/arrow-left-solid.svg";
import next from "../../images/arrow-right-solid.svg";

export default function ContainerImages({ images }) {
  const [currentImage, setCurrent] = useState(0);

  const previousImage = () => {
    if (currentImage != 0) {
      setCurrent(currentImage - 1);
    } else {
      setCurrent(images.length - 1);
    }
  };

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrent(currentImage + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <div className="containerImages">
      <img
        src={images[currentImage]}
        alt="preview imagen"
        className="imagePreview"
      />
      {images.length > 1 ? (
        <>
          <button className="backArrow" type="button" onClick={previousImage}>
            <img src={previous} alt="anterior" />
          </button>
          <button className="nextArrow" type="button" onClick={nextImage}>
            <img src={next} alt="siguiente" />
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
