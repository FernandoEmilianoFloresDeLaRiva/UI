import "./InputImage.css";
import image from "../../images/image-purple.svg";
import { toBase64 } from "../../utilities/toBase64";
import { useState } from "react";
import ContainerImages from "../ContainerImages/ContainerImages";

export default function InputImage({ setImg }) {
  const [existingImage, setExisting] = useState(false);
  const [images, setImages] = useState([]);

  const previewImage = async ({ target }) => {
    try {
      setImages((prev) => [...prev, URL.createObjectURL(target.files[0])]);
      setExisting(true);
      const b64 = await toBase64(target);
      setImg((prev) => [...prev, { b64, extension: "jpg" }]);
    } catch (err) {
      console.error("error subiendo la imagen, intente de nuevo");
      window.alert("error subiendo la imagen, intente de nuevo");
    }
  };

  return (
    <div className="containerInputImage">
      {!existingImage ? (
        <>
          <input
            type="file"
            id="image"
            name="image"
            required
            accept="image/*"
            onChange={previewImage}
            multiple
          />
          <label htmlFor="image">
            <img src={image} alt="imagen" />
            Foto de tu idea
          </label>
        </>
      ) : (
        <img src={images[0]} />
      )}
    </div>
  );
}
