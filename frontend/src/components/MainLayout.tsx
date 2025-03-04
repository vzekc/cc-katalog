// MainLayout.tsx
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.tsx'
import { UserProvider } from '../contexts/UserProvider.tsx'
import { ExhibitionDataProvider } from '../contexts/ExhibitionDataProvider.tsx'
import { BreadcrumbProvider } from '../contexts/BreadcrumbProvider.tsx'

const MainLayout = () => {
  return (
    <UserProvider>
      <ExhibitionDataProvider>
        <BreadcrumbProvider>
          <NavBar />
          <Outlet />
        </BreadcrumbProvider>
      </ExhibitionDataProvider>
    </UserProvider>
  )
}

export default MainLayout
