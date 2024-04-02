import "leaflet/dist/leaflet.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "../../auth/AuthProvider.js";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // console.log("usersssss",user);

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
