"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ====== HEADER ====== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-gray-200">
        <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
          <div className="flex items-center space-x-4">
            <a href="/">
              <Image src="/logos/logo.svg" alt="VGU Logo" width={56} height={56} />
            </a>
            <a href="/">
              <Image src="/logos/naac.svg" alt="NAAC Logo" width={40} height={40} />
            </a>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8 font-bold text-lg text-gray-700">
              <li>
                <button className="custom-btn-bg text-white px-6 py-2 rounded-lg transition duration-200 font-poppins">
                  Apply Now
                </button>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Btn */}
          <button className="lg:hidden focus:outline-none" aria-label="Toggle menu">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 512 512"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* ====== ANNOUNCEMENT ====== */}
      <div className="flex w-full mt-20">
        <div className="bg-[#7F1813] text-white flex items-center px-4 py-1 space-x-2 md:w-[220px]">
          <span className="font-bold">ANNOUNCEMENT</span>
        </div>
        <div className="bg-[#111] text-white flex-1 overflow-hidden font-poppins">
          <marquee className="py-1">
            Admission Open for July 2025 Session &nbsp; | &nbsp; Limited Seats Available – Apply Now! &nbsp; | &nbsp;
            Enroll in BBA, MBA, BCA, or MCA and get free LinkedIn Learning access!
          </marquee>
        </div>
      </div>

      {/* ====== HERO + FORM ====== */}
      <section className="mt-10 px-4 sm:px-8 font-poppins font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Hero Carousel (placeholder, replace with react-slick if needed) */}
          <div className="w-full md:w-1/2">
            <Image
              src="/hero/slide2m.webp"
              alt="Hero Slide"
              width={577}
              height={350}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 max-w-md mx-auto md:mx-0">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300">
              <h2 className="text-2xl font-semibold mb-4 text-[#7F1813] text-center">
                Great Decision! Let's Connect With You Soon
              </h2>
              <form className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Full Name</label>
                    <input
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-300 rounded-3xl text-sm outline-none"
                      type="text"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      placeholder="Enter email"
                      className="w-full p-2 border border-gray-300 rounded-3xl text-sm outline-none"
                      type="email"
                      required
                    />
                  </div>
                </div>
                {/* More fields... (Phone, Course, State, City, etc.) */}
                <button
                  type="submit"
                  className="border w-full rounded-3xl bg-black text-white py-2 text-sm font-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ====== WHO WE ARE ====== */}
      <section className="px-6 py-10 md:py-16 lg:py-20 bg-white" id="who-we-are">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/whoweare_dxdwyev8.webp"
              alt="VGU Campus"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div>
            <h2 className="custom-heading-text">
              <span className="custom-text-gradient">Who</span> We Are
            </h2>
            <p className="mt-4 leading-relaxed text-justify">
              Online VGU is a <strong>digital initiative of NAAC A+ accredited Vivekananda Global University</strong>,
              Jaipur offering <strong>UGC-Entitled</strong> online degree programs empowering thousands of learners.
            </p>
          </div>
        </div>
      </section>

      {/* ====== PROGRAMS (Example) ====== */}
      <section className="relative px-4 md:px-12 pb-14 overflow-hidden bg-[#fff7f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold my-8">Explore Online VGU Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-4">
              <Image src="/programme/mbaimage.webp" alt="MBA" width={400} height={200} className="rounded-lg" />
              <p className="mt-2 font-bold text-lg">Online MBA</p>
              <p className="text-gray-700">Duration: 24 months</p>
              <p className="text-gray-700">Fee: INR 1,50,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4">
              <Image src="/programme/bcaimage.webp" alt="BCA" width={400} height={200} className="rounded-lg" />
              <p className="mt-2 font-bold text-lg">Online BCA</p>
              <p className="text-gray-700">Duration: 36 months</p>
              <p className="text-gray-700">Fee: INR 1,32,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4">
              <Image src="/programme/baimage.webp" alt="BA" width={400} height={200} className="rounded-lg" />
              <p className="mt-2 font-bold text-lg">Online BA</p>
              <p className="text-gray-700">Duration: 36 months</p>
              <p className="text-gray-700">Fee: INR 72,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="w-full py-6 text-center bg-[#222] text-white mt-10">
        <p>© {new Date().getFullYear()} Online VGU. All rights reserved.</p>
      </footer>
    </>
  );
}
