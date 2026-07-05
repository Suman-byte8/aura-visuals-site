import { Manrope, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "Aura Visuals | Elevate Your Digital Presence",
  description: "Modern digital marketing, branding, websites, and creative solutions tailored for businesses ready to grow. We blend high-end aesthetics with strategic functionality.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} light h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-secondary-fixed selection:text-on-secondary-fixed"
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />

        {/* Google Analytics — GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VGXC6L6RW2"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VGXC6L6RW2');
          `}
        </Script>
      </body>
    </html>
  );
}
