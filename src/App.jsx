import Routes from "@/pages/Route"
import ScreenLoader from './components/ScreenLoader/ScreenLoader'
import { useAuthContext } from './context/AuthContext'

const App = () => {
  const {isAppLoading} = useAuthContext();
  return (
    <>
      {
        isAppLoading ?
          <ScreenLoader />
          :
          <Routes />
      }
    </>
  )
}

export default App