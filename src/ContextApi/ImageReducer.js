const ImageReducer = (state, action) => {
  switch (action.type) {
    case "GET_ERROR":
      return {
        ...state,
        error: true,
        errorMessage:action.payload

      };
    case "GET_IMAGE":
      return {
        ...state,
        image:action.payload,
        error: false
      };
    case "ADD_IMAGE":
      return {
        ...state,
        image:[...state.image, action.payload],
      };
    case "DELETE_IMAGE":
      return {
        ...state,
        image : state.image.filter(
            (img) => img.id !== action.payload
          ),
      };
    default:
      return state;
  }
};

export default ImageReducer;
