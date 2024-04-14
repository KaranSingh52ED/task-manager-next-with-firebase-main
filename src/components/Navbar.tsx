'use client';

import Link from 'next/link';
import { buttonVariants } from './ui/Button';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React from 'react';
import SignOutButton from './SignOutButton';
import { UserNavbarActions } from './UserNavbarActions';

const Navbar = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user === null) router.push('/sign-in');
  }, [user, router]);

  return (
    <div className='fixed inset-x-0 top-0 z-[10] border-b border-zinc-300  rounded-lg ring-2 ring-red-500 shadow-2xl shadow-red-500 bg-orange-200 py-2'>
      <div className='container mx-auto flex h-full max-w-7xl items-center justify-between gap-2'>
        {/* brand */}
        <Link href='/' className='flex items-center gap-2'>
         
          <span className='text-base font-bold text-zinc-700'>
            Task Manager/ Todo List
          </span>
        </Link>
        {/* brand */}

        {/* actions */}
        {!!user ? (
          <UserNavbarActions user={user} />
        ) : (
          <Link href='/sign-in' className={buttonVariants()}>
            Sign In
          </Link>
        )}
        {/* actions */}
      </div>
    </div>
  );
};

export default Navbar;
