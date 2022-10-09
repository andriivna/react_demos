import {axiosServices} from "./axios.services";
import {urls} from "../configs";


const carServices = {
    getAll: ()=> axiosServices(urls.cars),
    create: (car)=> axiosServices.post(urls.cars, car)
}

export {
    carServices
}