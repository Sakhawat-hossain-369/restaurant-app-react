import React from 'react'
import { Routes, Route, Navigate, } from 'react-router-dom'
// import Manu from './Manu'
import Home from './Home'
import Manu from './Manu'
import Contact from './Contact'
import About from './About'
// import Checkout from './checkout/Checkout'
import CheckoutWraper from './checkout/CheckoutWraper'

const BodyComponent = () => {
    return (
        <div>

            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/manu' element={<Manu />} />

                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Navigate to='/home' />} />

                <Route path='/checkout' element={<CheckoutWraper />} />


            </Routes>


        </div >
    )
}

export default BodyComponent