'use client';
import { Menu } from '@headlessui/react'
import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SignOutButton() {
  const router = useRouter();
  const { supabase } = useSupabase();
  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.replace("/")
  }
  return (
    <Menu as="div" className="relative ml-3">
      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <button
              //    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              className={classNames(
                active ? 'bg-gray-100' : '',
                'flex w-full px-4 py-2 text-sm text-gray-700'
              )}
              onClick={handleSignOut}
            >¡
              Sign out
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
