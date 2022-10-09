import {Car} from "../Car/Car";
import {useEffect, useState} from "react";
import {carService} from "../../services/car.service";
import {CarForm} from "../CarForm/CarForm";

const Cars=({})=>{
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
    },[])
    return(
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            {
                cars.map(car=><Car key = {car.id} car={car} setCars={setCars}/>)
            }
        </div>
    )

}
export {Cars};