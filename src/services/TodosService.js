import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

const TodosService ={
    getAll: ()=> axiosService.get(urls.Todos)
}

export {
    TodosService
}