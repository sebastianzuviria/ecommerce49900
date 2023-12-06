import { useState } from 'react'

export const useCount = (initialValue, incrementBy) => {
    const [count, setCount] = useState(initialValue)

    const decrement = () => {
        if(count > 0) {
            setCount(prev => prev - incrementBy)
        }
    }

    const increment = () => {
        setCount(prev => prev + incrementBy)
    }
     
    return { count, decrement, increment }
}