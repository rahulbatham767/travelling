import { Inter } from "next/font/google";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import { Providers } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Familt Travel",
  description:
    "Family travel is a unique and enriching experience that allows families to bond, create lasting memories, and explore new destinations together. Whether it's a weekend getaway, a summer vacation, or a holiday trip, traveling with family offers opportunities for everyone to enjoy and learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
