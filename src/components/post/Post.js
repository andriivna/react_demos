import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post =({post})=>{
    const {id, title, body} = post;
    const dispatch = useDispatch();
    return(
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>Select</button>

        </div>
    )
}

export {Post}