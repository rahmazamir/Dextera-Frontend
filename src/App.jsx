import React, { useState, useEffect } from 'react';
import PixelBlast from './component/PixelBlast';
import SpotlightCard from './component/SpotlightCard';
import DotGrid from './component/DotGrid';
import Ribbons from './component/Ribbons';
import Folder from './component/Folder';
import { Scale, BookOpen, Users, FileText, Search, Shield, CheckCircle, XCircle, ChevronRight, Menu, X, Code } from 'lucide-react';

/* ── Manrope font loader ── */
const ManropeLoader = () => (
  <style>{`
    html { scroll-behavior: smooth; }
    section[id] { scroll-margin-top: 80px; }
  `}</style>
);

/* ── SVG icons for the phone ── */
const BatteryIcon = () => (
  <svg width="22" height="11" viewBox="0 0 25 12" fill="none">
    <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="#111" strokeOpacity="0.35"/>
    <rect x="1" y="1" width="20" height="10" rx="3" fill="#111"/>
    <path d="M23 4v4a2 2 0 0 0 0-4z" fill="#111" fillOpacity="0.4"/>
  </svg>
);
const WifiIcon = () => (
  <svg width="15" height="11" viewBox="0 0 16 12" fill="#111">
    <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm0-3.5a6 6 0 0 1 4.243 1.757l-1.415 1.414A4 4 0 0 0 8 8a4 4 0 0 0-2.828 1.172L3.757 7.757A6 6 0 0 1 8 6zm0-4a9.5 9.5 0 0 1 6.718 2.782L13.303 6.197A7.5 7.5 0 0 0 8 4a7.5 7.5 0 0 0-5.303 2.197L1.282 4.782A9.5 9.5 0 0 1 8 2z"/>
  </svg>
);
const SignalIcon = () => (
  <svg width="15" height="11" viewBox="0 0 17 12" fill="#111">
    <rect x="0"    y="8" width="3" height="4"  rx="1"/>
    <rect x="4.5"  y="6" width="3" height="6"  rx="1"/>
    <rect x="9"    y="3" width="3" height="9"  rx="1"/>
    <rect x="13.5" y="0" width="3" height="12" rx="1"/>
  </svg>
);
const BackChevron = () => (
  <svg width="9" height="10" viewBox="0 0 10 16" fill="none">
    <path d="M8.5 1.5L2 8l6.5 6.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Phone Mockup ── */
const PhoneMockup = () => {
  const [phoneIn,   setPhoneIn]   = useState(false);
  const [inputIn,   setInputIn]   = useState(false);
  const [bubblesIn, setBubblesIn] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhoneIn(true),   150);
    const t2 = setTimeout(() => setInputIn(true),   750);
    const t3 = setTimeout(() => setBubblesIn(true), 1550);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const MR = "'Manrope', sans-serif";

  return (
    <div style={{
      padding: '1px',
      borderRadius: '47px',
      background: '#C7DAED',
      boxShadow: phoneIn
        ? '0 0 0 2px #C7DAED, 0 36px 90px rgba(0,0,0,0.5)'
        : '0 0 0 2px #C7DAED, 0 10px 30px rgba(0,0,0,0.3)',
      transform: phoneIn ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.94)',
      opacity: phoneIn ? 1 : 0,
      transition: 'transform 0.7s cubic-bezier(0.34,1.56,0.64,1), opacity 0.5s ease, box-shadow 0.7s ease',
      flexShrink: 0,
    }}>
      <div style={{ padding: '7px', borderRadius: '45px', background: '#111', position: 'relative' }}>
        <div style={{ position:'absolute', left:'-10px', top:'82px',  width:'3px', height:'22px', background:'#111', borderRadius:'2px 0 0 2px' }}/>
        <div style={{ position:'absolute', left:'-10px', top:'114px', width:'3px', height:'44px', background:'#111', borderRadius:'2px 0 0 2px' }}/>
        <div style={{ position:'absolute', left:'-10px', top:'166px', width:'3px', height:'44px', background:'#111', borderRadius:'2px 0 0 2px' }}/>
        <div style={{ position:'absolute', right:'-10px',top:'130px', width:'3px', height:'62px', background:'#111', borderRadius:'0 2px 2px 0' }}/>

        <div style={{
          width: '280px', height: '552px',
          background: '#F9FAFB',
          borderRadius: '38px',
          overflow: 'hidden',
          position: 'relative',
          fontFamily: MR,
        }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 20px 4px', position:'relative' }}>
            <span style={{ fontSize:'12px', fontWeight:'700', color:'#111', fontFamily: MR }}>3:30</span>
            <div style={{ position:'absolute', top:'8px', left:'50%', transform:'translateX(-50%)', width:'78px', height:'22px', background:'#111', borderRadius:'12px', zIndex:10 }}/>
            <div style={{ display:'flex', alignItems:'center', gap:'4px' }}>
              <SignalIcon/><WifiIcon/><BatteryIcon/>
            </div>
          </div>

          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'6px 14px 10px', background:'#F9FAFB' }}>
            <div style={{ width:'28px', height:'28px', background:'#a0b4ed', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <BackChevron/>
            </div>
            <span style={{ fontSize:'11.5px', fontWeight:'700', color:'#111', fontFamily: MR }}>
              Punishment for Theft (PPC)
            </span>
            <div style={{ width:'28px', height:'28px', background:'#7B8FC7', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'10px', fontWeight:'400', fontFamily: MR }}>
              RZ
            </div>
          </div>

          <div style={{ background:'#fff', position:'absolute', top:'98px', left:0, right:0, bottom:0 }}>
            <div style={{ padding:'12px 11px 0', display:'flex', flexDirection:'column', gap:'10px' }}>
              <div style={{
                display:'flex', justifyContent:'flex-end',
                opacity: bubblesIn ? 1 : 0,
                transform: bubblesIn ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.4s ease 0s, transform 0.4s ease 0s',
              }}>
                <div style={{ background:'#C8CCE8', borderRadius:'14px 14px 3px 14px', padding:'10px 13px', maxWidth:'80%', fontSize:'11px', lineHeight:'1.5', color:'#111', fontFamily: MR, fontWeight:'500' }}>
                  What is the punishment for theft under Section 379 PPC?
                </div>
              </div>

              <div style={{
                display:'flex', justifyContent:'flex-start',
                opacity: bubblesIn ? 1 : 0,
                transform: bubblesIn ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.45s ease 0.18s, transform 0.45s ease 0.18s',
              }}>
                <div style={{ background:'#F4F5FA', borderRadius:'14px 14px 14px 3px', padding:'11px 13px', maxWidth:'90%', fontSize:'11px', lineHeight:'1.6', color:'#111', fontFamily: MR, fontWeight:'400', boxShadow:'0 1px 4px rgba(0,0,0,0.06)' }}>
                  Under Section 379 of the Pakistan Penal Code (PPC), theft is punishable with imprisonment which may extend to three years, or with fine, or with both.
                  <br/><br/>
                  <span style={{ color:'#777', fontSize:'10px', fontFamily: MR }}>
                    Source: Pakistan Penal Code, 1860 – Section 379
                  </span>
                </div>
              </div>
            </div>

            <div style={{
              position:'absolute', bottom:0, left:0, right:0, height:'150px',
              background:'radial-gradient(ellipse at 50% 115%, hsla(228, 79%, 81%, 0.60) 0%, rgba(255,255,255,0) 68%)',
              pointerEvents:'none',
              opacity: inputIn ? 1 : 0,
              transition: 'opacity 0.7s ease',
            }}/>

            <div style={{
              position:'absolute', bottom:'12px', left:'10px', right:'10px',
              background:'#F0F2FA',
              borderRadius:'18px',
              padding:'11px 10px 11px 14px',
              display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:'8px',
              boxShadow: inputIn
                ? '0 0 0 3.5px rgba(155,175,245,0.4), 0 6px 24px rgba(155,175,245,0.35)'
                : '0 0 0 0px rgba(155,175,245,0)',
              opacity: inputIn ? 1 : 0,
              transform: inputIn ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease, transform 0.55s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.55s ease',
            }}>
              <span style={{ fontSize:'11px', color:'#AAAABF', fontFamily: MR, fontWeight:'500', flex:1, lineHeight:'1.4', paddingBottom:'2px' }}>
                Write your legal query here
              </span>
              <div style={{ display:'flex', gap:'6px', alignItems:'center' }}>
                <div style={{ width:'27px', height:'27px', background:'#B4BCE0', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div style={{ width:'27px', height:'27px', background:'#B4BCE0', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M6 10V2M2 6l4-4 4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════════════════ */

const DexteraLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [folderOpen, setFolderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setVisibleSections((prev) => new Set([...prev, entry.target.id])); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleSections.has(id);
  const MR = "'Manrope', sans-serif";
  const showHeader = scrollY > 100;

  return (
    <>
      <ManropeLoader/>
      <div className="min-h-screen" style={{ fontFamily: MR }}>

        {/* ── Header - Only shows after scrolling ── */}
        <header 
          className="fixed top-0 w-full z-50 transition-all duration-300"
          style={{
            opacity: showHeader ? 1 : 0,
            transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: showHeader ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
            pointerEvents: showHeader ? 'auto' : 'none',
            padding: '12px 0'
          }}
        >
          <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center space-x-1">
               <img src="/dexalt.png" alt="Dextera" className="w-5.5 h-6 mr-0.5"/>
              <span className="text-2xl manrope-logo" style={{ color: '#6F78A4' }}>extera</span>
            </div>
          
            <div className="hidden md:flex items-center space-x-6">
              {[['SDG 16','#mission'],['Users','#users'],['Features','#features'],['How It Works','#how-it-works'],['Technology','#tech'],['Comparison','#comparison'],['Ethics','#ethics']].map(([label,href],i)=>(
                <a key={i} href={href} className="text-slate-700 hover:text-blue-700 transition-colors" style={{ fontFamily: MR }}>{label}</a>
              ))}
              <button className="px-6 py-2.5 bg-blue-700 text-white rounded-lg hover:bg-blue-800 hover:shadow-lg transition-all duration-300" style={{ fontFamily: MR }}>Try Dextera</button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-6 py-4 space-y-3">
                {[['SDG 16','#mission'],['Users','#users'],['Features','#features'],['How It Works','#how-it-works'],['Technology','#tech'],['Comparison','#comparison'],['Ethics','#ethics']].map(([label,href],i)=>(
                  <a key={i} href={href} className="block text-slate-700" style={{ fontFamily: MR }} onClick={()=>setMobileMenuOpen(false)}>{label}</a>
                ))}
                <button className="w-full px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300" style={{ fontFamily: MR }}>Try Dextera</button>
              </div>
            </div>
          )}
        </header>

        {/* ── Hero ── */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Gradient - responsive direction */}
  <div 
    className="absolute inset-0" 
    style={{ 
      zIndex: 0, 
      background: 'linear-gradient(90deg, #6F78A4 0%, #ffffff 100%)'
    }}
  >
    <style>{`
      @media (max-width: 768px) {
        .hero-gradient { background: linear-gradient(180deg, #6F78A4 0%, #ffffff 100%) !important; }
      }
    `}</style>
  </div>
  
  <div className="absolute inset-0 hero-gradient" style={{ zIndex: 0, background: 'linear-gradient(90deg, #3e4a83 0%, #ffffff 100%)' }}/>
  
  <div className="absolute inset-0" style={{ zIndex: 1 }}>
    <PixelBlast variant="square" pixelSize={7} color="#ffffff" patternScale={2} patternDensity={1.1} pixelSizeJitter={0} enableRipples={true} rippleSpeed={0.3} rippleThickness={0.1} rippleIntensityScale={1.2} liquid={false} speed={0.5} edgeFade={0.5} transparent={true} antialias={false}/>
  </div>

  {/* Content - Full height flex column to push bottom content */}
  <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full h-full min-h-[90vh] flex flex-col" style={{ zIndex: 10 }}>
    
 {/* Medium screens and up - custom layout */}
<div className="hidden md:block relative flex-1">
  {/* Top Left - Dextera Your Right Hand in Criminal Law */}
  <div className="absolute top-0 left-0">
    <div className="flex items-center mb-4">
      <img src="/DexLogo.png" alt="" className="w-14 h-15 mr-1"/>
      <h1 className="text-6xl manrope-logo text-white">extera</h1>
    </div>
    <h2 className="text-5xl manrope-medium text-white">Your Right Hand in Criminal Law</h2>
  </div>

   {/* Get Started Button - with left padding */}
  <div className="absolute pl-8 md:pl-12 lg:pl-0" style={{ top: '160px', left: '0' }}>
    <button className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 flex items-center" style={{ fontFamily: MR }}>
      Get Started <ChevronRight className="ml-2 w-5 h-5"/>
    </button>
  </div>

  {/* Phone - under Get Started button with left padding */}
  <div className="absolute pl-8 md:pl-12 lg:pl-60" style={{ top: '160px', left: '40px' }}>
    <PhoneMockup/>
  </div>

  {/* Bottom Right - Three Features */}
  <div className="absolute bottom-0 right-0 mb-20">
    <div className="flex flex-col space-y-4">
      <div className="text-3xl md:text-5xl font-bold text-[#6177AC] leading-tight whitespace-nowrap text-right" style={{ fontFamily: MR }}>Smart Legal Intel +</div>
      <div className="text-3xl md:text-5xl font-bold text-[#6177AC] leading-tight whitespace-nowrap text-right" style={{ fontFamily: MR }}>Document Analysis +</div>
      <div className="text-3xl md:text-5xl font-bold text-[#6177AC] leading-tight whitespace-nowrap text-right" style={{ fontFamily: MR }}>Precedent Case Citations</div>
    </div>
  </div>
</div>
    {/* Mobile - centered phone, vertical stack (optional: keep as is or also bottom-align) */}
    <div className="md:hidden flex flex-col items-center space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <img src="/DexLogo.png" alt="" className="w-11 h-12 mr-0.5"/>
          <h1 className="text-5xl manrope-logo text-white">extera</h1>
        </div>
        <h2 className="text-3xl manrope-medium text-white mb-6">Your Right Hand in Criminal Law</h2>
        <button className="px-8 py-3 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 inline-flex items-center" style={{ fontFamily: MR }}>
          Get Started <ChevronRight className="ml-2 w-5 h-5"/>
        </button>
      </div>
      
      <PhoneMockup/>
      
      <div className="flex flex-col space-y-4 text-center pt-8">
        {['Smart Legal Intel +','Document Analysis +','Precedent Case Citations'].map((line,i)=>(
  <div key={i} className="text-3xl md:text-5xl manrope-semibold text-[#7B8DB8] leading-tight" style={{ fontFamily: MR }}>{line}</div>
))}
      </div>
    </div>

  </div>
</section>
        {/* ── Problem ── */}
       
        <section id="problem" className="py-20 bg-white relative overflow-hidden" data-animate>
  <div className="absolute inset-0" style={{ zIndex: 0 }}>
    <DotGrid
      dotSize={10}
      gap={15}
      baseColor="#ffffff"
      activeColor="#d9e0ff"
      proximity={120}
      shockRadius={500}
      shockStrength={20}
      resistance={750}
      returnDuration={3}
    />
  </div>
  <div className={`relative max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible('problem')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`} style={{ zIndex: 1 }}>
  <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4" style={{ fontFamily: MR }}>The Law Should Be Understandable. It Isn't.</h2>
  <p className="text-xl text-center text-slate-600 mb-16 max-w-3xl mx-auto" style={{ fontFamily: MR }}>Access to justice requires understanding the law, but legal complexity creates barriers for millions.</p>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {title:'Complex Legal Language',    desc:'Legalese and Latin terms make statutes incomprehensible to laypeople',             stat:'68% of legal documents misunderstood'},
      {title:'High Consultation Costs',   desc:'Legal fees range from Rs. 50,000–100,000, excluding most citizens',               stat:'Rs. 50k–100k average cost'},
      {title:'Pro Se Litigation Failure', desc:'Self-represented litigants lose 80–90% of cases due to lack of legal knowledge',   stat:'80–90% loss rate'},
      {title:'AI Misinformation',         desc:'General AI tools hallucinate legal facts and provide unreliable information',      stat:'No verification mechanisms'},
      {title:'No Pakistan-Specific Tools',desc:'Existing legal AI is trained on Western law, not Pakistani statutes',             stat:'Zero local alternatives'},
      {title:'Information Barriers',      desc:'Legal precedents and judgments are scattered and inaccessible',                   stat:'Fragmented resources'},
    ].map((item,idx)=>(
      <SpotlightCard 
        key={idx}
        className="bg-[#F2F5FF] hover:shadow-lg" 
        spotlightColor="#bcc5ee "
      >
        <div className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-1">
          <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: MR }}>{item.title}</h3>
          <p className="text-slate-600 mb-4" style={{ fontFamily: MR }}>{item.desc}</p>
          <div className="text-sm font-semibold text-[#58649A]" style={{ fontFamily: MR }}>{item.stat}</div>
        </div>
      </SpotlightCard>
    ))}
  </div>
</div>
        </section>
        {/* ── Mission ── */}
        <section id="mission" className="py-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(to right, #476DA6, #6F78A4)' }} data-animate>
  
  {/* Background blur orb - bottom layer */}
  <div className="absolute inset-0 opacity-10" style={{ zIndex: 0 }}>
    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" style={{ transform:`translateY(${scrollY*0.15}px)` }}/>
  </div>

  {/* Content - middle layer */}
  <div className={`relative max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible('mission')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`} style={{ zIndex: 1 }}>
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ fontFamily: MR }}>Built for Justice, Not Just Technology</h2>
    <p className="text-xl text-center text-blue-100 mb-12 max-w-3xl mx-auto" style={{ fontFamily: MR }}>Dextera means "Right Hand" in Latin—symbolizing justice, lawfulness, and the augmentation of human capability.</p>
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {[
        {icon:<Shield className="w-8 h-8 text-white"/>,title:'Augment, Not Replace',desc:'Designed to support lawyers and legal professionals, not substitute them.'},
        {icon:<Users  className="w-8 h-8 text-white"/>,title:'Democratize Access',  desc:'Make legal knowledge accessible to all, regardless of economic status.'},
        {icon:<Scale  className="w-8 h-8 text-white"/>,title:'Ground in Truth',      desc:'Every answer backed by verified Pakistani statutes and case law.'},
      ].map((item,idx)=>(
        <div key={idx} className="text-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">{item.icon}</div>
          <h3 className="text-xl font-bold mb-2" style={{ fontFamily: MR }}>{item.title}</h3>
          <p className="text-blue-100" style={{ fontFamily: MR }}>{item.desc}</p>
        </div>
      ))}
    </div>
    <div className="rounded-2xl p-8 border border-white/30 relative overflow-hidden"
  style={{
    background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.18) 100%)',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.4) inset, 0 -1px 0 rgba(0,0,0,0.1) inset',
  }}
