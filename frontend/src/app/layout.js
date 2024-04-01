import Toast from "@/ui/Toast.js"; // Adjust the import path as needed
import "leaflet/dist/leaflet.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { AuthProvider } from "../../auth/AuthProvider.js";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <Head>
          <title>SideEYE</title>
          <meta name="description" content="" />
        </Head>
        <body className={inter.className}>
          <main>{children}</main>
          <Toast /> {/* Include the Toast component */}
        </body>
      </html>
    </AuthProvider>
  );
}
