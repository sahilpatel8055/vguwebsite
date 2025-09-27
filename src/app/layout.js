
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online VGU – Dynamic Online Degree</title>
        <link rel="icon" type="image/ico" href="/favicon-vgu.ico" />
        {/* Google tag (gtag.js) */}
        <script async src="/www.googletagmanager.com/gtag/js"></script>
        {/* Meta Pixel Code and other analytics/scripts can be added here */}
        <link rel="stylesheet" href="/assets/index_b9e_zdrh.css" />
        <link rel="stylesheet" href="/css/inline_styles.css" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
