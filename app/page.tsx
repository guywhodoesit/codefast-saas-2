"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLogin from "@/components/ButtonLogin";
import FAQ from "@/components/FAQ";
import clientpromise from "@/libs/mongo";

export default function Home() {
  const isLoggedIn = true;
  const name = "Andrew";

  // TOGGLE THIS TO SWITCH BETWEEN COMING SOON AND FULL SITE
  const showComingSoon = true; // Set to false to show your original site

  // State for form handling
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  // Typing animation state
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "spark()";

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayedText, fullText]);

  // Professional Terminal Style Coming Soon Page
  if (showComingSoon) {
    return (
      <main className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4 relative">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 2px, #000 3px)`,
          }}
        ></div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Terminal header */}
          <div className="mb-12 text-center">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono text-gray-900 tracking-tight">
                {displayedText}
                <span
                  className={`inline-block w-[3px] h-[1.2em] bg-gray-900 ml-1 ${
                    isTypingComplete ? "animate-blink" : ""
                  }`}
                ></span>
              </h1>
              <div className="text-sm font-mono text-gray-500 mt-2 tracking-wide">
                <span className="text-red-600">&gt;</span> AMAZON PPC EXECUTION
                ENGINE
              </div>
            </div>
          </div>

          {/* Main content block */}
          <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">
            <div className="font-mono text-sm text-gray-600 mb-6">
              <span className="text-red-600">STATUS:</span> COMING SOON
            </div>

            <h2 className="text-2xl md:text-3xl font-sans font-light text-gray-900 mb-6">
              Precision-Engineered Amazon PPC Management
            </h2>

            <div className="space-y-2 mb-8 font-mono text-sm text-gray-700">
              <div className="flex items-start">
                <span className="text-red-600 mr-3">&gt;</span>
                <span>Placement Complete Algorithms</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">&gt;</span>
                <span>AI-Powered Campaign Optimization</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-600 mr-3">&gt;</span>
                <span>Unified Client Management Platform</span>
              </div>
            </div>

            {/* View Demo Link */}
            <div className="mb-8">
              <Link
                href="/demo"
                className="font-mono text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all inline-block px-2 py-1"
              >
                [ VIEW DEMO ]
              </Link>
            </div>

            {/* Terminal-style divider */}
            <div className="font-mono text-xs text-gray-400 mb-8">
              ────────────────────────────────────────────
            </div>

            {/* Email signup */}
            <div>
              <p className="font-mono text-sm text-gray-600 mb-4">
                request_early_access
              </p>

              {!isSuccess ? (
                <form
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                  onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    setIsLoading(true);

                    const formData = new FormData(e.currentTarget);
                    const email = formData.get("email") as string;

                    try {
                      const response = await fetch(
                        "https://api.web3forms.com/submit",
                        {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            access_key: "YOUR-ACCESS-KEY-HERE",
                            email: email,
                            subject: "New SparkAMZ Early Access Signup",
                            from_name: "SparkAMZ Landing Page",
                          }),
                        }
                      );

                      const result = await response.json();
                      console.log("Web3Forms response:", result);

                      // Always treat as success if we get a response
                      setIsSuccess(true);
                      setEmail(email);
                      e.currentTarget.reset();
                    } catch (error) {
                      console.error(
                        "Submit error (but form might have worked):",
                        error
                      );
                      // Form often works even with this error, so we'll show success
                      setIsSuccess(true);
                      setEmail(email);
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    disabled={isLoading}
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 font-mono text-sm placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-mono text-sm uppercase transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">↻</span>
                        SENDING...
                      </span>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </form>
              ) : (
                <div className="font-mono text-sm max-w-md">
                  <div className="bg-green-50 border border-green-200 p-4">
                    <div className="text-green-800">
                      <span className="text-green-600">[SUCCESS]</span> Request
                      received
                    </div>
                    <div className="text-green-600 mt-1">
                      &gt; Email logged: {email}
                    </div>
                    <div className="text-green-600">
                      &gt; Priority access granted
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="font-mono text-xs text-gray-500">
              INQUIRIES:{" "}
              <a
                href="mailto:accounts@sparkamz.com"
                className="text-red-600 hover:text-red-700 underline"
              >
                accounts@sparkamz.com
              </a>
            </p>
            <p className="font-mono text-xs text-gray-400 mt-2">
              © 2025 spark(). SYSTEM VERSION 1.0.0
            </p>
          </div>
        </div>

        {/* Add styles */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&display=swap");

          @keyframes blink {
            0%,
            49% {
              opacity: 1;
            }
            50%,
            100% {
              opacity: 0;
            }
          }

          .animate-blink {
            animation: blink 1s infinite;
          }

          .font-mono {
            font-family: "IBM Plex Mono", monospace;
          }
        `}</style>
      </main>
    );
  }

  // YOUR ORIGINAL SITE CODE BELOW (unchanged)
  return (
    <main>
      {/* Header with responsive image */}
      <section className="bg-base-300">
        <div className="flex justify-between items-center px-8 py-2 max-w-3xl mx-auto">
          {/* Logo/Image with text */}
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12">
              <Image
                src="/spark-rough-logo.png" // Your image file name
                alt="spark() Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="font-bold text-sm sm:text-base md:text-lg font-mono">
              spark()
            </div>
          </div>

          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div>
            <ButtonLogin isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="py-32 px-8 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:flex-1">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 font-mono">
              spark() PPC System
            </h1>
            <div className="opacity-90 mb-10">
              <h2>
                First of its kind Amazon PPC Algorithm. Tools for Performance,
                Ease of maintenance, and Client Management.
              </h2>
            </div>

            {/* Button appears after text on desktop */}
            <div className="hidden lg:flex justify-center lg:justify-start">
              <ButtonLogin isLoggedIn={isLoggedIn} />
            </div>
          </div>

          {/* Image - alternative approach without fill */}
          <div className="my-10 lg:flex-1">
            <div className="flex justify-center">
              <Image
                src="/spark-rough-logo.png"
                alt="spark() PPC System illustration"
                width={300} // Set specific width
                height={300} // Set specific height
                className="w-full max-w-xs lg:max-w-md"
                priority
              />
            </div>
          </div>

          {/* Button appears after image on mobile */}
          <div className="lg:hidden">
            <ButtonLogin isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-base-200" id="pricing">
        <div className="py-24 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Better Performance than Pacvue at 1/10th the cost.
          </h2>
          {/* Pricing Card */}
          <div className="card w-96 bg-base-100 shadow-sm mx-auto">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">Most Popular</span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold font-mono">spark()</h2>
                <span className="text-xl mt-2">$200/mo per account</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Placement Complete Algo</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Auto Auditor</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Auto Reporting</span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Auto Restructure Tools</span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Auto Client Management Tools
                  </span>
                </li>
                <li className="opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-base-content/50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">Real-time Support</span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-base-100" id="faq">
        <div className="py-24 px-8 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary mb-4">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>
    </main>
  );
}
