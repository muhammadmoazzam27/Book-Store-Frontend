import { createContext, useContext, useReducer } from 'react'

const Auth = createContext();

const initialState = { isAuth: false, user: {} }

const reducer = (state, action) => {

  switch (action.type) {
    case "SET_LOGIN":
      return { isAuth: true, user: payload.user }
    case "SET_LOGOUT":
      return { isAuth: false, user: {} }
    default:
      return state
  }

}

const AuthContext = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Auth.Provider value={{ ...state, dispatch }}>
      {children}
    </Auth.Provider>
  )
}

export default AuthContext

export const useAuthContext = () => useContext(Auth)