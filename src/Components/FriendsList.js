import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriendForm from './AddFriendForm';

const FriendsList = () => {
    const [newFriends, setNewFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/data')
        .then(res => {
            console.log(res.data)
            setNewFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <div>
                <AddFriendForm setNewFriends={setNewFriends}/>
            </div>
            <div>
                {newFriends.map((friend) => (
                    <Friend key={friend.id} friend={friend}/>))
                }
            </div>
        </div>
    );
};

export default FriendsList;