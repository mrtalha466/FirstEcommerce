import React from 'react'

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