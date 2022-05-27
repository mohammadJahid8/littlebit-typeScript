import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div>
            <h2>My users</h2>
            <User name="jahid" age={3}/>
        </div>
    );
};

export default Users;