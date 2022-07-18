import {Link} from 'react-router-dom';
import styled from '@emotion/styled'

const Dia2 = () => {
    const ContenedorT = styled.div`
       width:90%;
  `;
     const Titulo = styled.h2`
     text-align:center;
     font-weight:700;
     font-size:2rem;
     text-transform:uppercase;
`;
    const TablaTriserie = styled.table`
        width:100% ;
        border: solid white 1px;
        margin-top:1rem;
  `;
    const TH = styled.th`
        width:30% ;
        border: solid white 1px;
        text-transform:uppercase;
    `;
    const TD = styled.td`
       border: solid white 1px;
       text-transform:uppercase;
  `;
    const SubTitulo = styled.caption`
    color:white ;
    text-transform:uppercase;
    
    font-weight:300;
 `;
   const Musculo = styled.span`
   font-weight:700;
   font-size:1.1rem;
`;
   
  return (
    <ContenedorT>
       <Link to='/'className='link'>volver</Link> <Titulo>espalda/biceps</Titulo>
         <TablaTriserie>
         <SubTitulo><Musculo>espalda/ </Musculo>triserie 1</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>jalon abierto prono</TD>
                        <TD>4</TD>
                        <TD>8</TD>
                     </tr>
                     <tr>
                        <TD>remo/h</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>hiperextenciones</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
               <TablaTriserie>
                <SubTitulo><Musculo>espalda/ </Musculo> triserie 2</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>jalon/polea/neutro</TD>
                        <TD>4</TD>
                        <TD>8</TD>
                     </tr>
                     <tr>
                        <TD>remo/inclinado/mancuernas</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>peso muerto</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
               <TablaTriserie>
                <SubTitulo><Musculo>biceps/ </Musculo>circuito</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>curl/barra/pie</TD>
                        <TD>4</TD>
                        <TD>8</TD>
                     </tr>
                     <tr>
                        <TD>curl/mancuernas/alternados</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>curl/martillo</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>curl/biceps/cuerda</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
    </ContenedorT>
  )
}

export default Dia2