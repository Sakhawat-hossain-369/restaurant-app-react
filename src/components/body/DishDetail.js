import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentForm from './CommentForm';
import { baseUrl } from '../../redux/baseUrl';
import { useNavigate } from 'react-router-dom';

const DishDetail = props => {
    document.title = "Dish Details"

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout', {
            state: {
                dishId: props.dish.id,
                dishName: props.dish.name,
                dishPrice: props.dish.price,
            }
        });

    }
    return (
        <div>
            <Card style={{ marginTop: "10px" }}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        Price: {props.dish.price}/-
                    </CardText>
                    <button className='btn btn-sm btn-primary' onClick={handleCheckout}>Order Here</button>
                    <hr />
                    <LoadComments comments={props.comments} commentIsLoading={props.commentIsLoading}></LoadComments>
                    <hr />
                    <CommentForm dishId={props.dish.id} addComment={props.addComment} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;