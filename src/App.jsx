import { useContext, useState } from "react";
import Header from "./components/layout/Header";
import AdminContext from "./components/Kontekst";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tipka from "./components/layout/Tipka";


function App() {
  const [uloga, setUloga] = useState("user");
 
  function promjenaUloge(){
    setUloga(uloga === "user" ? "admin" : "user")
  }
 
  return (
    <div>      
      <AdminContext.Provider value={{uloga, setUloga}}>
        <Header/>
        <div className="admin-toggle">
          <Tipka/>
        </div>
      </AdminContext.Provider>     
    </div>
  );
}

export default App;
