import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca,obtenerPlan} from '../helper';


class App extends Component {

    cotizarSeguro=(datos)=>{
        const {marca,plan,year}=datos;

        // Agregar una base de 2000

        let resultado=2000;

        // Obtener la diferencia de años y por cada año restar el 3%
        
        const diferencia=obtenerDiferenciaAnio(year);
        console.log('La diferencia es '+ diferencia)

        // por cada año restar el 3% al valor del seguro
    
        resultado-=((diferencia*3)*resultado)/100;
        console.log(resultado);
        // Americano 15% Asiatico 5% y europeo 30% de incremento al valor actual

        resultado=calcularMarca(marca)*resultado;
       
        // el plan del auto, el basico incrementa el valor 20% y cobertura completa 50%

        let incrementoPlan=obtenerPlan(plan);
        console.log(incrementoPlan);
        // dependiendo del plan incrementar

        resultado=parseFloat(incrementoPlan*resultado).toFixed(2);
        
        console.log(resultado);

        // ya tenemos el costo
    }


  render() {
    return (
      <div className="contenedor">
        <Header 
        title="Cotizador de Seguro de Auto"
        />

        <div className="contenedor-formulario">
        <Formulario
            cotizarSeguro={this.cotizarSeguro}
        />
        </div>

      </div>
    );
  }
}

export default App;
