import Toast from "@/ui/Toast.js"; // Adjust the import path as needed
import "leaflet/dist/leaflet.css";
import { Space_Grotesk } from "next/font/google";

import { AuthProvider } from "../../auth/AuthProvider.js";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
          <Toast /> {/* Include the Toast component */}
        </body>
      </html>
    </AuthProvider>
  );
}
export const metadata = {
  title: "SideEYE",
};
