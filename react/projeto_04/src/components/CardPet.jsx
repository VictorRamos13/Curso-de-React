import PicturePet from "./PicturePet";

const CardPet = ({nome, raca, img, idade, exibirDetalhes}) => {
    return (
        
        <div
          style={{
            border: "dashed 2px purple",
            padding: "10px",
            margin: "10px",
            }}
        >
            <PicturePet img={img}/>
            
            <h1>Card do Pet</h1>
            <p>Nome: {nome}</p>
            <p>Raça: {raca}</p>
            <p>Idade: {idade}</p>
            
        </div>
        
        
    );
}
 
export default CardPet;