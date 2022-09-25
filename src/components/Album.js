import ApiServices from "../services/api.services";
import {useEffect, useState} from "react";
import Albums from "./Albums";


export default function Album(){
    let apiService = new ApiServices('todos');
    let [albums, setAlbums] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setAlbums(value));
    }, []);
    return(
        <div>
            {
                albums.map(value =><Albums item ={value} key = {value.id}/>)
            }
        </div>
    )
}