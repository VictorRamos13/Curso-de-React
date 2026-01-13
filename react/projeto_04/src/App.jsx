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
      idade: 11,
      img: laila,
      exibirDetalhes: false,
    },

    {
      id: 2,
      nome: "Princesa",
      raca: "Vira Lata",
      img: princesa,
      idade: 10,
      exibirDetalhes: false,
    },

    {
      id: 3,
      nome: "Sadan",
      raca: "Pastor Belga",
      idade: 10,
      img: sadan,
      exibirDetalhes: true,
      
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
            idade = {pet.idade}
            img = {pet.img}
            exibirDetalhes = {pet.exibirDetalhes}
          />
        ))
      }
    </>
  )
}

export default App
