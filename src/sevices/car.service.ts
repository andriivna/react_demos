import {AxiosRes, axiosService} from "./axios.service";
import {ICar} from "../components/interfaces";
import {urls} from "../configs";

const carService = {
    getAll:():AxiosRes<ICar[]> => axiosService.get(urls.cars),
    create:(car:ICar):AxiosRes<ICar>=>axiosService.post(urls.cars, car)
}

export {
    carService
}