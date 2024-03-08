import Image from 'next/image';
import Illustration from '@/public/images/hero-illustration.svg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate-800 bg-opacity-60 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none "
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          priority
          alt="Hero Illustration"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-20 pb-8 md:pt-18 md:pb-16">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[48rem]">
              {/* Copy */}
              <div className="md:pr-32">
                <h1 className="h1 font-aspekta bg-clip-text text-transparent bg-gradient-to-tr from-sky-500 via-sky-200 to-slate-200 pb-6">
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
