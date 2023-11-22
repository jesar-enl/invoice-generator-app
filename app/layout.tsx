import type { Metadata } from 'next';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.scss';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Invoicer',
  description:
    'Generate an online Invoice in less than 2 minutes using Invoicer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position='top-right' reverseOrder={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
