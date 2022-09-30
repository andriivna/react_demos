import {DEC, INC, RESET, SET, useCount2Reducer} from '../reducers';

const Count2 = ()=>{

    const[state, dispatch] = useCount2Reducer()

    return(

        <div>
            <h1>Count2: {state.count2 }</h1>
            <button onClick={()=>dispatch({type:INC})}>Inc</button>
            <button onClick={()=>dispatch({type:DEC})}>Dec</button>
            <button onClick={()=>dispatch({type:RESET})}>Reset</button>
            <button onClick={()=>dispatch({type:SET, payload:10})}>Set</button>
        </div>
    )
}
export {Count2};