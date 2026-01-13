import Header from "./components/Header"
import Aside from "./components/Aside"
import Footer from "./components/Footer"
import EmployeeDetails from "./components/EmployeeDetails"

function App() {

  return (
    <>
      <Header />
      <Aside />
      <Footer children="children"/>
      <EmployeeDetails />      
      
    </>
  )

}

export default App