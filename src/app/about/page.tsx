import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Aiden Rhaa | Luxury Wedding Photographer Gwinnett County",
  description: "Learn about Aiden Rhaa, a premier fine art and documentary wedding photographer based in Gwinnett County, GA. Discover our approach to luxury wedding photography.",
};

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h1 className="font-serif text-5xl md:text-6xl text-brand-accent tracking-wider mb-6">
            The Artist
          </h1>
          <div className="w-12 h-px bg-brand-taupe mx-auto mb-6"></div>
          <p className="font-sans text-brand-gray tracking-widest uppercase text-xs">
            Aiden Rhaa &mdash; Lead Photographer
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none">
            {/* Using one of the stylish portraits from the site as a placeholder for Aiden */}
            <Image 
              src="https://aidenrhaa.com/wp-content/uploads/2017/11/boston-wedding-photographer-aiden-rhaa-8048_950.jpg"
              alt="Aiden Rhaa - Gwinnett County Wedding Photographer"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center shadow-2xl"
              priority
            />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-taupe -z-10 hidden md:block"></div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-accent mb-8 leading-snug">
              Capturing the unspoken elegance of your most important day.
            </h2>
            
            <div className="space-y-6 font-sans text-brand-gray leading-loose font-light text-sm md:text-base">
              <p>
                Based in the heart of Gwinnett County, Georgia, I specialize in an editorial, documentary approach to wedding photography. My philosophy is rooted in observation rather than orchestration. I believe that the most breathtaking, expensive-looking photographs are born from genuine, unforced moments.
              </p>
              <p>
                With over a decade of experience navigating high-end celebrations across the country, my team and I have honed the ability to blend seamlessly into your event. We act as quiet observers, anticipating the fleeting glances, the subtle touches, and the grand emotions that define your unique narrative.
              </p>
              <p>
                My aesthetic is distinctly low-key yet undeniably premium. I am drawn to timeless compositions, masterful use of natural light, and a refined color palette. The result is a curated collection of heirlooms that will resonate with sophistication for generations to come.
              </p>
              <p>
                For the successful, discerning couple who values artistry and discretion, we offer more than just photography; we offer peace of mind and an impeccable visual legacy.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-taupe/30">
              <p className="font-serif text-2xl text-brand-accent italic mb-6">
                &quot;Your wedding is a masterpiece. The photography should be no less.&quot;
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center font-sans text-xs tracking-[0.2em] uppercase text-brand-accent border-b border-brand-accent pb-1 hover:text-brand-taupe hover:border-brand-taupe transition-colors duration-300"
              >
                Inquire about availability <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
