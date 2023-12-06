import { useCount } from "../../hooks/useCount"

const ItemCount = () => {

    const { count, decrement, increment } = useCount(1, 5)
    const { count: count2, decrement: decrement2, increment: increment2 } = useCount(10, 50)


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
            <h1>{count2}</h1>
            <button onClick={decrement2}>Decrementar</button>
            <button onClick={increment2}>Incrementar</button>
        </div>
    )
}

export default ItemCount