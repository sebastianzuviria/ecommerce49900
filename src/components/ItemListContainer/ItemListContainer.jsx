import Button from "../Button/Button"

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <Button text='otro boton' />
        </div>
    )
}

export default ItemListContainer