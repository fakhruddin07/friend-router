import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const friendStyle = {
        border : '1px solid purple',
        borderRadius : '20px',
        margin : '20px',
        padding : '20px',
    }

    const {name, email, id} = props.friend
    return (
        <div style={friendStyle}>
            <h1>Name : {name}</h1>
            <p>email : {email}</p>
            <Link to={`/friend/${id}`}>
                <button>Show details of {id}</button>
            </Link>
        </div>
    );
};

export default Friend;