import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Placeholder for high-end hero image. In production, this would be a full-res image. */}
        <div className="absolute inset-0 z-0 bg-brand-charcoal/20">
          <Image 
            src="https://aidenrhaa.com/wp-content/uploads/2017/11/boston-wedding-photographer-portrait.jpg" 
            alt="Elegant couple, luxury wedding photography"
            fill
            sizes="100vw"
            className="object-cover object-center w-full h-full opacity-90"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center flex flex-col items-center px-6 mt-20">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-widest text-brand-cream uppercase leading-tight drop-shadow-lg mb-4">
            Understated<br />Elegance
          </h1>
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-brand-cream/90 max-w-lg mx-auto drop-shadow-md mb-12">
            Gwinnett County GA Wedding Photographer
          </p>
          <Link 
            href="/portfolio" 
            className="font-sans text-xs tracking-[0.2em] uppercase text-brand-cream border border-brand-cream px-8 py-4 hover:bg-brand-cream hover:text-brand-accent transition-all duration-500"
          >
            View the Portfolio
          </Link>
        </div>
      </section>

      {/* Intro / Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-brand-cream max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-brand-accent tracking-wider mb-10 leading-snug">
          Timeless, documentary wedding photography for the discerning couple.
        </h2>
        <div className="w-16 h-px bg-brand-taupe mx-auto mb-10"></div>
        <p className="font-sans text-brand-gray leading-loose max-w-3xl mx-auto text-sm md:text-base font-light mb-12">
          Based in Gwinnett County, GA, we specialize in high-end, editorial-style wedding photography that feels both incredibly luxurious and completely natural. Our approach is low-key and unforced, capturing the genuine, expensive moments of your day with an artist&apos;s eye. We believe your memories should be as refined and sophisticated as the life you are building together.
        </p>
        <Link 
          href="/about" 
          className="font-sans text-xs tracking-[0.2em] uppercase text-brand-accent border-b border-brand-accent pb-1 hover:text-brand-taupe hover:border-brand-taupe transition-colors duration-300"
        >
          Meet Aiden
        </Link>
      </section>

      {/* Curated Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-brand-taupe block mb-4">Selected Works</span>
              <h3 className="font-serif text-4xl text-brand-accent tracking-wider">The Collection</h3>
            </div>
            <Link 
              href="/portfolio" 
              className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gray hover:text-brand-accent transition-colors duration-300"
            >
              Explore Full Gallery &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Image 1 */}
            <Link href="/portfolio" className="group relative aspect-[4/5] overflow-hidden block">
              <Image 
                src="https://aidenrhaa.com/wp-content/uploads/2017/11/boston-public-garden-wedding-couple-portrait.jpg"
                alt="Luxury wedding portrait Gwinnett County GA"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </Link>
            
            {/* Image 2 (shifted down slightly for masonry feel) */}
            <Link href="/portfolio" className="group relative aspect-[4/5] overflow-hidden block md:mt-12">
              <Image 
                src="https://aidenrhaa.com/wp-content/uploads/2017/11/creative-black-and-white-photo-of-wedding-rings-on-rustic-window-aiden-rhaa-photography-ma-IMG_5957.jpg"
                alt="High-end wedding details"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </Link>

            {/* Image 3 */}
            <Link href="/portfolio" className="group relative aspect-[4/5] overflow-hidden block">
              <Image 
                src="https://aidenrhaa.com/wp-content/uploads/2017/11/romantic-candle-lit-tent-wedding-10704.jpg"
                alt="Elegant wedding reception"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-32 bg-brand-accent text-brand-cream text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl tracking-widest mb-8 leading-snug">
            Reserve Your Date
          </h2>
          <p className="font-sans text-brand-taupe text-sm tracking-widest uppercase mb-12 max-w-lg mx-auto leading-relaxed">
            Accepting a limited number of commissions for the upcoming wedding season to ensure the highest level of service.
          </p>
          <Link 
            href="/contact" 
            className="font-sans text-xs tracking-[0.2em] uppercase text-brand-accent bg-brand-cream px-10 py-4 hover:bg-brand-taupe transition-colors duration-300 inline-block"
          >
            Inquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
