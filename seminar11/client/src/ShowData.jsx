import { useEffect, useState } from "react";
import ShowToDo from "./ShowToDo";

function ShowData() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return <div>
        {/* <ul>
            {data.map(el => (
                <li key={el.id}>{el.title}</li>
            ))}
        </ul> */}
        {data.map(el => (
            <ShowToDo data={el} key={el.id}/>
        ))}
    </div>
}

export default ShowData;