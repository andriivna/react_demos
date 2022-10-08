import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const postService ={
    getAll:()=>axiosServices.get(urls.posts)
}

export {
    postService
}