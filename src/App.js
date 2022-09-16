import './App.css';
import Users from "./components/Users";

function App(){
    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <div>
                <Users />
            </div>
        </div>
    )
}

export default App;