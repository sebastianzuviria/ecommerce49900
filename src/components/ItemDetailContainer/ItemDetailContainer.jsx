import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useNotification } from "../../notification/NotificationService"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => { 
                showNotification('error', 'Hubo un error cargando el producto, intente nuevamente')
            })
    }, [productId])


    return (
        <>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </>
    )
}

export default ItemDetailContainer