"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error("Request failed")

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Form */}
        <div>
          <h2 className="text-xl font-bold text-[#00FF88]">Send a Message</h2>

          {status === "success" && (
            <div className="mt-4 rounded-lg border border-[#00FF8840] bg-[#00FF8810] px-4 py-3 text-[#00FF88]">
              Message sent successfully! We&rsquo;ll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-400">
              Something went wrong. Please try again.
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="ml-3 font-medium underline hover:no-underline"
              >
                Retry
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#F0FDF4]">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[#00FF8820] bg-[#0D1117] px-4 py-2.5 text-[#F0FDF4] placeholder-[#94A3B8] outline-none transition focus:border-[#00FF88] focus:ring-1 focus:ring-[#00FF88]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#F0FDF4]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-[#00FF8820] bg-[#0D1117] px-4 py-2.5 text-[#F0FDF4] placeholder-[#94A3B8] outline-none transition focus:border-[#00FF88] focus:ring-1 focus:ring-[#00FF88]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#F0FDF4]">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full resize-y rounded-lg border border-[#00FF8820] bg-[#0D1117] px-4 py-2.5 text-[#F0FDF4] placeholder-[#94A3B8] outline-none transition focus:border-[#00FF88] focus:ring-1 focus:ring-[#00FF88]"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-[#00FF88] px-6 py-2.5 font-semibold text-[#080C10] transition hover:bg-[#00FF88]/90 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Company info */}
        <div>
          <h2 className="text-xl font-bold text-[#00FF88]">Get in Touch</h2>
          <div className="mt-6 space-y-6 text-[#94A3B8]">
            <div className="rounded-xl border border-[#00FF8820] bg-[#0D1117] p-6">
              <h3 className="font-semibold text-[#F0FDF4]">Email</h3>
              <a
                href="mailto:norwegianspark@gmail.com"
                className="mt-1 block text-[#00FF88] hover:underline"
              >
                norwegianspark@gmail.com
              </a>
            </div>

            <div className="rounded-xl border border-[#00FF8820] bg-[#0D1117] p-6">
              <h3 className="font-semibold text-[#F0FDF4]">Phone</h3>
              <a
                href="tel:+4799737467"
                className="mt-1 block text-[#00FF88] hover:underline"
              >
                +47 99 73 74 67
              </a>
            </div>

            <div className="rounded-xl border border-[#00FF8820] bg-[#0D1117] p-6">
              <h3 className="font-semibold text-[#F0FDF4]">Company</h3>
              <p className="mt-1 text-[#F0FDF4]">NorwegianSpark SA</p>
              <p className="text-sm">Org. no. 834 984 172</p>
            </div>
          </div>

          <div className="mt-8 text-sm text-[#94A3B8]">
            <p>
              See also:{" "}
              <Link href="/about" className="text-[#00FF88] hover:underline">About us</Link>
              {" "}&middot;{" "}
              <Link href="/privacy" className="text-[#00FF88] hover:underline">Privacy policy</Link>
              {" "}&middot;{" "}
              <Link href="/disclosure" className="text-[#00FF88] hover:underline">Affiliate disclosure</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
