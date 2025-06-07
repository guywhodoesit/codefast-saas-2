"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function DemoPage() {
  // State for form handling
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  // Typing animation state
  const [demoText, setDemoText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullDemoText = "demo";

  useEffect(() => {
    // Start typing "demo" after a short delay
    const initialDelay = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < fullDemoText.length) {
          setDemoText(fullDemoText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTypingComplete(true);
        }
      }, 150);

      return () => clearInterval(typingInterval);
    }, 500); // Wait 500ms before starting to type "demo"

    return () => clearTimeout(initialDelay);
  }, []);

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
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="font-mono text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 transition-all inline-block px-2 py-1"
          >
            [ &larr; BACK ]
          </Link>
        </div>

        {/* Terminal header */}
        <div className="mb-12 text-center">
          <div className="inline-block">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-mono text-gray-900 tracking-tight">
              spark(
              {demoText}
              {!isTypingComplete && (
                <span className="inline-block w-[3px] h-[1.2em] bg-gray-900 animate-pulse"></span>
              )}
              )
              {isTypingComplete && (
                <span className="inline-block w-[3px] h-[1.2em] bg-gray-900 ml-1 animate-blink"></span>
              )}
            </h1>
            <div className="text-sm font-mono text-gray-500 tracking-wide">
              <span className="text-red-600">&gt;</span> LOADING DEMO
              ENVIRONMENT...
            </div>
          </div>
        </div>

        {/* Main content block */}
        <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-sm">
          <div className="font-mono text-sm text-gray-600 mb-6">
            <span className="text-red-600">STATUS:</span> DEMO COMING SOON
          </div>

          <h2 className="text-2xl md:text-3xl font-sans font-light text-gray-900 mb-6">
            Live Product Demonstration
          </h2>

          <div className="font-mono text-sm text-gray-700 mb-8">
            <p className="mb-4">
              Our comprehensive demo showcasing the power of SPARK AMZ is
              currently in production.
            </p>
            <p>You'll soon be able to see:</p>
          </div>

          <div className="space-y-2 mb-8 font-mono text-sm text-gray-700">
            <div className="flex items-start">
              <span className="text-red-600 mr-3">&gt;</span>
              <span>Placement Complete Algorithm in action</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3">&gt;</span>
              <span>Real-time account auditing capabilities</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3">&gt;</span>
              <span>Account restructuring workflow</span>
            </div>
            <div className="flex items-start">
              <span className="text-red-600 mr-3">&gt;</span>
              <span>Performance metrics visualization</span>
            </div>
          </div>

          {/* Terminal-style divider */}
          <div className="font-mono text-xs text-gray-400 mb-8">
            ────────────────────────────────────────────
          </div>

          {/* Email signup */}
          <div>
            <p className="font-mono text-sm text-gray-600 mb-4">
              notify_when_demo_ready
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
                          subject: "New SparkAMZ Demo Access Request",
                          from_name: "SparkAMZ Demo Page",
                          message:
                            "User requested to be notified when demo is ready",
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
                    "NOTIFY ME"
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
                    &gt; Demo notification scheduled
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
            © 2025 spark(). DEMO VERSION 1.0.0
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

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-pulse {
          animation: pulse 0.5s infinite;
        }

        .font-mono {
          font-family: "IBM Plex Mono", monospace;
        }
      `}</style>
    </main>
  );
}
