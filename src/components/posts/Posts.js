import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux";
import {Post} from "../post/Post";
import css from '../post/post.module.css';

const Posts =()=>{
    const dispatch = useDispatch();
    const {posts, error, loading} = useSelector(state => state.postReducer);

    useEffect(()=>{
        dispatch(postActions.getAll())
    },[])
    return(
        <div className={css.bodyp}>
            {loading&&<h1>Loading.........</h1>}
            {error&& <h1>Error</h1>}
            {
                posts.map(post=><Post key={post.id} post ={post}/>)
            }
        </div>
    )
}

export {Posts}