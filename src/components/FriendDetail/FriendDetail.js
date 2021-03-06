import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = (props) => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(response => response.json())
        .then(data => setFriend(data))
    }, [friendId])
    return (
        <div>
            <h5>This is a friend details component : {friendId}</h5>
            <h1>Name : {friend.name}</h1>
            <h3>UserName : {friend.username}</h3>
            <h3>email : {friend.email}</h3>
            <h3>Phone : {friend.phone}</h3>
            <h3>Website : {friend.website}</h3>
        </div>
    );
};

export default FriendDetail;