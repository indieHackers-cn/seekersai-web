import { Inter, Roboto_Mono, Krona_One } from 'next/font/google'
import SupabaseProvider from './supabase-provider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import { Metadata } from "next";
import 'styles/main.css';

const meta = {
  title: 'seekersai.com',
  description: 'resume accompany me, job will follow me By seekersai.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://www.seekersai.com'
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  robots: meta.robots,
  icons: {
    icon: meta.favicon,
  },
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    images: meta.cardImage,
    siteName: meta.title,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vercel',
    title: meta.title,
    description: meta.description,
    images: meta.cardImage
  }
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const krona_one = Krona_One({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-krona",
})
 

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {

  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${krona_one.variable}`}>
      <body className="bg-gradient-to-r from-zinc-200 to-cyan-500 loading">
        <SupabaseProvider>
          {/* @ts-expect-error */}
          <Navbar />
          <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
            {children}
          </main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
