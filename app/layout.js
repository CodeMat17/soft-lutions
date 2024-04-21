import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeMat Soft-lutions | HOME",
  description:
    "CodeMat Soft-lutions is a Lagos-based software development company specializing in website design, web application development, and innovative AI assistant solutions. We help businesses leverage the power of technology to achieve their goals. We weave technology into elegant solutions. Our passion lies in creating intelligent software and dynamic experiences for forward-thinking companies. We are here to transform your digital landscape.",
  keywords: [
    "web development company Enugu Nigeria",
    "website development Enugu Nigeria",
    "web application development Enugu Nigeria",
    "AI assistant development in Enugu Nigeria",
    "Nigeria software development company",
  ],
};



export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <NavBar />
          <main className="min-h-[calc(100vh-11rem)]">{children}</main> 
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
