import React from 'react'
import Navigation from './customer/navigation/Navigation'
import HomePage from './customer/pages/HomePage'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Footer from './customer/components/Homepage/footer/Footer'

const App = () => {
  return (
    <>
      <Navigation />

      {/* <HomePage /> */}
      {/* <Product /> */}
      <ProductDetails />
      <div>
        <Footer/>
      </div>

    </>
  )
}

export default App