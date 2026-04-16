import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EaseusProductCards } from "@/components/review/easeus-product-cards"

const categories = [
  { name: "VPN", slug: "vpn", icon: "🛡️", description: "Browse privately. Bypass restrictions. Stay anonymous." },
  { name: "Password Managers", slug: "password-managers", icon: "🔑", description: "One master password. Total digital security." },
  { name: "Antivirus & EDR", slug: "antivirus", icon: "🦠", description: "Real-time protection against malware, ransomware, and threats." },
  { name: "Identity Protection", slug: "identity-protection", icon: "👤", description: "Monitor your data. Stop breaches before they hurt." },
  { name: "Dark Web Monitoring", slug: "dark-web-monitoring", icon: "🌐", description: "Find out if your data is already for sale." },
  { name: "Two-Factor Auth", slug: "two-factor-authentication", icon: "🔐", description: "Add a second lock to every account." },
]

const stats = [
  { value: "300+", label: "Tools Reviewed" },
  { value: "20", label: "Expert Guides" },
  { value: "Weekly", label: "Updated" },
  { value: "Free", label: "To Use" },
]

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <Image
            src="/hero-banner.jpg"
            alt="Cybersecurity digital fortress visualization | CyberTechVault"
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAIxAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFERIhQVFhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aq1ra3q2TS1xG5cqRIiOuAYQ6+VKHuAOgMk4GAc9RnFFFAH//2Q=="
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080C10]/90 via-[#080C10]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C10] via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF8810] border border-[#00FF8830] mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                <span className="text-xs text-[#00FF88] font-mono uppercase tracking-wider">Systems Active</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#F0FDF4] mb-4 leading-[1.1]">
                Secure <span className="text-[#00FF88] glow-text">Everything.</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-[#94A3B8] font-light mb-6">
                Your Digital Fortress Starts Here
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed mb-8 max-w-xl">
                Compare the world&apos;s best VPNs, password managers, antivirus tools, and identity protection. Expert-tested. Independently reviewed. Always honest.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/tools/security-quiz"
                  className="px-8 py-4 bg-[#00FF88] text-black font-bold rounded-full text-sm hover:bg-[#00E87A] transition-all glow-box hover:shadow-[0_0_30px_#00FF8860]"
                >
                  Find My Security Stack &rarr;
                </Link>
                <Link
                  href="/categories"
                  className="px-8 py-4 border border-[#00FF88] text-[#00FF88] font-bold rounded-full text-sm hover:bg-[#00FF8810] transition-all"
                >
                  Browse All Tools
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <div className="text-2xl font-bold text-[#00FF88] font-mono">{stat.value}</div>
                    <div className="text-xs text-[#94A3B8] uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-[#080C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00FF88]">Categories</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-4">Protect Yourself</h2>
              <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
                Six critical layers of digital security. Each one independently tested and reviewed by our team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className="group p-6 rounded-2xl bg-[#0D1117] border border-[#00FF8820] hover:border-[#00FF8860] transition-all duration-300 hover:shadow-[0_0_30px_#00FF8815]"
                >
                  <div className="text-3xl mb-4">{cat.icon}</div>
                  <h3 className="text-lg font-bold text-[#F0FDF4] group-hover:text-[#00FF88] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{cat.description}</p>
                  <div className="mt-4 text-[#00FF88] text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <EaseusProductCards />

        {/* Security Quiz CTA */}
        <section className="py-24 bg-[#0D1117] border-y border-[#00FF8820]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#A855F720] border border-[#A855F740] mb-6">
              <span className="text-xs text-[#A855F7] font-mono uppercase tracking-wider">Interactive Tool</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mb-4">
              How Secure Are <span className="text-[#00FF88]">You</span>?
            </h2>
            <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
              Take our free 60-second Security Score Quiz. Answer 5 quick questions and get personalized tool recommendations to protect yourself online.
            </p>
            <Link
              href="/tools/security-quiz"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#00FF88] text-black font-bold rounded-full text-sm hover:bg-[#00E87A] transition-all animate-pulse-glow"
            >
              Start the Quiz &rarr;
            </Link>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="py-24 bg-[#080C10]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00FF88]">Our Process</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-4">Why Trust CyberTechVault?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "200+ Hours Testing", desc: "Every tool goes through rigorous hands-on testing. Speed tests, leak checks, feature audits — we do the work so you don't have to.", icon: "⏱️" },
                { title: "Independent Reviews", desc: "Our editorial recommendations are set before affiliate partnerships. We turn down deals that don't align with honest assessment.", icon: "⚖️" },
                { title: "Real-World Scenarios", desc: "We test from multiple locations, on real networks, simulating actual threats. Lab conditions don't reflect real life — our tests do.", icon: "🌍" },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-[#0D1117] border border-[#00FF8810]">
                  <div className="text-2xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-[#F0FDF4] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
