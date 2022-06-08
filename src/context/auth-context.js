import { createContext , useContext , useReducer } from "react"
import { authReducer } from "../reducer/auth-reducer";
const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const tokenDetails = localStorage.getItem('token') || '';
    const [state,dispatch] = useReducer(authReducer,{
        token: tokenDetails ,
        isAuth: !!tokenDetails,
        user: ""
    })
    
    return (
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { useAuth , AuthProvider }