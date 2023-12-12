import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <div onClick={() => console.log('list')} className="d-flex flex-column align-items-center" >
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