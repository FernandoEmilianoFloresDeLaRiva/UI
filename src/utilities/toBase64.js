export const toBase64 = async (target) => {
  try {
    const file = target.files[0];
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve(e.target.result);
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
