import {Link} from 'react-router-dom';
import styled from '@emotion/styled'

const Dia1 = () => {
    
    const ContenedorT = styled.div`
        width:90%;
  `;
   const Titulo = styled.h2`
        text-align:center;
        font-weight:700;
        font-size:2rem;
        text-transform:uppercase;
`;
  const Volver = styled.a`
        font-weight:200;
        font-size:1.2rem;
        padding:5px 15px;
        color:white;
        border:solid white 1px;
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
          <Link to='/'className='link'>volver</Link> <Titulo>pecho/triceps</Titulo>
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

export default Dia1