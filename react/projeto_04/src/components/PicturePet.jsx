const PicturePet = ({img, nome, raca, idade, exibirDetalhes}) => {
    return (

        <div>
            <img
            src={img}
            title={nome}
            alt={raca}
            style={{width: "100%", height: "200px", objectFit: "cover"}}
            />

            {exibirDetalhes && <CardPet nome={nome} raca={raca} idade={idade}/>}
        </div>
    );
}
 
export default PicturePet;