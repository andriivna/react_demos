const Car =({car})=>{

    const {id, model, price, year, photo} = car;
    return(
        <div>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <div>photo:{photo}</div>
        </div>
    )
}

export {Car};