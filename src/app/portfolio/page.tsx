import Image from "next/image";

// Extracted a set of varied, high-quality images from the provided URL
const portfolioImages = [
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/boston-wedding-photographer-portrait.jpg", alt: "Classic couple portrait", width: 800, height: 1200 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/romantic-candle-lit-tent-wedding-10704.jpg", alt: "Candle-lit tent reception", width: 1200, height: 800 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/bride-groom-under-the-stars-night-time-portrait-by-aiden-rhaa.jpg", alt: "Night time portrait under the stars", width: 800, height: 1200 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/creative-black-and-white-photo-of-wedding-rings-on-rustic-window-aiden-rhaa-photography-ma-IMG_5957.jpg", alt: "Creative ring detail", width: 1200, height: 800 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/boston-public-garden-wedding-couple-portrait.jpg", alt: "Elegant garden portrait", width: 800, height: 1200 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/first-dance-museum-of-science-washburn-pavilion-7965.jpg", alt: "Emotional first dance", width: 1200, height: 800 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/father-bride-first-look-emotional-moment-10415.jpg", alt: "Father and bride first look", width: 800, height: 1200 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/boston-harbor-hotel-wedding-emotional-moment.jpg", alt: "Emotional moment during ceremony", width: 1200, height: 800 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/bridesmaid-emotional-moment-4949.jpg", alt: "Bridesmaid emotional moment", width: 800, height: 1200 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/rice-toss-bride-groom-ceremony-exit-10509.jpg", alt: "Joyful ceremony exit rice toss", width: 1200, height: 800 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/boston-state-room-wedding-old-state-house-2360.jpg", alt: "Grand architectural wedding portrait", width: 800, height: 1200 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/boston-elite-yacht-wedding-ceremony-sunset.jpg", alt: "Sunset yacht wedding ceremony", width: 1200, height: 800 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/lyman-estate-wedding.jpg", alt: "Estate wedding grounds", width: 800, height: 1200 },
  { src: "https://aidenrhaa.com/wp-content/uploads/2017/11/hora-chair-lifting-dance-jewish-wedding-connors-center-12692.jpg", alt: "Energetic reception dancing", width: 1200, height: 800 },
];

export const metadata = {
  title: "Portfolio | Aiden Rhaa Photography | Gwinnett County GA",
  description: "Explore our curated collection of luxury wedding photography. High-end, documentary style captures from Gwinnett County, GA and surrounding areas.",
};

export default function Portfolio() {
  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <h1 className="font-serif text-5xl md:text-6xl text-brand-accent tracking-wider mb-6">
          The Portfolio
        </h1>
        <div className="w-12 h-px bg-brand-taupe mx-auto mb-6"></div>
        <p className="font-sans text-brand-gray tracking-widest uppercase text-xs leading-loose">
          A curated selection of timeless moments.<br/>
          Editorial elegance meets genuine emotion.
        </p>
      </div>

      {/* Masonry-style CSS Grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
          {portfolioImages.map((img, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group overflow-hidden bg-brand-taupe/10"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
      
      {/* End Note */}
      <div className="max-w-2xl mx-auto text-center mt-32 px-6">
        <p className="font-serif text-2xl text-brand-accent italic mb-8">
          &quot;Photography is an investment in your legacy. We capture the feelings, the atmosphere, and the unspoken beauty of your celebration.&quot;
        </p>
      </div>
    </div>
  );
}
