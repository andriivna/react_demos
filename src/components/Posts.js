

let Posts = (props) => {
    let {item} = props;

    return (
        <div>

            <p>ID:{item?.id}</p>
            <p>Title:{item.title}</p>


        </div>
    );

};

export default Posts;