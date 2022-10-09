import {useState, useEffect} from "react";

import {carServices} from "../../services";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";

const Cars=({})=>{
    const [cars, setCars] = useState([]);

    useEffect(()=>{
        carServices.getAll().then(({data})=>setCars(data))
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