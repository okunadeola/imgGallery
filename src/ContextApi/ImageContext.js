import { createContext, useEffect, useReducer } from "react";
import ImageReducer from "./ImageReducer";

const INITIAL_STATE = {
  image:JSON.parse(localStorage.getItem("image")) || [],
  error: false,
  errorMessage: null
};


export const ImageContext = createContext(INITIAL_STATE);

export const ImageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ImageReducer, INITIAL_STATE);
  
  useEffect(()=>{
    localStorage.setItem("image", JSON.stringify(state.image))
  },[state.image])
  
  return (
    <ImageContext.Provider
      value={{
        image: state.image,
        error: state.error,
        errorMessage: state.errorMessage,
        dispatch
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
