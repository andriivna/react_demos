import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User =({user})=>{
    const {id, name, username, email} = user;
    const dispatch = useDispatch();
    return(
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
            <button onClick={()=>dispatch(userActions.setCurrentUser(user))}>Select</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>GetFromApi</button>
        </div>
    )
}

export {User}