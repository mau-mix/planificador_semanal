import {Link} from 'react-router-dom';
import styled from '@emotion/styled'

const Dia3 = () => {
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
        <Link to='/'className='link'>volver</Link> <Titulo>pierna/hombro</Titulo>
         <TablaTriserie>
         
                <SubTitulo><Musculo>pierna/ </Musculo>triserie 1</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>sentadilla libre</TD>
                        <TD>3</TD>
                        <TD>8</TD>
                     </tr>
                     <tr>
                        <TD>desplantes/alter</TD>
                        <TD>3</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>costurera/pant</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
               <TablaTriserie>
                <SubTitulo><Musculo>pierna/ </Musculo> triserie 2</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>prensa</TD>
                        <TD>3</TD>
                        <TD>8</TD>
                     </tr>
                     <tr>
                        <TD>curl/femoral/h</TD>
                        <TD>3</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>extenciones</TD>
                        <TD>3</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
               <TablaTriserie>
                <SubTitulo><Musculo>hombro/ </Musculo>circuito</SubTitulo>
                     <tr>
                         <TH>ejercicio</TH>
                         <TH>series</TH>
                         <TH>repeticiones</TH>
                     </tr>
                     <tr>
                        <TD>press Arnold</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>frontal/disco</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>lateral/manc</TD>
                        <TD>4</TD>
                        <TD>10</TD>
                     </tr>
                     <tr>
                        <TD>crunch/hom/manc</TD>
                        <TD>4</TD>
                        <TD>fallo</TD>
                     </tr>

               </TablaTriserie>
    </ContenedorT>
  )
}

export default Dia3