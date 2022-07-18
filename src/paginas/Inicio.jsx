import {useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'


const Inicio = () => {

  const navigate = useNavigate()

  const Componente = styled.div`
    display:flex;
    background-color:white;
    width: 70%;
   
    padding:2rem;
    border-radius:1rem;
  `;
  const Side = styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
  `;
  const Seccion = styled.div`
    width:70%;
  `;
  const Boton = styled.button`
    background-color:#18978F;
    margin-top:1rem;
    color: white;
    padding:.6rem;
    text-transform:uppercase;
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
    border-radius:5px;
`;
  const Parrafo = styled.p`
    color:#18978F;
    font-family:Arial, Helvetica, sans-serif;
    font-weight:600;
    font-size:18px;
    text-transform:uppercase;
    margin-top:2.8rem;
    text-align:center;
  `;
  const SubTitulo = styled.h2`
    text-align:center;
    color:#18978F;
    font-weight:800;
    font-size:1.5rem;
`;

  return (
    
        
       <Componente>
           <Side>
                <SubTitulo>Dia</SubTitulo>
                 <Boton
                       onClick={() => navigate('/dia1')}
                 >Dia 1</Boton>
                  <Boton
                       onClick={() => navigate('/dia2')}
                 >Dia 2</Boton>
                  <Boton
                       onClick={() => navigate('/dia3')}
                 >Dia 3</Boton>
                  <Boton
                       onClick={() => navigate('/indicaciones')}
                 >Indicaciones</Boton>
           </Side>
           <Seccion>
                <SubTitulo>musculos a trabajar</SubTitulo>
                <Parrafo>pecho y tricep</Parrafo>
                <Parrafo>espalda y biceps</Parrafo>
                <Parrafo>pierna y hombro</Parrafo>
           </Seccion>
       </Componente>
    
    
  )
}

export default Inicio