import { useContext, useState } from "react";
import Header from "./components/Header";
import AdminContext from "./components/Kontekst";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tipka from "./components/Tipka";


function App() {
  const [uloga, setUloga] = useState("user");
 
  function promjenaUloge(){
    setUloga(uloga === "user" ? "admin" : "user")
  }
 
  return (
    <div>
      <Header/>
      
      <AdminContext.Provider value={{uloga, setUloga}}>
        <Tipka/>
      </AdminContext.Provider>     
    </div>
  );
}

export default App;
