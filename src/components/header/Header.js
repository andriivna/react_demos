import {useSelector} from "react-redux";

import css from './Header.module.css'

const Header =()=>{
    const{currentUser}=useSelector(state => state.userReducer)
    const {currentPost}=useSelector(state => state.postReducer)
    return(
        <div className={css.Header}>
            {currentUser&&currentUser.name}___
            {currentPost&&currentPost.title}
        </div>
    )
}

export {Header}