import { Inter, Roboto_Mono, Poppins } from 'next/font/google'
import SupabaseProvider from './supabase-provider';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import { PropsWithChildren } from 'react';
import { Metadata } from "next";
import 'styles/main.css';

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

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '500', '700', '800', '900'],
})
 

const meta = {
  title: 'seekersai.com',
  description: 'resume accompany me, job will follow me By seekersai.',
  cardImage: '/og.png',
  robots: 'follow, index',
  favicon: '/favicon.ico',
  url: 'https://www.seekersai.com'
};

export const metadata: Metadata = {
  metadataBase: new URL(meta.url),
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
    site: '@hey2SK',
    title: meta.title,
    description: meta.description,
    images: meta.cardImage
  }
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {

  return (
    <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${poppins.variable}`}>
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
