import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "./contact-form"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Contact Us — CyberTechVault",
    description:
      "Get in touch with CyberTechVault. Questions, feedback, or business enquiries — we're here to help.",
    alternates: { canonical: `${siteUrl}/contact` },
    openGraph: {
      title: "Contact Us — CyberTechVault",
      description: "Get in touch with CyberTechVault. Questions, feedback, or business enquiries.",
      url: `${siteUrl}/contact`,
    },
  }
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10] text-[#F0FDF4]">
        <section className="relative overflow-hidden border-b border-[#00FF8820] py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF8808] to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact <span className="text-[#00FF88]">Us</span>
            </h1>
            <p className="mt-4 text-[#94A3B8]">
              Have a question, suggestion, or business enquiry? We&rsquo;d love to hear from you.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
