export const toBase64 = async (target) => {
  try {
    const file = target.files[0];
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const b64 = e.target.result;
        const resB64 = quitarEncabezadoBase64(b64);
        resolve(resB64);
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsDataURL(file);
    });
  } catch (error) {
    console.error("Error recuperando la url de la imagen:", error);
    throw error;
  }
};

function quitarEncabezadoBase64(cadenaBase64) {
  // Divide la cadena usando ',' como separador
  const partes = cadenaBase64.split(",");

  if (partes.length === 2) {
    // Devuelve solo la segunda parte que contiene los datos base64
    return partes[1];
  } else {
    // Si no hay dos partes, devuelve la cadena original
    return cadenaBase64;
  }
}
