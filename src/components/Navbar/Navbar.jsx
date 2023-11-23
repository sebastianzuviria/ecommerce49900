import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import Button from '../Button/Button'

const Navbar = () => {
    return (
        <nav className={classes.container} style={{ display: 'flex', justifyContent: 'space-around'}}>
            <h1 className={classes.rojo}>Ecommerce</h1>
            <section className={classes.categories}>
                <Button label={'Celulares'}/>
                <Button label={'Tablets'}/>
                <Button label={'Notebook'}/>
                {/* <button className='btn btn-success'>Celulares</button>
                <button className='btn btn-danger'>Tablets</button>
                <button className='btn btn-warning'>Notebook</button> */}
            </section>
            <CartWidget />
        </nav>
    )
}

export default Navbar