

function Character(props){
    let {itemId,itemName,itemStatus,itemSpecies,itemGender, pic} = props;

    let classNameItem = 'Second card'
    return(
        <div className={classNameItem}>
            <h2>{itemId} - {itemName}</h2>
            <h4>Status:{itemStatus}</h4>
            <h4>Species:{itemSpecies}</h4>
            <h4>Gender:{itemGender}</h4>
            <img src={pic}/>
        </div>
    )

}

export default Character;