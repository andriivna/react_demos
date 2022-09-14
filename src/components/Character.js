import React from "react";

let Character = (props) => {
    let {item:user} = props;

    return (
        <div className={'userContainer'}>
            <h2>{user.id} {user.name}</h2>
            <h2>{user.status}</h2>
            <p>{user.species}</p>
            <p>{user.gender}</p>

            <img src={user.image} alt={user.name}/>
        </div>
    );
};

export default Character;