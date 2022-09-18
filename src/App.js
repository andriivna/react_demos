import './App.css';
import Launches from "./components/Launches";


function App(){
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <div className={'title'}>
                <h1>Launches</h1>
            </div>
            <div className='info'>
                <Launches/>
            </div>
        </div>
    )
}

export default App;