import './globals.css';
import { Poppins } from 'next/font/google';
import Navbar from './components/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Waldo Housing Assistance Center Inc',
  description:
    'Waldo Housing Assistance Center Inc was founded to help Refugees and Immigrants have access to safe, clean and affordable housing. Waldo strives to create a brighter tomorrow by helping families become homeowners and increase their financial literacy.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
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
      </body>
    </html>
  );
}
