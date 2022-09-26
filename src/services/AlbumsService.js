import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const AlbumsService ={
    getAll: ()=> axiosService.get(urls.Albums)
}

export {
    AlbumsService
}