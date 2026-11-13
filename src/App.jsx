import React, { useState } from 'react'
import Routes from "@/pages/Route"
import ScreenLoader from './components/ScreenLoader/ScreenLoader'

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(false)
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