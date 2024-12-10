import { useEffect, useState } from "react"

function Test() {
    const [contor, setContor] = useState(0);

    // const handleDecrement = useMemo(() => {
    //     setContor((contor) => contor - 1);
    // }, []);

    const handleDecrement = () => {
        setContor((contor) => contor - 1);
    }

    useEffect(() => {
        console.log('Hello');
    }, [])

    return <div>
        <button onClick={() => setContor((ct) => ct + 1)}>Increment</button>
        <p>Valoarea contorului este: {contor}</p>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
}

export default Test