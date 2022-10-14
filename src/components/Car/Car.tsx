import {Interface} from "readline";
import {ICar} from "../interfaces";
import {FC, ReactNode} from "react";
import {useNavigate} from "react-router-dom";

interface IProps{
    car:ICar,
    children?:ReactNode
}
const Car:FC<IProps> =({car})=>{
    const {id,year,price,model}=car
    const navigate =useNavigate();
    return(
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>

            <button onClick={()=>navigate(`${id}`, {state:car})}>Show More</button>

        </div>
    )
}

export {Car}