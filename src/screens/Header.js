import React from 'react';
import encabezado from '../img/header.jfif'

class Header extends React.Component{
    render(){
        return(
            <div>
            <img
                src={encabezado}
                alt="encabezado"
                style={{width:"100%",height:200,}}
            />
            </div>
        )
    }
}
export default Header;