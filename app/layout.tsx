import type { Metadata } from 'next';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.scss';

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
