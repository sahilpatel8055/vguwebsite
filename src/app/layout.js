import "./globals.css";
import Script from "next/script";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/ico" href="/favicon-vgu.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Online VGU – Dynamic Online Degree</title>
        <meta name="description" content="Online VGU offers dynamic online degree programs including MBA, BBA, BCA, MCA, BA, MA, and M.Sc. courses with flexible learning options." />
        <meta name="keywords" content="online degree, online MBA, online BBA, online BCA, online MCA, online education, VGU" />
        
        {/* CSS Stylesheets - Load vendor CSS first */}
        <link rel="stylesheet" href="/css/index-B9e_zdRH.css" />
        <link rel="stylesheet" href="/css/inline_styles.css" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
      </head>
      <body>
        <div id="root">
          {children}
        </div>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Meta Pixel Code */}
        <noscript>
          <Image height="1" width="1" style={{display: 'none'}} src="/www.facebook.com/tr" alt="" />
        </noscript>
        <iframe height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        
        {/* Additional tracking scripts */}
        <div id="huntr-react-container-2"></div>
        
        {/* Inline scripts */}
        <Script src="/js/inline_scripts.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
