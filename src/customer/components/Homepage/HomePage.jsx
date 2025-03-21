import React from 'react'
import MainCarosel from '../../navigation/HomeCrosel/MainCarosel'
import HomeSectionCarousal from './HomeSectionCarousal/HomeSectionCarousal'
import { Mens_kurta } from '../../../Data/mens_kurta';
import Footer from './footer/Footer';
import { Women_Dress } from '../../../Data/Women_Dress';
import { Mens_Pants } from '../../../Data/Mens_Pants';
import { Mens_Shirts } from '../../../Data/Mens_Shirts';
import { Mens_Jeans } from '../../../Data/Mens_Jeans';
import { gounsPage1 } from '../../../Data/Goun';
import { lehngacholiPage2 } from '../../../Data/LehangaCholi';




const HomePage = () => {
  return (
    <>
      <MainCarosel />

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-8  '>
        <HomeSectionCarousal data={Women_Dress} sectionName={"Women's Dress"} />
        <HomeSectionCarousal data={gounsPage1} sectionName={"Women's Goun"} />
        <HomeSectionCarousal data={lehngacholiPage2} sectionName={"Women's LehangaCholi"} />
        <HomeSectionCarousal data={Mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousal data={Mens_Shirts} sectionName={"Men's Shirts"} />
        <HomeSectionCarousal data={Mens_Pants} sectionName={"Men's Pants"} />
        <HomeSectionCarousal data={Mens_Jeans} sectionName={"Men's Jeans"} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default HomePage