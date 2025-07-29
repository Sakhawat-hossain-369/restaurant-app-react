import React, { Component } from 'react'
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { postOrder } from '../../../redux/actionCreators';

class Checkout extends Component {
    render() {
        document.title = "Checkout";
        const { dishId, dishName, dishPrice } = this.props.location.state || {};

        console.log("Checkout props:", dishId, dishName, dishPrice);
        return (
            <div className='container' style={{ marginTop: "20px" }}>
                <h4 style={{
                    border: "1px solid #ccc",
                    padding: "20px",
                    borderRadius: "10px"
                }}> Order Summary </h4>
                <ul className="list-unstyled"
                    style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
                    {/* <li><strong>Dish Id: </strong> {dishId}</li> */}
                    <li><strong>Dish Name: </strong> {dishName}</li>
                    <li><strong>Price: </strong> {dishPrice}</li>
                </ul>
                {this.props.errMess && (
                    <div className='alert alert-danger'>
                        {this.props.errMess}'
                    </div>
                )}
                <Formik
                    initialValues={{
                        name: '',
                        phone: '',
                        quantity: 1,
                        adress: '',
                        paymentMethod: '',
                        dishId: dishId || '',
                        dishName: dishName || '',
                        dishPrice: dishPrice || ''
                    }}
                    onSubmit={(values, { resetForm }) => {
                        // Dispatch the postOrder action with the form values
                        this.props.postOrder(values);
                        console.log("Form values:", values)
                        // alert(`Order placed Successfullay \nName: ${values.name} \nphone: ${values.phone}`)
                        resetForm();
                    }}
                >
                    {({ values, handleChange, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="dishId" value={values.dishId} />
                            <input type="hidden" name="dishName" value={values.dishName} />
                            <div className='form-group'>

                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    placeholder='Your Name'
                                    className='form-control'
                                    value={values.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <br />
                            <div className='form-group'>

                                <input
                                    type='text'
                                    id='phone'
                                    name='phone'
                                    placeholder='Phone Number'
                                    className='form-control'
                                    value={values.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <br />
                            <div className='form-group'>
                                <label htmlFor='quantity' className="form-label">Quantity</label>
                                <input
                                    type='number'
                                    id='quantity'
                                    name='quantity'
                                    className='form-control'
                                    value={values.quantity}
                                    onChange={handleChange}
                                    min="1"
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='adress' className="form-label">Address</label>
                                <textarea
                                    id='adress'
                                    name='adress'
                                    className='form-control'
                                    value={values.adress}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='paymentMethod' className="form-label">Payment Method</label>
                                <select
                                    id='paymentMethod'
                                    name='paymentMethod'
                                    className='form-control'
                                    value={values.paymentMethod}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value='' disabled>Select Payment Method</option>
                                    <option value='Cash'>Cash on Delivary </option>
                                    <option value='Card'>bKash</option>
                                </select>
                            </div>
                            <br />
                            <div className='form-group'>
                                <button type="submit" className="btn btn-primary">Place Order</button>
                            </div>
                            <br />
                            <br />
                            <br />
                        </form>
                    )}

                </Formik>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postOrder: (order) => dispatch(postOrder(order))
});
export default connect(null, mapDispatchToProps)(Checkout);