>
  {/* Glossy top sheen */}
  <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.6)' }}/>
  <div className="absolute top-0 left-0 right-0 rounded-t-2xl" style={{ height: '40%', background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)', pointerEvents: 'none' }}/>
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">

    {/* Left */}
    <div className="flex-1 text-center md:text-left">
      <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: MR }}>United Nations</p>
      <p className="text-white text-lg font-semibold leading-snug mb-2" style={{ fontFamily: MR }}>Sustainable Development Goals</p>
      <p className="text-5xl font-bold text-white" style={{ fontFamily: MR }}>SDG 16</p>
    </div>

    {/* Centre image */}
    <div className="flex-shrink-0 w-28 h-28 bg-white rounded-full flex items-center justify-center overflow-hidden p-2 shadow-lg">
      <img src="/UN.png" alt="UN SDG 16" className="w-full h-full object-contain" />
    </div>

    {/* Right */}
<div className="flex-1 text-center md:text-right">
  <p className="text-white mb-2 font-extrabold" 
    style={{ 
      fontFamily: MR, 
      fontSize: '1.6rem',
      textShadow: '0 2px 12px rgba(255,255,255,0.3)',
      letterSpacing: '-0.01em'
    }}>
    Aligned with SDG 16
  </p>
  <p className="text-blue-100 text-base mb-2" style={{ fontFamily: MR }}>Peace, Justice and Strong Institutions</p>
  <p className="text-blue-200 text-sm font-semibold tracking-wide" style={{ fontFamily: MR }}>for 2030</p>
