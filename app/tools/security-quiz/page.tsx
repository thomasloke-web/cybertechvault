"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const questions = [
  {
    id: 1,
    question: "Do you use the same password on multiple sites?",
    options: [
      { text: "Yes, often", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Rarely", score: 1.5 },
      { text: "Never", score: 2 },
    ],
  },
  {
    id: 2,
    question: "Do you use a VPN?",
    options: [
      { text: "Never", score: 0 },
      { text: "Sometimes (public WiFi only)", score: 1 },
      { text: "Always", score: 2 },
    ],
  },
  {
    id: 3,
    question: "How often do you update your software?",
    options: [
      { text: "Almost never", score: 0 },
      { text: "When reminded", score: 1 },
      { text: "Automatically, always", score: 2 },
    ],
  },
  {
    id: 4,
    question: "Do you use two-factor authentication?",
    options: [
      { text: "No", score: 0 },
      { text: "On some accounts", score: 1 },
      { text: "On all important accounts", score: 2 },
    ],
  },
  {
    id: 5,
    question: "Do you have antivirus installed?",
    options: [
      { text: "No", score: 0 },
      { text: "Free version", score: 1 },
      { text: "Paid full protection", score: 2 },
    ],
  },
]

function getLevel(score: number) {
  if (score <= 3) return { label: "CRITICAL", color: "#ef4444", message: "Your data is at serious risk." }
  if (score <= 5) return { label: "WEAK", color: "#f97316", message: "You're exposed to common threats." }
  if (score <= 7) return { label: "MODERATE", color: "#eab308", message: "Better than average, but gaps remain." }
  if (score <= 9) return { label: "STRONG", color: "#00FF88", message: "Good security hygiene." }
  return { label: "VAULT", color: "#00FF88", message: "You're locked down tight." }
}

function getRecommendations(answers: number[]) {
  const recs: { issue: string; fix: string; links: { slug: string; name: string }[] }[] = []

  if (answers[0] !== undefined && answers[0] < 1.5) {
    recs.push({
      issue: "Weak password habits",
      fix: "A password manager creates and stores unique passwords for every account.",
      links: [
        { slug: "1password", name: "1Password" },
        { slug: "bitwarden", name: "Bitwarden" },
      ],
    })
  }
  if (answers[1] !== undefined && answers[1] < 2) {
    recs.push({
      issue: "No VPN protection",
      fix: "A VPN encrypts your internet traffic and hides your IP address.",
      links: [
        { slug: "nordvpn", name: "NordVPN" },
        { slug: "expressvpn", name: "ExpressVPN" },
      ],
    })
  }
  if (answers[2] !== undefined && answers[2] < 2) {
    recs.push({
      issue: "Software not auto-updating",
      fix: "An antivirus with auto-update keeps you protected against new threats.",
      links: [{ slug: "bitdefender", name: "Bitdefender" }],
    })
  }
  if (answers[3] !== undefined && answers[3] < 2) {
    recs.push({
      issue: "Missing two-factor authentication",
      fix: "A 2FA app adds a second layer of security to all your accounts.",
      links: [
        { slug: "authy", name: "Authy" },
        { slug: "duo-security", name: "Duo Security" },
      ],
    })
  }
  if (answers[4] !== undefined && answers[4] < 2) {
    recs.push({
      issue: "Insufficient antivirus protection",
      fix: "Full antivirus protection catches malware, ransomware, and phishing.",
      links: [{ slug: "norton-360", name: "Norton 360" }],
    })
  }

  return recs
}

