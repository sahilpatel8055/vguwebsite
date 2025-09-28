"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    course: '',
    state: '',
    city: '',
    areYou: '',
    gender: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <>
      {/* ====== HEADER ====== */}
      <header className="header">
        <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
          <div className="flex items-center space-x-4">
            <Link href="/" data-discover="true">
                <Image alt="VGU logo" className="h-14 cursor-pointer" src="/logos/logo.svg" width={56} height={56} />
            </Link>
            <Link href="/" data-discover="true">
              <Image alt="NAAC logo" className="h-10" src="/logos/naac.svg" width={40} height={40} />
            </Link>
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
      </header>

      {/* ====== ANNOUNCEMENT ====== */}
      <div className="flex w-full mt-20">
        <div className="announcement-bar md:w-[220px]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400" aria-hidden="true">
            <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
            <path d="M16 9a5 5 0 0 1 0 6"></path>
            <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
          </svg>
          <span className="font-bold font-poppins">ANNOUNCEMENT</span>
        </div>
        <div className="announcement-text">
          <div className="rfm-marquee-container py-1" style={{"--pause-on-hover": "paused", "--pause-on-click": "paused", "--width": "100%", "--transform": "none"}}>
            <div className="rfm-marquee" style={{"--play": "running", "--direction": "normal", "--duration": "20s", "--iteration-count": "infinite"}}>
              Admission Open for July 2025 Session &nbsp; | &nbsp; Limited Seats Available – Apply Now! &nbsp; | &nbsp;
              Enroll in BBA, MBA, BCA, or MCA and get free LinkedIn Learning access!
            </div>
          </div>
        </div>
      </div>

      {/* ====== HERO + FORM ====== */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Hero Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/hero/slide2m.webp"
              alt="Hero Slide"
              width={577}
              height={350}
              className="hero-image"
            />
          </div>

          {/* Form */}
          <div className="form-container">
            <div className="form-card">
              <h2 className="form-title">
                Great Decision! Let&apos;s Connect With You Soon
              </h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name + Email */}
                <div className="form-group">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input 
                      className="form-input" 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input 
                      className="form-input" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                {/* Phone + Course */}
                <div className="form-group">
                  <div>
                    <label className="form-label">Mobile</label>
                    <input 
                      className="form-input" 
                      type="tel" 
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      maxLength="10" 
                      required 
                    />
                  </div>
                  <div>
                    <label className="form-label">Course</label>
                    <select 
                      className="form-select" 
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >
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
                <div className="form-group">
                  <div>
                    <label className="form-label">State</label>
                    <select 
                      className="form-select" 
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    >
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
                  <div>
                    <label className="form-label">City</label>
                    <input 
                      className="form-input" 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                </div>
                
                {/* Are you + Gender */}
                <div className="form-group">
                  <div>
                    <label className="form-label">Are You?</label>
                    <select 
                      className="form-select"
                      name="areYou"
                      value={formData.areYou}
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select --</option>
                      <option>Student</option>
                      <option>Working Professional</option>
                      <option>Parents</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Gender</label>
                    <select 
                      className="form-select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">-- Select --</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                {/* Submit */}
                <button type="submit" className="form-submit">
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
              alt="Vivekananda Global University Campus" 
              className="w-full h-auto max-h-[500px] object-cover md:max-h-[600px] lg:max-h-[700px]" 
              src="/assets/whoweare_dxdwyev8.webp"
              width={600}
              height={700}
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="custom-heading-text">
              <span className="custom-text-gradient">Who</span> We Are
            </h2>
            <div className="flex justify-center md:justify-start">
              <hr className="w-1/2 h-[3px] bg-[#7F1813] border-0 rounded mt-1"></hr>
            </div>
            <p className="custom-subheading-text">Your Gateway to Future-Ready Learning!</p>
            <p className="mt-4 leading-relaxed text-justify">
              Online VGU is a <strong>digital initiative of NAAC A+ accredited</strong> Vivekananda Global University, Jaipur offering <strong>UGC-Entitled</strong> online degree programs empowering over thousands of learners through <strong>globally trusted VGU education</strong> with greater <strong>flexibility, affordability and accessibility.</strong>
            </p>
            <p className="mt-2 leading-relaxed text-justify">
              Our degrees are globally recognized and hold the same value as regular on-campus programs. Whether you&apos;re upskilling, reskilling, or starting fresh, our <strong>learner-centric approach</strong> ensures you gain the knowledge, credentials, and confidence to succeed — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ====== RANKINGS & ACCREDITATIONS ====== */}
      <div className="px-14 bg-[#fff7f7] pb-14">
        <div className="text-center py-10 max-w-7xl mx-auto">
          <h1 className="custom-heading-text">
            <span className="custom-text-gradient">Rankings</span> &amp; Accrediations
          </h1>
          <div className="flex justify-center">
            <hr className="w-1/2 h-[3px] bg-[#7F1813] border-0 rounded mt-2"></hr>
          </div>
          <p className="custom-subheading-text">Here&apos;s why VGU Online is a trusted name in quality education</p>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="absolute top-1/2 left-[-30px] z-10 cursor-pointer transform -translate-y-1/2 text-3xl text-black">❮</div>
            <div className="slick-list">
              <div className="slick-track" style={{"width": "6371px", "opacity": "1", "transform": "translate3d(-3324px, 0px, 0px)"}}>
                <div data-index="0" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-0" className="w-full h-auto object-contain mx-auto" src="/assets/ugc_cme1yc9_.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="1" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-1" className="w-full h-auto object-contain mx-auto" src="/assets/naac_bcjeogop.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="2" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-2" className="w-full h-auto object-contain mx-auto" src="/assets/aicte_bknjoxdn.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="3" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-3" className="w-full h-auto object-contain mx-auto" src="/assets/qs_jzooeq2_.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="4" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-4" className="w-full h-auto object-contain mx-auto" src="/assets/outlook_dueenivh.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="5" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-5" className="w-full h-auto object-contain mx-auto" src="/assets/gu_qxpe7x2a.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="6" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-6" className="w-full h-auto object-contain mx-auto" src="/assets/assocham_dvqk7wgv.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="7" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-7" className="w-full h-auto object-contain mx-auto" src="/assets/dialouge_bzcbzbxs.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="8" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-8" className="w-full h-auto object-contain mx-auto" src="/assets/globalleague_d74vq160.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
                <div data-index="9" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{"outline": "none", "width": "277px"}}>
                  <div>
                    <div className="rounded-3xl shadow-lg mb-6" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                      <Image alt="ranking-9" className="w-full h-auto object-contain mx-auto" src="/assets/excellence_bpnbhjpo.webp" width={277} height={200} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 right-[-30px] z-10 cursor-pointer transform -translate-y-1/2 text-3xl text-black">❯</div>
            <div className="slick-dots">
              <ul className="flex justify-center gap-2">
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="slick-active">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ====== WHAT MAKES ONLINE VGU THE RIGHT CHOICE ====== */}
      <section className="mx-auto px-6 py-16 bg-[#fff7f7] w-full">
        <div className="text-center mb-8 max-w-7xl mx-auto">
          <h2 className="custom-heading-text tracking-wide">
            What Makes Online VGU the <span className="custom-text-gradient">Right Choice?</span>
          </h2>
          <div className="flex justify-center">
            <hr className="md:w-1/2 w-full h-[3px] bg-[#7F1813] border-0 rounded mt-2"></hr>
          </div>
          <p className="custom-subheading-text">We provide learning that adapts to <b>YOU</b></p>
        </div>
        <div className="p-8 shadow-xl rounded-3xl bg-white max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center">
              <Image alt="UGC Entitled Degree" className="w-12 h-12 mb-3" loading="lazy" src="/assets/ugc_by2vwxz_.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">UGC-ENTITLED</h2>
              <p className="text-sm text-gray-600 font-poppins">Your Degree Is Recognized Globally And By All Major Recruiters.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="FlexibleLearning" className="w-12 h-12 mb-3" loading="lazy" src="/assets/flexiblelearning_dueqmtal.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">FLEXIBLE LEARNING</h2>
              <p className="text-sm text-gray-600 font-poppins">Study at your own pace, anytime, anywhere.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="INDUSTRY-ORIENTED PROGRAMS" className="w-12 h-12 mb-3" loading="lazy" src="/assets/industryoriented_cx_nhyhv.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">INDUSTRY-ORIENTED PROGRAMS</h2>
              <p className="text-sm text-gray-600 font-poppins">Vast Elective Pool in each program such as Digital Marketing, FinTech, AI, Data</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="EXPERT MENTORSHIP" className="w-12 h-12 mb-3" loading="lazy" src="/assets/expertmentor_cz_skrjv.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">EXPERT MENTORSHIP</h2>
              <p className="text-sm text-gray-600 font-poppins">Learn from PhDs, domain experts, and industry veterans</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="AFFORDABLE FEE STRUCTURE" className="w-12 h-12 mb-3" loading="lazy" src="/assets/affordablestructure_c8k2lnz0.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">AFFORDABLE FEE STRUCTURE</h2>
              <p className="text-sm text-gray-600 font-poppins">Flexible, No Cost EMI options and high ROI</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="EXAMINATION ON DEMAND" className="w-12 h-12 mb-3" loading="lazy" src="/assets/examination_bro4phot.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">EXAMINATION ON DEMAND</h2>
              <p className="text-sm text-gray-600 font-poppins">Take assessments and exams at your ease</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="DUAL DEGREE OPPORTUNITY" className="w-12 h-12 mb-3" loading="lazy" src="/assets/dualdegree_bfutg2mc.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">DUAL DEGREE OPPORTUNITY</h2>
              <p className="text-sm text-gray-600 font-poppins">Pursue two degrees simultaneously one on-campus and one online of same level</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="GLOBAL ACCESSIBILITY & ACCEPTANCE" className="w-12 h-12 mb-3" loading="lazy" src="/assets/global_bminuprx.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">GLOBAL ACCESSIBILITY & ACCEPTANCE</h2>
              <p className="text-sm text-gray-600 font-poppins">Programs Are Available To Study Globally.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="CAREER ASSISTANCE" className="w-12 h-12 mb-3" loading="lazy" src="/assets/careerassistance_o1l9zavf.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">CAREER ASSISTANCE</h2>
              <p className="text-sm text-gray-600 font-poppins">Career Guidance with Experts, Free Resume Reviews, LinkedIn Profile Makeovers and more.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image alt="INDUSTRY BASED MICRO CREDENTIALS" className="w-12 h-12 mb-3" loading="lazy" src="/assets/industrybasedmicro_ckulm7rr.png" width={48} height={48} />
              <h2 className="text-lg font-bold custom-text-gradient">INDUSTRY BASED MICRO CREDENTIALS</h2>
              <p className="text-sm text-gray-600 font-poppins">In collaboration with renowned industry partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== DEMOCRATIZING HIGHER EDUCATION ====== */}
      <section className="bg-[#761610] text-white px-4 md:px-16 py-18" id="impact">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
          <div className="lg:w-1/2">
            <h2 className="custom-heading-text">Democratizing Higher Education Through Flexibility, Affordability and Accessibility</h2>
          </div>
          <div className="lg:w-1/2 bg-white text-black p-6 rounded-md shadow-md">
            <p className="text-base leading-relaxed font-poppins">
              In line with the University Grants Commission&apos;s (UGC) emphasis on expanding online education to reach a broader demographic, Online VGU is democratizing education by making quality learning accessible to every household.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto mt-10">
          <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
            <p className="custom-heading-text mb-2 custom-text-gradient">0</p>
            <p className="text-sm md:text-base font-medium font-poppins">Learner Satisfaction Rate</p>
          </div>
          <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
            <p className="custom-heading-text mb-2 custom-text-gradient">0</p>
            <p className="text-sm md:text-base font-medium font-poppins">Continents Global Learner Base</p>
          </div>
          <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
            <p className="custom-heading-text mb-2 custom-text-gradient">0</p>
            <p className="text-sm md:text-base font-medium font-poppins">Program Reach in Remote Regions</p>
          </div>
          <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
            <p className="custom-heading-text mb-2 custom-text-gradient">0</p>
            <p className="text-sm md:text-base font-medium font-poppins">Working Professionals Enrolled</p>
          </div>
          <div className="bg-white text-black text-center py-8 px-4 rounded-lg shadow-lg">
            <p className="custom-heading-text mb-2 custom-text-gradient">0</p>
            <p className="text-sm md:text-base font-medium font-poppins">Years of Combined Faculty Experience</p>
          </div>
        </div>
      </section>

      {/* ====== GET YOUR HANDS ON ====== */}
      <div className="w-full">
        <section className="relative w-full bg-no-repeat bg-center bg-cover" style={{"backgroundImage": "url('/assets/worldmap-CEe_zT48.webp')", "backgroundSize": "100% 100%"}}>
          <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 lg:py-28">
            <div className="w-full md:w-1/2 text-white space-y-6">
              <h2 className="custom-heading-text">
                Get Your Hands On <br />
                The Same VGU Education<br />
                Trusted Globally Across <br />
                4 Continents
              </h2>
              <button className="custom-btn-bg text-white font-bold px-6 py-3 rounded-md shadow-lg cursor-pointer font-poppins">
                Apply Now
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ====== OUR PEDAGOGY & LEARNING EXPERIENCE ====== */}
      <div className="w-full -mt-2" id="pedagogy">
        <div className="relative w-full bg-cover bg-center text-white py-16 px-4 lg:px-20" style={{"backgroundImage": "url('/assets/learningExperiencebg-CxORopzv.webp')"}}>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
            <div className="w-full lg:w-3/5">
              <h2 className="custom-heading-text mb-1 tracking-wide text-center">Our Pedagogy & Learning Experience</h2>
              <div className="flex justify-center md:justify-start">
                <hr className="w-full h-[3px] bg-white border-0 rounded mt-2"></hr>
              </div>
              <p className="custom-subheading-text text-center tracking-wide leading-relaxed">Empowering every learner through innovation and support</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                <div className="group bg-white text-black rounded-xl shadow-md p-5 flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:bg-[#7F1813] hover:text-white">
                  <div className="text-3xl">
                    <Image alt="Icons" className="h-14 ml-1 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0" src="/assets/aipowered_x70ja0e7.webp" width={56} height={56} />
                  </div>
                  <div className="flex items-center">
                    <div className="w-0.5 h-14 bg-black mr-3 rounded transition duration-300 group-hover:bg-white"></div>
                    <p className="font-bold text-md font-poppins transition duration-300">AI-Powered AV Lectures</p>
                  </div>
                </div>
                <div className="group bg-white text-black rounded-xl shadow-md p-5 flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:bg-[#7F1813] hover:text-white">
                  <div className="text-3xl">
                    <Image alt="Icons" className="h-14 ml-1 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0" src="/assets/personalized_btaam6qk.webp" width={56} height={56} />
                  </div>
                  <div className="flex items-center">
                    <div className="w-0.5 h-14 bg-black mr-3 rounded transition duration-300 group-hover:bg-white"></div>
                    <p className="font-bold text-md font-poppins transition duration-300">Personalized Learning Paths</p>
                  </div>
                </div>
                <div className="group bg-white text-black rounded-xl shadow-md p-5 flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:bg-[#7F1813] hover:text-white">
                  <div className="text-3xl">
                    <Image alt="Icons" className="h-14 ml-1 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0" src="/assets/learntogo_dawkp61l.webp" width={56} height={56} />
                  </div>
                  <div className="flex items-center">
                    <div className="w-0.5 h-14 bg-black mr-3 rounded transition duration-300 group-hover:bg-white"></div>
                    <p className="font-bold text-md font-poppins transition duration-300">Learn on the Go</p>
                  </div>
                </div>
                <div className="group bg-white text-black rounded-xl shadow-md p-5 flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:bg-[#7F1813] hover:text-white">
                  <div className="text-3xl">
                    <Image alt="Icons" className="h-14 ml-1 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0" src="/assets/smartaccess_cxttfsr9.webp" width={56} height={56} />
                  </div>
                  <div className="flex items-center">
                    <div className="w-0.5 h-14 bg-black mr-3 rounded transition duration-300 group-hover:bg-white"></div>
                    <p className="font-bold text-md font-poppins transition duration-300">Smart Assessments Tools</p>
                  </div>
                </div>
                <div className="group bg-white text-black rounded-xl shadow-md p-5 flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:bg-[#7F1813] hover:text-white">
                  <div className="text-3xl">
                    <Image alt="Icons" className="h-14 ml-1 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0" src="/assets/collaborative_b2xfojfd.webp" width={56} height={56} />
                  </div>
                  <div className="flex items-center">
                    <div className="w-0.5 h-14 bg-black mr-3 rounded transition duration-300 group-hover:bg-white"></div>
                    <p className="font-bold text-md font-poppins transition duration-300">Collaborative Learning Environment</p>
                  </div>
                </div>
                <div className="group bg-white text-black rounded-xl shadow-md p-5 flex flex-col gap-2 items-start transition-transform duration-300 hover:scale-105 hover:bg-[#7F1813] hover:text-white">
                  <div className="text-3xl">
                    <Image alt="Icons" className="h-14 ml-1 transition duration-300 group-hover:filter group-hover:invert group-hover:brightness-0" src="/assets/twentyfour_jjzsdv5e.webp" width={56} height={56} />
                  </div>
                  <div className="flex items-center">
                    <div className="w-0.5 h-14 bg-black mr-3 rounded transition duration-300 group-hover:bg-white"></div>
                    <p className="font-bold text-md font-poppins transition duration-300">24/7 Support & Resources</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 z-0">
              <Image alt="Girl" className="max-h-[580px] object-contain" src="/assets/learningexperiencegirl_citybdk_.webp" width={400} height={580} />
            </div>
          </div>
        </div>
      </div>

      {/* ====== PROGRAMS ====== */}
      <section id="our-programs" className="relative px-4 md:px-12 pb-14 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-3/5 bg-black z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-[#fff7f7] z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center py-10">
            <h2 className="custom-heading-text text-white">Explore Online VGU Programs</h2>
            <div className="flex justify-center">
              <hr className="w-3/5 h-[3px] bg-white border-0 rounded mt-2.5"></hr>
            </div>
            <p className="custom-subheading-text text-white">Crafted to Fit Your Pocket, Your Time, and Your Career Goals</p>
          </div>
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="absolute top-1/3 left-[-10px] z-10 cursor-pointer transform -translate-y-1/2 text-3xl text-white">❮</div>
            <div className="slick-list">
              <div className="slick-track" style={{"width": "5922px", "opacity": "1", "transform": "translate3d(-2538px, 0px, 0px)"}}>
                {[
                  { img: "/programme/baimage.webp", title: "Online BA", fullTitle: "Bachelor of Arts", duration: "36 months", fee: "INR 72,000", rating: "4.5", badge: "On the Rise" },
                  { img: "/programme/bbaimage.webp", title: "Online BBA", fullTitle: "Bachelor of Business Administration", duration: "36 months", fee: "1,32,000", rating: "4.7", badge: "Top Choice" },
                  { img: "/programme/bcaimage.webp", title: "Online BCA", fullTitle: "Bachelor of Computer Application", duration: "36 months", fee: "INR 1,32,000", rating: "4.8", badge: "In-Demand" },
                  { img: "/programme/maimage.webp", title: "Online MA", fullTitle: "Master of Arts", duration: "24 months", fee: "INR 72,000", rating: "4.4", badge: "Highly Rated" },
                  { img: "/programme/mbaimage.webp", title: "Online MBA", fullTitle: "Master of Business Administration", duration: "24 months", fee: "INR 1,50,000", rating: "4.5", badge: "Best of the Best" },
                  { img: "/programme/mbaifimage.webp", title: "Online MBA-IF", fullTitle: "MBA in International Finance", duration: "24 months", fee: "INR 2,40,000", rating: "4.3", badge: "On the Rise" },
                  { img: "/programme/mcaimage.webp", title: "Online MCA", fullTitle: "Master of Computer Application", duration: "24 months", fee: "INR 1,50,000", rating: "4.6", badge: "Best Selling" },
                  { img: "/programme/majmcimage.webp", title: "Online MAJMC", fullTitle: "Master of Arts in Journalism & Mass Communication", duration: "24 months", fee: "INR 72,000", rating: "4.6", badge: "Buzzing" },
                  { img: "/programme/mscimage.webp", title: "Online M.Sc", fullTitle: "Master of Science Mathematics", duration: "24 months", fee: "INR 72,000", rating: "4.6", badge: "Top Picks" },
                ].map((program, index) => (
                  <div key={index} data-index={index} className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "282px"}}>
                    <div>
                      <div className="p-3" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                        <div className="relative bg-white rounded-xl shadow-md h-[390px] flex flex-col justify-between">
                          <div className="relative">
                            <Image alt={program.fullTitle} className="w-full h-48 object-cover rounded-t-xl" src={program.img} width={282} height={192} />
                            <div className="absolute top-2 left-2 bg-[#7F1813] text-white px-2 py-1 text-xs rounded-full font-medium shadow">{program.badge}</div>
                          </div>
                          <div className="px-4 py-3 flex flex-col gap-1 flex-grow">
                            <div className="flex justify-between items-center">
                              <p className="text-xl font-bold text-[#7F1813] leading-tight">{program.title}</p>
                              <span className="text-sm font-semibold bg-white px-3 py-1 rounded-xl custom-text-gradient">{program.rating} <span className="text-yellow-400">★</span></span>
                            </div>
                            <p className="text-md text-black font-bold mt-0.5">{program.fullTitle}</p>
                            <div className="mt-3 space-y-1 text-sm">
                              <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4 text-[#7F1813]" aria-hidden="true">
                                  <path d="M8 2v4"></path>
                                  <path d="M16 2v4"></path>
                                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                  <path d="M3 10h18"></path>
                                </svg>
                                <span className="font-bold">Duration:</span>
                                <span className="text-gray-700 font-medium">{program.duration}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-indian-rupee w-4 h-4 text-[#7F1813]" aria-hidden="true">
                                  <path d="M6 3h12"></path>
                                  <path d="M6 8h12"></path>
                                  <path d="m6 13 8.5 8"></path>
                                  <path d="M6 13h3"></path>
                                  <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                                </svg>
                                <span className="font-bold">Fee:</span>
                                <span className="text-gray-700 font-medium">{program.fee}</span>
                              </div>
                            </div>
                          </div>
                          <button className="absolute bottom-3 left-3 bg-[#7F1813] text-white text-xs font-semibold px-4 py-1 rounded-lg cursor-pointer">View Program</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/3 right-[-10px] z-10 cursor-pointer transform -translate-y-1/2 text-3xl text-white">❯</div>
            <div className="slick-dots">
              <ul className="flex justify-center gap-2">
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="slick-active">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
                <li className="">
                  <div className="w-3 h-3 rounded-full transition-all duration-300 dot"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ADMISSION PROCESS ====== */}
      <section className="bg-[#fff7f7] py-8 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <div className="custom-heading-text text-black md:ml-18 leading-snug text-center md:text-start md:mb-4 mb-6 mt-16">
            <h2 className="custom-heading-text mb-6">
              <span className="custom-text-gradient">Admission</span> Process
            </h2>
            You&apos;ve Come Scrolling This Far—why Stop Now? <br />
            Share Your Details And Apply Now!
          </div>
          <div>
            <Image alt="Admission process steps illustration" className="w-full max-w-8xl mx-auto h-auto object-contain" src="/assets/admission_chjgitms.webp" width={800} height={400} />
          </div>
          <button className="custom-btn-bg text-white font-bold px-6 py-3 rounded-md shadow-lg cursor-pointer font-poppins mt-4">
            Apply Now
          </button>
        </div>
      </section>

      {/* ====== NAVIGATE THE ROAD ====== */}
      <div className="relative w-full py-12 px-6 lg:px-20 bg-cover bg-center text-white" style={{"backgroundImage": "url('/assets/degreeBg-Ck6MSB6s.webp')"}}>
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="custom-heading-text mb-8 leading-tight max-w-xl text-center md:text-start">
              Navigate The Road To Your Dream Degree From Enrollment To Graduation
            </h2>
            <Image alt="Degree Journey" className="w-full max-w-xl md:mr-40 mr-12" src="/assets/degreemap_b9zexeni.webp" width={500} height={300} />
            <button className="mt-8 px-5 py-2 bg-white text-[#7F1813] rounded font-semibold w-fit cursor-pointer font-poppins">
              View all Programs
            </button>
          </div>
          <div className="flex-1 bg-white p-4 max-w-lg w-full shadow-2xl cursor-grab">
            <div className="slick-slider slick-initialized" dir="ltr">
              <div className="slick-list">
                <div className="slick-track" style={{"width": "2250px", "opacity": "1", "transform": "translate3d(-900px, 0px, 0px)"}}>
                  <div data-index="-1" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{"width": "450px"}}>
                    <div>
                      <Image alt="Degree Back" className="w-full h-auto object-contain" tabIndex="-1" src="/assets/degreeback_crxe7rmi.webp" style={{"width": "100%", "display": "inline-block"}} width={450} height={300} />
                    </div>
                  </div>
                  <div data-index="0" className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "450px"}}>
                    <div>
                      <Image alt="Degree Front" className="w-full h-auto object-contain" tabIndex="-1" src="/assets/degreefront_d96dozym.webp" style={{"width": "100%", "display": "inline-block"}} width={450} height={300} />
                    </div>
                  </div>
                  <div data-index="1" className="slick-slide slick-active slick-current" tabIndex="-1" aria-hidden="false" style={{"outline": "none", "width": "450px"}}>
                    <div>
                      <Image alt="Degree Back" className="w-full h-auto object-contain" tabIndex="-1" src="/assets/degreeback_crxe7rmi.webp" style={{"width": "100%", "display": "inline-block"}} width={450} height={300} />
                    </div>
                  </div>
                  <div data-index="2" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{"width": "450px"}}>
                    <div>
                      <Image alt="Degree Front" className="w-full h-auto object-contain" tabIndex="-1" src="/assets/degreefront_d96dozym.webp" style={{"width": "100%", "display": "inline-block"}} width={450} height={300} />
                    </div>
                  </div>
                  <div data-index="3" tabIndex="-1" className="slick-slide slick-cloned" aria-hidden="true" style={{"width": "450px"}}>
                    <div>
                      <Image alt="Degree Back" className="w-full h-auto object-contain" tabIndex="-1" src="/assets/degreeback_crxe7rmi.webp" style={{"width": "100%", "display": "inline-block"}} width={450} height={300} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====== KNOW YOUR ONLINE VGU COMMUNITY ====== */}
      <section className="bg-[#fff7f7] w-full py-12 px-4 flex" id="achievement">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-25">
          <div className="w-full max-w-md">
            <Image alt="Achievers" className="w-full h-auto object-contain" src="/assets/achievement_bec0pfd_.webp" width={400} height={300} />
          </div>
          <div className="max-w-md text-center md:text-left">
            <h2 className="custom-heading-text mb-4">
              Know Your Online <br /> VGU Community
            </h2>
            <p className="custom-subheading-text mb-4">
              We are rooting for all those who dare to <span className="font-bold"><br /> dream big!</span>
            </p>
          </div>
        </div>
      </section>

      {/* ====== LEARNER TESTIMONIALS ====== */}
      <section className="w-full custom-btn-bg py-12" id="testimonials">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="custom-heading-text text-white">Learner Testimonials</h2>
          <div className="flex justify-center">
            <hr className="md:w-1/2 w-1/2 h-[3px] bg-white border-0 rounded"></hr>
          </div>
          <p className="custom-subheading-text text-white mb-12">2 out of every 3 VGU learners are employed while studying!</p>
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="absolute top-1/2 left-[-10px] md:left-[-30px] z-10 -translate-y-1/2 cursor-pointer text-white text-3xl bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition">❮</div>
            <div className="slick-list">
              <div className="slick-track" style={{"width": "8400px", "opacity": "1", "transform": "translate3d(-1575px, 0px, 0px)"}}>
                {[
                  { img: "/assets/test1_d2_2w_pg.webp", alt: "Testimonial 1" },
                  { img: "/assets/test2_cixvxewk.webp", alt: "Testimonial 2" },
                  { img: "/assets/test3_bnbgltib.webp", alt: "Testimonial 3" },
                  { img: "/assets/test4_dnfxagsn.webp", alt: "Testimonial 4" },
                  { img: "/assets/test5_dxulbrkg.webp", alt: "Testimonial 5" },
                  { img: "/assets/test6_baoqfey4.webp", alt: "Testimonial 6" },
                  { img: "/assets/test7_b0z7l5d3.webp", alt: "Testimonial 7" },
                ].map((testimonial, index) => (
                  <div key={index} data-index={index} className="slick-slide" tabIndex="-1" aria-hidden="true" style={{"outline": "none", "width": "525px"}}>
                    <div>
                      <div className="px-3" tabIndex="-1" style={{"width": "100%", "display": "inline-block"}}>
                        <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
                          <Image alt={testimonial.alt} className="w-full h-auto object-cover" src={testimonial.img} width={525} height={300} />
                        </div>
                      </div>
                    </div>
              </div>
            ))}
              </div>
            </div>
            <div className="absolute top-1/2 right-[-10px] md:right-[-30px] z-10 -translate-y-1/2 cursor-pointer text-white text-3xl bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition">❯</div>
          </div>
        </div>
      </section>

      {/* ====== FREQUENTLY ASKED QUESTIONS ====== */}
      <div className="w-full custom-light-bg">
        <section className="w-full bg-[#fff7f7] py-16 px-4 relative overflow-hidden max-w-7xl mx-auto">
          <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col-reverse lg:flex-row items-center justify-between relative md:ml-24 ml-0">
            <div className="w-full lg:w-1/2">
              <h2 className="custom-heading-text mb-2 text-center">
                Frequently Asked <span className="custom-text-gradient">Questions</span>
              </h2>
              <div className="flex justify-center mb-4">
                <hr className="w-full h-[3px] bg-[#7F1813]"></hr>
              </div>
              <div className="w-full relative mb-6 font-poppins">
                <input placeholder="Search here what are you looking for" className="w-full pl-14 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-gray-700 placeholder-gray-400" type="text" />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-0 top-1/2 -translate-y-1/2 text-[#7F1813] border-2 rounded-full w-13 h-13" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </div>
              <div className="space-y-4 mb-6"></div>
              <div className="flex flex-wrap gap-3 mb-8 py-3"></div>
              <p className="text-sm text-gray-500 font-poppins font-semibold mt-6">Can&apos;t find what you are looking for?</p>
              <div className="flex items-center gap-4 mt-2">
                <a href="tel:+919220315527" title="Call Admission Queries" className="bg-[#7F1813] p-3 rounded-full cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-white w-7 h-7" aria-hidden="true">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </a>
                <p className="text-xl font-semibold font-poppins">Let&apos;s connect over a quick call</p>
              </div>
            </div>
            <div className="hidden lg:block absolute bottom right-0 w-[70%] max-w-[800px] left-100">
              <Image alt="FAQ illustration" className="w-full object-contain" src="/assets/faq_zvqf7fgv.webp" width={800} height={400} />
            </div>
          </div>
        </section>
      </div>

      {/* ====== FOOTER ====== */}
      <footer className="bg-black text-white py-12 px-4 md:px-10 font-poppins">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-start text-[15px] p-5">
          <div>
            <h2 className="font-bold text-xl mb-2">Contact Us</h2>
            <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
            <p className="mb-2">Admission Queries: <a href="tel:+919540373222" className="text-blue-400 hover:underline">+919540373222</a></p>
            <p className="mb-2">Student Helpline: <a href="tel:+919540373222" className="text-blue-400 hover:underline">+919540373222</a></p>
            <p className="mb-2">Email: <span className="text-blue-400">admissions@onlinevgu.com</span></p>
            <p className="mb-4">Address: <span className="text-blue-400">VGU Campus, Sec-36, NRI, Jagatpura, Jaipur</span></p>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Discover Us</h2>
            <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
            <ul className="space-y-2">
              <li><button className="hover:underline text-left w-full cursor-pointer">About VGU</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Testimonials</button></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Online Programs</h2>
            <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
            <ul className="space-y-2">
              <li><button className="hover:underline text-left w-full cursor-pointer">Online BBA</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Online BCA</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Online BA</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Online MBA</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Online MCA</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Online M.Sc.</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Online M.A. English</button></li>
              <li><button className="hover:underline text-left w-full cursor-pointer">Online M.A. JMC</button></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl mb-2">Resources</h2>
            <div className="h-[2px] w-14 bg-white mb-4 mx-auto md:mx-0"></div>
            <ul className="space-y-2">
              <li><a href="/assets/AICTE-No-Objection-Certificate-DdGc8QcG.pdf" download="AICTE-No-Objection-Certificate.pdf" className="hover:underline">AICTE-NOC</a></li>
              <li><a href="/assets/UGC-Approval-for-Jan-2023-Session-for-OL-programs-D4qcaDqf.pdf" download="UGC-Approval-2023.pdf" className="hover:underline">UGC Approval</a></li>
              <li><a href="/assets/refundPolicy-Dg9rVrCo.pdf" download="Refund-Policy.pdf" className="hover:underline">Refund Policy</a></li>
              <li><a href="/assets/Newsletter-C8iEjUMg.pdf" download="Newsletter.pdf" className="hover:underline">Newsletter</a></li>
              <li><a href="/assets/AcademicCalendarJuly24-CbrFnfbG.pdf" download="AcademicCalendarJuly24.pdf" className="hover:underline">Academic Calendar</a></li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-8">
          <a href="https://x.com/Online_VGU" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-[#7F1813]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"></path>
            </svg>
          </a>
          <a href="https://www.facebook.com/vguonline" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-[#7F1813]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/online.vgu/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-[#7F1813]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/online-vgu/" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-[#7F1813]">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </a>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">© 2025 Online VGU. All Rights Reserved.</div>
      </footer>

      {/* ====== FLOATING BUTTONS ====== */}
      <div style={{"position": "fixed", "bottom": "20px", "right": "20px", "zIndex": "1000", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
        <a href="tel:9910807835" style={{"display": "flex", "alignItems": "center", "background": "rgb(0, 86, 210)", "padding": "10px 15px", "borderRadius": "30px", "boxShadow": "rgba(0, 0, 0, 0.2) 0px 4px 8px", "textDecoration": "none", "transition": "transform 0.3s, box-shadow 0.3s"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call" aria-hidden="true" style={{"marginRight": "10px"}}>
            <path d="M13 2a9 9 0 0 1 9 9"></path>
            <path d="M13 6a5 5 0 0 1 5 5"></path>
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
          </svg>
          <span style={{"color": "rgb(255, 255, 255)", "fontSize": "16px", "fontWeight": "bold", "whiteSpace": "nowrap"}}>Talk to Expert</span>
        </a>
        <a href="https://wa.me/919910807835?text=Hi%2C%20I'm%20interested%20in%20applying%20for%20admission%20at%20VGU%20Online.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer" style={{"display": "flex", "alignItems": "center", "background": "rgb(37, 211, 102)", "padding": "10px 15px", "borderRadius": "30px", "boxShadow": "rgba(0, 0, 0, 0.2) 0px 4px 8px", "textDecoration": "none", "transition": "transform 0.3s, box-shadow 0.3s"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle" aria-hidden="true" style={{"marginRight": "10px"}}>
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
          </svg>
          <span style={{"color": "rgb(255, 255, 255)", "fontSize": "16px", "fontWeight": "bold", "whiteSpace": "nowrap"}}>Chat with Us</span>
        </a>
      </div>
    </>
  );
}
