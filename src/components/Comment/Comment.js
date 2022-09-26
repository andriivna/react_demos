import {Link} from "react-router-dom";

const Comment =({comment})=>{
    return(
        <div>
            {comment.id} -- {comment.name}
            <div><Link to={comment.postId.toString()}>Get Post</Link></div>
        </div>
    )
}
export {Comment};