'use client';

import Features from '@/app/statics/features/page'
import Contact from '@/app/statics/contact/page'

export default function Home() {

  return (
    <section className="bg-gradient-to-r from-zinc-200 to-cyan-500">
      <div className="max-w-3xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div className="flex items-center align-items sm:flex-col sm:align-center"></div>
          <p className="mt-4 text-center text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
              resume accompany me,
          </p>
          <p className="mt-4 text-center text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
            job will follow me{' '}
          <a
              className="text-indigo-500 underline"
              // href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              By seekersai.
            </a>
          </p>
          <p className="mt-6 text-xl leading-8 font-normal text-zinc-700 font-poppins">
            Upload the resume, type the job, and 
            the best new remote jobs for you at leading companies and startups will pop up.
          </p>
        </div>
        <LogoCloud />
        <Features />
        <Contact />
    </section>
    );

  
}

function LogoCloud() {
  return (
    <div>
      <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
        Brought to you by
      </p>
      <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
        <div className="flex items-center justify-start">
          <a href="https://nextjs.org" aria-label="Next.js Link">
            <img
              src="/nextjs.svg"
              alt="Next.js Logo"
              className="h-12 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="h-6 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://stripe.com" aria-label="stripe.com Link">
            <img
              src="/stripe.svg"
              alt="stripe.com Logo"
              className="h-12 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://supabase.io" aria-label="supabase.io Link">
            <img
              src="/supabase.svg"
              alt="supabase.io Logo"
              className="h-10 text-white"
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://github.com" aria-label="github.com Link">
            <img
              src="/github.svg"
              alt="github.com Logo"
              className="h-8 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
