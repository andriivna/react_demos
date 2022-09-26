import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const PostsService ={
    getAll: (id)=> axiosService.get(`${urls.Posts}/${id}`)
}

export {
    PostsService
}