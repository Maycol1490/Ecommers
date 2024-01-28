import React, { useEffect, useState } from 'react'
import oferta1 from '../../assets/oferta1.jpg'
import oferta2 from '../../assets/oferta2.jpg'
import oferta3 from '../../assets/oferta3.jpg'
import oferta4 from '../../assets/oferta4.jpg'
import oferta5 from '../../assets/oferta5.jpeg'


const Ofertas = () => {

    const imgOfertas = [
        oferta1, oferta2, oferta3, oferta4, oferta5
    ]

    const [numberImg, setNumberImg] = useState(0)

    const objStyle = {
      transform:`translateX(calc(-${numberImg} /5 * 100%))`
    }
    const nextSlide = () => {
        setNumberImg((prevIndex) => (prevIndex + 1) % imgOfertas.length);
    };
    
    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000)
    
        return () => {
          clearInterval(intervalId)
        };
      }, [numberImg]); 
    const handlePrev = () => {
      if(numberImg-1 < 0){
        setNumberImg(4)
      }else{
        setNumberImg(numberImg - 1)
      }
    }
  
    const handleNext = () => {
      if(numberImg+1 > 4){
        setNumberImg(0)
      }else{
        setNumberImg(numberImg+1)
  
    }
  }

    return (
        <section className='home-slider'>
            <button onClick={handlePrev} className='slider_arrowhead slider-left'>
                &lt;
            </button>
            <div style={objStyle} className='home-slider-child'>
                {
                    imgOfertas.map((imgOferta,index)=> (
                        <div
                            className='home-slider-imgContainer'
                            key={imgOferta}>
                            <img
                                className='home-slider-img'
                                src={imgOferta} alt={`Oferta ${index + 1}`} />
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

export default Ofertas