import { useState, useEffect, useRef } from "react"

const Button = () => {
    const [colorText, setColorText] = useState('red')
    const buttonRef = useRef()

    console.log(buttonRef)

    useEffect(() => { 
        const handleScroll = (e) => {
            console.log(e)
            const button = buttonRef.current

            const { y } = button.getBoundingClientRect()

            const color = y < 0 ? 'black' : 'red'

            setColorText(color)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div style={{ height: '180vh', padding: 20}}>
            <button onClick={(e) => console.log(e)} ref={buttonRef} style={{ color: colorText }}>has click</button>
        </div>
    )
}

export default Button