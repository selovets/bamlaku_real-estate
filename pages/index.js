import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Bamlaku Behailu - Real Estate Consultant Addis Ababa</title>
      </Head>

      {/* HEADER */}
      <header className="bg-blue-700 text-white text-center py-10 px-4">
        <h1 className="text-5xl font-extrabold tracking-wide font-serif">
          Bamlaku Behailu - Real Estate Consultant
        </h1>
        <p className="mt-4 text-xl font-light font-sans">
          Trusted Real Estate Solutions | Megenagna | Addis Ababa
        </p>
      </header>

      {/* ABOUT + CONSULTANT IMAGE (IMAGE LEFT) */}
      <section className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
          alt="Consultant advising multiple clients"
          className="rounded-2xl w-full md:w-1/2 shadow-xl object-cover"
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="text-lg mb-3">
            I am Bamlaku Behailu, MPH specialist, digital marketer, and certified real estate consultant based in Addis Ababa.
          </p>
          <p className="text-lg">
            I help clients find the best real estate investments in the heart of the city—specializing in both residential and commercial spaces in Megenagna and surrounding areas.
          </p>
        </div>
      </section>

      {/* RESIDENTIAL SECTION */}
      <section className="bg-gradient-to-r from-indigo-100 to-white p-8">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Beautiful Residential Apartments
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=800&q=80"
            alt="Modern apartment building"
            className="rounded-xl w-full md:w-1/2 shadow-lg"
          />
          <div className="text-lg md:w-1/2">
            <p>
              Explore luxury apartment towers with elegant design, open spaces, and top-tier amenities—centrally located in Addis Ababa’s most desired neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SECTION */}
      <section className="bg-gradient-to-l from-yellow-50 to-white p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
          Commercial Properties for Business
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
            alt="Modern office/commercial building"
            className="rounded-xl w-full md:w-1/2 shadow-lg"
          />
          <div className="text-lg md:w-1/2">
            <p>
              We connect business owners with premium commercial buildings fit for clinics, offices, shops, and showrooms—right in the heart of the city.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - LARGE RIBBON */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">
          Get in touch via WhatsApp, Telegram, or Email to schedule an appointment.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <a
            href="https://wa.me/251920708128"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded text-lg"
          >
            WhatsApp
          </a>
          <a
            href="https://t.me/bsquare"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded text-lg"
          >
            Telegram
          </a>
          <a
            href="mailto:bamaapartement@gmail.com"
            className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded text-lg"
          >
            Email Me
          </a>
        </div>

        {/* Responsive Phone Numbers */}
        <p className="text-lg">
          📞{' '}
          <a href="tel:+251908809078" className="underline hover:text-gray-200">
            +251908809078
          </a>{' '}
          /{' '}
          <a href="tel:+251920708128" className="underline hover:text-gray-200">
            +251920708128
          </a>
        </p>
      </section>
    </div>
  )
}
