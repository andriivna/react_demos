import {FC} from "react";
import {useLocation, useParams} from "react-router-dom";

const CarDetailsPage:FC =()=>{
    const{id}=useParams<{id:string}>();
    const {} = useLocation()
    return(
        <div>
            CarDetailsPage
        </div>
    )
}

export {CarDetailsPage}