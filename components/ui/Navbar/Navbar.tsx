import Link from 'next/link';

import { createServerSupabaseClient } from '@/app/supabase-server';
import Logo from '@/components/icons/Logo';

import s from './Navbar.module.css';
import Avatar from '@/components/ui/Navbar/avatar';


export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-5">
          <div className="flex items-center flex-1">
            <Link href="/" className={s.logo} aria-label="Logo">
              <Logo />
            </Link>
            <nav className="hidden mt-1 ml-20 space-x-4 lg:block" id="nav-item">
              {/* 这些将全部更新成新页面 */}
              <Link href="#apps" className={s.link}>
                App
              </Link>
              <Link href="/blog" className={s.link}>
                Blog
              </Link>
              <Link href="/billing" className={s.link}>
                Billing
              </Link>
              {user && (
                <Link href="/create" className={s.link}>
                  Create
                </Link>
              )}
            </nav>
          </div>
          <div className="flex justify-end flex-1">
            {user ? (
              <Avatar user={user} />
            ) : (
              <Link href="/signin">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
