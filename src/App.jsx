import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import Button from './components/Button/Button'
// import ItemCount from "./components/ItemCount/ItemCount"

function App() {
  // const handleClick = () => console.log('click en celular')

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a mi Ecommerce'}/>
      {/* <Button text={'Celulares'} color={'red'} callback={handleClick}/>
      <Button text={'Tablets'} color={'blue'} callback={() => console.log('click en tablet')}/>
      <Button text={'Notebooks'} color={'green'} callback={() => console.log('click en notebook')}/>
      <Button label={'Un texto'}/> */}
      {/* <ItemCount initialValue={10} incrementBy={10}/> */}
      {/* <ItemCount initialValue={20} incrementBy={25}/> */}
    </>
  )
}

export default App
