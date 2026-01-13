import PicturePet from "./PicturePet";

const CardPet = ({nome, raca, img}) => {
    return (
        
        <div
          style={{
            border: "dashed 2px purple",
            padding: "10px",
            margin: "10px",
            }}
        >

            <h1>Card do Pet</h1>
            <p>Nome: {nome}</p>
            <p>Raça: {raca}</p>
            <PicturePet img={img}/>
        </div>

        
    );
}
 
export default CardPet;