import React, {useState} from "react";
import Header from "./componentes/Header";
import styled from "@emotion/styled";
import Formulario from "./componentes/Formulario";
import Resumen from "./componentes/Resumen";
import Resultados from "./componentes/Resultados";
import Spinner from "./componentes/Spinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  const [resumen,guardarResumen]=useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan:''
    }
  });
  //Extraer datos
  const {cotizacion,datos}= resumen;
  const [cargando, guardarCargando] = useState(false);


  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />
      <ContenedorFormulario>
        <Formulario

          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        
        />
          {cargando ? <Spinner/> : null}
       
       
          <Resumen
          datos={datos}
          />
          
          {!cargando ? <Resultados
            cotizacion={cotizacion}
            />: null
            }
          

        
       
      </ContenedorFormulario>
    </Contenedor>
  );
} 

export default App;
