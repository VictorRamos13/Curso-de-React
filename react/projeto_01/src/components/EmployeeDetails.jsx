const EmployeeDetails = ({nome, matricula, cargo}) => {
    return (
        <>
            <h2>Informações sobre o colaborador</h2>
            <p>Nome: {nome}</p>
            <p>Matrícula: {matricula}</p>
            <p>Cargo: {cargo}</p>
        </>
    );
}
 
export default EmployeeDetails;