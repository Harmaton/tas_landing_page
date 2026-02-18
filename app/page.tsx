'use client';

import { useState, useEffect } from 'react';
import { Playfair_Display, Lora, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 24,
    hours: 15,
    minutes: 10,
    seconds: 14,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const launchDate = new Date('2026-03-13T00:00:00').getTime();
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900" style={{ fontFamily: inter.style.fontFamily }}>
      {/* Hero Section */}
      <section
        className="relative -mx-6 md:-mx-12 w-screen h-screen flex flex-col justify-between overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("/hero.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Header */}
        <header className="relative z-10 flex justify-between items-center px-8 md:px-12 pt-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-24 md:h-28 lg:h-32 w-auto"
          />

        </header>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight" style={{ fontFamily: playfair.style.fontFamily, fontWeight: 600 }}>
            The Art Soko
          </h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-10 leading-tight max-w-4xl" style={{ fontFamily: playfair.style.fontFamily, fontWeight: 400 }}>
            The Doors to Heritage Open In...
          </h2>

          {/* Timer */}
          <div className="bg-black/30 backdrop-blur-md border border-white/15 rounded-2xl px-8 md:px-12 py-8 mb-12">
            <div className="flex gap-6 md:gap-10 justify-center">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' },
              ].map((unit, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2 min-w-20 tracking-tight" style={{ fontFamily: lora.style.fontFamily }}>
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-white/60 font-medium">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl">
            A digital sanctuary for contemporary Global masterpieces
          </p>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-white/60 mt-auto pb-8">
            <div className="w-6 h-10 border-2 border-white/40 rounded-2xl flex items-start justify-center pt-2">
              <div className="w-1 h-1.5 bg-white/60 rounded-full animate-bounce"></div>
            </div>
            <span className="text-xs md:text-sm tracking-widest">SCROLL TO EXPLORE</span>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <span className="inline-block border border-gray-400 rounded-full px-4 py-2 text-xs font-semibold text-gray-600 mb-6 tracking-wide">
              OUR VISION
            </span>
            <h2 className="text-5xl md:text-6xl font-light mb-8 leading-tight" style={{ fontFamily: playfair.style.fontFamily, fontWeight: 400 }}>
              Cultural Custodianship
            </h2>
            <div className="w-16 h-1 bg-amber-700"></div>
          </div>

          <div className="space-y-6">
            <blockquote className="border-l-4 border-cyan-400 pl-8 italic text-2xl text-gray-900 leading-relaxed" style={{ fontFamily: lora.style.fontFamily }}>
              &quot;Art is the soul of the community, the bridge between our ancestors and our children.&quot;
              <footer className="not-italic text-sm text-gray-600 mt-4 font-normal">— Cultural Custodianship</footer>
            </blockquote>

            <p className="text-gray-600 leading-relaxed text-lg">
              The Art Soko is more than a marketplace—it&apos;s an institutional platform dedicated to preserving and celebrating contemporary Global fine art. We believe that art carries the stories, struggles, and triumphs of entire cultures.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission transcends simple transactions. We&apos;re building a global community where collectors, artists, and cultural institutions unite in protecting Africa&apos;s artistic heritage. Every piece on our platform is authenticated, every transaction secured, and every artist honored.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              This is not about ownership—it&apos;s about custodianship. It&apos;s about ensuring that future generations can witness the brilliance of Global creativity.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-8 mt-10">
              {[
                { icon: '✓', title: 'Authenticity', desc: 'Every piece verified by experts', color: 'bg-cyan-100' },
                { icon: '♥', title: 'Respect', desc: 'Honoring artists and heritage', color: 'bg-pink-100' },
                { icon: '👥', title: 'Community', desc: 'Global network of collectors', color: 'bg-pink-100' },
                { icon: '✨', title: 'Excellence', desc: 'Curated by industry leaders', color: 'bg-yellow-100' },
              ].map((feature, i) => (
                <div key={i}>
                  <div className={`w-14 h-14 rounded-full ${feature.color} flex items-center justify-center text-2xl mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2" style={{ fontFamily: lora.style.fontFamily }}>{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-14 md:py-24 px-6 md:px-12 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-4" style={{ fontFamily: playfair.style.fontFamily, fontWeight: 400 }}>
            The Collection Awaits
          </h2>
          <p className="text-center text-white/70 mb-12 text-lg">
            Acquisitions from the continent&apos;s most profound voices
          </p>

          {/* Gallery Grid - CORRECT PROPORTIONS */}
          <div className="grid grid-cols-5 grid-rows-2 gap-6 mb-8">
            {/* Large left item - 3 columns, 2 rows */}
            <div className="col-span-3 row-span-2 relative rounded-2xl overflow-hidden bg-gray-700 group cursor-pointer shadow-lg">
              <img
                src="/Rectangle 5.png"
                alt="Vibrant African Painting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6">
                <h3 className="font-semibold text-lg" style={{ fontFamily: lora.style.fontFamily }}>Untitled Series</h3>
                <p className="text-white/80 text-sm">Contemporary Artist</p>
              </div>
            </div>

            {/* Top right card - 2 columns, 1 row */}
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden bg-gray-700 group cursor-pointer shadow-lg">
              <img
                src="/Rectangle 6.png"
                alt="Wooden Sculpture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 flex flex-col justify-end p-5">
                <h3 className="font-semibold" style={{ fontFamily: lora.style.fontFamily }}>Heritage Forms</h3>
                <p className="text-white/80 text-sm">Master Sculptor</p>
              </div>
            </div>

            {/* Bottom right card - 2 columns, 1 row */}
            <div className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden bg-gray-700 group cursor-pointer shadow-lg">
              <img
                src="/Rectangle 7.png"
                alt="Decorative Piece"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 flex flex-col justify-end p-5">
                <h3 className="font-semibold" style={{ fontFamily: lora.style.fontFamily }}>Sacred Adornment</h3>
                <p className="text-white/80 text-sm">Artisan Collective</p>
              </div>
            </div>
          </div>

          {/* Bottom row - 3 equal items in new grid */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-700 group cursor-pointer shadow-lg">
              <img
                src="/Rectangle 8.png"
                alt="Abstract Face"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 flex flex-col justify-end p-5">
                <h3 className="font-semibold" style={{ fontFamily: lora.style.fontFamily }}>Ancestral Voices</h3>
                <p className="text-white/80 text-sm">Contemporary Mixed Media</p>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-700 group cursor-pointer shadow-lg">
              <img
                src="/Rectangle 9.png"
                alt="Woven Stories"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 flex flex-col justify-end p-5">
                <h3 className="font-semibold" style={{ fontFamily: lora.style.fontFamily }}>Woven Stories</h3>
                <p className="text-white/80 text-sm">Adaeze Nwankwo</p>
                <p className="text-cyan-400 text-xs font-semibold mt-2 tracking-wide">AVAILABLE SOON</p>
              </div>
            </div>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-700 group cursor-pointer shadow-lg">
              <img
                src="/Rectangle 4.png"
                alt="Ceramic Sphere"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all opacity-0 group-hover:opacity-100 flex flex-col justify-end p-5">
                <h3 className="font-semibold" style={{ fontFamily: lora.style.fontFamily }}>Sacred Geometry</h3>
                <p className="text-white/80 text-sm">Ceramic Artist</p>
              </div>
            </div>
          </div>

          <p className="text-center text-white/70 mb-8">
            This is just a preview. The full collection launches soon.
          </p>

          <div className="flex justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              Join the Waitlist <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* What Awaits Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-4" style={{ fontFamily: playfair.style.fontFamily, fontWeight: 400 }}>
            What Awaits When Doors Open
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            A platform built for collectors who value authenticity, security, and cultural significance
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: '🛡',
                title: 'Secure Escrow Payments',
                desc: 'Protected transactions with global logistics. Your investment is safe from inquiry to delivery.',
                color: 'bg-cyan-100',
              },
              {
                icon: '?',
                title: 'Authenticated Provenance',
                desc: 'Certificate of authenticity for every piece. Full documentation and expert verification included.',
                color: 'bg-amber-100',
              },
              {
                icon: '👥',
                title: 'Global Community',
                desc: 'Connect with artists and collectors worldwide. Join a network passionate about Global art.',
                color: 'bg-pink-100',
              },
              {
                icon: '✨',
                title: 'Curated Excellence',
                desc: 'Every piece vetted by industry experts. Only the finest contemporary Global art makes it through.',
                color: 'bg-yellow-100',
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className={`w-14 h-14 rounded-full ${benefit.color} flex items-center justify-center text-2xl mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: lora.style.fontFamily }}>{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.desc}</p>
                <div className="w-10 h-1 bg-amber-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        className="py-20 md:py-28 px-6 md:px-12 text-white"
        style={{
          background: 'linear-gradient(to right, #ff6b4a 0%, #d94a2a 100%)',
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-6" style={{ fontFamily: playfair.style.fontFamily, fontWeight: 400 }}>
            Join Our Exclusive Waitlist
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Be among the first to experience the future of Global art trading
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12 max-w-md mx-auto">
            {[
              'Early access privileges',
              'Exclusive launch offers',
              'Priority support',
              'Behind-the-scenes updates',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-base">
                <span className="text-lg font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border border-white/30 rounded-full px-6 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-white/60 text-base"
            />
            <button className="bg-white text-red-500 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all shrink-0">
              Secure Your Spot
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {['A', 'B', 'C', 'D'].map((letter, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-400 to-red-500 flex items-center justify-center text-xs font-bold font-sans transition-transform hover:scale-110"
                style={{ marginLeft: i > 0 ? '-14px' : '0' }}
              >
                {letter}
              </div>
            ))}
            <span className="ml-3 text-base">500+ collectors waiting</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: playfair.style.fontFamily, fontWeight: 600 }}>The Art Soko</h3>
            <p className="text-sm text-gray-400">
              © 2026 The Art Soko Institutional Platform. All rights reserved.
            </p>
          </div>
          <div className="flex justify-end gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}