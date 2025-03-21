import React from "react";

const HomeComponentCard = ({ product }) => {
  return (
    <>
      <div className="w-[15rem] mx-3 cursor-pointer flex flex-col items-center rounded-lg shadow-lg overflow-hidden ">
        <div className="h-[13rem] w-[10rem]">
          <img
            className="pt-2 object-cover object-top w-full h-full"
            src={product.imageUrl}
            alt="firstcard"
          />
        </div>

        <div className="p-10">
          <h3 className="text-lg font-medium text-gray-950">{product.brand}</h3>
          <p className="mt-2 text-sm text-gray-600">
            {product.title}
          </p>
          <p className="mt-2 text-sm font-bold text-gray-600 line-through">
            Rs, {product.price}
          </p>
          <h1 className="mt-2 text-sm font-bold text-gray-600 ">
            Rs, {product.discountedPrice}
          </h1>
          <h1 className="bg-black w-10 text-white mt-2 text-sm font-bold  ">
             -{product.discountPersent}%
          </h1>
          {/* <h1 className="mt-2 text-sm font-bold text-gray-600">
            quantity: {product.quantity}
          </h1> */}
        </div>
      </div>
    </>
  );
};

export default HomeComponentCard;
