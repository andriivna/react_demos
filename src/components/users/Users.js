import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userService} from "../../services";
import {userActions} from "../../redux";
import {User} from "../user/User";
import css from '../user/user.module.css'

const Users =()=>{
    const dispatch = useDispatch();
    const {users, error, loading, userFromAPI} = useSelector(state => state.userReducer);

    useEffect(()=>{
        dispatch(userActions.getAll())
        // userService.getAll().then(({data})=>dispatch(userActions.getAll(data)))
    },[])
    return(
        <div className={css.bodyu}>
            {loading&&<h1>Loading.........</h1>}
            {error&& <h1>Error</h1>}
            {userFromAPI&&userFromAPI.email}
            {
                users.map(user=><User key={user.id} user ={user}/>)
            }
        </div>
    )
}

export {Users}