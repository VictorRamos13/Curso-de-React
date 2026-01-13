import ShowMessage from "./components/ShowMessage"

function App() {
  
const handleMostrarMensagem = () => {
    
        console.log("Oi, estou no App.jsx")

     }
  return (
    <>
      <ShowMessage arrowFunction={handleMostrarMensagem} />
    </>
  )
}

export default App
