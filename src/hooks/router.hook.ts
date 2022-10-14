import {useLocation, Location} from "react-router-dom";


// type useLocationType = ReturnType<typeof useLocation>
//
// interface IState<T> extends useLocationType{
//     state: T
// }

interface IState<T> extends Location{
    state: T
}


const useAppLocation = <State>(): IState<State> => useLocation();

export {
    useAppLocation
}

