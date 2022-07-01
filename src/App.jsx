import "./App.css";
import "./style/RootPathStyles.css";
import "./style/PokedexStyles.css";
import "./style/PokemonCardStyles.css";
import "./style/PokedexIdStyles.css";
import "./style/Error404Styles.css"
import '../src/style/ListPokemonsStyles.css'
import { Routes, Route } from "react-router-dom";
import RootPath from "./components/home/RootPath";
import PrivateRoute from './components/privateRoute/PrivateRoute'
import Pokedex from "./components/pokedex/Pokedex";
import PokedexId from "./components/pokedex/PokedexId";
import { useState } from "react";
import Error from "./components/privateRoute/Error";

function App() {
  // con este useState controlo las rutas protegidas.
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootPath setIsLogged={setIsLogged}/>} />

        <Route element={<PrivateRoute isLogged={isLogged}/>}>

          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexId />} />

        </Route>

        <Route path="/error404" element={<Error/>}/>

      </Routes>
    </div>
  );
}

export default App;
