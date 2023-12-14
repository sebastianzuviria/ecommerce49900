import reactImg from './assets/react.svg'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    return (
        <button>
            <img src={reactImg}/>
            { totalQuantity }
        </button>
    )
}

export default CartWidget