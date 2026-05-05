import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'animate.css';
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat",
  description: "An online marketplace for buying and booking Qurbani animals easily and securely.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme= "light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <Toaster position="top-center" /> 
        {children}
        </body>
    </html>
  );
}
