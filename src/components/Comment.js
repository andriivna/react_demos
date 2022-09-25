import ApiServices from "../services/api.services";
import {useEffect, useState} from "react";
import Comments from "./Comments";


export default function Comment(){
    let apiService = new ApiServices('comments');
    let [comments, setComments] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setComments(value));
    }, []);
    return(
        <div>
            {
                comments.map(value =><Comments item ={value} key = {value.id}/>)
            }
        </div>
    )
}