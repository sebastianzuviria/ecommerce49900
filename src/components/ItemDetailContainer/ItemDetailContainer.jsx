import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
    }, [productId])


    return (
        <>
            <h1>Detalle de producto</h1>
            <h1>{product?.name}</h1>
        </>
    )
}

export default ItemDetailContainer