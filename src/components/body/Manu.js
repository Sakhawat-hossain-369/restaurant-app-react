import React, { Component } from 'react'
import ManuItem from './ManuItem';

import DishDetail from './DishDetail';
import { Button, CardColumns, Modal, ModalFooter, ModalHeader, ModalBody } from 'reactstrap';

import { connect } from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreators';
import Loading from './Loading';
import { Alert } from 'reactstrap';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        sample: state.sample,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchComments: () => dispatch(fetchComments())
    }
}


class Manu extends Component {
    state = {
        // dishes: DISHES,
        // comments: COMMENTS,
        selectedDish: null,
        modalOpen: false
    }

    onSelectedDish = (dish) => {
        this.setState({
            selectedDish: dish,
            modalOpen: true
        });


    }
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        console.log("fetching comments...");
    }

    // manu = this.state.dishes.map((dish) => {
    //     return <ManuItem dish={dish} key={dish.id} onSelectedDish={this.onSelectedDish} />
    // })

    dishDetail = this.state.selectedDish ? < DishDetail dish={this.state.selectedDish} /> : null;
    // console.log(<ManuItem />)
    // console.log(dishDetail);
    render() {
        document.title = "Manu"
        if (this.props.dishes.isLoading) {
            return (
                <Loading />

            );
        }
        else if (this.props.dishes.errMess != null) {
            return (
                <div className='container' style={{ marginTop: "20px" }}>
                    <Alert color="danger">{this.props.dishes.errMess}</Alert>
                </div>

            )
        }

        else {
            const manu = this.props.dishes.dishes.map((dish) => {
                return (
                    <ManuItem
                        dish={dish}
                        key={dish.id}
                        onSelectedDish={this.onSelectedDish}
                    />

                );
            });
            let dishDetail = null;
            if (this.state.selectedDish != null) {
                // console.log("Selected dish:", this.state.selectedDish);

                const comments = this.props.comments.comments.filter(comment =>
                    comment.dishId === Number(this.state.selectedDish.id)
                )
                console.log("Filtered comments for selected dish:", comments);
                dishDetail = <DishDetail dish={this.state.selectedDish}
                    comments={comments}
                    addComment={this.props.addComment}
                    commentIsLoading={this.props.comments.isLoading}
                />
            }


            // const dishDetail = this.state.selectedDish
            //     ? <DishDetail dish={this.state.selectedDish} />
            //     : null;

            return (
                <div className='container'>
                    <div className='row'>
                        <CardColumns>{manu}</CardColumns>
                        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>
                                {this.state.selectedDish ? this.state.selectedDish.name : 'Dish Details'}
                            </ModalHeader>
                            <ModalBody>
                                {dishDetail}

                            </ModalBody>


                            <ModalFooter>
                                <Button color='primary' onClick={this.toggleModal}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                        {/* 
                        <div className='col-12 col-md-5'>
                            {manu}
    
                        </div>
                        <div className='col-12 col-md-7'>
                            {dishDetail}
                        </div> */}

                    </div>

                </div>
            )

        }




    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Manu);
// const Manu = () => {
//     const [dishes] = useState(DISHES);
//     const [selectedDish, setSelectedDish] = useState(null);
//     const onSelectedDish = (dish) => {
//         setSelectedDish(dish);

//     }

//     const manu = dishes.map((dish) => {
//         return <ManuItem dish={dish} key={dish.id} onSelectedDish={onSelectedDish} />
//     })
//     const dishDetail = selectedDish ? < DishDetail dish={selectedDish} /> : null;
//     console.log(<ManuItem />)
//     console.log(dishDetail);
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-5'>
//                     {manu}
//                 </div>
//                 <div className='col-7'>
//                     {dishDetail}
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Manu;