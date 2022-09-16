import React from "react";

let User = (props) => {
    let {item:user,lift} = props;

    return (
        <div className={'userContainer'}>

            <div className='container'><h2 className='title'>{user.id}.{user.name}</h2>

            <button onClick={()=>{
                lift(user)
            }}>Show more</button>

            </div>

        </div>
    );
};

export default User;
