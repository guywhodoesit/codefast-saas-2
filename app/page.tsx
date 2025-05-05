import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";
import FAQ from "@/components/FAQ";

export default function Home() {
  const isLoggedIn = true;
  const name = "Andrew";

  const greeting1 = "Hello " + name;
  console.log(greeting1);

  const greeting2 = `Hello ${isLoggedIn ? name : "there"}`;
  console.log(greeting2);

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
                alt="SPARK AMZ Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="font-bold text-sm sm:text-base md:text-lg">
              SPARK AMZ
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
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
              SPARK Amazon PPC System
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
                alt="SPARK Amazon PPC System illustration"
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
                <h2 className="text-3xl font-bold">Spark</h2>
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
