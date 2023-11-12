'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { useSupabase } from '@/app/supabase-provider';
import { useRouter } from 'next/navigation';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Avatar({ user }: { user: any }) {
    return (
        <div>
            {user ? (
                <div>
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                {/* <span className="absolute -inset-1.5" /> */}
                                <span className="sr-only">Open user menu</span>
                                <Image
                                    className="h-8 w-8 rounded-full"
                                    src='/favicon.ico'
                                    height={16}
                                    width={16}
                                    alt={`${user?.avatar_url}`}
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link href="/account">
                                            <button
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'flex w-full px-4 py-2 text-sm text-gray-700'
                                                )}
                                            >
                                                {user?.email || "Account"}
                                            </button>
                                        </Link>
                                    )}
                                </Menu.Item>
                                <SignOutButton />
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            ) : (
                <Link href="/signin" className="font-poppins inline-flex items-center leading-6 transition ease-in-out duration-75 cursor-pointer text-black rounded-md p-1">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Sign in
                    </button>
                </Link>
            )}
        </div>
    );
}


function SignOutButton() {
    const router = useRouter();
    const { supabase } = useSupabase();
    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.refresh()
    }
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    className={classNames(
                        active ? 'bg-gray-100' : '',
                        'flex w-full px-4 py-2 text-sm text-gray-700'
                    )}
                    onClick={handleSignOut}
                >
                    Sign out
                </button>
            )}
        </Menu.Item>
    )
}