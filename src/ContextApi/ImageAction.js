export const loadImage = (images) => dispatch => (

  dispatch({
    type: "GET_IMAGE",
    payload: images,
  })

);

export const deleteImage = (id) => dispatch => (

  dispatch({
    type: "DELETE_IMAGE",
    payload: id
  })

)

export const addImage = (image) => dispatch => (

  dispatch({
    type: "ADD_IMAGE",
    payload: image
  })

)
