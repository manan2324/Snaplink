import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weights: "100 900",
});

export default function Contact() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className={`font-bold text-3xl sm:text-4xl text-center mb-6 sm:mb-8 ${poppins.className}`}>
            Contact Us
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-6 sm:mb-8">
            <p className="text-gray-700 text-center mb-6 sm:mb-8 text-sm sm:text-base">
              Have questions, suggestions, or feedback? We'd love to hear from you! 
              Get in touch with us through any of the following channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-2 sm:mb-3">Email</h3>
                <p className="text-gray-700">
                  <a href="mailto:support@snaplink.com" className="text-purple-500 hover:underline">
                    support@snaplink.com
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  We typically respond within 24 hours
                </p>
              </div>

              <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-2 sm:mb-3">GitHub</h3>
                <p className="text-gray-700">
                  <a href="https://github.com/yourusername/snaplink" className="text-purple-500 hover:underline">
                    github.com/snaplink
                  </a>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Report issues or contribute to the project
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Is BitLinks really free?</h4>
                  <p className="text-gray-700">
                    Yes! BitLinks is completely free to use with no hidden costs or premium tiers.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Do shortened links expire?</h4>
                  <p className="text-gray-700 text-sm sm:text-base">
                    No, your shortened links are permanent and will continue to work indefinitely.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Can I customize my short URLs?</h4>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Currently, URLs are automatically generated. Custom URLs may be added in future updates.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">Is there a limit on how many URLs I can shorten?</h4>
                  <p className="text-gray-700 text-sm sm:text-base">
                    No, you can shorten unlimited URLs without any restrictions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-3 sm:mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-bold hover:bg-purple-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="text-center">
            <Link href="/">
              <button className="bg-purple-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-2xl font-bold hover:bg-purple-600 transition-colors">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
