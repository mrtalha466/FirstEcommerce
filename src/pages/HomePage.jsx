import React from 'react'
import MainCarosel from '../customer/HomeCrosel/MainCarosel';
import HomeSectionCarousal from '../customer/components/Homepage/HomeSectionCarousal/HomeSectionCarousal';

import { Women_Dress } from '../Data/Women_Dress';
import { Mens_Pants } from '../Data/Mens_Pants';
import { Mens_Shirts } from '../Data/Mens_Shirts';
import { Mens_Jeans } from '../Data/Mens_Jeans';
import { Goun } from '../Data/Goun';
import { lehngaCholi } from '../Data/LehangaCholi';
import Footer from '../customer/components/Homepage/footer/Footer';
import { Saree } from '../Data/Saree';



const HomePage = () => {
  return (
    <>
      <MainCarosel />

      <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-8  '>
        <HomeSectionCarousal data={Women_Dress} sectionName={"Women's Dress"} />
        <HomeSectionCarousal data={Saree} sectionName={"Saree"} />
        <HomeSectionCarousal data={Goun} sectionName={"Gouns"} />
        <HomeSectionCarousal data={lehngaCholi} sectionName={"LehangaCholi"} />
        <HomeSectionCarousal data={Mens_Shirts} sectionName={"Men's Shirts"} />
        <HomeSectionCarousal data={Mens_Pants} sectionName={"Men's Pants"} />
        <HomeSectionCarousal data={Mens_Jeans} sectionName={"Men's Jeans"} />
      </div>
      {/* <div>
        <Footer />
      </div> */}
      
    </>
  )
}

export default HomePage