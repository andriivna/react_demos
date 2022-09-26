import {Link, Route, Routes} from "react-router-dom";

import ToDo from "./components/ToDos/ToDo";
import Album from "./components/Albums/Album";
import Comment from "./components/Comments/Comment";
import Post from "./components/Posts/Post";
import css from "./components/Styles/todos.module.css";



function App(){
    return(
        <div>
            <div className={css.header}>
                <h3>Information</h3>
                <ul>
                    <li><Link to ={'/todos'}>ToDos</Link></li>
                    <li><Link to ={'/albums'}>Albums</Link></li>
                    <li><Link to ={'/comments'}>Comments</Link></li>
                </ul>

            </div>

            <div>
                <hr/>
                <Routes>
                    <Route path={'todos'} element={<ToDo/>}/>
                    <Route path={'albums'} element ={<Album/>}/>
                    <Route path={'comments'} element ={<Comment/>}/>
                    <Route path={'posts/:id'} element ={<Post/>}/>



                </Routes>
                <hr/>
            </div>


        </div>
    )

}

export default App;