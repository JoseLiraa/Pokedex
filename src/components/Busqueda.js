import React from "react";

class Busqueda extends React.Component{

    constructor(props){
        super(props)

        this.state={
            tipoPoke:"",
            nombrePoke:""
        }
    }

    setTipoPoke=(tipoPoke)=>{
        this.setState({
            tipoPoke:tipoPoke
        })
    }

    setNombrePoke=(nombrePoke)=>{
        this.setState({
            nombrePoke:nombrePoke
        })
    }

    setFiltrado=(filtrado,pokeFiltrado)=>{
        this.props.setFiltrado(filtrado);
        this.props.setpokemonInfoFiltrada(pokeFiltrado);
        this.setState({
            tipoPoke:"",
            nombrePoke:""
        })
    }
    render(){

        const {pokemonInfo}=this.props;
        const {tipoPoke, nombrePoke} = this.state;

        const FiltroTipo = pokemonInfo.filter((data) => data.types[0].type.name === tipoPoke)
        const FiltroNombre = pokemonInfo.filter((data)=> data.name === nombrePoke)

        console.log("Imprime poke filtrado", pokemonInfo)

        return(
        <>
        <div className="row g-2" style={{marginTop:10}}>
            <div className="col-md">
                <div className="form-floating mb-3">
                    <input
                    className="form-control" id="floatingInput"
                    placeholder="fire" onChange={(event)=>this.setTipoPoke(event.target.value)}
                    value={tipoPoke}
                    />
                    <label for="floatingInput">Buscar por tipo</label>
                </div>
            </div>

            <div className="col-md">
                <button className="btn btn-dark btn-lg" style={{marginLeft:10,width:"100%"}}
                onClick={()=>this.setFiltrado(true, FiltroTipo)}>
                Buscar Tipo</button>
            </div>

            <div className="col-md">
                <div className="form-floating mb-3" style={{marginLeft:10}}>
                    <input
                    className="form-control" id="floatingInput"
                    placeholder="charmander" onChange={(event)=> this.setNombrePoke(event.target.value)}
                    value={nombrePoke}
                    />
                    <label for="floatingInput">Bucar por nombre</label>
                </div>
            </div>

            <div className="col-md">
                <button className="btn btn-dark btn-lg" style={{marginLeft:10,width:"100%"}}
                onClick={()=>this.setFiltrado(true, FiltroNombre)}>
                Buscar Nombre</button>
            </div>
        </div>
        </>
        );
    }

}

export default Busqueda;