import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PostsService} from "../../services";
import {Post} from "../Post/Post";

const Posts =()=>{

    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(()=>{
        PostsService.getAll(postId).then(({data}) => setPost(data))
    },[postId])

    return(
        <div>
            {post && (<Post post={post}/>)}
        </div>
    )
}
export {Posts};