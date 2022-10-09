import {carService} from "../../services/car.service";

const Car =({car, setCars})=>{

    const {id, model, price, year} = car;
    return(

        <div>
            <div>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>

            <div>
                <button>Update</button>
            </div>

        </div>

    )
}

export {Car};