</div>

  </div>
</div>
  </div>

  {/* Ribbon - TOP layer, pointer-events off so it doesn't block clicks */}
  <div className="absolute inset-0" style={{ zIndex: 10}}>
    <Ribbons
      baseThickness={30}
      colors={["#ffffff"]}
      speedMultiplier={0.3}
      maxAge={600}
      enableFade={true}
      enableShaderEffect={false}
      backgroundColor={[0, 0, 0, 0]}
    />
  </div>

</section>
<div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden relative" style={{ minHeight: '160px' }}>

        {/* ── Users ── */}
<section id="users" className="py-20 bg-slate-50" data-animate>
  <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible('users')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
    <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4" style={{ fontFamily: MR }}>Who Dextera Is For</h2>
    <p className="text-xl text-center text-slate-600 mb-16" style={{ fontFamily: MR }}>Built to serve legal professionals, students, and citizens seeking justice.</p>

    {/* Folder centred above cards */}
    <div
  className="flex justify-center mb-16 transition-all duration-300"
  style={{ minHeight: '160px', paddingTop: folderOpen ? '140px' : '52px' }}
>
  <Folder
    color="#6F78A4"
    size={2}
    onToggle={(isOpen) => setFolderOpen(isOpen)}
    items={[
      <div style={{ padding: '6px', fontSize: '8px', color: '#444', fontFamily: "'Manrope', sans-serif", lineHeight: 1.4 }}>Law Students</div>,
      <div style={{ padding: '6px', fontSize: '8px', color: '#444', fontFamily: "'Manrope', sans-serif", lineHeight: 1.4 }}>General Public</div>,
      <div style={{ padding: '6px', fontSize: '8px', color: '#444', fontFamily: "'Manrope', sans-serif", lineHeight: 1.4 }}>Legal Professionals</div>,
    ]}
  />
