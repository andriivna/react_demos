import {useEffect, useState} from "react";

import ApiServices from "../../services/api.services";
import Comments from "./Comments";
import css from '../Styles/todos.module.css'


export default function Comment(){
    let apiService = new ApiServices('comments');
    let [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setComments(value));
    }, []);
    return(
        <div className={css.full}>
            {
                comments.map(value =><Comments item ={value} key = {value.id}/>)
            }
        </div>
    )
}