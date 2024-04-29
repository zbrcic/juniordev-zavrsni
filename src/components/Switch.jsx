import { useContext } from 'react';
import AdminContext from "./Kontekst";
 
function Tipka(props) {
  const tema = useContext(AdminContext)
  return(
    <>
      <button className={tema} onClick={() => props.klik}>{props.natpis}</button>     
    </>
  ) 
}

export default Tipka;