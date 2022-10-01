import {CarForm} from "../../components/CarForm/CarForm";
import {Cars} from "../../components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "../../services/car.service";

const CarsPage=()=>{
    const [cars, setCars] = useState([]);


    useEffect(()=>{
        carService.getAll().then(({data:res})=>{
            setCars(res.data)
        }
        )}, [])
    return(
        <div>
            <CarForm/>
            <hr/>
            <Cars cars = {cars}/>
        </div>
    )
}

export {CarsPage}