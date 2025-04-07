"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

// Import components
import Header from './_components/Header';
import HeroSection from './_components/HeroSection';
import HomeStats from './_components/HomeStats';
import AIPower from './_components/AIpower';
import Footer from './_components/Footer';

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is already signed in, redirect to dashboard
    if (isSignedIn) {
      router.push('/dashboard');
    }
  }, [isSignedIn, router]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <HomeStats />
          <AIPower />
        </main>
        <Footer />
      </div>
    </>
  );
}
