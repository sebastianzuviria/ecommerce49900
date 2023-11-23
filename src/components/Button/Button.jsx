// const Button = ({ color, text, callback }) => {
//     // const { callback, color, text } = props

//     return <button onClick={callback} style={{ color: color}}>{text}</button>
// }

// export default Button

const Button = ({ label, color = 'red' }) => {
    // const styles = {
    //     color
    // }

    return <button style={{ color }} className={'btn btn-success'}>{label}</button>
}

export default Button