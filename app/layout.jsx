import './globals.css';
import { Kameron } from 'next/font/google';
import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/react';

const kameron = Kameron({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Waldo Immigration and Refugee Services Inc',
  description:
    'Waldo Immigration and Refugee Services Inc was founded to help Refugees and Immigrants have access to safe, clean and affordable housing. Waldo strives to create a brighter tomorrow by helping families become homeowners and increase their financial literacy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={kameron.className}>
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div>{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
