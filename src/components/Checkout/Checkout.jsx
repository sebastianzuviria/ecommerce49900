import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { addDoc, getDocs, collection, query, where, documentId, writeBatch } from 'firebase/firestore'
import { useNotification } from "../../notification/NotificationService"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, total, clearCart } = useCart()

    const { showNotification } = useNotification()

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: 'Sebastian Zuviria',
                    phone: '1234454905',
                    email: 'contact@sebaz.io'
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsCollection).then(querySnapshot => console.log(documentSnapshot))
    
            const { docs } = await getDocs(productsCollection)
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref,{ stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
    
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const ordersCollection = collection(db, 'orders')
                
                const { id } = await addDoc(ordersCollection, objOrder)
                
                clearCart()
                setOrderId(id)
            } else {
                showNotification('error', 'Hay productos que no tienen stock disponible')
            }
        } catch (error){
            showNotification('error', 'Hubo un error generando la orden: ' + error.message)
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <>
            <h1>Checkout</h1>
            {/* <ContactForm createOrder={createOrder} /> */}
            <button onClick={createOrder}>Generar orden</button>
        </>
    )
}

export default Checkout