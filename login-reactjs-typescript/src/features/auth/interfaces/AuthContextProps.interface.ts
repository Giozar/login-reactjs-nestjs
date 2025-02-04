export interface AuthContextProps {
    isAuthenticated: boolean;
    username: string;
    email: string;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    setUsername: (username: string) => void;
    setEmail: (email: string) => void;
}