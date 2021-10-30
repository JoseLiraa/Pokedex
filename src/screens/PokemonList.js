import React from 'react';

class PokemonList extends React.Component{
    state = {
        pokemonInfo: [],
    };

    async componentDidMount(){
        //Este método se llama durante la fase de montaje del ciclo de vida de React, es decir, después de renderizar el componente.
        //ciclo de vida que permite ejecutar el código React cuando el componente ya está colocado en el DOM

        //aca se consumira la api
        await this.PokemonListar();
    }

    PokemonListar = async()=>{
        const resultado = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200").then((response)=>response.json());
        const almacenar = resultado.results;
        const pokemonInfo = [];
        for (const datosPokemon of almacenar){
            const masInfo = await fetch(datosPokemon.url).then((response) => response.json());
            const masInfo2 = await fetch(masInfo.forms[0].url).then((response) => response.json());
            pokemonInfo.push({...datosPokemon,...masInfo, ...masInfo2});
            //console.log("url de almacenar", datosPokemon.url, datosPokemon.name);
            //console.log("mas info", masInfo);
            //console.log("mas info 2", masInfo2);
        }
        this.setState({
            pokemonInfo,
        });
    };


    render(){
        return(
            <>
            <div style={{paddingTop:20,paddingBottom:20}}>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
                {
                    this.state.pokemonInfo.map((resultado) => (
                <div class="col">
                    <div className="card" style={{backgroundColor:"#17202A"}}>
                        <div>
                        <img
                            src={resultado?.sprites.front_default}
                            alt="imagen pokemon"
                            className="card-img-top"
                        />
                        </div>
                        <div className="card-body">
                        <p className="text-warning text-center"><strong>Nombre: </strong><span className="card-text"> {resultado?.name}</span></p>
                        <p className="text-warning text-center"><strong>Tipo: </strong><span className="card-text"> {resultado?.types[0].type.name}</span></p>
                        </div>
                    </div>
                </div>
                ))
                }
                </div>
            </div>
        </>
        );
    }
}

export default PokemonList;