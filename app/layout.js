import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "HOME | CodeMat Soft-lutions",
    template: "%s | CodeMat Soft-lutions",
  },
  description:
    "CodeMat Soft-lutions is a software development company that specialises in the development of sleek, responsive and dynamic websites and web applications. We also develop innovative AI assistant solutions. We help businesses leverage the power of technology to achieve their goals. We weave technology into elegant solutions. Our passion lies in creating intelligent software and dynamic experiences for forward-thinking companies. We are here to transform your digital landscape.",
  keywords: [
    "web development company Enugu Nigeria",
    "website development Enugu Nigeria",
    "web application development Enugu Nigeria",
    "AI assistant development in Enugu Nigeria",
    "Nigeria software development company",
  ],
  twitter: {
card: 'summary_large_image'
  },
  openGraph: {
    title: "CodeMat Soft-lutions",
    description:
      "CodeMat Soft-lutions is a software development company specializing in website design, web application development, and innovative AI assistant solutions. We help businesses leverage the power of technology to achieve their goals. We weave technology into elegant solutions. Our passion lies in creating intelligent software and dynamic experiences for forward-thinking companies. We are here to transform your digital landscape.",
    keywords: [
      "web development company Enugu Nigeria",
      "website development Enugu Nigeria",
      "web application development Enugu Nigeria",
      "AI assistant development in Enugu Nigeria",
      "Nigeria software development company",
    ],
    url: "https://soft-lutions.com.ng",
    siteName: "CodeMat Soft-lutions",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1665089325/Soft-lutions/Seo/logo.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1665089325/Soft-lutions/Seo/logo.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
    authors: ["Matthew Chukwu"],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
          <main className='min-h-[calc(100vh-11rem)]'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
