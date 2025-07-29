import React from 'react'
import HeaderComponent from './header/HeaderComponent'
import BodyComponent from './body/BodyComponent'
import FooterComponent from './footer/FooterComponent'

const MainComponent = () => {
    return (

        <div>
            <div><HeaderComponent /></div>

            <div><BodyComponent /></div>
            <div><FooterComponent /></div>
        </div>
    )
}

export default MainComponent