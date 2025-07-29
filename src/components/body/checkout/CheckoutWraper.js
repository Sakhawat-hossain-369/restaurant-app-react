import React from 'react'
import { useLocation } from 'react-router-dom';
import Checkout from './Checkout';
const CheckoutWraper = () => {


    const location = useLocation();
    return (<Checkout location={location} />)

}

export default CheckoutWraper;
