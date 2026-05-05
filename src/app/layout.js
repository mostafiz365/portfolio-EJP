import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mostafizur Rahman | Digital Experiences",
  description: "Professional portfolio of Mostafizur Rahman, building high-performance digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden`}>
        <SmoothScroll>
          <CursorFollower />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
