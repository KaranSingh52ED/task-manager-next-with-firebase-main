import { Icons } from '@/components/Icons';
import UserAuthForm from '@/components/UserAuthForm';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className='container mx-auto flex w-full p-5 flex-col justify-center space-y-6  divide-y rounded-lg bg-gradient-to-br from-red-300 to-blue-300 ring-2 ring-blue-500 shadow-inner shadow-red-300  sm:w-[400px]'>
      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Sign Up</h1>
        <p className='mx-auto max-w-xs text-sm'>
          By continuing, you are setting up a Task Manager account and agree
          to our User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm mode='sign-up' />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        Already a Task Planner Pro?{' '}
        <Link
          href='/sign-in'
          className='hover:text-brand text-sm underline underline-offset-4'
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
