import styled from "@emotion/styled"
import icono from '../../imagenes/icono.png'

const Header = () => {

const Head = styled.header`
    padding:1rem;
    `;
const Icono = styled.img`
  width:4rem;
  height:4rem;
  display:block;
  margin:auto;
  margin-top:2rem;
  
`;
const Titulo = styled.h1`
    text-align: center ;
    text-transform: uppercase;
    color:white;
    font-family:Arial, Helvetica, sans-serif
`;


  return (
    <Head>
         <Icono 
             src={ icono }
         />
         <Titulo>planificacion semanal</Titulo>
    </Head>
  )
}

export default Header