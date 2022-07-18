import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import Dia1 from './paginas/Dia1'
import Dia2 from './paginas/Dia2'
import Dia3 from './paginas/Dia3'
import Indicaciones from './paginas/Indicaciones'

function App() {



  return (

    <BrowserRouter>
            <Routes>
                   <Route path='/' element={ <Layout />}>
                      <Route index element={ <Inicio />}/>
                      <Route path='dia1' element={<Dia1 />}/>
                      <Route path='dia2' element={<Dia2 />}/>
                      <Route path='dia3' element={<Dia3 />}/>
                      <Route path='indicaciones' element={<Indicaciones />}/>
                   </Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
