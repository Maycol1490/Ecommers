import React, { useState } from 'react'
import '../../pages/styles/productId.css'

const ProductIdImg = ({ product }) => {

  const [numberImg, setNumberImg] = useState(0)

  const objStyle = {
    transform:`translateX(calc(-${numberImg} /3 * 100%))`
  }

  const handlePrev = () => {
    if(numberImg-1 < 0){
      setNumberImg(2)
    }else{
      setNumberImg(numberImg - 1)
    }
  }

  const handleNext = () => {
    if(numberImg+1 > 2){
      setNumberImg(0)
    }else{
      setNumberImg(numberImg+1)

  }
}

  return (
    <section className='slider'>
      <button onClick={handlePrev} className='slider_arrowhead slider-left'>
        &lt;
      </button>
      <div style={objStyle} className='slider-child'>
        {
          product?.images.map(imgInf => (
            <div key={imgInf.id}  className='slider-img-container'>
              <img 
              className='slider-img'
              src={imgInf.url} 
              alt="" />
            </div>
          ))
        }
      </div>
      <button onClick={handleNext} className='slider_arrowhead slider-right'>
        &gt;
      </button>
    </section>
  )
}

export default ProductIdImg