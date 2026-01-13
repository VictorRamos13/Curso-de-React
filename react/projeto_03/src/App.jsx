import laila from "./assets/laila.jpeg";
import princesa from "./assets/princesa.jpeg"
import sadan from "./assets/sadan.jpeg"
import CardPet from "./components/CardPet";
function App() {
  const pets =[
    {
      id: 1,
      nome: "Laila",
      raca: "Vira Lata",
      img: laila
    },

    {
      id: 2,
      nome: "Princesa",
      raca: "Vira Lata",
      img: princesa
    },

    {
      id: 3,
      nome: "Sadan",
      raca: "Pastor Belga",
      img: sadan
      
    }
  ]

  return (
    <>
      {
        pets.map((pet) => (
          <CardPet 
            key = {pet.id}
            nome = {pet.nome}
            raca = {pet.raca}
            img = {pet.img}
          />
        ))
      }
    </>
  )
}

export default App
