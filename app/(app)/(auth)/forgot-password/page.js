'use client';

import Button from '@/components/auth/Button';
import Input from '@/components/auth/Input';
import InputError from '@/components/auth/InputError';
import Label from '@/components/auth/Label';
import { useAuth } from '@/utils/hooks/auth';
import { useState } from 'react';
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus';
import HeaderLogo from '@/components/ui/header-logo';

const Page = () => {
  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  });

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    forgotPassword({ email, setErrors, setStatus });
  };

  return (
    <>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="h2 font-aspekta bg-clip-text text-transparent  dark:from-sky-500 dark:via-sky-200 dark:to-slate-200 bg-gradient-to-tr from-sky-500 via-sky-500 to-sky-500  pb-12">
              Reset Password
            </h1>
          </div>

          <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="card w-96 bg-neutral-50 dark:bg-slate-800 shadow-sm flex flex-col items-center justify-center p-6">
                <div className="my-8 mx-8 text-md ">
                  Forgot your password? No problem. Just let us know your email
                  email address and we will email you a password reset link that
                  that will allow you to choose a new one.
                </div>

                <form onSubmit={submitForm}>
                  {/* Email Address */}
                  <div>
                    <label htmlFor="email">Email</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      className="block mt-1 w-full"
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      autoFocus
                    />

                    <InputError messages={errors.email} className="mt-2" />
                  </div>

                  <div className="flex items-center justify-end mt-4"></div>
                </form>

                <div className="card-actions">
                  <button
                    type="submit"
                    className="btn-sm text-white bg-sky-400 hover:bg-sky-600 w-full my-6"
                  >
                    Send Password Reset Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Session Status */}
          <AuthSessionStatus className="mb-4" status={status} />
        </div>
      </div>
    </>
  );
};

export default Page;
