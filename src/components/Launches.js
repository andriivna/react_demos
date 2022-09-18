import {useState} from "react";
import Launch from "./Launch";

function Launches(){
    let [launches, setLaunches] = useState([]);
    fetch('https://api.spacexdata.com/v3/launches')
        .then(response => response.json())
        .then(data => (
            setLaunches(data)

        ));

    return(
        <div className={'styles'}>{
            launches.filter(value => value.launch_year !=='2020').map(((value=>(<Launch item={value} key ={value.id}/>))))
        }</div>
    );
}

export default Launches;