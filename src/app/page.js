
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header style={{ width: '100%', background: '#fff', borderBottom: '1px solid #eee', padding: '1.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Image src="/logos/logo.svg" alt="VGU Logo" width={80} height={80} />
          <h1 style={{ fontWeight: 700, fontSize: '2.2rem', color: '#222', margin: 0 }}>Online VGU – Dynamic Online Degree</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ width: '100%', background: '#f5f7fa', padding: '3rem 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
        <Image src="/hero/slide2m.webp" alt="Hero 1" width={400} height={250} style={{ borderRadius: 16, objectFit: 'cover' }} />
        <Image src="/hero/slide3m.webp" alt="Hero 2" width={400} height={250} style={{ borderRadius: 16, objectFit: 'cover' }} />
      </section>

      {/* Features Section */}
      <section style={{ width: '100%', maxWidth: 1200, margin: '3rem auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem', background: '#fff', padding: '2rem 1rem', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <div style={{ textAlign: 'center' }}>
          <Image src="/assets/affordablestructure_c8k2lnz0.png" alt="Affordable Structure" width={100} height={100} />
          <h2 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Affordable Structure</h2>
          <p>Flexible and affordable fee structure for all students.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Image src="/assets/aipowered_x70ja0e7.webp" alt="AI Powered" width={100} height={100} />
          <h2 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>AI Powered</h2>
          <p>Modern learning powered by AI and technology.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Image src="/assets/careerassistance_o1l9zavf.png" alt="Career Assistance" width={100} height={100} />
          <h2 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Career Assistance</h2>
          <p>Guidance and support for your career growth.</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <Image src="/assets/expertmentor_cz_skrjv.png" alt="Expert Mentor" width={100} height={100} />
          <h2 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem', fontWeight: 600 }}>Expert Mentors</h2>
          <p>Learn from industry experts and experienced faculty.</p>
        </div>
      </section>

      {/* Programs Section */}
      <section style={{ width: '100%', maxWidth: 1200, margin: '3rem auto', padding: '2rem 1rem', background: '#f5f7fa', borderRadius: 16 }}>
        <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.7rem', marginBottom: '2rem' }}>Our Programmes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem', justifyItems: 'center' }}>
          <Image src="/programme/baimage.webp" alt="BA" width={120} height={120} />
          <Image src="/programme/bbaimage.webp" alt="BBA" width={120} height={120} />
          <Image src="/programme/bcaimage.webp" alt="BCA" width={120} height={120} />
          <Image src="/programme/maimage.webp" alt="MA" width={120} height={120} />
          <Image src="/programme/majmcimage.webp" alt="MAJMC" width={120} height={120} />
          <Image src="/programme/mbaifimage.webp" alt="MBA IF" width={120} height={120} />
          <Image src="/programme/mbaimage.webp" alt="MBA" width={120} height={120} />
          <Image src="/programme/mcaimage.webp" alt="MCA" width={120} height={120} />
          <Image src="/programme/mscimage.webp" alt="MSC" width={120} height={120} />
        </div>
      </section>

      {/* Partners/Accreditation Section */}
      <section style={{ width: '100%', maxWidth: 1200, margin: '3rem auto', padding: '2rem 1rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', marginBottom: '2rem' }}>Our Partners & Accreditations</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
          <Image src="/assets/aicte_bknjoxdn.webp" alt="AICTE" width={80} height={80} />
          <Image src="/assets/assocham_dvqk7wgv.webp" alt="Assocham" width={80} height={80} />
          <Image src="/assets/naac_bcjeogop.webp" alt="NAAC" width={80} height={80} />
          <Image src="/assets/ugc_by2vwxz_.png" alt="UGC" width={80} height={80} />
          <Image src="/assets/ugc_cme1yc9_.webp" alt="UGC 2" width={80} height={80} />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ width: '100%', padding: '1.5rem 0', textAlign: 'center', background: '#222', color: '#fff', marginTop: '2rem' }}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Online VGU. All rights reserved.</p>
      </footer>
    </>
  );
}
