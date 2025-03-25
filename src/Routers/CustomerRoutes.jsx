import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../customer/components/Homepage/footer/Footer'

import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/navigation/Navigation'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/Checkout/CheckOut'
import Order from '../customer/components/order/Order'
import Orderetails from '../customer/components/order/Orderetails'
import HomePage from '../pages/HomePage'

const CustomerRoutes = () => {
    return (
        <>
            <div>
                <Navigation />
            </div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />} />
                <Route path='/product/:productId' element={<ProductDetails />} />
                <Route path='/Checkout' element={<CheckOut />} />
                <Route path='/account/order' element={<Order />} />
                <Route path='/account/order/:orderId' element={<Orderetails />} />

            </Routes>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default CustomerRoutes
