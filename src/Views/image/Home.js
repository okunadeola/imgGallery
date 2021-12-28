import React, { useContext, useEffect, useState} from 'react'
import Image from '../../Component/Image/Image'
import { ImageContext } from '../../ContextApi/ImageContext'
import { CloudCall } from '../ApiCall'

import './Home.css'
const Home = () => {
  const [local, setLocal] = useState(JSON.parse(localStorage.getItem("image")) )
  const { image, dispatch } = useContext(ImageContext)

  useEffect(() => {
    console.log(local.length);
    if (!local.length) {
      CloudCall(dispatch)
    }
  }, [])

  const addImage = async (img) => {
    const gallery = {
      id: Date.now(),
      src: {
        landscape:""
      }
    }
    const reader = new FileReader()
    reader.onload = (e)=> {
      gallery.src.landscape =  e.target.result
    }
    await reader.readAsDataURL(img);

    setTimeout(() => {
      dispatch({ type: "ADD_IMAGE", payload: gallery })
      console.log(image.length);
    }, 200);

  }


  return (
    <div className='container'>

      <div className='nav'>
        <span>Image Gallery</span>
        <div>
          <label htmlFor="file" className="shareOption">
            <span className="shareOptionText"> Add Photo</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => addImage(e.target.files[0])}
            />
          </label>
        </div>
      </div>


      <div className='imageOuterContainer' >
        {image.length !== 0 ? image.map(img => (
          <Image img={img} key={img.id} />
        )) : (
          <span>No image yet, add</span>
        )}
      </div>

    </div>
  )
}

export default Home
