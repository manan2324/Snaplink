import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weights: "100 900",
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] gap-8 lg:gap-0">
        <div className="flex flex-col justify-center items-center gap-4 text-center px-4 sm:px-8 py-8 lg:py-0">
          <p className={`font-bold text-2xl sm:text-3xl lg:text-3xl ${poppins.className}`}>The best URL shortener in the Market</p>
          <p className="px-4 sm:px-10 text-sm sm:text-base">
            We are the most straightforward URL shortener in the world. Our service is free to use and
            you can shorten as many URLs as you want. We don't use login or registration. Just paste your
            URL and get a shortened link.
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-3 text-white w-full sm:w-auto'>
            <Link href={"/shorten"} className="w-full sm:w-auto"><button className='bg-purple-500 px-6 py-2 rounded-2xl font-bold cursor-pointer w-full sm:w-auto hover:bg-purple-600 transition-colors'>Try now</button></Link>
            <Link href={"/github"} className="w-full sm:w-auto"><button className='bg-purple-500 px-6 py-2 rounded-2xl font-bold cursor-pointer w-full sm:w-auto hover:bg-purple-600 transition-colors'>Github</button></Link>
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-0">
          <Image src={"/vector.jpg"} className="mix-blend-darken" fill={true} alt="Vector illustration" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${poppins.className}`}>Why Choose SnapLink?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Lightning Fast</h3>
              <p className="text-gray-700">Generate shortened URLs instantly with our optimized infrastructure</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Secure & Reliable</h3>
              <p className="text-gray-700">Your links are safe with us. We ensure 99.9% uptime and data protection</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">Simple to Use</h3>
              <p className="text-gray-700">No registration needed. Just paste, click, and share your short link</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${poppins.className}`}>How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Paste Your URL</h3>
              <p className="text-gray-700">Copy your long URL and paste it into our shortener</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Get Short Link</h3>
              <p className="text-gray-700">Click generate and receive your shortened URL instantly</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Share Anywhere</h3>
              <p className="text-gray-700">Use your short link on social media, emails, or anywhere online</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <p className={`text-4xl font-bold text-purple-600 mb-2 ${poppins.className}`}>100%</p>
              <p className="text-gray-700 font-semibold">Free Forever</p>
            </div>
            <div>
              <p className={`text-4xl font-bold text-purple-600 mb-2 ${poppins.className}`}>∞</p>
              <p className="text-gray-700 font-semibold">Unlimited URLs</p>
            </div>
            <div>
              <p className={`text-4xl font-bold text-purple-600 mb-2 ${poppins.className}`}>0</p>
              <p className="text-gray-700 font-semibold">No Registration</p>
            </div>
            <div>
              <p className={`text-4xl font-bold text-purple-600 mb-2 ${poppins.className}`}>24/7</p>
              <p className="text-gray-700 font-semibold">Always Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-8 text-center">
          <h2 className={`text-2xl sm:text-3xl font-bold mb-4 ${poppins.className}`}>Ready to shorten your URLs?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">Start creating short, memorable links in seconds</p>
          <Link href={"/shorten"}>
            <button className='bg-white text-purple-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors'>
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
