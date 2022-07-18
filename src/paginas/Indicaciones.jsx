import {Link} from 'react-router-dom';
import styled from '@emotion/styled'

const Indicaciones = () => {
    const Componente = styled.div`
        background-color:white;
        width: 90%;
        margin:auto;
        padding:2rem;
        border-radius:1rem;
  `;
   const Indicaciones = styled.h2`
        text-transform:uppercase;
        text-align:center;
  `;
  return (
    
         <Componente>
        
        
        
              <Indicaciones>Indicaciones</Indicaciones> 
              <ol>
                 <li>
                    calentamiento de 15 minutos previo antes de iniciar la actividad fisica 
                 </li>
                 <li>
                    El primer ejercicico de la serie se iniciara con un peso mayor a ejecutar entre 6 a 8 repeticiones
                 </li>
                 <li>
                    El segundo ejercicio ejecutara con un peso menor al anterior y se incrementara las repeticiones entre 8 a 10
                 </li>
                 <li>
                    El tercer ejercicio se hara una disminucion de peso a realizar el fallo muscular
                 </li>
                 <li>
                    Se ralizaran los tres ejercicios de manera continua y al terminar se realizara un descanzo de 2 minutos entre cada serie
                 </li>
                 <li>
                    realizar un circuito de triceps y en el ultimo ejercicio realizar un bombeo hasta alcanzar el fallo muscular 
                 </li>
                 
              </ol>
              <Link to='/'className='link2'>volver</Link>
    </Componente>
    
   
  )
}

export default Indicaciones