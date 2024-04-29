import { useContext, useState } from "react";
import Header from "./components/Header";
import AdminContext from "./components/Kontekst";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [tema, postaviTemu] = useState("user")
 
  function promjenaTeme(){
    postaviTemu(tema == "user" ? "admin" : "user")
  }
 
  return (
    <div>
      <Header/>
      <AdminContext.Provider value={tema}>
        <p>tekst</p>
      </AdminContext.Provider>
      <button className="button-top" onClick={promjenaTeme}>User/Admin</button>      
    </div>
  );
}

export default App;
