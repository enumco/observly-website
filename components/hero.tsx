import Image from 'next/image'
import Link from 'next/link'

import HeroImage from '@/public/images/screenshot-observly-app.png'

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-hkgrotesk mb-6" data-aos="fade-up">
              Monitor your systems beautifully. Get alerted instantly.
            </h1>
            <p className="text-xl text-slate-500 mb-10" data-aos="fade-up" data-aos-delay="100">
              Observly helps you keep your infrastructure in check with stunning graphs, real-time alerts, and zero setup hassle. Stay ahead of outages — effortlessly.
            </p>
            <p className="text-sm text-slate-400 mb-8 flex justify-center items-center" data-aos="fade-up" data-aos-delay="150">
              <span className="text-2xl mr-2">🇪🇺</span> Hosted privacy-safe in Europe
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div>
                <Link className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-xs group" href="/signup">
                  Get Started Free{' '}
                  <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="pt-16 md:pt-20" data-aos="fade-up" data-aos-delay="300">
            <Image className="mx-auto" src={HeroImage} width={920} height={518} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  )
}

