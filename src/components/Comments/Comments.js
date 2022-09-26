import {Link} from "react-router-dom";

import css from '../Styles/todos.module.css'

let Comments = (props) => {
    let {item} = props;

    return (
        <div className={css.main}>

            <p>ID:{item?.id}</p>
            <p>Name:{item.name}</p>
            <Link to ={`/posts/${item.id}`}>Details</Link>


        </div>
    );

};

export default Comments;