</div>
    {/* User cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {icon:<Scale    className="w-8 h-8"/>,title:'Legal Professionals',subtitle:'Lawyers, Advocates, Paralegals',  benefits:['Faster legal research','Precedent discovery','Document summarization','Verified citations']},
        {icon:<BookOpen className="w-8 h-8"/>,title:'Law Students',       subtitle:'Criminal Law Learners',           benefits:['Plain-language explanations','Case law references','Exam preparation aid','Conceptual understanding']},
        {icon:<Users    className="w-8 h-8"/>,title:'General Public',     subtitle:'Self-Represented Individuals',    benefits:['Understand your rights','Decode FIRs and judgments','Avoid misinformation','Legal awareness']},
      ].map((user,idx)=>(
        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-4">{user.icon}</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: MR }}>{user.title}</h3>
          <p className="text-slate-600 mb-6" style={{ fontFamily: MR }}>{user.subtitle}</p>
          <ul className="space-y-3">
            {user.benefits.map((b,i)=>(
              <li key={i} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5"/>
                <span className="text-slate-700" style={{ fontFamily: MR }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>
        {/* ── Features ── */}
        <section id="features" className="py-20 bg-white" data-animate>
          <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible('features')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16" style={{ fontFamily: MR }}>Core Features</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {icon:<FileText className="w-8 h-8"/>,title:'Legal Query Chatbot',   desc:'Ask questions in natural language and receive plain-language or detailed citation-based legal answers.',features:['Natural language processing','Plain English mode','Detailed legal mode','Multi-turn conversations']},
                {icon:<FileText className="w-8 h-8"/>,title:'Document Summarizer',  desc:'Upload FIRs, judgments, and court orders to extract key clauses, obligations, risks, and dates.',       features:['PDF upload support','OCR capability','Key clause extraction','Risk identification']},
                {icon:<Search   className="w-8 h-8"/>,title:'Precedent Case Finder',desc:'Find relevant Pakistani judgments from Supreme Court and High Courts with proper citations.',             features:['Supreme Court cases','High Court judgments','Citation formatting','Relevance ranking']},
                {icon:<Shield   className="w-8 h-8"/>,title:'Source-Backed Answers',desc:'Every response references PPC, CrPC, QSO, and PECA with verification to prevent hallucinations.',       features:['PPC references','CrPC citations','QSO compliance','No hallucinations']},
              ].map((f,idx)=>(
                <div key={idx} className="group">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">{f.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: MR }}>{f.title}</h3>
                      <p className="text-slate-600 mb-4" style={{ fontFamily: MR }}>{f.desc}</p>
                      <ul className="space-y-2">
                        {f.features.map((item,i)=>(
                          <li key={i} className="flex items-center text-sm text-slate-700" style={{ fontFamily: MR }}>
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-2"/>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-20 bg-slate-50" data-animate>
          <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible('how-it-works')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4" style={{ fontFamily: MR }}>How Dextera Works</h2>
            <p className="text-xl text-center text-slate-600 mb-16" style={{ fontFamily: MR }}>Intelligence backed by retrieval-augmented generation and verified legal sources.</p>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"/>
              <div className="space-y-12">
                {[
                  {step:'1',title:'User Input',           desc:'Type a legal question or upload a document (FIR, judgment, court order).'},
                  {step:'2',title:'Query Understanding',   desc:'Natural language query is converted into vector embeddings for semantic search.'},
                  {step:'3',title:'Smart Legal Retrieval', desc:'RAG system fetches relevant laws, sections, and precedents from verified database.'},
                  {step:'4',title:'AI Reasoning',          desc:'Legal LLM processes retrieved content to generate accurate, context-aware responses.'},
                  {step:'5',title:'Grounded Response',     desc:'Plain English explanation with citations to PPC, CrPC, case law, and statutes.'},
                  {step:'6',title:'User Output',           desc:'Readable, trustworthy answer with verifiable sources for further research.'},
                ].map((item,idx)=>(
                  <div key={idx} className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg" style={{ fontFamily: MR }}>{item.step}</div>
                    <div className="bg-white p-6 rounded-xl shadow-md flex-1 hover:shadow-lg transition-all duration-300">
                      <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: MR }}>{item.title}</h3>
                      <p className="text-slate-600" style={{ fontFamily: MR }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Tech ── */}
        <section id="tech" className="py-20 bg-white" data-animate>
          <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible('tech')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16" style={{ fontFamily: MR }}>Technology Stack</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {title:'Backend & AI',           items:['Python','Hugging Face','PyTorch','LangChain','Custom Legal LLM','RAG System','Vector Database']},
                {title:'Cloud & Infrastructure', items:['AWS SageMaker','AWS Lambda','DynamoDB','CloudWatch','Docker','GitHub Actions','CI/CD Pipeline']},
                {title:'Frontend & Design',      items:['Flutter (Web/Mobile)','Figma UI/UX','REST APIs','FastAPI','Responsive Design','Clean Architecture']},
              ].map((col,idx)=>(
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: MR }}>{col.title}</h3>
                  <ul className="space-y-3 text-slate-700">
                    {col.items.map((tech,i)=>(
                      <li key={i} className="flex items-center" style={{ fontFamily: MR }}>
                        <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"/>{tech}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Comparison ── */}
        <section id="comparison" className="py-20 bg-slate-50" data-animate>
          <div className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible('comparison')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16" style={{ fontFamily: MR }}>Why Choose Dextera?</h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left" style={{ fontFamily: MR }}>Feature</th>
                    <th className="px-6 py-4 text-center" style={{ fontFamily: MR }}>General AI</th>
                    <th className="px-6 py-4 text-center" style={{ fontFamily: MR }}>Dextera</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    ['Pakistani Law Expertise',false,true],['Verified Citations',false,true],
                    ['RAG-based Accuracy',false,true],['Legal Document Analysis',false,true],
                    ['Ethical Boundaries',false,true],['Case Law References',false,true],
                  ].map((row,idx)=>(
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-slate-900" style={{ fontFamily: MR }}>{row[0]}</td>
                      <td className="px-6 py-4 text-center">{row[1]?<CheckCircle className="w-6 h-6 text-green-600 mx-auto"/>:<XCircle className="w-6 h-6 text-red-500 mx-auto"/>}</td>
                      <td className="px-6 py-4 text-center">{row[2]?<CheckCircle className="w-6 h-6 text-green-600 mx-auto"/>:<XCircle className="w-6 h-6 text-red-500 mx-auto"/>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Ethics ── */}
        <section id="ethics" className="py-20 bg-white" data-animate>
          <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${isVisible('ethics')?'opacity-100 translate-y-0':'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4" style={{ fontFamily: MR }}>Ethics, Accuracy & Limitations</h2>
            <p className="text-xl text-center text-slate-600 mb-16" style={{ fontFamily: MR }}>Transparency and honesty are foundational to Dextera's mission.</p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: MR }}>Important Disclaimer</h3>
              <ul className="space-y-3 text-slate-700">
                {['Dextera does not provide legal advice','Dextera does not replace qualified lawyers','Dextera does not draft legally binding documents','For awareness, education, and research purposes only'].map((d,i)=>(
                  <li key={i} className="flex items-start" style={{ fontFamily: MR }}><div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"/>{d}</li>
                ))}
              </ul>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {icon:<Shield className="w-8 h-8 text-blue-700"/>,title:'Augmentation Over Replacement',desc:'Designed to assist legal professionals, not substitute human judgment and expertise.'},
                {icon:<Code   className="w-8 h-8 text-blue-700"/>,title:'Transparency via Citations',   desc:'Every answer includes verifiable sources and references to Pakistani law.'},
                {icon:<Scale  className="w-8 h-8 text-blue-700"/>,title:'Pakistan-Specific Grounding',  desc:'Built exclusively on Pakistani criminal law statutes and jurisprudence.'},
              ].map((item,idx)=>(
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ fontFamily: MR }}>{item.title}</h3>
                  <p className="text-slate-600" style={{ fontFamily: MR }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: MR }}>Ready to Experience Dextera?</h2>
            <p className="text-xl text-blue-100 mb-8" style={{ fontFamily: MR }}>Start understanding Pakistani criminal law with AI-powered assistance.</p>
            <button className="px-10 py-4 bg-white text-blue-700 rounded-lg text-lg font-semibold hover:bg-blue-50 hover:shadow-2xl transition-all duration-300" style={{ fontFamily: MR }}>Try Dextera Now</button>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-slate-900 text-slate-300 py-12">
          <div className="text-center text-sm" style={{ fontFamily: MR }}>
            <p>This is an academic project. Dextera does not provide legal advice and does not replace qualified lawyers.</p>
          </div>
        </footer>

      </div>
      </div>  
    </>
  );
};

export default DexteraLanding;