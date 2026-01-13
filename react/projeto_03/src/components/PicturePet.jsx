const PicturePet = ({img}) => {
    return (
        <img src={img}
        style={{width: "100%", height: "200px", objectFit: "cover"}}
        />
    );
}
 
export default PicturePet;