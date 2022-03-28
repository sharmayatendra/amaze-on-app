import { createContext , useContext , useReducer } from "react"
import { authReducer } from "../reducer/auth-reducer";
const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        token: "" ,
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