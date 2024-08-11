// app/layout.tsx
import { Providers } from '@/app/CharaUiConfig/providers'; // Ensure the path is correct
import { ReactNode } from 'react';
import Navbar from '../components/NavBar';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    
       <div>
        
        <Navbar/>
        {children}
       </div>
  );
}