export default function SecurityQuizPage() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setShowResult(true)
      const totalScore = Math.round(newAnswers.reduce((a, b) => a + b, 0))
      const level = getLevel(totalScore)
      if (typeof window !== "undefined") {
        window.va?.("event", {
          name: "quiz_complete",
          properties: { tool: "security-quiz", score: totalScore, level: level.label },
        })
      }
    }
  }

  const totalScore = Math.round(answers.reduce((a, b) => a + b, 0))
  const level = getLevel(totalScore)
  const recs = getRecommendations(answers)

  const handleShare = () => {
    const text = `My security score: ${totalScore}/10 — cybertechvault.com/tools/security-quiz`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

  const restart = () => {
    setCurrentQ(0)
    setAnswers([])
    setShowResult(false)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10] pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {!showResult ? (
            <div>
              <div className="text-center mb-12">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00FF88]">Security Quiz</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-4">
                  How Secure Are <span className="text-[#00FF88]">You</span>?
                </h1>
                <p className="text-[#94A3B8] mt-3">Find out in 60 seconds. No signup required.</p>
              </div>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-xs text-[#94A3B8] mb-2">
                  <span>Question {currentQ + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQ) / questions.length) * 100)}%</span>
                </div>
                <div className="h-1 bg-[#0D1117] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#00FF88] rounded-full transition-all duration-500"
                    style={{ width: `${((currentQ) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="animate-fade-in" key={currentQ}>
                <div className="p-8 rounded-2xl bg-[#0D1117] border border-[#00FF8820]">
                  <h2 className="text-xl font-bold text-[#F0FDF4] mb-6">
                    {questions[currentQ].question}
                  </h2>
                  <div className="space-y-3">
                    {questions[currentQ].options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleAnswer(opt.score)}
                        className="w-full text-left p-4 rounded-xl border border-[#00FF8820] text-[#F0FDF4] hover:border-[#00FF88] hover:bg-[#00FF8808] transition-all font-sans"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#94A3B8]">Your Result</span>
              </div>

              {/* Score display */}
              <div className="p-8 rounded-2xl bg-[#0D1117] border border-[#00FF8820] text-center mb-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#1a2a1a" strokeWidth="8" />
                    <circle
                      cx="60" cy="60" r="50" fill="none" stroke={level.color} strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={`${2 * Math.PI * 50 * (1 - totalScore / 10)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold" style={{ color: level.color }}>{totalScore}</span>
                    <span className="text-sm text-[#94A3B8]">/10</span>
                  </div>
                </div>

                <div
                  className="inline-flex px-4 py-2 rounded-full text-sm font-bold font-mono uppercase tracking-wider mb-4"
                  style={{ backgroundColor: `${level.color}20`, color: level.color, border: `1px solid ${level.color}40` }}
                >
                  {level.label}
                </div>

                <p className="text-lg text-[#F0FDF4] font-bold mb-2">{level.message}</p>

                <div className="flex justify-center gap-3 mt-6">
                  <button
                    onClick={handleShare}
                    className="px-6 py-3 bg-[#00FF88] text-black font-bold rounded-full text-sm hover:bg-[#00E87A] transition-colors"
                  >
                    {copied ? "Score Copied!" : "Share Your Score"}
                  </button>
                  <button
                    onClick={restart}
                    className="px-6 py-3 border border-[#00FF8830] text-[#00FF88] rounded-full text-sm hover:bg-[#00FF8810] transition-colors"
                  >
                    Retake Quiz
                  </button>
                </div>
                {copied && (
                  <p className="text-xs text-[#00FF88] mt-3 animate-fade-in">Challenge your friends!</p>
                )}
              </div>

              {/* Recommendations */}
              {recs.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#F0FDF4]">Personalized Recommendations</h3>
                  {recs.map((rec, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-[#0D1117] border border-[#00FF8820]">
                      <p className="text-sm text-red-400 font-mono uppercase tracking-wider mb-2">{rec.issue}</p>
                      <p className="text-[#F0FDF4] mb-4">{rec.fix}</p>
                      <div className="flex flex-wrap gap-2">
                        {rec.links.map((link) => (
                          <Link
                            key={link.slug}
                            href={`/go/${link.slug}`}
                            rel="nofollow sponsored"
                            target="_blank"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00FF88] text-black font-bold rounded-full text-xs hover:bg-[#00E87A] transition-colors"
                          >
                            Try {link.name}
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M2 5h6M5 2l3 3-3 3" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {recs.length === 0 && (
                <div className="p-6 rounded-2xl bg-[#00FF8808] border border-[#00FF8830] text-center">
                  <p className="text-[#00FF88] font-bold text-lg mb-2">Impressive security posture!</p>
                  <p className="text-[#94A3B8]">
                    You&apos;re already well-protected. Check our{" "}
                    <Link href="/journal" className="text-[#00FF88] underline">latest guides</Link>{" "}
                    to stay ahead of emerging threats.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
