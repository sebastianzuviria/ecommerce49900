import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a mi ecommerce'}/>
    </>
  )
}

export default App