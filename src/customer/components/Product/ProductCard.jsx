import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({ Product }) => {
    const navigate=useNavigate()
    return (
        <>
            <div onClick={()=>navigate(`/product/${5}`)} className="ProductCard w-[13rem] m-3 transition-all cursor-pointer">
                <div className="h-[18rem]">
                    <img className='h-full w-full object-cover object-left-top'
                        src={Product.imageUrl}
                        alt='' />
                </div>
                <div className="textPart bg-white p-3">
                    <div>
                        <p className='font-bold opacity-80'>{Product.brand}</p>
                        <p>{Product.title}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className='font-semibold'>{Product.price}</p>
                        <p className='line-through opacity-50 '>{Product.discountedPrice}</p>
                        <p className='bg-black w-[2.4rem] pl-[2px] text-green-600 font-semibold'>{Product.discountPersent}%</p>
                    </div>

                </div>


            </div>

        </>
    )
}

export default ProductCard