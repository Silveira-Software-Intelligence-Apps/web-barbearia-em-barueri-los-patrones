import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Barbearia em barueri LOS PATRONES — Barueri',
  description: 'Estilo e cuidado profissional sob medida. Na Barbearia em barueri LOS PATRONES em Barueri, cada atendimento é uma experiência única.',
  keywords: 'Barbearia em barueri LOS PATRONES, barbearia, barbearia Barueri, Barueri, melhor barbearia, barbearia profissional',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Barbearia em barueri LOS PATRONES',
    description: 'Barbearia em barueri LOS PATRONES — barbearia em Barueri. Estilo e cuidado profissional sob medida. Na Barbearia em barueri LOS PATRONES em Barueri, cada atendimento é uma experiência única.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Barbearia em barueri LOS PATRONES',
  },
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
