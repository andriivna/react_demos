import css from "../Styles/todos.module.css"


let ToDos = (props) => {
    let {item} = props;
    return (
        <div className={css.main}>
            <p>ID:{item?.id}</p>
            <p>Title:{item.title}</p>
            <p>Completed:{item.completed.toString()}</p>
        </div>
    );

};

export default ToDos;