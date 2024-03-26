import Image from 'next/image';
import Illustration from '@/public/images/hero-illustration.svg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden ">
      {/* Bg */}
      <div
        className="absolute inset-0 dark:bg-gradient-to-t dark:from-slate-800/50 pointer-events-none bg-gradient-to-t from-slate-50 to-white "
        aria-hidden="true"
      />

      {/* Illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none "
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none "
          priority
          alt="Hero Illustration"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-8 md:pt-20 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[48rem]">
              {/* Copy */}
              <div className="md:pr-32">
                <h1 className="h1 font-aspekta bg-clip-text text-transparent dark:bg-gradient-to-tr dark:from-sky-500 dark:via-sky-200 dark:to-slate-200 bg-gradient-to-tr from-sky-600 via-sky-500 to-slate-400 ">
                  BEYOND BYTES
                </h1>
                {/* <p className="text-lg text-slate-400 mb-8">
                  Our landing page template works on all devices, so you only
                  have to set it up once, and get beautiful results forever.
                </p> */}
              </div>
              {/* Logos */}
              <div className="md:flex flex-wrap items-center md:space-x-5 text-center"></div>

              {/* Image */}
              <div className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[42rem] lg:left-[48rem] mt-12 md:mt-0 md:top-1/2 md:-translate-y-1/2">
                {/* <Image
                  src={HeroImage}
                  className="md:max-w-none mx-auto"
                  width="332"
                  height="298"
                  alt="Hero Illustration"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
