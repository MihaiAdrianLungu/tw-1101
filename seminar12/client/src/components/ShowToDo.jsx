function ShowToDo(props) {
    const { data } = props;

    return <div>
        <div>ID: {data.id}</div>
        <div>Name: {data.title}</div>
    </div>
}

export default ShowToDo