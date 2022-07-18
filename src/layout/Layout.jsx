import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import styled from '@emotion/styled'

const Layout = () => {

    const ContenedorLayout = styled.div`
     display: flex;
     flex-direction:column;
     align-items:center;
   
`;
  return (

    <ContenedorLayout>
        <Header />
        <Outlet/>      
    </ContenedorLayout>
  )
}

export default Layout