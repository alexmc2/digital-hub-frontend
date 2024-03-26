'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeaderLogo from '@/components/ui/header-logo';
import Illustration from '@/public/images/hero-illustration.svg';

import Input from '@/components/Input';
import InputError from '@/components/InputError';
import Label from '@/components/Label';

import { useAuth } from '@/utils/hooks/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus';

export default function Login() {
  const router = useRouter();

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };
  return (
    <>
      {/* Site header */}

      {/* <header className="absolute w-full z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <HeaderLogo />

            <nav className="flex grow">
              <div className="flex grow justify-end flex-wrap items-center">
                <div className="text-sm text-slate-500">
                  Not a member?{' '}
                  <Link
                    className="font-medium text-sky-400 hover:text-sky-400 transition duration-150 ease-in-out"
                    href="/register"
                  >
                    Join
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header> */}

      <main className="grow">
        <section className="relative">
          {/* Illustration */}
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
            aria-hidden="true"
          >
            <Image
              src={Illustration}
              className="max-w-none"
              priority
              alt="Hero Illustration"
            />
          </div>

          <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-2xl mx-auto text-center">
                <h1 className="h2 font-aspekta bg-clip-text text-transparent  dark:from-sky-500 dark:via-sky-200 dark:to-slate-200 bg-gradient-to-tr from-sky-500 via-sky-500 to-sky-500  pb-12">
                  Welcome back to Beyond Bytes
                </h1>
              </div>

              {/* Form */}
              <div className="flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="card w-96 bg-neutral-50 dark:bg-slate-800 shadow-sm flex flex-col items-center justify-center p-6">
                    <AuthSessionStatus className="mb-4" status={status} />
                    <form onSubmit={submitForm}>
                      {/* Email Address */}
                      <div className="mb-4">
                        <label htmlFor="email">Email</label>

                        <Input
                          id="email"
                          type="email"
                          value={email}
                          className="block mt-1 w-full"
                          onChange={(event) => setEmail(event.target.value)}
                          required
                          autoFocus
                        />

                        <InputError messages={errors.email} className="mt-2" />
                      </div>

                      {/* Password */}
                      <div className="mt-4 ">
                        <div htmlFor="password">Password</div>

                        <Input
                          id="password"
                          type="password"
                          value={password}
                          className="block mt-1 w-full "
                          onChange={(event) => setPassword(event.target.value)}
                          required
                          autoComplete="current-password"
                        />

                        <InputError
                          messages={errors.password}
                          className="mt-2"
                        />
                      </div>

                      {/* Remember Me */}
                      <div className="block mt-4">
                        <label
                          htmlFor="remember_me"
                          className="inline-flex items-center"
                        >
                          <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-sky-600 shadow-sm focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50"
                            onChange={(event) =>
                              setShouldRemember(event.target.checked)
                            }
                          />

                          <span className="ml-2 text-sm dark:text-gray-400 text-gray-600">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="flex items-center justify-end mt-4">
                        <Link
                          href="/forgot-password"
                          className="underline text-sm dark:text-gray-400 text-gray-600 hover:text-gray-900"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                      <div className="mt-2">
                        <button
                          type="submit"
                          className="btn-sm text-white bg-sky-400 hover:bg-sky-600 w-full"
                        >
                          Sign In
                        </button>
                      </div>
                      {errors && (
                        <p className="text-red-500 text-center mt-4">
                          {errors}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
