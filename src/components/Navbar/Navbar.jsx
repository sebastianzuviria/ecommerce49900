import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.container} style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h1 className={classes.rojo}>Ecommerce</h1>
            <section className={classes.categories}>
                <button className='btn btn-success'>Celulares</button>
                <button className='btn btn-danger'>Tablets</button>
                <button className='btn btn-warning'>Notebook</button>
            </section>
        </nav>
    )
}

export default Navbar