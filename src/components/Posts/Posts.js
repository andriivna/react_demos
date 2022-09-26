import css from '../Styles/todos.module.css'

let Posts = (props) => {
    let {item} = props;

    return (
        <div className={css.main}>

            <p>ID:{item?.id}</p>
            <p>Title:{item.title}</p>


        </div>
    );

};

export default Posts;