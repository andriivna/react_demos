import {useEffect, useState} from "react";

import ApiServices from "../../services/api.services";
import Posts from "./Posts";
import css from '../Styles/todos.module.css'



export default function Post(){
    let apiService = new ApiServices(`posts`);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setPosts(value));
    }, []);

    return (
        <div className={css.full}>
            {
                posts.map(value => <Posts item={value} key={value.id}/>)
            }
        </div>
    );
}