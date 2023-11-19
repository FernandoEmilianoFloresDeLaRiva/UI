import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [object, setObject] = useState(initialState);

  const handleObject = (target) => {
    setObject((prev) => ({ ...prev, [target.name]: target.value }));
  };
  return {
    object,
    handleObject,
  };
};
