import UserAuthForm from '@/components/UserAuthForm'
import Link from 'next/link';

const SignIn = () => {
  return (

    <div className="container mx-auto p-3 flex w-full flex-col justify-center divide-y rounded-lg bg-gradient-to-br from-red-300 to-blue-300 ring-2 ring-blue-500 shadow-inner shadow-red-300 space-y-6 sm:w-[400px]">


      <div className='flex flex-col space-y-2 text-center'>
        <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
        <p className='mx-auto max-w-xs text-sm'>
          By continuing, you are setting up a Task Manager account and agree
          to our User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm mode='sign-in' />
      <p className='px-8 text-center text-sm text-muted-foreground'>
        New to Task Manager?{' '}
        <Link
          href='/sign-up'
          className='hover:text-brand text-sm underline underline-offset-4'
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
