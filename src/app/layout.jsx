import "./globals.css";
import {DM_Sans, Montserrat} from 'next/font/google'

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: "Forfun TOP10",
  description: "Crie seu TOP 10 de músicas do Forfun e descubra com qual membro da banda você deu match",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${dm.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
