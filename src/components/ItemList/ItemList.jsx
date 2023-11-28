import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <div className="d-flex flex-column align-items-center" >
        {
            products.map(product => {
                return (
                    <Item key={product.id} {...product}/>
                )
            })
        }
        </div> 
    )
}

export default ItemList