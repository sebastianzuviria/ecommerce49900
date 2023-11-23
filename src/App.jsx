import { useState, useEffect, useRef } from "react"

// const Layout = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1 style={{ color: props.color}}>{props.title}</h1>
//       {props.children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//       <Layout title={'Primera pagina'} color='red'>
//         <p style={ {color: 'red'} }>Este seria el texto de la primera pagina</p>
//         <p>Este seria el texto de la primera pagina</p>
//       </Layout>
//       <Layout title={'Segunda pagina'} color='blue'>
//         <p>Este seria el texto de la segunda pagina</p>
//       </Layout>
//       <Layout title={'Tercer pagina'} color='orange'>
//         <button>Boton</button>
//       </Layout>
//     </>
//   )
// }

// export default App

// const Count = () => {
//   const [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(prev => prev + 1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Count + 1</button>
//     </>
//   )
// }

// const App = () => {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       <button onClick={() => setShow(show => !show)}>Mostrar/No Mostrar</button>
//       {show && <Count />}
//     </>
//   )
// }

// export default App

// const Count = ({ title = 'My App' }) => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log('effect')
//     document.title = `${title} Contador: ${count}`

//     return () => {
//       console.log('limpieza')
//       document.title = 'Vite + React'
//     }
//   }, [count, title])


//   const handleClick = () => {
//     setCount(prev => prev + 1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Count + 1</button>
//     </>
//   )
// }

// const App = () => {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       <button onClick={() => setShow(show => !show)}>Mostrar/No Mostrar</button>
//       {show && <Count />}
//     </>
//   )
// }

// export default App


const ContadorDeVueltas = () => {
  const [vuelta, setVuelta] = useState(1)
  const [horas, setHoras] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    document.title = `Vuelta: ${vuelta}`

    return () => {
      document.title = `Vite + React` 
    }
  }, [vuelta])

  useEffect(() => {
    setSegundos(0)

    const intervalId = setInterval(() => {
      setSegundos(prev => prev + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [vuelta])

  useEffect(() => {
    if(segundos === 60) {
      setSegundos(0)
      setMinutos(prev => prev + 1)
    }
  }, [segundos])

  useEffect(() => {
    if(minutos === 60) {
      setMinutos(0)
      setHoras(prev => prev + 1)
    }
  }, [minutos])

  const finalizarVuelta = () => {
    setVuelta(prev => prev + 1)
  }

  return (
    <>
      <h1>Contador de vueltas</h1>
      <h2>Vuelta Actual: {vuelta}</h2>
      <h2>Tiempo: {horas}h:{minutos}m:{segundos}s</h2>
      <button onClick={finalizarVuelta}>Finalizar Vuelta</button>
    </>
  )
}

const App = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      <button onClick={() => setShow(show => !show)}>Mostrar/No Mostrar</button>
      {show && <ContadorDeVueltas />}
    </>
  )
}

export default App