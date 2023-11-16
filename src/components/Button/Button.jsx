const Button = ({ color, text, callback }) => {
    // const { callback, color, text } = props

    return <button onClick={callback} style={{ color: color}}>{text}</button>
}

export default Button