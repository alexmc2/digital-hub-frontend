// import Link from 'next/link';
// import AuthCard from '@/app/(auth)/AuthCard';
// import ApplicationLogo from '@/components/ApplicationLogo';

// export const metadata = {
//   title: 'Laravel',
// };

// const AuthLayout = ({ children }) => {
//   return (
//     <div>
//       <div className="font-sans text-gray-900 antialiased dark:text-gray-400 dark:bg-slate-900 bg-white ">
//         {children}
//       </div>
//     </div>
//   );
// };

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export const metadata = {
  title: 'Laravel',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="grow font-sans text-gray-900 antialiased dark:text-gray-400 dark:bg-slate-900 bg-white  ">
        {children}
      </main>
    </>
  );
}
