import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialInfo = {
    name: '',
    age: '',
    email: ''
}

const AddFriendForm = (props) => {
    const [newFriend, setNewFriend] = useState(initialInfo);

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const addBtn = e => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        console.log(newFriend);
        axiosWithAuth().post('/friends', newFriend, {headers: {authorization: token}})
        .then(res => {
            console.log(res)
            props.setFriends((friend) => [...friend, newFriend]);
            props.history.push('/protected')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <form onSubmit={addBtn}>
                <label>Name
                  <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    onChange={handleChange}
                  />
                </label>
                <label>Age
                  <input
                    type='text'
                    name='age'
                    value={newFriend.age}
                    onChange={handleChange}                                
                  />
                </label>
                <label>Email
                  <input
                    type='text'
                    name='email'
                    value={newFriend.email}
                    onChange={handleChange}                
                  />
                </label>
                <button className='add-friends'>Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriendForm;