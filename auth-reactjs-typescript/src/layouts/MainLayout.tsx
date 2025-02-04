interface LayoutProps {
    children: React.ReactNode;
}

import Header from '../common/components/Header';
import { AuthProvider } from '../features/auth/context/AuthContext';
import './MainLayout.css'

export default function MainLayout({ children }: LayoutProps) {

    return (
        <AuthProvider>
            <div>
            <Header />

            <main>
                {children}
            </main>

            <footer>
                <p>Mi footer</p>
            </footer>
        </div>
        </AuthProvider>
    )
    
};
