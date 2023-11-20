// import { useEffect, useState } from "react";
import "./ContainerImages.css";
// import previous from "../../images/arrow-left-solid.svg";
// import next from "../../images/arrow-right-solid.svg";
import { useGetImgs } from "../../hooks/useGetImgs";
import { useRef } from "react";
export default function ContainerImages({ token, id }) {
  // const [currentImage, setCurrent] = useState(0);
  const refContainer = useRef(null);
  //despues se puede poner las flechas y cambiar el indice, el indice se mandara al hook
  const { isLoading } = useGetImgs(token, id, refContainer);
  // const previousImage = () => {
  //   if (currentImage != 0) {
  //     setCurrent(currentImage - 1);
  //   } else {
  //     setCurrent(images.length - 1);
  //   }
  // };

  // const nextImage = () => {
  //   if (currentImage < images.length - 1) {
  //     setCurrent(currentImage + 1);
  //   } else {
  //     setCurrent(0);
  //   }
  // };

  return (
    <div className="containerImages">
      {isLoading && <p>Cargando Imagen del producto...</p>}
      <img
        ref={refContainer}
        alt="Imagen de producto"
        className="imagePreview"
      />
      {/* {images.length > 1 ? (
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
      )} */}
    </div>
  );
}
