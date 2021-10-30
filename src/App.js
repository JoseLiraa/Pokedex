import React from "react";
import PokemonList from "./screens/PokemonList";
import Header from "./screens/Header";
class App extends React.Component{
  render(){
    return(
     <>
     <div style={{backgroundColor:"#FDFEFE "}}>
     <Header />
     <div className="container">
      <PokemonList />
      </div>
    </div>
      </>
    )
  }
}

export default App;