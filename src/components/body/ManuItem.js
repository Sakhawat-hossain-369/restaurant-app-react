import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import { baseUrl } from '../../redux/baseUrl'

const ManuItem = props => { /* props define korle retrun e props.dish.name ante hoy but dish obj is better */


    return (
        <div>
            <div>
                <Card inverse style={{ padding: 10, margin: 10, cursor: 'pointer' }} onClick={() => {
                    // console.log(dish)
                    props.onSelectedDish(props.dish)
                }}>
                    <CardImg
                        alt={props.dish.name}
                        src={baseUrl + props.dish.image}
                        style={{
                            height: 270,
                            opacity: 0.5
                        }}
                        width="100%"
                    />
                    <CardImgOverlay>
                        <CardTitle tag="h5" style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
                            {props.dish.name}
                        </CardTitle>

                    </CardImgOverlay>
                </Card>
            </div>
        </div>
    )
}

export default ManuItem