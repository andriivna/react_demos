import ApiServices from "../services/api.services";
import {useEffect, useState} from "react";
import ToDos from "./ToDos";


export default function ToDo(){
    let apiService = new ApiServices('todos');
    let [todos, settodos] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => settodos(value));
    }, []);
    return(
        <div>
        {
            todos.map(value =><ToDos item ={value} key = {value.id}/>)
        }
        </div>
    )
}