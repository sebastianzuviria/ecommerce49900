import { useState } from 'react'

const ItemCount = ({ initialValue, incrementBy }) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - incrementBy)
        }
    }

    const increment = () => {
        setCount(prev => prev + incrementBy)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={() => setCount(initialValue)}>Reiniciar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default ItemCount