import {combineReducers} from "redux";

import {commentReducer} from "../reducers/comment.reducer";
import {postsReducer} from "../reducers/posts.reducer";
import {usersReducer} from "../reducers/users.reducer";

const reducer = combineReducers({
    commentReducer,
    postsReducer,
    usersReducer
});


export {
    reducer
}