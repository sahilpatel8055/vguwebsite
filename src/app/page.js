"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ====== HEADER ====== */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-gray-200">
        <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
          <div className="flex items-center space-x-4">
            <a href="/" data-discover="true">
              <img alt="logo" className="h-14 cursor-pointer" src="/logos/logo.svg" />
            </a>
            <a href="/" data-discover="true">
              <img alt="NAAC logo" className="h-10" src="/logos/naac.svg" />
            </a>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8 font-bold text-lg text-gray-700">
              <li>
                <button className="custom-btn-bg text-white px-6 py-2 rounded-lg transition duration-200 font-poppins cursor-pointer">
                  Apply Now
                </button>
              </li>
            </ul>
          </nav>
          <button className="lg:hidden focus:outline-none" aria-label="Toggle menu">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* ====== ANNOUNCEMENT ====== */}
      <div className="flex w-full mt-20">
        <div className="bg-[#7F1813] text-white flex items-center px-4 py-1 space-x-2 md:w-[220px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume2 lucide-volume-2 text-yellow-400" aria-hidden="true">
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
            <path d="M16 9a5 5 0 0 1 0 6"></path>
            <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
          </svg>
          <span className="font-bold font-poppins">ANNOUNCEMENT</span>
        </div>
        <div className="bg-[#111] text-white flex-1 overflow-hidden font-poppins">
          <div className="rfm-marquee-container py-1" style={{"--pause-on-hover": "paused", "--pause-on-click": "paused", "--width": "100%", "--transform": "none"}}>
            <div className="rfm-marquee" style={{"--play": "running", "--direction": "normal"}}>
              Admission Open for July 2025 Session &nbsp; | &nbsp; Limited Seats Available – Apply Now! &nbsp; | &nbsp;
              Enroll in BBA, MBA, BCA, or MCA and get free LinkedIn Learning access!
            </div>
          </div>
        </div>
      </div>

      {/* ====== HERO + FORM ====== */}
      <section className="mt-10 px-4 sm:px-8 font-poppins font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
          {/* Hero Image */}
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
                Great Decision! Let&apos;s Connect With You Soon
              </h2>
              <form className="space-y-3">
                {/* Name + Email */}
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Full Name</label>
                    <input className="w-full p-2 border border-gray-300 rounded-3xl text-sm" type="text" required />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Email</label>
                    <input className="w-full p-2 border border-gray-300 rounded-3xl text-sm" type="email" required />
                  </div>
                </div>
                {/* Phone + Course */}
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Mobile</label>
                    <input className="w-full p-2 border border-gray-300 rounded-3xl text-sm" type="tel" maxLength="10" required />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Course</label>
                    <select className="w-full p-2 border border-gray-300 rounded-3xl text-sm" required>
                      <option value="">Select a course</option>
                      <option>BA Economics</option>
                      <option>BA History</option>
                      <option>BA Public Policy & Development</option>
                      <option>BA Political Science</option>
                      <option>BA English</option>
                      <option>BBA General</option>
                      <option>BBA in Digital Marketing</option>
                      <option>BCA General</option>
                      <option>BCA in AI</option>
                      <option>BCA in Data Science</option>
                      <option>M.A. English</option>
                      <option>MBA General</option>
                      <option>MBA in HR Management</option>
                      <option>MCA</option>
                      <option>M.Sc. Mathematics</option>
                    </select>
                  </div>
                </div>
                {/* State + City */}
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">State</label>
                    <select className="w-full p-2 border border-gray-300 rounded-3xl text-sm" required>
                      <option value="">Select state</option>
                      <option>Andhra Pradesh</option>
                      <option>Delhi</option>
                      <option>Gujarat</option>
                      <option>Maharashtra</option>
                      <option>Rajasthan</option>
                      <option>Tamil Nadu</option>
                      <option>Uttar Pradesh</option>
                      <option>West Bengal</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">City</label>
                    <input className="w-full p-2 border border-gray-300 rounded-3xl text-sm" type="text" required />
                  </div>
                </div>
                {/* Are you + Gender */}
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Are You?</label>
                    <select className="w-full p-2 border border-gray-300 rounded-3xl text-sm">
                      <option value="">-- Select --</option>
                      <option>Student</option>
                      <option>Working Professional</option>
                      <option>Parents</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm mb-1">Gender</label>
                    <select className="w-full p-2 border border-gray-300 rounded-3xl text-sm">
                      <option value="">-- Select --</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                {/* Submit */}
                <button type="submit" className="border w-full rounded-3xl bg-black text-white py-2 text-sm font-medium">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ====== PROGRAMS ====== */}
      <section className="relative px-4 md:px-12 pb-14 overflow-hidden bg-[#fff7f7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold my-8">Explore Online VGU Programs</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "/programme/mbaimage.webp", title: "Online MBA", duration: "24 months", fee: "INR 1,50,000" },
              { img: "/programme/bcaimage.webp", title: "Online BCA", duration: "36 months", fee: "INR 1,32,000" },
              { img: "/programme/bbaimage.webp", title: "Online BBA", duration: "36 months", fee: "INR 1,32,000" },
              { img: "/programme/baimage.webp", title: "Online BA", duration: "36 months", fee: "INR 72,000" },
              { img: "/programme/mcaimage.webp", title: "Online MCA", duration: "24 months", fee: "INR 1,50,000" },
              { img: "/programme/mscimage.webp", title: "Online M.Sc", duration: "24 months", fee: "INR 72,000" },
              { img: "/programme/maimage.webp", title: "Online MA", duration: "24 months", fee: "INR 72,000" },
              { img: "/programme/majmcimage.webp", title: "Online MAJMC", duration: "24 months", fee: "INR 72,000" },
              { img: "/programme/mbaifimage.webp", title: "Online MBA-IF", duration: "24 months", fee: "INR 2,40,000" },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-4">
                <Image src={p.img} alt={p.title} width={400} height={200} className="rounded-lg" />
                <p className="mt-2 font-bold text-lg">{p.title}</p>
                <p className="text-gray-700">Duration: {p.duration}</p>
                <p className="text-gray-700">Fee: {p.fee}</p>
              </div>
            ))}
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
