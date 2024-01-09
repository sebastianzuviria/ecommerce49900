import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = ({ greeting }) => {   
    const { categoryId } = useParams()

    const { data: products, loading, error} = useAsync(() => getProducts(categoryId), [categoryId])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>Hubo un error, vuelva a intentarlo mas tarde</h1>
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer