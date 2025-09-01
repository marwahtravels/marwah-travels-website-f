'use client'


import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingComponents from '@/components/FloatingComponents';
import Space from '@/components/Space';

import { ReactNode } from 'react';


export function getUserFrame(child: any) {
  return (<body style={{ }} className="bg-center">
    <div
    style={{ zIndex: -1,
    backgroundImage: "url('/images/kaba2.jpg')",
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center'}}
    ></div>
    <Navbar />

    <main className="relative overflow-hidden">

      {child}


    </main>
    <Space h={50} />
    <Footer />


    <FloatingComponents />
  </body>);
}
export function getAdminFrame(child: any) {
  return (<body style={{ backgroundSize: 'cover', backgroundAttachment: 'fixed' }} className="bg-center">
    

    <main >

      {child}


    </main>

  </body>);
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Marwah Travels - Premium Umrah Packages | Makkah & Madina Tours</title>
        <meta name="description" content="Discover premium Umrah packages with Marwah Travels. Professional Umrah services including visa, flights, hotels in Makkah & Madina. Book your spiritual journey today." />
        <meta name="keywords" content="Umrah packages, Umrah travel, Makkah tours, Madina tours, Umrah visa, Umrah flights, Umrah hotels, Islamic travel, religious tourism" />
        <meta name="author" content="Marwah Travels" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mtumrah.com/" />
        <meta property="og:title" content="Marwah Travels - Premium Umrah Packages" />
        <meta property="og:description" content="Professional Umrah services including visa, flights, hotels in Makkah & Madina. Book your spiritual journey today." />
        <meta property="og:image" content="https://www.mtumrah.com/logo2.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.mtumrah.com/" />
        <meta property="twitter:title" content="Marwah Travels - Premium Umrah Packages" />
        <meta property="twitter:description" content="Professional Umrah services including visa, flights, hotels in Makkah & Madina." />
        <meta property="twitter:image" content="https://www.mtumrah.com/logo2.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://database.mtumrah.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Marwah Travels",
              "description": "Professional Umrah travel services",
              "url": "https://www.mtumrah.com",
              "logo": "https://www.mtumrah.com/logo2.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15636 71ST AVE 28B",
                "addressLocality": "FLUSHING",
                "addressRegion": "NEW YORK",
                "postalCode": "11367",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+16463895945",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.trustpilot.com/review/mtumrah.com"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}