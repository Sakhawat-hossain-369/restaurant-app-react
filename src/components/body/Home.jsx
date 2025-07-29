import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Loading from './Loading'

class Home extends Component {


    render() {
        document.title = "Basic Restaurent App"

        return (
            <div className="container my-5">
                <div className="jumbotron text-center p-5 mb-4 bg-white shadow-sm">
                    <h1 className="display-4">Welcome to Flavour Feast!</h1>
                    <p className="lead">Where every bite brings joy. Discover your favorite dishes right here.</p>
                </div>

                <div className="text-center mb-4">
                    <img
                        src="/assets/image.jpg"
                        alt="Delicious food"
                        style={{
                            maxWidth: '600px',
                            width: '100%',
                            height: 'auto',
                            borderRadius: '10px'
                        }}
                    />
                </div>

                <div className="text-center p-4 bg-light rounded shadow-sm">
                    <h1 className="display-4 mb-3">Hungry?</h1>
                    <h2 className="mb-3 text-primary">Let’s fix that right away!</h2>
                    <h4 className="mb-4 text-secondary">
                        Dive into our <span className="fw-bold">Menu</span> and pick your favorites. Freshly made, just for you!
                    </h4>
                    <Link to="/manu" className="btn btn-success btn-lg">
                        Explore the Menu 🍽️
                    </Link>
                </div>

            </div>
        )
    }
}

export default Home;
