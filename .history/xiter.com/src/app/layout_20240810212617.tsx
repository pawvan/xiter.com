import { Providers } from '@/app/CharaUiConfig/providers'; // Ensure the path is correct
import { ReactNode } from 'react';

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
          <Nav
          {children}
        </Providers>
      </body>
    </html>
  );
}
