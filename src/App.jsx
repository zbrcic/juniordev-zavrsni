import { useContext, useState } from "react";
import AdminContext from "./components/Kontekst";

function App() {
  const [tema, postaviTemu] = useState("user")
 
  function promjenaTeme(){
    postaviTemu(tema == "user" ? "admin" : "user")
  }
 
  return (
    <div>
      <h1>naslov</h1>
      <AdminContext.Provider value={tema}>
        <p>tekst</p>
      </AdminContext.Provider>
      <button onClick={promjenaTeme}>User/Admin</button>      
    </div>
  );
}

export default App;