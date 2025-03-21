import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { MainCaroselData } from './MainCaroselData'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {
  const items = MainCaroselData.map((item) => <img className='image-carosel px-1 rounded-3xl cursor-pointer' role='presentation' src={item.image} alt='carodelimages' />)


  return (

    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
      disableDotsControls
    />

  )
}

export default MainCarosel;