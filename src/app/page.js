"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ====== HEADER ====== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-gray-200">
        <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image src="/logos/logo.svg" alt="VGU Logo" width={56} height={56} style={{height: "auto"}} />
            </Link>
            <Link href="/">
              <Image src="/logos/naac.svg" alt="NAAC Logo" width={40} height={40} style={{height: "auto"}} />
            </Link>
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
