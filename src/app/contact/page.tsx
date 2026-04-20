import { Mail, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact | Aiden Rhaa Photography | Gwinnett County GA",
  description: "Inquire about availability and bespoke wedding photography collections. Aiden Rhaa is a luxury wedding photographer based in Gwinnett County, GA.",
};

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-5xl md:text-6xl text-brand-accent tracking-wider mb-6">
            Inquire
          </h1>
          <div className="w-12 h-px bg-brand-taupe mx-auto mb-6"></div>
          <p className="font-sans text-brand-gray tracking-widest uppercase text-xs leading-loose max-w-2xl mx-auto">
            We take on a limited number of commissions each year to ensure every couple receives an unparalleled, boutique experience. Please share the details of your celebration below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-8">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-brand-accent mb-8">Direct Contact</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="text-brand-taupe mt-1" size={20} />
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-brand-gray mb-1">Email</p>
                    <a href="mailto:hello@aidenrhaa.com" className="font-sans text-sm text-brand-accent hover:text-brand-taupe transition-colors duration-300">
                      hello@aidenrhaa.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-brand-taupe mt-1" size={20} />
                  <div>
                    <p className="font-sans text-xs tracking-widest uppercase text-brand-gray mb-1">Studio (By Appointment)</p>
                    <p className="font-sans text-sm text-brand-accent leading-relaxed">
                      Gwinnett County<br/>
                      Georgia, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-brand-taupe/30">
              <p className="font-serif text-xl text-brand-accent italic mb-4">
                &quot;Our collections are fully customized to suit the distinct needs of your celebration.&quot;
              </p>
              <p className="font-sans text-xs text-brand-gray tracking-wide uppercase">
                Investment begins at $8,500
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 bg-white p-8 md:p-12 shadow-sm border border-brand-taupe/20">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="font-sans text-xs tracking-widest uppercase text-brand-gray block">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full border-b border-brand-taupe/50 bg-transparent py-2 font-sans text-brand-accent focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="font-sans text-xs tracking-widest uppercase text-brand-gray block">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full border-b border-brand-taupe/50 bg-transparent py-2 font-sans text-brand-accent focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="font-sans text-xs tracking-widest uppercase text-brand-gray block">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full border-b border-brand-taupe/50 bg-transparent py-2 font-sans text-brand-accent focus:outline-none focus:border-brand-accent transition-colors duration-300"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-sans text-xs tracking-widest uppercase text-brand-gray block">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full border-b border-brand-taupe/50 bg-transparent py-2 font-sans text-brand-accent focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="date" className="font-sans text-xs tracking-widest uppercase text-brand-gray block">Wedding Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    className="w-full border-b border-brand-taupe/50 bg-transparent py-2 font-sans text-brand-accent focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="venue" className="font-sans text-xs tracking-widest uppercase text-brand-gray block">Venue / Location</label>
                  <input 
                    type="text" 
                    id="venue" 
                    placeholder="e.g., Gwinnett County, GA"
                    className="w-full border-b border-brand-taupe/50 bg-transparent py-2 font-sans text-brand-accent placeholder:text-brand-gray/30 focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-sans text-xs tracking-widest uppercase text-brand-gray block">Tell us about your celebration</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full border-b border-brand-taupe/50 bg-transparent py-2 font-sans text-brand-accent focus:outline-none focus:border-brand-accent transition-colors duration-300 resize-none"
                  placeholder="Aesthetic, priorities, guest count..."
                  required
                ></textarea>
              </div>

              <button 
                type="button" // Type button for visual mockup purposes
                className="w-full bg-brand-accent text-brand-cream font-sans text-xs tracking-[0.2em] uppercase py-4 hover:bg-brand-taupe hover:text-brand-accent transition-all duration-300 mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
