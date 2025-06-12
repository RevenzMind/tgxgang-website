import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/general/header";
import Footer from "./components/general/footer";

// 👇 import the providers
import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "The Gabloxia Gang",
  description: "El nuevo mejor executor sin key y nivel 7, con mas de 4000 scripts y actualizaciones constantes. ¡Descubre el potencial del exploiting con TGX!",
  openGraph: {
    title: "The Gabloxia Gang",
    description: "El nuevo mejor executor sin key y nivel 7, con mas de 4000 scripts y actualizaciones constantes. ¡Descubre el potencial del exploiting con TGX!",
    url: "https://tgx.gabloxia.com",
    siteName: "The Gabloxia Gang",
    images: [
      {
        url: "https://tgxgang.vercel.app/build/_assets/TGX%20Wallpaper-AMYI4TIG.png",
        width: 1200,
        height: 630,
        alt: "TGX - The Gabloxia Gang Executor",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
