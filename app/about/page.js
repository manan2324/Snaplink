import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weights: "100 900",
});

export default function About() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className={`font-bold text-3xl sm:text-4xl text-center mb-6 sm:mb-8 ${poppins.className}`}>
            About SnapLink
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-3 sm:mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              SnapLink is dedicated to providing the simplest and most efficient URL shortening service available. 
              We believe that sharing links should be effortless, which is why we&apos;ve eliminated unnecessary barriers 
              like registration and login requirements.
            </p>
            <p className="text-gray-700">
              Our goal is to make the web more accessible and shareable, one shortened link at a time.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-3 sm:mb-4">Why Choose SnapLink?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-2">✓</span>
                <span><strong>No Registration Required:</strong> Start shortening URLs immediately without creating an account</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-2">✓</span>
                <span><strong>Completely Free:</strong> All features are available at no cost</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-2">✓</span>
                <span><strong>Fast & Reliable:</strong> Lightning-fast URL generation with high uptime</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-2">✓</span>
                <span><strong>Simple Interface:</strong> Clean, intuitive design that anyone can use</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-2">✓</span>
                <span><strong>Unlimited URLs:</strong> Shorten as many links as you need</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-3 sm:mb-4">How It Works</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">1. Paste Your URL</h3>
                <p>Simply paste the long URL you want to shorten into our input field.</p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">2. Generate Short Link</h3>
                <p>Click the button and we&apos;ll instantly create a short, shareable link for you.</p>
              </div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-2">3. Share Anywhere</h3>
                <p>Copy your shortened URL and share it on social media, emails, or anywhere you like.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/shorten">
              <button className="bg-purple-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-purple-600 transition-colors">
                Start Shortening URLs
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
