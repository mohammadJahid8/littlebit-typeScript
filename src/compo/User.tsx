import React, { FC } from 'react';


interface Props {
    name: string,
    age: number,

}

const User: FC<Props> = ({name, age}) => {
    
    return (
        <div>
            <h1>My name is {name}</h1>
            <h1>My age is {age}</h1>
        </div>
    );
};

export default User;