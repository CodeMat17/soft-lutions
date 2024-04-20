import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeMat Soft-lutions | HOME",
  description: "Homepage: CodeMat Soft-lutions is a software solution development company",
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
          <main>{children}</main> 
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
