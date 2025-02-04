import { createContext, ReactNode, useContext, useState } from "react";
import { AuthContextProps } from "../interfaces/AuthContextProps.interface";

const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
    username: '',
    email: '',
    setIsAuthenticated: () => {},
    setUsername: () => {},
    setEmail: () => {}
})

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            username,
            email,
            setIsAuthenticated,
            setUsername,
            setEmail
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuthContext debe ser usado dentro de un AuthProvider');
    }
    return context;
}