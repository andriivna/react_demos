import {DEC, INC, RESET, SET, useCount1Reducer} from "../reducers";

const Count1 = ()=>{

    const[state, dispatch] = useCount1Reducer()

    return(

        <div>
            <h1>Count1: {state.count1}</h1>
            <button onClick={()=>dispatch({type:INC})}>Inc</button>
            <button onClick={()=>dispatch({type:DEC})}>Dec</button>
            <button onClick={()=>dispatch({type:RESET})}>Reset</button>
            <button onClick={()=>dispatch({type:SET, payload:10})}>Set</button>
        </div>
    )
}
export {Count1};