import {Link} from "react-router-dom";

let Comments = (props) => {
    let {item} = props;

    return (
        <div>

            <p>ID:{item?.id}</p>
            <p>Name:{item.name}</p>
            <Link to ={`/posts/${item.id}`}>Details</Link>


        </div>
    );

};

export default Comments;