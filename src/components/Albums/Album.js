import {useEffect, useState} from "react";

import ApiServices from "../../services/api.services";
import Albums from "./Albums";
import css from "../Styles/todos.module.css"


export default function Album(){
    let apiService = new ApiServices('todos');
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setAlbums(value));
    }, []);
    return(
        <div className={css.full}>
            {
                albums.map(value =><Albums item ={value} key = {value.id}/>)
            }
        </div>
    )
}