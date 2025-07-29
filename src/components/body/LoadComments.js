import React from 'react';
import dateFormat from 'date-format';
import Loading from './Loading';

const LoadComments = props => {
    if (props.commentIsLoading) {
        return <Loading />
    }
    else {
        return (
            <div>
                {props.comments.map((c) => (
                    <div key={c.id}>
                        <h5>{c.author}</h5>
                        <p>{c.comment}</p>
                        <p>Rating: {c.rating}</p>
                        <p>{dateFormat('dd-MM-yyyy', new Date(c.date))}</p>
                    </div>
                ))}
            </div>
        );

    }

};

export default LoadComments;