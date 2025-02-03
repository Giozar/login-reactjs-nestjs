interface LayoutProps {
    children: React.ReactNode;
}

import Header from '../common/components/Header';
import './MainLayout.css'

export default function MainLayout({ children }: LayoutProps) {

    return (
        <div>
            <Header />

            <main>
                {children}
            </main>

            <footer>
                <p>Mi footer</p>
            </footer>
        </div>
    )
    
};
