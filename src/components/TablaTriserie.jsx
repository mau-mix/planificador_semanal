import React from 'react'
import styled from '@emotion/styled'

const TablaTriserie = () => {
    const ContenedorT = styled.div`
        
        
        width:90%;
  `;
    const TablaTriserie = styled.table`
        width:90% ;
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
         <TablaTriserie>
                <SubTitulo><Musculo>pecho/ </Musculo>triserie 1</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>press barra/h</TD>
                        <TD>4</TD>
                        <TD>6</TD>
                     </tr>
                     <tr>
                        <TD>cristos</TD>
                        <TD>4</TD>
                        <TD>8</TD>
                     </tr>
                     <tr>
                        <TD>crossover</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
               <TablaTriserie>
                <SubTitulo><Musculo>pecho/ </Musculo> triserie 2</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>press mancuerna/Inc.</TD>
                        <TD>4</TD>
                        <TD>6</TD>
                     </tr>
                     <tr>
                        <TD>pull over</TD>
                        <TD>4</TD>
                        <TD>8</TD>
                     </tr>
                     <tr>
                        <TD>peack deck</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
               <TablaTriserie>
                <SubTitulo><Musculo>triceps/ </Musculo>circuito</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>copa 2 manos</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>medios fondos</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>lagartijas cerradas</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>extencion tricep/cuerda</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
    </ContenedorT>
  )
}

export default TablaTriserie