import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container} style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h1 onClick={() => navigate('/')} className={classes.rojo}>Ecommerce</h1>
            <section className={classes.categories}>
                <Link to='/category/celular' className='btn btn-success'>Celulares</Link>
                <Link to='/category/tablet' className='btn btn-danger'>Tablets</Link>
                <Link to='/category/notebook' className='btn btn-warning'>Notebook</Link>
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar