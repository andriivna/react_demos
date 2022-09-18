import {useEffect, useState} from "react";
import User from "./User";

function Users (){
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState()



    const lift = (id) => {
        setUser(id);
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => (
                setUsers(data)
            ));
    })

    return (<div className={'styles'}>

            <hr/>
            <h3 className='popup'>{user?.username + ' --- ' + user?.email}</h3>
            <hr/>


            {users.map((value => (<User
                item={value}
                key={value.id}
                lift ={lift}
            />)))}
        </div>
    );
}

export default Users;