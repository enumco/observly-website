'use client'

import { useState } from 'react'

export default function Pricing() {
  const [annual, setAnnual] = useState<boolean>(false)

  const monthlyPrice = 5
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.8)

  return (
    <section className="relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pb-20">
          {/* Header */}
          <div className="text-center pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-slate-500">
              Just <strong>5,00 € / month</strong> to get started — includes everything you need.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-8">
            <span className="text-sm text-slate-500 font-medium">Monthly</span>
            <div className="form-switch">
              <input
                type="checkbox"
                id="toggle"
                className="sr-only"
                checked={annual}
                onChange={() => setAnnual(!annual)}
              />
              <label className="bg-slate-900" htmlFor="toggle">
                <span aria-hidden="true" />
                <span className="sr-only">Toggle annual billing</span>
              </label>
            </div>
            <span className="text-sm text-slate-500 font-medium">
              Yearly <span className="text-emerald-500">(-20%)</span>
            </span>
          </div>

          {/* Pricing Card */}
          <div className="bg-slate-800 rounded-lg p-8 text-center border border-slate-700">
            <div className="text-indigo-400 font-semibold text-lg mb-2">Starter</div>
            <div className="text-4xl font-bold text-white">
              {annual ? yearlyPrice : monthlyPrice} €
              <span className="text-base font-medium text-slate-500"> / mo</span>
            </div>
            <p className="text-sm text-slate-400 mt-2">
              Billed {annual ? 'annually' : 'monthly'}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-300 text-left max-w-xs mx-auto">
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>1 server included</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>5 external service checks (HTTP, Ping, Port, TLS)</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>365 days data retention</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Scale to unlimited hosts and service checks</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>No setup fee</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Unlimited notification channels</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>Unlimited alert rules</span>
              </li>
              <li className="flex items-center">
                <span className="text-emerald-400 mr-2">✓</span>
                <span>All integrations (Discord, Slack, Email, etc.)</span>
              </li>
              <li className="flex items-center mt-4 pt-3 border-t border-slate-700">
                <span className="text-indigo-400 mr-2">➕</span>
                <span>+3,00 € per extra server</span>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 mr-2">➕</span>
                <span>+1,00 € per extra service check</span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                className="btn text-white bg-indigo-500 hover:bg-indigo-600 w-full shadow-md"
                href="/signup"
              >
                Start Free Trial →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
