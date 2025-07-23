import Image from 'next/image';

// This is a Next.js functional component.
// Make sure to place your images (e.g., 'Home-discusiion.png', 'figma1.png')
// in the 'public' directory of your Next.js project.

// Also, ensure your tailwind.config.js is set up with the custom brand colors:
// theme: {
//   extend: {
//     colors: {
//       'brand-red': '#B8406B',
//       'brand-teal': '#1abc9c',
//       'brand-blue': '#3498db',
//       'brand-black': '#272727'
//     }
//   }
// }

const HealthcarePlatformPage = () => {
  return (
    // The main container uses a gradient background.
    <div className="bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      
      <section className="py-16 px-4 sm:px-6 lg:py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Section 1: Connect. Learn. Build. */}
          {/* MODIFIED: Further reduced bottom margin */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8 lg:mb-10">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-brand-black font-bold mb-6 leading-tight">
                Unleash your ideas, discover new insights, connect with like minds:
              </h1>
              <div className="text-3xl sm:text-4xl font-bold text-brand-red mb-8">
                Connect. Learn. Build
              </div>
              <p className="text-xl sm:text-2xl text-brand-black mb-8 max-w-md mx-auto lg:mx-0">
                The time to act is now. Join the conversation to reimagine healthcare before it is too late.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 sm:w-72 h-[550px] sm:h-[600px] transition-transform duration-300 hover:scale-105">
                 <div 
                   className="w-full h-full bg-no-repeat bg-center bg-cover rounded-[28px]"
                   style={{backgroundImage: "url('/Home-discusiion.png')"}}
                 >
                  </div>
              </div>
            </div>
          </div>
          
          {/* Section 2: Unleash. Transform. Reimagine. */}
          {/* MODIFIED: Further reduced bottom margin */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8 lg:mb-10">
            <div className="text-center lg:text-left lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
                Got an inspiring or disruptive idea?
              </h2>
              <div className="text-3xl sm:text-4xl font-bold text-brand-red mb-6">
                Unleash. Transform. Reimagine
              </div>
              <p className="text-xl sm:text-2xl text-brand-black max-w-md mx-auto lg:mx-0">
                Submit your bold healthcare vision and rewrite the future of health care.
              </p>
            </div>
            <div className="flex justify-center lg:order-1">
              <div className="w-64 sm:w-72 h-[550px] sm:h-[600px] transition-transform duration-300 hover:scale-105">
                 <div 
                   className="w-full h-full rounded-[28px] bg-no-repeat bg-center bg-cover"
                   style={{backgroundImage: "url('/Article.png')"}}
                 >
                  </div>
              </div>
            </div>
          </div>
          
          {/* Section 3: Activate. Collaborate. Elevate. */}
          {/* MODIFIED: Further reduced bottom margin */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-8 lg:mb-10">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Get Inspired and Empowered:
              </h2>
              <div className="text-3xl sm:text-4xl font-bold text-brand-red mb-6">
                Activate. Collaborate. Elevate
              </div>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-md mx-auto lg:mx-0">
                Connect with innovators and fellow attendees at exclusive events, webinars, and masterclasses.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-64 sm:w-72 h-[550px] sm:h-[600px] transition-transform duration-300 hover:scale-105">
                <div 
                  className="w-full h-full rounded-[28px] bg-no-repeat bg-center bg-cover"
                  style={{backgroundImage: "url('/Event-listing.png')"}}
                >
                  </div>
              </div>
            </div>
          </div>
          
          {/* Section 4: Lead by doing */}
          {/* MODIFIED: Further reduced bottom margin */}
          <div className="mb-8 lg:mb-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-8 md:px-16 gap-10">
            <div className="w-full max-w-lg md:w-1/2 relative h-96"> 
              <Image 
                src="/figma1.png" 
                alt="Figma Design" 
                layout="fill"
                objectFit="contain"
              />
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
                Lead by doing - <span className="text-brand-red">shape tomorrow!</span>
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl text-brand-black">
                With every contribution rise as the leaders of tomorrow.
              </p>
            </div>
          </div>
          
          {/* Section 5: Spotlight Features */}
          <div 
            className="text-center bg-no-repeat bg-center bg-contain py-16 lg:py-20 px-4"
            style={{backgroundImage: "url('/Ellipse 210.png')"}}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-12 md:mb-16">
              Spotlight Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-start justify-center max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="w-60 h-[480px] sm:w-64 sm:h-[520px]">
                  <div 
                    className="w-full h-full rounded-[28px] bg-no-repeat bg-center bg-cover"
                    style={{backgroundImage: "url('/Job-listing.png')"}}
                  >
                  </div>
                </div>
                <div className="text-center max-w-xs">
                  <p className="text-xl sm:text-2xl text-brand-black font-semibold mb-2">Level up your career</p>
                  <p className="text-lg sm:text-xl text-brand-black">and unlock premium healthcare career opportunities designed for your expertise.</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="w-60 h-[480px] sm:w-64 sm:h-[520px]">
                  <div 
                    className="w-full h-full rounded-[28px] bg-no-repeat bg-center bg-cover"
                    style={{backgroundImage: "url('/phone-br.png')"}}
                  >
                  </div>
                </div>
                <div className="text-center max-w-sm">
                  <p className="text-xl sm:text-2xl text-brand-black font-semibold mb-2">Become part of our exclusive</p>
                  <p className="text-lg sm:text-xl text-brand-black">Professional Discussion Forums (PDFs), where minds converge to discuss, debate, disrupt, and collaboratively revolutionize the healthcare landscape.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePlatformPage;