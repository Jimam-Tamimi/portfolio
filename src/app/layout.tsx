import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jimam Tamimi",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='scroll-smooth'>
 
      <body className={` overflow-x-hidden bg-gradient-to-br from-[#eaefff] to-[rgb(197,211,255)] dark:from-[#020e32] dark:to-[rgb(50,0,23)] dark:text-white  ${inter.className}`}>
        <ThemeProvider  defaultTheme="system" enableSystem attribute="class">
        {children}
          
        </ThemeProvider>
        
        </body>
    </html>
  );
}
