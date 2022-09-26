import {useEffect, useState} from "react";

import ApiServices from "../../services/api.services";
import ToDos from "./ToDos";
import css from "../Styles/todos.module.css"


export default function ToDo(){
    let apiService = new ApiServices('todos');
    let [todos, settodos] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => settodos(value));
    }, []);
    return(
        <div className={css.full}>
        {
            todos.map(value =><ToDos item ={value} key = {value.id}/>)
        }
        </div>
    )
}