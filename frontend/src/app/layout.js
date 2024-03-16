import "leaflet/dist/leaflet.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>SideEYE</title>
        <meta name="description" content="" />
      </Head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
