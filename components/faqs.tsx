export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">FAQs</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What is included in the 5,00 € / month plan?</h4>
                <p className="text-slate-500">
                  You get 1 server with full monitoring, 5 external checks (HTTPS, Ping, Port, Certificate), unlimited team members, and access to all integrations.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Can I monitor services like websites or gameservers?</h4>
                <p className="text-slate-500">
                  Yes! With external checks, you can monitor websites, ports, pings, and even certificate expiry. Perfect for web apps, gameservers, APIs and more.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How do I add more servers or checks?</h4>
                <p className="text-slate-500">
                  Just head to your dashboard and add resources anytime. Additional servers cost 3,00 € / month and each check is 1,00 € / month.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Is there a free trial?</h4>
                <p className="text-slate-500">
                  Yes — we offer a 14-day free trial with no credit card required. Explore everything with full access.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Do I need to install anything?</h4>
                <p className="text-slate-500">
                  For internal server monitoring, a simple one-liner script installs our lightweight agent. External checks require no installation.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What integrations are available?</h4>
                <p className="text-slate-500">
                  You can send alerts to Discord, Slack, Telegram, WhatsApp, E-Mail, and SMS — all included in every plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
