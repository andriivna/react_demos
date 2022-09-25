import ApiServices from "../services/api.services";
import {useEffect, useState} from "react";
import Posts from "./Posts";



export default function Post(){
    let apiService = new ApiServices(`posts`);
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        apiService.getAllData().then(value => setPosts(value));
    }, []);

    return (
        <div>
            {
                posts.map(value => <Posts item={value} key={value.id}/>)
            }
        </div>
    );
}