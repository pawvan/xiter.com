import { Providers } from '@/app/CharaUiConfig/providers'; // Ensure the path is correct
import { ReactNode } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add any custom head elements here */}
      </head>
      <body>
        <Providers>
          <Navbar /> {/* Navbar added here */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
