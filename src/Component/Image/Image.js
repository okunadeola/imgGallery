import React, { useContext } from 'react'
import { ImageContext } from '../../ContextApi/ImageContext'

const Image = ({img}) => {
  const { dispatch } = useContext(ImageContext)

  const deleteImage = (id) => {
    dispatch({ type: "DELETE_IMAGE", payload: id })
  }
  return (
    <div className='imageContainer'>
      {img.src &&  (
      <div >
          <img className='image' src={img.src.landscape} alt="" />
          <div className='deleteIcon' onClick={() => deleteImage(img.id)}>
            <span>&times;</span>
          </div>
      </div>
      )}
    </div>
  )
}

export default Image
