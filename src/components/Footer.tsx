import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-accent text-brand-cream py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-6">
            <span className="font-serif text-2xl tracking-[0.15em] uppercase">
              Aiden Rhaa
            </span>
          </Link>
          <p className="font-sans text-xs tracking-widest text-brand-taupe max-w-xs leading-relaxed uppercase">
            Luxury Wedding Photography<br/>
            Based in Gwinnett County, GA
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-serif text-lg tracking-wider mb-6 text-brand-taupe">Inquiries</h4>
          <a 
            href="mailto:hello@aidenrhaa.com" 
            className="font-sans text-sm tracking-widest hover:text-brand-taupe transition-colors duration-300 flex items-center gap-2 mb-4"
          >
            <Mail size={16} /> hello@aidenrhaa.com
          </a>
          <Link 
            href="/contact" 
            className="font-sans text-xs tracking-[0.2em] uppercase border-b border-brand-cream pb-1 hover:border-brand-taupe hover:text-brand-taupe transition-colors duration-300"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-serif text-lg tracking-wider mb-6 text-brand-taupe">Connect</h4>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm tracking-widest hover:text-brand-taupe transition-colors duration-300 flex items-center gap-2"
          >
            IG: @aidenrhaa
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-brand-cream/20 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] text-brand-taupe uppercase">
        <p>&copy; {new Date().getFullYear()} Aiden Rhaa Photography</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-brand-cream transition-colors duration-300">Privacy</Link>
          <Link href="/terms" className="hover:text-brand-cream transition-colors duration-300">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
