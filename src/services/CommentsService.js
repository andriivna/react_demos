import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const CommentsService ={
    getAll: ()=> axiosService.get(urls.Comments)
}

export {
    CommentsService
}