'use client'

import { useState } from 'react'
import Image from 'next/image'
import Illustration from '@/public/images/features-illustration-02.svg'
import FeaturesImage from '@/public/images/features-image.png'

export default function Features02() {
  const [category, setCategory] = useState<string>('1')

  return (
    <section className="relative border-t border-slate-800">
      {/* Background gradient */}
      <div
        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-slate-800 to-transparent opacity-25 h-[25rem] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Background illustration */}
      <div
        className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 mt-40 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image src={Illustration} className="max-w-none" width={1440} height={453} alt="Features Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            {/* Gradient SVG Text */}
            <svg width="300" height="70" viewBox="0 0 300 100" className="mx-auto">
              <defs>
                <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="60"
                fontFamily="Segoe UI, sans-serif"
                fontSize="48"
                fontWeight="600"
                fill="url(#gradientText)"
              >
                Observly
              </text>
            </svg>
            <h2 className="h2 font-hkgrotesk mt-4">Built for modern monitoring — simple, powerful, and fast</h2>
          </div>

          {/* Feature Box */}
          <div className="bg-slate-800/60 rounded-sm overflow-hidden">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Category Buttons */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    {[
                      { id: '1', label: 'Everyone' },
                      { id: '2', label: 'Freelancers' },
                      { id: '3', label: 'Gameservers' },
                    ].map(({ id, label }) => (
                      <button
                        key={id}
                        className={`btn-sm px-3 py-1 shadow-xs rounded-full m-1.5 ${
                          category === id
                            ? 'text-white bg-indigo-500'
                            : 'text-slate-300 bg-slate-700 hover:bg-slate-600 border-slate-600'
                        }`}
                        onClick={() => setCategory(id)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Content */}
                {category === '1' && (
                  <div>
                    <h3 className="h3 font-hkgrotesk mb-2">Instant observability for any app</h3>
                    <div className="text-lg text-slate-500">
                      Whether you're running gameservers, websites, or other apps, Observly gives you full visibility with zero config. One-line install, automatic instrumentation, and beautiful dashboards out of the box.
                    </div>
                  </div>
                )}
                {category === '2' && (
                  <div>
                    <h3 className="h3 font-hkgrotesk mb-2">Monitoring made for solo devs</h3>
                    <div className="text-lg text-slate-500">
                      Forget complex setups. As a freelancer, time is everything — Observly gets you up and running in seconds so you can monitor, and stay on top of issues with no overhead or maintenance.
                    </div>
                  </div>
                )}
                {category === '3' && (
                  <div>
                    <h3 className="h3 font-hkgrotesk mb-2">Stay ahead of crashes, lag, and downtime</h3>
                    <div className="text-lg text-slate-500">
    Running a game server? Observly helps you track performance, detect issues, and get real-time alerts before players feel the pain. CPU spikes, latency, and disconnects — all visible at a glance.
</div>
                  </div>
                )}
              </div>

              {/* Feature image */}
              <Image src={FeaturesImage} className="md:max-w-none" width={480} height={414} alt="Feature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
