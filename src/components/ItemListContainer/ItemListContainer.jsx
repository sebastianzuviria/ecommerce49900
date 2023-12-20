import { useState, useEffect, memo } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/NotificationService"

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const [newRender, setNewRender] = useState(false)

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setLoading(true)
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
                showNotification('error',`Hubo un error obteniendo los productos, intente nuevamente en unos minutos.`)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    console.log(products)

    useEffect(() => {
        setTimeout(() => {
            setNewRender(true)
        },3000)
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div onClick={() => console.log('container')}>
            <h1>{greeting}</h1>
            <ItemListMemo products={products}/>
        </div>
    )
}

export default ItemListContainer