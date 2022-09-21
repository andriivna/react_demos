import {userService} from "../../services";
import css from './user.module.css'


const User = ({user, setUsers}) => {
    const {id, name, username, email} = user;
    const deleteUser = () => {
         userService.deleteById(id).then(() =>{
             setUsers(users => {
                 const index = users.findIndex(value => value.id === id);
                 users.splice(index, 1)
                 return [...users]
             });
         })
    };

    return (
        <div className={css.User}>
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>username:{username}</div>
            <div>email:{email}</div>
        </div>
            <div className={css.tools}>
                <button>Update</button>
                <button onClick={() => deleteUser()}>Delete</button>
            </div>
        </div>

    );
};
export {User};
