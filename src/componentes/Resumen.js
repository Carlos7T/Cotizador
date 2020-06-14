
import React,{Fragment} from 'react';
import styled from '@emotion/styled';
import {primeraMayuscula} from '../helper';

const ContendorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #FFF;
margin-top: 1rem;


`;



const Resumen = ({datos}) => {
    //extraer datos
    const {marca, year, plan}=datos;

    if (marca===''|| year === ''|| plan ==='') return null;

    return ( 
        <ContendorResumen>
        <h2>Resume de cotizacion</h2>
        <ul>
    <li>Marca:{ primeraMayuscula(marca) }</li>
    <li>Plan:{primeraMayuscula(plan)}</li>
    <li>Año del Auto:{primeraMayuscula(year)}</li>
        </ul>
        </ContendorResumen>
     );
}
 
export default Resumen;
