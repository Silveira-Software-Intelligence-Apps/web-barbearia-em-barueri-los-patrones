import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Barbearia em barueri LOS PATRONES',
  description: 'barbearia de qualidade em Barueri. Atendimento rápido e profissional.',
  openGraph: { title: 'Barbearia em barueri LOS PATRONES', description: 'Barbearia em barueri LOS PATRONES — barbearia em Barueri. barbearia de qualidade em Barueri. Atendimento rápido e profissional.', type: 'website' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
