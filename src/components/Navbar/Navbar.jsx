import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.container} style={{ display: 'flex', justifyContent: 'space-between'}}>
            <h1 className={classes.rojo}>Ecommerce</h1>
            <section className={classes.categories}>
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebook</button>
            </section>
        </nav>
    )
}

export default Navbar