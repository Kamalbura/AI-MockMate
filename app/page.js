"use client";

import React from 'react';
import Header from './_components/Header';
import HeroSection from './_components/HeroSection';
import HomeStats from './_components/HomeStats';
import AIPower from './_components/AIpower';
import Footer from './_components/Footer';

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HeroSection />
        <HomeStats />
        <AIPower />
        <Footer />
      </div>
    </>
  );
}
