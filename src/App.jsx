import React from 'react'
import Navigation from './customer/navigation/Navigation'
import HomePage from './customer/pages/HomePage'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Footer from './customer/components/Homepage/footer/Footer'
import Cart from './customer/components/Cart/Cart'
import CheckOut from './customer/components/Checkout/CheckOut'
import Order from './customer/components/order/Order'
import Orderetails from './customer/components/order/Orderetails'
import {  Route, Routes } from 'react-router-dom'
import CustomerRoutes from './Routers/CustomerRoutes'

const App = () => {
  return (
    <>

      <div>

        <Routes>
          <Route path='/*' element={<CustomerRoutes/>}/> 
        </Routes>


      </div>


    </>
  )
}

export default App