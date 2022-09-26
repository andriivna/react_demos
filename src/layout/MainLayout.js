import {Headers} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout =()=>{
    return(
        <div>
            <Headers/>
            <h3>Content</h3>
            <Outlet/>
        </div>
    )
}
export {MainLayout};