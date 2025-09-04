'use client'

import { getUserFrame } from "@/app/layout";
import PackagesSection from "@/components/PackagesSection";
import Head from "next/head";

export default function PackagesPage(){
    return (
      <>
        <Head>
          <title>Luxury Umrah Packages | Custom Umrah Packages - Marwah Travels Umrah</title>
          <meta name="description" content="Discover luxury, customized Umrah packages with Marwah Travels Umrah. Personalized itineraries, real-time tracking, seamless booking & 24/7 support for your spiritual journey." />
          <meta name="keywords" content="luxury umrah packages, custom umrah packages, personalized umrah, umrah booking, spiritual journey" />
          <link rel="canonical" href="https://www.mtumrah.com/pages/packages" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Luxury Umrah Packages | Custom Umrah Packages - Marwah Travels Umrah" />
          <meta property="og:description" content="Discover luxury, customized Umrah packages with Marwah Travels Umrah. Personalized itineraries, real-time tracking, seamless booking & 24/7 support for your spiritual journey." />
          <meta property="og:url" content="https://www.mtumrah.com/pages/packages" />
          
          {/* Twitter */}
          <meta name="twitter:title" content="Luxury Umrah Packages | Custom Umrah Packages - Marwah Travels Umrah" />
          <meta name="twitter:description" content="Discover luxury, customized Umrah packages with Marwah Travels Umrah. Personalized itineraries, real-time tracking, seamless booking & 24/7 support for your spiritual journey." />
        </Head>
        {getUserFrame(<PackagesSection/>)}
      </>
    );
}