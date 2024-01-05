import { useEffect, useState } from 'react'
import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
 
const Navbar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('name', 'desc'))

        getDocs(categoriesCollection)
            .then(querySnapshot => {
                console.log(querySnapshot)
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setCategories(categoriesAdapted)
            })
    }, [])

    return (
        <nav className={classes.container} style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h1 onClick={() => navigate('/')} className={classes.rojo}>Ecommerce</h1>
            <section className={classes.categories}>
                {
                    categories.map(cat => {
                        return <Link key={cat.id} to={`/category/${cat.slug}`} className='btn btn-success'>{cat.name}</Link>
                    })
                }
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar