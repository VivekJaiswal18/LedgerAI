import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WagmiConfigProvider from "./components/WagmiConfigProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
      </head>
      <WagmiConfigProvider>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <Navbar />  
          <main>{children}</main>  
          <Footer />
      </body>
      
        </WagmiConfigProvider>
    </html>
  );
}
