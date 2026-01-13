import ShowUserLogged from "./ShowUserLogged";
import UserDetails from "./UserDetails";
import Footer from "./Footer";
import EmployeeDetails from "./EmployeeDetails";
const Aside = () => {
    return (
        <>
            <ShowUserLogged login="helo" nome="Heloísa de Almeida Pereira" />
            <UserDetails cargo="Amor da minha vida" matricula="0065523" idade={22}/>
            <EmployeeDetails 
                nome="Fulano de Tal"
                matricula="taltaltal"
                cargo={11}
            />
            <EmployeeDetails 
                nome="Ciclano de Tal"
                matricula="diferente"
                cargo={12}
            />
            <EmployeeDetails 
                nome="Beltrano de Tal"
                matricula="outra"
                cargo={13}
            />
        </>
     );
}
 
export default Aside;