import React, { useState, useEffect } from 'react';
import IconContainer from './components/IconContainer';



function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('overview');
  const [experiencesTab, setExperiencesTab] = useState('overview');
  const [palaceSuiteTab, setPalaceSuiteTab] = useState('overview');
  const [wellnessCurrentIndex, setWellnessCurrentIndex] = useState(0);
  const [wellnessGalleryCurrentIndex, setWellnessGalleryCurrentIndex] = useState(0);
  const [palaceSuiteCarouselCurrentIndex, setPalaceSuiteCarouselCurrentIndex] = useState(0);
  const [landscapeCarouselCurrentIndex, setLandscapeCarouselCurrentIndex] = useState(0);
  const [templeCurrentIndex, setTempleCurrentIndex] = useState(0);
  const [raghurajpurCurrentIndex, setRaghurajpurCurrentIndex] = useState(0);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  
  // Room Features expandable state
  const [isRoomFeaturesExpanded, setIsRoomFeaturesExpanded] = useState(false);
  const [isBathExpanded, setIsBathExpanded] = useState(false);
  const [isTechnologyExpanded, setIsTechnologyExpanded] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);

  // Client-side routing: Update browser URL when currentPage changes
  useEffect(() => {
    const path = currentPage === 'home' ? '/' : `/${currentPage}`;
    console.log('currentPage changed to:', currentPage, 'updating URL to:', path);
    window.history.pushState({ page: currentPage }, '', path);
  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      const page = path === '/' ? 'home' : path.substring(1);
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Debug currentPage changes
  useEffect(() => {
    console.log('🔍 currentPage changed to:', currentPage);
    console.log('🔍 URL should be:', currentPage === 'home' ? '/' : `/${currentPage}`);
  }, [currentPage]);

  // Scroll to top when page changes
  useEffect(() => {
    // Use setTimeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentPage]);

  // Ensure Experiences sub-tabs (e.g., Cultural, Spiritual) also open from top
  useEffect(() => {
    if (currentPage === 'experiences') {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [experiencesTab, currentPage]);

  // Set correct tab when navigating to Palace Suite page
  useEffect(() => {
    if (currentPage === 'palace-suite') {
      setPalaceSuiteTab('palace-suite');
    }
  }, [currentPage]);

  // Set correct tab when navigating to Palace Family Suite page
  useEffect(() => {
    if (currentPage === 'palace-family-suite') {
      setPalaceSuiteTab('palace-family-suite');
    }
  }, [currentPage]);

  // Set correct tab when navigating to Generator Suite page
  useEffect(() => {
    if (currentPage === 'generator-suite') {
      setPalaceSuiteTab('generator-suite');
    }
  }, [currentPage]);

  // Set correct tab when navigating to Ice Mill Suite page
  useEffect(() => {
    if (currentPage === 'ice-mill-suite') {
      setPalaceSuiteTab('ice-mill-suite');
    }
  }, [currentPage]);

  // Set correct tab when navigating to Printing Press Suite page
  useEffect(() => {
    if (currentPage === 'printing-press-suite') {
      setPalaceSuiteTab('printing-press-suite');
    }
  }, [currentPage]);

  // Set correct tab when navigating to Wildlife page
  useEffect(() => {
    if (currentPage === 'wildlife') {
      setExperiencesTab('wildlife');
    }
  }, [currentPage]);

  // Set correct tab when navigating to Accommodation sub-pages
  useEffect(() => {
    if (currentPage === 'overview') {
      setActiveTab('overview');
    } else if (currentPage === 'rambha-villa') {
      setActiveTab('rambha-villa');
    }
  }, [currentPage]);

  // Sticky header functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsHeaderSticky(scrollTop > 50); // Make navigation sticky after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderHomePage = () => (
    <>
      {/* Large Video */}
      <div style={{ marginBottom: '48px'}}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <video 
              className="elementor-video" 
              src="/VID-20241019-WA0011.mp4" 
              autoPlay 
              loop 
              controls 
              muted 
              playsInline 
              controlsList="nodownload"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Rambha Palace Emblem and Content */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        {/* Rambha Palace Logo */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
            <img 
              loading="lazy" 
              decoding="async" 
              width="864" 
              height="846" 
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/RambhaPalaceLogo-1.svg" 
              className="attachment-large size-large wp-image-79" 
              alt="Rambha Palace Logo"
              style={{ 
                width: '174px', 
                height: '170.39px', 
                maxWidth: '100%',
                display: 'block',
                margin: '10px 0px 0px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'block';
                }
              }}
            />
            {/* Fallback logo if image fails to load */}
            <div style={{ 
              display: 'none', 
              width: '174px', 
              height: '170.39px', 
              margin: '10px 0px 0px',
              position: 'relative'
            }}>
            {/* Crown */}
            <div style={{ 
              width: '80px', 
              height: '40px', 
              backgroundColor: '#d97706', 
              borderRadius: '40px 40px 0 0',
              margin: '0 auto 8px auto',
              position: 'relative'
            }}>
              <div style={{ 
                position: 'absolute', 
                top: '-8px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '0',
                height: '0',
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderBottom: '16px solid #92400e'
              }}></div>
            </div>
            
            {/* Shield */}
            <div style={{ 
              width: '120px', 
              height: '140px', 
              backgroundColor: '#1e40af', 
              borderRadius: '60px 60px 20px 20px',
              margin: '0 auto',
              position: 'relative',
              border: '3px solid #d97706'
            }}>
              {/* RP Monogram */}
              <div style={{ 
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                RP
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Title */}
   
      </div>

      {/* Description */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', color: '#374151', lineHeight: '1.6' }}>
        <p style={{ fontSize: '16px', textAlign: 'center', color: '#3A3A3A', fontFamily: '"Lato", sans-serif'}}>
        A hidden gem on the east coast of India, Rambha Palace—the 200-year-old residence of the King of Khallikote—has undergone a meticulous six-year restoration to offer guests a glimpse into its regal past. Nestled on the banks of the Chilika Lake, the palace gates open to serene views of calm waters and lush wetlands. Stately courtyards and grand hallways lead to opulent suites, each adorned with echoes of royal heritage, while the lake breeze fills the palace gardens, bringing the vibrant birdlife into gentle focus.
        </p>
        
        <p style={{ fontSize: '16px', textAlign: 'center', color: '#3A3A3A', fontFamily: '"Lato", sans-serif', marginTop: '24px'}}>
        Designed as a peaceful retreat, Rambha sits in proximity to sacred temples, inviting guests to explore the spiritual heritage woven into the landscape. A wellness center in the palace seamlessly blends the elegance of a bygone era with an intimate experience of ancient healing practices, offering moments of quiet reflection in a setting that honors its past.
        </p>
      </div>

      {/* Image Carousel Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', marginTop: '64px', marginBottom: '64px' }}>
  {/* Carousel Container with overflow hidden */}
  <div style={{
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  }}>
    <div
      id="imageCarousel"
      style={{
        display: 'flex',
        transition: 'transform 0.3s ease-in-out',
        width: '100%',
        scrollSnapType: 'x mandatory',
        overflowX: 'scroll',
        scrollbarWidth: 'none',
        padding: '0 24px',
      }}
      onScroll={(e) => {
        const carousel = e.currentTarget;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;

        // 🔄 Infinite Loop Reset
        if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft = maxScroll - carousel.clientWidth;
        } else if (carousel.scrollLeft >= maxScroll) {
          carousel.scrollLeft = carousel.clientWidth;
        }

        // Existing scaling + opacity
        const items = carousel.querySelectorAll('.carousel-image');
        items.forEach((el) => {
          if (el instanceof HTMLElement) {
            const box = el.getBoundingClientRect();
            const center = window.innerWidth / 2;
            const offset = Math.abs(box.left + box.width / 2 - center);
            const scale = Math.max(0.9, 1.05 - offset / 1000);
            const opacity = Math.max(0.5, 1 - offset / 800);
            el.style.transform = `scale(${scale})`;
            el.style.opacity = opacity.toString();
          }
        });
      }}
    >
      {/* 🔄 Duplicate images for infinite loop effect */}
      {[...Array(3)].flatMap(() => [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]).map((i, idx) => (
        <div
          key={idx}
          className="carousel-image"
          style={{
            flex: '0 0 400px',
            transition: 'all 0.3s ease',
            scrollSnapAlign: 'center',
            padding: '0 12px',
            boxSizing: 'border-box'
          }}
        >
          <img
            src={`/image-${i}.png`}
            alt={`Rambha Palace View ${i}`}
            style={{
              width: '800px',
              height: '450px',
              objectFit: 'cover',
              display: 'block',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const nextSibling = target.nextSibling as HTMLElement;
              if (nextSibling) {
                nextSibling.style.display = 'flex';
              }
            }}
          />
          <div style={{
            display: 'none',
            width: '800px',
            height: '450px',
            backgroundColor: '#f3f4f6',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6b7280',
            fontSize: '18px',
            borderRadius: '12px'
          }}>
            Palace View {i}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Navigation Buttons positioned below the carousel */}
  <div style={{
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '24px',
    gap: '32px'
  }}>
    {/* Prev Button */}
<button
  onClick={() => {
    const carousel = document.getElementById('imageCarousel');
    if (carousel) {
      const firstItem = carousel.querySelector('.carousel-image') as HTMLElement;
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth; // 👈 get image width with padding
        carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      }
    }
  }}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    zIndex: 10
  }}
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M15 18L9 12L15 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>

{/* Next Button */}
<button
  onClick={() => {
    const carousel = document.getElementById('imageCarousel');
    if (carousel) {
      const firstItem = carousel.querySelector('.carousel-image') as HTMLElement;
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth; // 👈 same here
        carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    }
  }}
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    zIndex: 10
  }}
>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 18L15 12L9 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</button>

  </div>
</div>


      {/* Experience the Luxury - ACCOMMODATION Section */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', marginTop: '64px', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', color: '#3A3A3A', fontWeight: '400',marginBottom: '8px', fontFamily: '"Montserrat", sans-serif' }}>Experience the Luxury</p>
        <h2 style={{ fontSize: '24px',  color: '#3A3A3A',fontWeight: '600', marginBottom: '32px', textTransform: 'uppercase' }}>ACCOMMODATION</h2>
      </div>

      {/* Accommodation Carousel Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', marginTop: '64px', marginBottom: '64px' }}>
        <div style={{
          position: 'relative',
          width: '100%',
          // overflow: 'hidden',
          borderRadius: '12px',
          // boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          {/* Carousel Container */}
          <div
            id="accommodationCarousel"
            style={{
              display: 'flex',
              transition: 'transform 0.3s ease-in-out',
              width: '100%',
              scrollSnapType: 'x mandatory',
              overflowX: 'scroll',
              scrollbarWidth: 'none',
              padding: '0 24px',
            }}
            onScroll={(e) => {
              const carousel = e.currentTarget;
              const maxScroll = carousel.scrollWidth - carousel.clientWidth;

              // 🔄 Infinite Loop Reset
              if (carousel.scrollLeft <= 0) {
                carousel.scrollLeft = maxScroll - carousel.clientWidth;
              } else if (carousel.scrollLeft >= maxScroll) {
                carousel.scrollLeft = carousel.clientWidth;
              }

              // Existing scaling + opacity
              const items = carousel.querySelectorAll('.accommodation-card');
              items.forEach((el) => {
                if (el instanceof HTMLElement) {
                  const box = el.getBoundingClientRect();
                  const center = window.innerWidth / 2;
                  const offset = Math.abs(box.left + box.width / 2 - center);
                  const scale = Math.max(0.9, 1.05 - offset / 1000);
                  const opacity = Math.max(0.5, 1 - offset / 800);
                  el.style.transform = `scale(${scale})`;
                  el.style.opacity = opacity.toString();
                }
              });
            }}
          >
            {/* Ice Mill Suites */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-51.png"
                  alt="Ice Mill Suites"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#000',
                    textTransform: 'uppercase',
                    margin: '0 0 16px 0',
                    textAlign: 'center',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    ICE MILL SUITES
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#3A3A3A',
                    
                    lineHeight: '1.5',
                    margin: '0 0 24px 0',
                    textAlign: 'left',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Once used to store ice blocks for preserving the palace's fresh catches, these suites have been reimagined into a lavish retreat with an outdoor seating verandah.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('ice-mill-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Palace Suite */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-52.png"
                  alt="Palace Suite"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                      textAlign: 'center',
                      fontFamily: '"Montserrat", sans-serif'
                  }}>
                    PALACE SUITE
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#3A3A3A',
                    
                    lineHeight: '1.5',
                    margin: '0 0 24px 0',
                    textAlign: 'left',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Experience the luxury and grandeur of the original palace block. Once the residence of the royal family in a bygone era—unparalleled sophistication at Rambha.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('palace-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Palace Family Suite */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-53.png"
                  alt="Palace Family Suite"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                      textAlign: 'center',
                      fontFamily: '"Montserrat", sans-serif'
                  }}>
                    PALACE FAMILY SUITE
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#3A3A3A',
                    
                    lineHeight: '1.5',
                    margin: '0 0 24px 0',
                    textAlign: 'left',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    A fusion of two palace suites, featuring a spacious lounge-an expansive, lush private retreat perfect for families and added privacy.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('palace-family-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Generator Suites */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-54.png"
                  alt="Generator Suites"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                       fontSize: '16px',
                       fontWeight: '500',
                       color: '#000',
                       textTransform: 'uppercase',
                       margin: '0 0 16px 0',
                       textAlign: 'center',
                       fontFamily: '"Montserrat", sans-serif'
                  }}>
                    GENERATOR SUITES
                  </h3>
                  <p style={{
                     fontSize: '14px',
                     color: '#3A3A3A',
                     
                     lineHeight: '1.5',
                     margin: '0 0 24px 0',
                     textAlign: 'left',
                     fontFamily: '"Lato", sans-serif'
                  }}>
                    Once the heart of the royal palace's power generation, these suites have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs.
                  </p>
                  <button
                    onClick={() => setCurrentPage('generator-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Printing Press Suites */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-55.png"
                  alt="Printing Press Suites"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                      textAlign: 'center',
                      fontFamily: '"Montserrat", sans-serif'
                  }}>
                    PRINTING PRESS SUITES
                  </h3>
                  <p style={{
                   fontSize: '14px',
                   color: '#3A3A3A',
                   
                   lineHeight: '1.5',
                   margin: '0 0 24px 0',
                   textAlign: 'left',
                   fontFamily: '"Lato", sans-serif'
                  }}>
                    Once the palace's printing press, they now offer views of the orchard and palace verandah, retaining a name that reflects their storied past.
                  </p>
                  <button
                    onClick={() => setCurrentPage('printing-press-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Rambha Villa */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-56.png"
                  alt="Rambha Villa"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#000',
                    textTransform: 'uppercase',
                    margin: '0 0 16px 0',
                    textAlign: 'center',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    RAMBHA VILLA
                  </h3>
                  <p style={{
                     fontSize: '14px',
                     color: '#3A3A3A',
                     
                     lineHeight: '1.5',
                     margin: '0 0 24px 0',
                     textAlign: 'left',
                     fontFamily: '"Lato", sans-serif'
                  }}>
                    A luxurious, standalone two-bedroom presidential suite featuring a spacious private garden, swimming pool, butler service and pantry with a comfortable lounge area.
                  </p>
                  <button
                    onClick={() => setCurrentPage('rambha-villa')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* 🔄 Duplicate set 1 for infinite loop effect */}
            {/* Ice Mill Suites */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-51.png"
                  alt="Ice Mill Suites"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#000',
                    textTransform: 'uppercase',
                    margin: '0 0 16px 0',
                    textAlign: 'center',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    ICE MILL SUITES
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#3A3A3A',
                    
                    lineHeight: '1.5',
                    margin: '0 0 24px 0',
                    textAlign: 'left',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Once used to store ice blocks for preserving the palace's fresh catches, these suites have been reimagined into a lavish retreat with an outdoor seating verandah.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('ice-mill-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Palace Suite */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-52.png"
                  alt="Palace Suite"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                      textAlign: 'center',
                      fontFamily: '"Montserrat", sans-serif'
                  }}>
                    PALACE SUITE
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#3A3A3A',
                    
                    lineHeight: '1.5',
                    margin: '0 0 24px 0',
                    textAlign: 'left',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Experience the luxury and grandeur of the original palace block. Once the residence of the royal family in a bygone era—unparalleled sophistication at Rambha.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('palace-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Palace Family Suite */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-53.png"
                  alt="Palace Family Suite"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                      textAlign: 'center',
                      fontFamily: '"Montserrat", sans-serif'
                  }}>
                    PALACE FAMILY SUITE
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#3A3A3A',
                    
                    lineHeight: '1.5',
                    margin: '0 0 24px 0',
                    textAlign: 'left',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    A fusion of two palace suites, featuring a spacious lounge-an expansive, lush private retreat perfect for families and added privacy.
                  </p>
                  <button 
                    onClick={() => setCurrentPage('palace-family-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Generator Suites */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-54.png"
                  alt="Generator Suites"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                       fontSize: '16px',
                       fontWeight: '500',
                       color: '#000',
                       textTransform: 'uppercase',
                       margin: '0 0 16px 0',
                       textAlign: 'center',
                       fontFamily: '"Montserrat", sans-serif'
                  }}>
                    GENERATOR SUITES
                  </h3>
                  <p style={{
                     fontSize: '14px',
                     color: '#3A3A3A',
                     
                     lineHeight: '1.5',
                     margin: '0 0 24px 0',
                     textAlign: 'left',
                     fontFamily: '"Lato", sans-serif'
                  }}>
                    Once the heart of the royal palace's power generation, these suites have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs.
                  </p>
                  <button
                    onClick={() => setCurrentPage('generator-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Printing Press Suites */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-55.png"
                  alt="Printing Press Suites"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                      fontSize: '16px',
                      fontWeight: '500',
                      color: '#000',
                      textTransform: 'uppercase',
                      margin: '0 0 16px 0',
                      textAlign: 'center',
                      fontFamily: '"Montserrat", sans-serif'
                  }}>
                    PRINTING PRESS SUITES
                  </h3>
                  <p style={{
                   fontSize: '14px',
                   color: '#3A3A3A',
                   
                   lineHeight: '1.5',
                   margin: '0 0 24px 0',
                   textAlign: 'left',
                   fontFamily: '"Lato", sans-serif'
                  }}>
                    Once the palace's printing press, they now offer views of the orchard and palace verandah, retaining a name that reflects their storied past.
                  </p>
                  <button
                    onClick={() => setCurrentPage('printing-press-suite')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* Rambha Villa */}
            <div
              className="accommodation-card"
              style={{
                flex: '0 0 400px',
                transition: 'all 0.3s ease',
                scrollSnapAlign: 'center',
                padding: '0 12px',
                boxSizing: 'border-box'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}>
                <img
                  src="/image-56.png"
                  alt="Rambha Villa"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: '#000',
                    textTransform: 'uppercase',
                    margin: '0 0 16px 0',
                    textAlign: 'center',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    RAMBHA VILLA
                  </h3>
                  <p style={{
                     fontSize: '14px',
                     color: '#3A3A3A',
                     
                     lineHeight: '1.5',
                     margin: '0 0 24px 0',
                     textAlign: 'left',
                     fontFamily: '"Lato", sans-serif'
                  }}>
                    A luxurious, standalone two-bedroom presidential suite featuring a spacious private garden, swimming pool, butler service and pantry with a comfortable lounge area.
                  </p>
                  <button
                    onClick={() => setCurrentPage('rambha-villa')}
                    style={{
                      backgroundColor: '#000',
                      color: 'white',
                      border: 'none',
                      padding: '12px 32px',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: '"Montserrat", sans-serif'
                    }}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons positioned below the carousel */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '24px',
            gap: '32px'
          }}>
            {/* Prev Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById('accommodationCarousel');
                if (carousel) {
                  const firstItem = carousel.querySelector('.accommodation-card') as HTMLElement;
                  if (firstItem) {
                    const itemWidth = firstItem.offsetWidth; // 👈 get card width with padding
                    carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
                  }
                }
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 10
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() => {
                const carousel = document.getElementById('accommodationCarousel');
                if (carousel) {
                  const firstItem = carousel.querySelector('.accommodation-card') as HTMLElement;
                  if (firstItem) {
                    const itemWidth = firstItem.offsetWidth; // 👈 same here
                    carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
                  }
                }
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 10
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* The Spirit of Odisha - HIGHLIGHTS & HAPPENINGS Section */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', marginTop: '94px', textAlign: 'center' }}>
        <p style={{ fontSize: '16px', color: '#3A3A3A', fontWeight: '400',marginBottom: '8px', fontFamily: '"Montserrat", sans-serif' ,lineHeight: '19.5px'}}>The Spirit of Odisha</p>
        <h2 style={{ fontSize: '24px', color: '#3A3A3A', fontWeight: '600',marginBottom: '8px', fontFamily: '"Montserrat", sans-serif' ,lineHeight: '19.5px' }}>HIGHLIGHTS & HAPPENINGS</h2>
      </div>

      {/* Three Cards Section - Wellness, Experience, Dining */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', padding: '0 16px' }}>
          {/* Wellness Card */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
          }}
          onClick={() => setCurrentPage('wellness')}
          >
            {/* Image */}
            <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
              <img 
                src="/image-57.png"
                alt="Wellness"
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback design if image fails to load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f3f4f6',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '18px'
              }}>
                Wellness
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                color: '#000000', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Wellness
              </h3>
              <p style={{ 
                color: '#3A3A3A', 
                fontSize: '13px',
                fontFamily: '"Lato", sans-serif', 
                lineHeight: '1.6', 
                marginBottom: '16px',
                textAlign: 'center'
              }}>
                Mantnam- gifting you the realignment needed by your mind, body and soul. Striving for longevity, our treatments are inspired by ancient Indian wisdom.
              </p>
              <div style={{ textAlign: 'center' }}>
                <span style={{ 
                  color: '#000000', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}>
                  Discover
                </span>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
          }}
          onClick={() => setCurrentPage('experiences')}
          >
            {/* Image */}
            <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
              <img 
                src="/image-58.png"
                alt="Experience"
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback design if image fails to load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f3f4f6',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '18px'
              }}>
                Experience
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                color: '#000000', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Experience
              </h3>
              <p style={{ 
                color: '#3A3A3A', 
                fontSize: '13px',
                fontFamily: '"Lato", sans-serif',
                lineHeight: '1.6', 
                marginBottom: '16px',
                textAlign: 'center'
              }}>
               Every itinerary caters to a plethora of passions and preferences. Self discovery journeys, escapades in the wilderness and interactions with local artisans.              </p>
              <div style={{ textAlign: 'center' }}>
                <span style={{ 
                  color: '#000000', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}>
                  Discover
                </span>
              </div>
            </div>
          </div>

          {/* Dining Card */}
          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
          }}
          onClick={() => setCurrentPage('dining')}
          >
            {/* Image */}
            <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
              <img 
                src="/image-59.png"
                alt="Dining"
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback design if image fails to load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f3f4f6',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '18px'
              }}>
                Dining
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: '600', 
                color: '#000000', 
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                Dining
              </h3>
              <p style={{ 
                color: '#3A3A3A', 
                fontSize: '13px',
                fontFamily: '"Lato", sans-serif',
                lineHeight: '1.6', 
                marginBottom: '16px',
                textAlign: 'center'
              }}>
Orchard-to-table ingredients are at heart of our inventive culinary offerings at palace. Relish local cuisine or delectable flavours from across world.         </p>
              <div style={{ textAlign: 'center' }}>
                <span style={{ 
                  color: '#000000', 
                  fontSize: '14px', 
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}>
                  Discover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LATEST OFFERS Section */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', marginTop: '94px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', color: '#3A3A3A', fontWeight: '600',marginBottom: '8px', fontFamily: '"Montserrat", sans-serif' ,lineHeight: '19.5px' }}>LATEST OFFERS</h2>
      </div>

      {/* EAT. PRAY. LOVE. Section */}
      <div style={{ maxWidth: '866px', margin: '0 auto', marginTop: '64px' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          overflow: 'hidden', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          border: '1px solid #e5e7eb'
        }}>
          {/* Image */}
          <div style={{ width: '100%' }}>
            <img 
              decoding="async" 
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/image4-qyb3qbsq2gynshsmaoql1nfnfeok3y05csvu0l3xww.png" 
              title="image4.png" 
              alt="image4.png" 
              loading="lazy"
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: '100%',
                display: 'block'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'block';
                }
              }}
            />
            {/* Fallback design if image fails to load */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '400px', 
              backgroundColor: '#f3f4f6',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '18px'
            }}>
              Ancient Temple Image
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '32px' }}>
            {/* Title */}
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold', 
                color: '#333333', 
                marginBottom: '16px',
                textTransform: 'uppercase',
                fontFamily: '"Montserrat", sans-serif'
              }}>
                EAT. PRAY. LOVE.
              </h2>
            </div>

            {/* Description */}
            <div style={{ color: '#3A3A3A', lineHeight: '1.6', fontSize: '14px', fontFamily: 'sans-serif', textAlign: 'left', margin: '0px 0px 22.4px' }}>
              <p>
                Where will your spiritual journey take you? Embark on a journey toward achieving mental peace and harmony while connecting with your spiritual self. Attune to your inner being, enhance your intuition,forge connections with your inner self.Personalised itineraries offer the opportunity to explore any ancient temple that captivates your spirit or sparks your spiritual curiosity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden India Playlist Section */}
      <div style={{ 
         background: 'linear-gradient(to bottom, #f0d1cc 0%, #f7beb5 100%)', 
         marginTop: '64px', 
         padding: '64px 0',
         width: '100vw',            // ✅ Full viewport width
         position: 'relative', 
         left: '50%', 
         right: '50%', 
         marginLeft: '-50vw',       // ✅ Remove body margin gap
         marginRight: '-50vw'
      }}>
        <div style={{   maxWidth: '1400px',       // ✅ optional: limit content width
    margin: '0 auto',
    padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left Section - Text Content */}
            <div>
              {/* Subtitle */}
              <p style={{ 
                fontSize: '16px', 
                color: '#6C6C6C', 
                fontFamily: '"Montserrat", sans-serif',
                fontStyle: 'italic', 
                marginBottom: '8px',
                fontWeight: '400'
              }}>
                Experience Rambha with a
              </p>
              
                              {/* Main Title */}
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: '#000000', 
                marginBottom: '24px',
                textTransform: 'uppercase',
                fontFamily: '"Montserrat", sans-serif'
              }}>
                HIDDEN INDIA PLAYLIST
              </h2>
              
              {/* Description */}
              <p style={{ 
                fontFamily: '"Lato", sans-serif',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '24px',
                color: '#3A3A3A',
                textAlign: 'left',
                marginTop: '36px'
              }}>
                Enhance your journey to Rambha Palace with soundscapes to accompany you through sunrise walks, scenic drives, serene boat cruises, and quiet afternoons immersed in nature. Whether you're arriving, exploring, or simply unwinding, let these musical journeys set the tone for an unforgettable stay.
              </p>
            </div>

            {/* Right Section - Spotify Player */}
            <div style={{ 
              backgroundColor: '#8b4513', 
              borderRadius: '12px', 
              padding: '24px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e5e7eb'
            }}>
              <iframe 
                style={{ 
                  borderRadius: '12px',
                  width: '100%',
                  height: '352px',
                  border: 'none'
                }} 
                src="https://open.spotify.com/embed/playlist/4yWhijO9aWorPBlQxGL75R?utm_source=generator" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FINDING RAMBHA Section */}
      <div style={{ 
        backgroundColor: 'rgb(241,236,229)', 
        marginTop: '64px', 
        padding: '64px 0',
        width: '100%'
      }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ 
              fontSize: '14px', 
              color: '#3A3A3A',
              fontFamily: '"Montserrat", sans-serif',
              marginBottom: '8px', 
              textTransform: 'uppercase'
            }}>
              Discover Hidden India
            </p>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#3A3A3A', 
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}>
              FINDING RAMBHA
            </h2>
          </div>

          {/* Directions and Contact Info */}
          <div style={{ 
  maxWidth: '1200px',  // enough width to keep both lines unwrapped
  margin: '0 auto', 
  textAlign: 'center', 
  marginBottom: '48px'
}}>
  <p style={{ 
    fontSize: '16px', 
    color: '#7A7A7A', 
    lineHeight: '1.8',
    // marginBottom: '6px'
  }}>
    From Bhubaneswar Airport, guests can embark two-and-a-half-hour drive Odisha’s lush landscapes arriving directly at the palace gates.
  </p>
  
  <p style={{ 
    fontSize: '16px', 
    color: '#7A7A7A', 
    lineHeight: '1.8',
    marginBottom: '32px'
  }}>
    Please contact our reservations team at <span style={{ fontWeight: '600' ,color: '#212121'}}>reservations@hiddenindia.com</span> or <span style={{ fontWeight: '600' ,color: '#000000'}}>+91 7800 208 002</span> to arrange your preferred transfer.
  </p>

  <a 
    href="https://maps.app.goo.gl/SkTYhSF9e2BDNjCo7" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ 
      color: '#3A3A3A', 
      textDecoration: 'underline',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer'
    }}
  >
    Get Directions
  </a>
</div>


          {/* Map of India */}
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            textAlign: 'center' 
          }}>
            <div style={{ 
              position: 'relative',
              backgroundColor: '#f3f4f6',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              {/* Map Container */}
              <div style={{ 
                position: 'relative',
                width: '100%',
                height: '600px',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                {/* India Map SVG */}
                <img src={"./HiddenIndiaMap.svg"} alt="India Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderAccommodationPage = () => (
    <>
      
      
      {/* Main Title */}
      <div style={{
        maxWidth: '1524px',
  fontFamily: 'Montserrat',
  fontSize: '32px',
  fontWeight: 400,
  lineHeight: '39.01px',
  textAlign: 'center'
}}>
  Accommodation
</div>


      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        backgroundColor: 'rgb(241,236,229)',
        padding: '16px 0',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        boxShadow: 'none',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Overview', 'Rambha Villa', 'Palace Suite', 'Palace Family Suite', 'Generator Suite', 'Ice Mill Suite', 'Printing Press Suite'].map((tab) => (
            <button
              key={tab}
              className="accommodation-tab-button"
              onClick={() => {
                if (tab === 'Palace Suite') {
                  setCurrentPage('palace-suite');
                } else if (tab === 'Palace Family Suite') {
                  setCurrentPage('palace-family-suite');
                } else if (tab === 'Generator Suite') {
                  setCurrentPage('generator-suite');
                } else {
                  setActiveTab(tab.toLowerCase().replace(' ', '-'));
                }
              }}
              style={{
                padding: '8px 0 !important',
                border: 'none !important',
                backgroundColor: 'transparent !important',
                cursor: 'pointer !important',
                fontSize: '14px !important',
                fontFamily: 'sans-serif !important',
                position: 'relative',
                transition: 'none !important',
                outline: 'none !important',
                textDecoration: 'none !important',
                boxShadow: 'none !important',
                transform: 'none !important',
                filter: 'none !important',
                opacity: '1 !important',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
              }}
            >
              {tab}
              {activeTab === tab.toLowerCase().replace(' ', '-') && (
                <span style={{ 
                  marginLeft: '4px', 
                  color: '#000000',
                  fontWeight: '600'
                }}> ›</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Large Room Image */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ aspectRatio: '16/10', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Gallery5-qyb3q9x1osw359vclnxbwnwq8mxtojsoojkv216q9c.png" 
                alt="Luxury Hotel Room" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  // Fallback to a styled div if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback room design if image doesn't load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Four-poster bed */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '40%',
                  backgroundColor: '#ffffff',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Bed posts */}
                  <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                </div>
                
                {/* Green sofa */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  left: '10%',
                  width: '25%',
                  height: '15%',
                  backgroundColor: '#228b22',
                  borderRadius: '8px 8px 0 0'
                }}></div>
                
                {/* Window */}
                <div style={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%',
                  width: '20%',
                  height: '30%',
                  backgroundColor: '#87ceeb',
                  border: '2px solid #d1d5db'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* STAY AT RAMBHA Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000', marginBottom: '24px', fontFamily: '"Montserrat", sans-serif' }}>STAY AT RAMBHA</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#3A3A3A', lineHeight: '1.8', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
            <p>
              The palace accommodations have been designed to provide solitude, a distinctive sense of individuality, and unparalleled comfort. 
              The suites overlook expansive gardens reminiscent of the Palace of Versailles, while the rooms are adorned with restored furniture, 
              traditional Odia art and textiles, and luxurious linens, complemented by elegantly marbled bathrooms. 
              Timeless charm reimagined- Rambha transports guests to Odisha's regal era.
            </p>
          </div>
        </div>

        {/* Two Cards Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
          {/* First Card - Palace Suite */}
          <div 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('🖱️ Palace Suite clicked, setting currentPage to palace-suite');
              console.log('🖱️ Previous currentPage was:', currentPage);
              setCurrentPage('palace-suite');
              console.log('🖱️ setCurrentPage called');
              // Add visual feedback
              const target = e.currentTarget as HTMLElement;
              target.style.backgroundColor = '#f0f0f0';
              setTimeout(() => {
                target.style.backgroundColor = 'transparent';
              }, 200);
            }}
            onMouseDown={(e) => {
              console.log('🖱️ Mouse down on Palace Suite card');
            }}
            onMouseUp={(e) => {
              console.log('🖱️ Mouse up on Palace Suite card');
            }}
            style={{ 
              position: 'relative', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease-in-out',
              backgroundColor: 'transparent',
              zIndex: 1
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLElement;
              target.style.transform = 'scale(1)';
            }}
          >
            <img 
              src="./image-1.png"
              alt="Palace Suite" 
              style={{ width: '100%', height: '300px', objectFit: 'cover', pointerEvents: 'none' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            
            {/* Hidden button for better click handling - moved outside fallback div */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🔘 Button click detected');
                setCurrentPage('palace-suite');
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer',
                border: 'none',
                background: 'transparent',
                zIndex: 10
              }}
            />
            
            {/* Debug overlay - visible indicator for testing */}
            
            {/* Fallback design for first card */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#8b0000',
              position: 'relative',
              overflow: 'hidden',
              pointerEvents: 'none'
            }}>
              {/* Four-poster bed */}
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '40%',
                backgroundColor: '#ffffff',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                {/* Bed posts */}
                <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
              </div>
              
              {/* Sofa */}
              <div style={{ 
                position: 'absolute', 
                bottom: '20%', 
                left: '10%',
                width: '25%',
                height: '15%',
                backgroundColor: '#4169e1',
                borderRadius: '8px 8px 0 0'
              }}></div>
              
              {/* Window */}
              <div style={{ 
                position: 'absolute', 
                top: '10%', 
                right: '5%',
                width: '20%',
                height: '30%',
                backgroundColor: '#87ceeb',
                border: '2px solid #d1d5db'
              }}></div>
            </div>
            
            {/* Card Content */}
            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <h3 style={{ fontSize: '20px',fontWeight: '700', color: '#000000', stroke:'#000',marginBottom: '12px', fontFamily: '"Montserrat", sans-serif' }}>PALACE SUITES</h3>
              <p style={{ color: '#3A3A3A', lineHeight: '1.6', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
                Experience the luxury and grandeur of the original palace block. Once the residence of the royal family in a bygone era—unparalleled sophistication at Rambha.
              </p>
            </div>
          </div>

          {/* Second Card - Family Palace Suite */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="./image-2.png" 
              alt="Family Palace Suite" 
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback design for second card */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#ffa07a',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Four-poster bed */}
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '40%',
                backgroundColor: '#ffffff',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                {/* Bed posts */}
                <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
              </div>
              
              {/* Green sofa */}
              <div style={{ 
                position: 'absolute', 
                bottom: '20%', 
                left: '10%',
                width: '25%',
                height: '15%',
                backgroundColor: '#228b22',
                borderRadius: '8px 8px 0 0'
              }}></div>
              
              {/* Window */}
              <div style={{ 
                position: 'absolute', 
                top: '10%', 
                left: '5%',
                width: '20%',
                height: '30%',
                backgroundColor: '#87ceeb',
                border: '2px solid #d1d5db'
              }}></div>
            </div>
            
            {/* Card Content */}
            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <h3 style={{ fontSize: '20px',fontWeight: '700', color: '#000000', stroke:'#000',marginBottom: '12px', fontFamily: '"Montserrat", sans-serif' }}>FAMILY PALACE SUITE</h3>
              <p style={{ color: '#3A3A3A', lineHeight: '1.6', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
                A fusion of two palace suites, featuring a spacious lounge—an expansive, lush private retreat perfect for families and added privacy.
              </p>
            </div>
            
            {/* Invisible Link Overlay */}
            <a 
              href="/rambhapalace/palace-family-suite/" 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                position: 'absolute', 
                height: '100%', 
                width: '100%', 
                zIndex: 9999, 
                top: 0, 
                left: 0 
              }}
            ></a>
          </div>
        </div>

        {/* Four Additional Cards Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
          {/* Third Card - Generator Suite */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="./image-3.png" 
              alt="Generator Suite" 
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback design for third card */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#9370db',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Four-poster bed */}
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '40%',
                backgroundColor: '#ffffff',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                {/* Bed posts */}
                <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
              </div>
              
              {/* Purple sofa */}
              <div style={{ 
                position: 'absolute', 
                bottom: '20%', 
                left: '10%',
                width: '25%',
                height: '15%',
                backgroundColor: '#800080',
                borderRadius: '8px 8px 0 0'
              }}></div>
              
              {/* Window */}
              <div style={{ 
                position: 'absolute', 
                top: '10%', 
                right: '5%',
                width: '20%',
                height: '30%',
                backgroundColor: '#87ceeb',
                border: '2px solid #d1d5db'
              }}></div>
            </div>
            
            {/* Card Content */}
            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <h3 style={{ fontSize: '20px',fontWeight: '700', color: '#000000', stroke:'#000',marginBottom: '12px', fontFamily: '"Montserrat", sans-serif' }}>GENERATOR SUITES</h3>
              <p style={{ color: '#3A3A3A', lineHeight: '1.6', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
                Once the heart of the royal palace's power generation, these suites have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs.
              </p>
            </div>
            
            {/* Invisible Link Overlay */}
            <a 
              href="/rambhapalace/generator-suite/" 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                position: 'absolute', 
                height: '100%', 
                width: '100%', 
                zIndex: 9999, 
                top: 0, 
                left: 0 
              }}
            ></a>
          </div>

          {/* Fourth Card - Ice Mill Suite */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="./image-4.png" 
              alt="Ice Mill Suite" 
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback design for fourth card */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#40e0d0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Two single beds */}
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '30%', 
                transform: 'translate(-50%, -50%)',
                width: '25%',
                height: '35%',
                backgroundColor: '#ffffff',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}></div>
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '70%', 
                transform: 'translate(-50%, -50%)',
                width: '25%',
                height: '35%',
                backgroundColor: '#ffffff',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}></div>
              
              {/* Teal sofa */}
              <div style={{ 
                position: 'absolute', 
                bottom: '20%', 
                left: '10%',
                width: '25%',
                height: '15%',
                backgroundColor: '#008080',
                borderRadius: '8px 8px 0 0'
              }}></div>
              
              {/* Window */}
              <div style={{ 
                position: 'absolute', 
                top: '10%', 
                left: '5%',
                width: '20%',
                height: '30%',
                backgroundColor: '#87ceeb',
                border: '2px solid #d1d5db'
              }}></div>
            </div>
            
            {/* Card Content */}
            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <h3 style={{ fontSize: '20px',fontWeight: '700', color: '#000000', stroke:'#000',marginBottom: '12px', fontFamily: '"Montserrat", sans-serif' }}>ICE MILL SUITES</h3>
              <p style={{ color: '#3A3A3A', lineHeight: '1.6', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
                Once used to store ice blocks for preserving the palace's fresh catches, these suites have been reimagined into a lavish retreat with an outdoor seating verandah.
              </p>
            </div>
            
            {/* Invisible Link Overlay */}
            <a 
              href="/rambhapalace/rambhapalace/ice-mill-suite/" 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                position: 'absolute', 
                height: '100%', 
                width: '100%', 
                zIndex: 9999, 
                top: 0, 
                left: 0 
              }}
            ></a>
          </div>

          {/* Fifth Card - Printing Press Suite */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
             src="./image-5.png" 
              alt="Printing Press Suite" 
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback design for fifth card */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#dda0dd',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Four-poster bed */}
              <div style={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '60%',
                height: '40%',
                backgroundColor: '#ffffff',
                border: '2px solid #d1d5db',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                {/* Bed posts */}
                <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
              </div>
              
              {/* Blue sofa with orange cushions */}
              <div style={{ 
                position: 'absolute', 
                bottom: '20%', 
                left: '10%',
                width: '25%',
                height: '15%',
                backgroundColor: '#4169e1',
                borderRadius: '8px 8px 0 0'
              }}></div>
              
              {/* Window */}
              <div style={{ 
                position: 'absolute', 
                top: '10%', 
                right: '5%',
                width: '20%',
                height: '30%',
                backgroundColor: '#87ceeb',
                border: '2px solid #d1d5db'
              }}></div>
            </div>
            
            {/* Card Content */}
            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <h3 style={{ fontSize: '20px',fontWeight: '700', color: '#000000', stroke:'#000',marginBottom: '12px', fontFamily: '"Montserrat", sans-serif' }}>PRINTING PRESS SUITES</h3>
              <p style={{ color: '#3A3A3A', lineHeight: '1.6', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
                Once the palace's printing press, they now offer views of the orchard and palace verandah, retaining a name that reflects their storied past.
              </p>
            </div>
            
            {/* Invisible Link Overlay */}
            <a 
              href="/rambhapalace/printing-press-suite/" 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                position: 'absolute', 
                height: '100%', 
                width: '100%', 
                zIndex: 9999, 
                top: 0, 
                left: 0 
              }}
            ></a>
          </div>

          {/* Sixth Card - Rambha Villa */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/RambhaVilla-1-1-1024x683.png" 
              alt="Rambha Villa" 
              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback design for sixth card */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#228b22',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Villa exterior */}
              <div style={{ 
                position: 'absolute', 
                top: '20%', 
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '60%',
                height: '40%',
                backgroundColor: '#8b4513',
                borderRadius: '8px 8px 0 0',
                border: '2px solid #654321'
              }}>
                {/* Roof */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '-10px', 
                  right: '-10px',
                  height: '15px',
                  backgroundColor: '#8b0000',
                  borderRadius: '8px 8px 0 0'
                }}></div>
              </div>
              
              {/* Trees */}
              <div style={{ 
                position: 'absolute', 
                bottom: '10%', 
                left: '10%',
                width: '20px',
                height: '40px',
                backgroundColor: '#228b22',
                borderRadius: '50% 50% 0 0'
              }}></div>
              <div style={{ 
                position: 'absolute', 
                bottom: '10%', 
                right: '10%',
                width: '20px',
                height: '40px',
                backgroundColor: '#228b22',
                borderRadius: '50% 50% 0 0'
              }}></div>
            </div>
            
            {/* Card Content */}
            <div style={{ padding: '24px', backgroundColor: 'white' }}>
              <h3 style={{ fontSize: '20px',fontWeight: '700', color: '#000000', stroke:'#000',marginBottom: '12px', fontFamily: '"Montserrat", sans-serif' }}>RAMBHA VILLA</h3>
              <p style={{ color: '#3A3A3A', lineHeight: '1.6', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
                A luxurious, standalone two-bedroom presidential suite featuring a spacious private garden, swimming pool, butler service and pantry with a comfortable lounge area.
              </p>
            </div>
            
            {/* Invisible Link Overlay */}
            <a 
              href="/rambhapalace/rambhapalace/ice-mill-suite/" 
              style={{ 
                background: 'transparent', 
                border: 'none', 
                position: 'absolute', 
                height: '100%', 
                width: '100%', 
                zIndex: 9999, 
                top: 0, 
                left: 0 
              }}
            ></a>
          </div>
        </div>
      </div>
    </>
  );

  const renderExperiencesPage = () => (
    <>
      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', color: '#374151', marginBottom: '16px', fontFamily: '"Montserrat", sans-serif' }}>Experiences</h1>
      </div>

      {/* Sub-navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        backgroundColor: 'rgb(241,236,229)',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Wildlife', 'Spiritual', 'Cultural'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'Wildlife') {
                  setCurrentPage('wildlife');
                  setExperiencesTab('wildlife');
                } else if (tab === 'Spiritual') {
                  setCurrentPage('experiences');
                  setExperiencesTab('spiritual');
                } else if (tab === 'Cultural') {
                  setCurrentPage('experiences');
                  setExperiencesTab('cultural');
                } else {
                  setCurrentPage('experiences');
                  setExperiencesTab(tab.toLowerCase());
                }
              }}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                color: experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280',
                fontWeight: experiencesTab === tab.toLowerCase() ? '600' : '400',
                borderBottom: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'none',
                outline: 'none',
                textDecoration: 'none',
                boxShadow: 'none',
                transform: 'none',
                filter: 'none',
                opacity: '1',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280';
                target.style.backgroundColor = 'transparent';
                target.style.borderBottom = 'none';
                target.style.setProperty('color', experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280', 'important');
                target.style.setProperty('background-color', 'transparent', 'important');
                target.style.setProperty('border-bottom', 'none', 'important');
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280';
                target.style.backgroundColor = 'transparent';
                target.style.borderBottom = 'none';
                target.style.setProperty('color', experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280', 'important');
                target.style.setProperty('background-color', 'transparent', 'important');
                target.style.setProperty('border-bottom', 'none', 'important');
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {experiencesTab === 'overview' && (
          <>
            {/* OVERVIEW Section */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '24px', textTransform: 'uppercase' }}>OVERVIEW</h2>
              <div style={{ maxWidth: '800px', margin: '0 auto', color: '#374151', lineHeight: '1.8', fontSize: '16px' }}>
                <p>
                  Rambha Palace provides unscripted and authentic experiences that cater to travelers seeking memorable and meaningful activities beyond the ordinary. Time spent here fosters a mindful atmosphere, enriched by interactions with local communities, encounters with the region's flora and fauna, and visits to ancient temples. Guests receive an unfiltered glimpse of Odisha's natural beauty and unique charm.
                </p>
              </div>
            </div>

            {/* WILDLIFE Section */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '32px', textAlign: 'center', textTransform: 'uppercase' }}>WILDLIFE</h2>
              
              {/* Three Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>
                {/* Card 1: Diving Dolphins */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-7.png" 
                      alt="Irrawaddy Dolphin in Chilika Lake" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#87ceeb',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Dolphin */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '30%', 
                        left: '20%',
                        width: '60%',
                        height: '20%',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '50% 50% 0 0'
                      }}></div>
                      {/* Splash */}
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '20%', 
                        left: '50%',
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#ffffff',
                        borderRadius: '50%',
                        transform: 'translateX(-50%)'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', color: '#000000', marginBottom: '12px', textTransform: 'uppercase' }}>DIVING DOLPHINS</h3>
                    <p style={{ color: '#3A3A3A', font : '14px Lato, sans-serif' ,lineHeight: '1.6', fontSize: '12px' }}>
                      The endangered species of Irrawaddy dolphins can be spotted frolicking in Chilika Lake. Spot them happy in their habitat while you drift slowly in a private boat.
                    </p>
                  </div>
                </div>

                {/* Card 2: Tracking Fishing Cat */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-8.png" 
                      alt="Fishing Cat in Natural Habitat" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#228b22',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Fishing Cat */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '20%', 
                        left: '30%',
                        width: '40%',
                        height: '30%',
                        backgroundColor: '#8b4513',
                        borderRadius: '50% 50% 0 0'
                      }}>
                        {/* Cat ears */}
                        <div style={{ 
                          position: 'absolute', 
                          top: '-10px', 
                          left: '20%',
                          width: '8px',
                          height: '12px',
                          backgroundColor: '#8b4513',
                          borderRadius: '50% 50% 0 0'
                        }}></div>
                        <div style={{ 
                          position: 'absolute', 
                          top: '-10px', 
                          right: '20%',
                          width: '8px',
                          height: '12px',
                          backgroundColor: '#8b4513',
                          borderRadius: '50% 50% 0 0'
                        }}></div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', color: '#000000', marginBottom: '12px', textTransform: 'uppercase' }}>TRACKING FISHING CAT</h3>
                    <p style={{ color: '#3A3A3A', font : '14px Lato, sans-serif' ,lineHeight: '1.6', fontSize: '12px' }}>
                      Embark on a boat safari in the wetlands to track elusive apex predators as they roam the banks on lookout for a hunt, or if you're lucky, even catch them on the prowl.
                    </p>
                  </div>
                </div>

                {/* Card 3: Finding Flamingos */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-6.png" 
                      alt="Flamingos in Chilika Lake" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#87ceeb',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Flamingos */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '30%', 
                        left: '20%',
                        width: '8px',
                        height: '40%',
                        backgroundColor: '#ff69b4',
                        borderRadius: '4px'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        top: '25%', 
                        left: '20%',
                        width: '20px',
                        height: '15px',
                        backgroundColor: '#ff69b4',
                        borderRadius: '50%'
                      }}></div>
                      
                      <div style={{ 
                        position: 'absolute', 
                        top: '35%', 
                        right: '30%',
                        width: '8px',
                        height: '35%',
                        backgroundColor: '#ff69b4',
                        borderRadius: '4px'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        top: '30%', 
                        right: '30%',
                        width: '20px',
                        height: '15px',
                        backgroundColor: '#ff69b4',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', color: '#000000', marginBottom: '12px', textTransform: 'uppercase' }}>FINDING FLAMINGOS</h3>
                    <p style={{ color: '#3A3A3A', font : '14px Lato, sans-serif' ,lineHeight: '1.6', fontSize: '12px' }}>
                      Set sail on Chilika Lake and get a chance to spot nature's fabulous divas, with their striking pink feathers and long, spindly legs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SPIRITUAL Section */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '32px', textAlign: 'center', textTransform: 'uppercase' }}>SPIRITUAL</h2>
              
              {/* Main Image */}
              {/* Unified Card - Image and Content Together */}
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                maxWidth: '1000px',
                margin: '0 auto',
                marginBottom: '32px'
              }}>
                {/* Image Section */}
                <div style={{ 
                  width: '100%', 
                  height: '400px', 
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="./image-9.png" 
                    alt="Ancient Temples of Odisha" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback design if image fails to load */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f3f4f6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    fontSize: '18px',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}>
                    Ancient Temples Image
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ 
                  padding: '32px', 
                  backgroundColor: 'white'
                }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '16px', 
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    
                  }}>
                    AN ODISHA OF THE GODS
                  </h3>
                  <p style={{ 
                    color: '#374151', 
                    lineHeight: '1.8', 
                    fontSize: '16px',
                    textAlign: 'center',
                    
                  }}>
                    Jagannath Puri, Konark Sun Temple and Tara Tarini are among the architectural and spiritual sanctuaries located a short drive from Rambha Palace. Experience guided tours that are both enlightening and transformative. Immerse yourself in the beauty of these enduring structures, which have stood for centuries, and discover a place of solace, inner serenity and peace.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURED EXPERIENCES Section */}
            <div style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '32px', textAlign: 'center', textTransform: 'uppercase' }}>CULTURAL</h2>
              
              {/* First Row - Three Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', marginBottom: '32px' }}>
                {/* Card 1: Art Village */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-10.png" 
                      alt="Art Village Raghurajpur" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#fbbf24',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Colorful masks */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '20%', 
                        left: '20%',
                        width: '20px',
                        height: '25px',
                        backgroundColor: '#ef4444',
                        borderRadius: '50%'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        top: '30%', 
                        left: '40%',
                        width: '20px',
                        height: '25px',
                        backgroundColor: '#3b82f6',
                        borderRadius: '50%'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        top: '40%', 
                        left: '60%',
                        width: '20px',
                        height: '25px',
                        backgroundColor: '#10b981',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#374151', marginBottom: '8px', textTransform: 'uppercase' }}>ART VILLAGE: RAGHURAJPUR</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.5', fontSize: '13px' }}>
                    Navigate town lanes, visit artisans’ homes & studios and unravel the stories behind Pattachitra paintings, delve into Chadhiapalli mask making and its symbolism in Odisha.
                    </p>
                  </div>
                </div>

                {/* Card 2: Udaygiri Caves */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-11.png" 
                      alt="Udaygiri Caves" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#8b4513',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Cave structure */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '30%', 
                        left: '20%',
                        width: '60%',
                        height: '40%',
                        backgroundColor: '#a0522d',
                        borderRadius: '8px'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#374151', marginBottom: '8px', textTransform: 'uppercase' }}>UDAYGIRI CAVES</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.5', fontSize: '13px' }}>
                    Constructed in 2nd Century BC, Udaygiri caves feature intricate carvings depicting popular legends, historical events, and religious rituals.
                    </p>
                  </div>
                </div>

                {/* Card 3: Metal Craft */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-12.png" 
                      alt="Metal Craft" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#c0c0c0',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Metal sculptures */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '40%', 
                        left: '30%',
                        width: '40%',
                        height: '20%',
                        backgroundColor: '#d4af37',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#374151', marginBottom: '8px', textTransform: 'uppercase' }}>METAL CRAFT</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.5', fontSize: '13px' }}>
                    Through the moulding of metal, artisans create sculptures of primarily aquatic creatures, effectively replicating their physical movement abilities. Skilful crafts at its finest.
                    </p>
                  </div>
                </div>
              </div>

              {/* FEATURED EXPERIENCES Section */}
              <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: '48px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '24px', textTransform: 'uppercase' }}>FEATURED EXPERIENCES</h2>
              </div>
              
              {/* Second Row - Two Larger Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {/* Card 4: Breakfast on Island */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '250px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-13.png" 
                      alt="Breakfast on Island" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#87ceeb',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Islands */}
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '20%', 
                        left: '20%',
                        width: '15%',
                        height: '25%',
                        backgroundColor: '#228b22',
                        borderRadius: '50% 50% 0 0'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '20%', 
                        right: '30%',
                        width: '12%',
                        height: '20%',
                        backgroundColor: '#228b22',
                        borderRadius: '50% 50% 0 0'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#374151', marginBottom: '12px', textTransform: 'uppercase' }}>BREAKFAST ON ISLAND</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
                    Set sail from the banks of Chilika Lake and cruise through calming waters. Enjoy breakfast aboard the boat, or step onto the island for a refreshing morning trail. Awaken to sounds of a gentle breeze and the buzz of critters.
                    </p>
                  </div>
                </div>

                {/* Card 5: Romantic Beach Getaway */}
                <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                  <div style={{ height: '250px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src="./image-14.png" 
                      alt="Romantic Beach Getaway" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#fbbf24',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Beach scene */}
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '10%', 
                        left: '20%',
                        width: '60%',
                        height: '15%',
                        backgroundColor: '#f4a460',
                        borderRadius: '8px'
                      }}></div>
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '30%', 
                        left: '30%',
                        width: '40%',
                        height: '20%',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        border: '2px solid #d1d5db'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#374151', marginBottom: '12px', textTransform: 'uppercase' }}>ROMANTIC BEACH GETAWAY</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
                    Allow the palace butlers to orchestrate a candlelit feast by the lake. Relish a sumptuous banquet of your preferred cuisine, while the gentle whispers of waves caress the shore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {experiencesTab === 'wildlife' && (
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '24px' }}>Wildlife Experiences</h2>
            <p style={{ color: '#6b7280', fontSize: '16px' }}>Detailed wildlife experiences coming soon...</p>
          </div>
        )}

        {experiencesTab === 'spiritual' && (
          <>
            {/* Spiritual Image */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                <img 
                  src="/img-7.png" 
                  alt="Ancient Temple Complex - Spiritual Experience" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '100%',
                    borderRadius: '8px'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback design if image fails to load */}
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '500px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  fontSize: '18px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Temple Structure 1 */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '20%', 
                    left: '15%',
                    width: '20%',
                    height: '40%',
                    backgroundColor: '#8b4513',
                    borderRadius: '8px 8px 0 0'
                  }}></div>
                  {/* Temple Structure 2 - Main Tower */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '20%', 
                    left: '40%',
                    width: '20%',
                    height: '60%',
                    backgroundColor: '#a0522d',
                    borderRadius: '8px 8px 0 0'
                  }}>
                    {/* Tower top */}
                    <div style={{ 
                      position: 'absolute',
                      top: '-10%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: '20%',
                      backgroundColor: '#cd853f',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  {/* Temple Structure 3 */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '20%', 
                    right: '15%',
                    width: '20%',
                    height: '35%',
                    backgroundColor: '#8b4513',
                    borderRadius: '8px 8px 0 0'
                  }}></div>
                  {/* Palm Trees */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '20%',
                    backgroundColor: '#228b22'
                  }}></div>
                </div>
              </div>
            </div>

            {/* Spiritual Content */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '24px', textTransform: 'uppercase' }}>SPIRITUAL EXPERIENCES</h2>
              <div style={{ maxWidth: '800px', margin: '0 auto', color: '#374151', lineHeight: '1.8', fontSize: '16px' }}>
                <p style={{ marginBottom: '16px' }}>
                Odisha, the Land of Temples, is home to over 700 ancient places of worship, presenting guests with a wealth of spiritual and architectural treasures to discover. Experience traditional blessing ceremonies, meditative-stillness and sense of spiritual enlightenment imbues all visitors that explore these impressive structures which have stood witness to time immemorial.</p>
                <p style={{ marginBottom: '16px' }}>
                </p>
                <p>
                </p>
              </div>
            </div>

            {/* Temple Carousel */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ 
                position: 'relative',
                maxWidth: '1200px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                {/* Left Arrow */}
                <button 
                  onClick={() => {
                    setTempleCurrentIndex(prev => {
                      const newIndex = prev - 1;
                      return newIndex < 0 ? 1 : newIndex; // 4 items, show 3 → wrap 0..1
                    });
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '',
                    border: '1px solid #2C3E50',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    flexShrink: 0
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Cards */}
                <div 
                  className="temple-cards-container"
                style={{ 
                  display: 'flex', 
                    gap: '24px',
                  overflowX: 'auto', 
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x mandatory',
                    flex: 1
                  }}
                >
                  {(() => {
                    const templeCards = [
                      {
                        key: 'jagannath',
                        image: '/jagannath.png',
                        title: 'Jagannath Temple',
                        description: 'A UNESCO heritage site constructed in 800 CE; the temple is a major pilgrimage site. Sculptures of Hindu deities are placed upon a bejewelled base- a visit here is nothing short of enlightenment.'
                      },
                      {
                        key: 'konark',
                        image: 'konark.png',
                        title: 'Konark Sun Temple',
                        description: 'Dedicated to the Hindu Sun God, Konark Temple was hewn from stone in the 13th century. The temple showcases a magnificent sun idol, seemingly suspended in a celestial embrace.'
                      },
                      {
                        key: 'shanti',
                        image: '/shanti.png',
                        title: 'Shanti Stupa, Dhauligiri',
                        description: "As you stand before the 'peace pagoda' site, the peaceful atmosphere envelops you, a poignant reminder of King Ashoka's commitment to peace after the Kalinga War."
                      },
                      {
                        key: 'lingaraj',
                        image: 'lingaraj.png',
                        title: 'Lingaraj Temple',
                        description: 'The largest temple in Bhubaneswar, dedicated to Lord Shiva, exemplifies the essence of Kalinga architecture. The festival of Shivaratri is celebrated here on a grand scale.'
                      }
                    ];

                    const extended = [...templeCards, ...templeCards, ...templeCards];
                    const startIndex = templeCards.length + templeCurrentIndex;
                    const visible = extended.slice(startIndex, startIndex + 3);

                    return visible.map((card, index) => (
                      <div 
                        key={`${card.key}-${startIndex + index}`}
                      style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                          minWidth: '350px',
                          flex: 1,
                  scrollSnapAlign: 'start'
                        }}
                      >
                        <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                            src={card.image}
                            alt={card.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                      </div>
                        <div style={{ padding: '24px' }}>
                          <h3 style={{ fontSize: '21px', fontWeight: 'bold', color: '#374151', marginBottom: '12px', textTransform: 'uppercase' }}>{card.title}</h3>
                    <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
                            {card.description}
                    </p>
                  </div>
                </div>
                    ));
                  })()}
              </div>

                {/* Right Arrow */}
                <button 
                  onClick={() => {
                    setTempleCurrentIndex(prev => {
                      const newIndex = prev + 1;
                      return newIndex > 1 ? 0 : newIndex; // wrap
                    });
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '',
                    border: '1px solid #2C3E50',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    flexShrink: 0
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* FEATURED EXPERIENCES Section */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {/* Section Title */}
                <div style={{ 
                  textAlign: 'center', 
                  padding: '32px 32px 24px 32px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <h2 style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '0',
                    textTransform: 'uppercase'
                  }}>
                    FEATURED EXPERIENCES
                  </h2>
                </div>

                {/* Main Image */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '400px',
                  backgroundColor: '#f3f4f6'
                }}>
                  <img 
                    src="rathyatra.png" 
                    alt="Jagannath Rath Yatra - Three Ornate Chariots" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback design if image fails to load */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f3f4f6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    fontSize: '18px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Chariot 1 */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '20%', 
                      left: '15%',
                      width: '20%',
                      height: '50%',
                      backgroundColor: '#dc2626',
                      borderRadius: '8px 8px 0 0'
                    }}>
                      {/* Chariot top */}
                      <div style={{ 
                        position: 'absolute',
                        top: '-20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '120%',
                        height: '40%',
                        backgroundColor: '#16a34a',
                        borderRadius: '50% 50% 0 0'
                      }}></div>
                    </div>
                    {/* Chariot 2 */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '20%', 
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '25%',
                      height: '60%',
                      backgroundColor: '#dc2626',
                      borderRadius: '8px 8px 0 0'
                    }}>
                      {/* Chariot top */}
                      <div style={{ 
                        position: 'absolute',
                        top: '-25%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '140%',
                        height: '45%',
                        backgroundColor: '#16a34a',
                        borderRadius: '50% 50% 0 0'
                      }}></div>
                    </div>
                    {/* Chariot 3 */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '20%', 
                      right: '15%',
                      width: '20%',
                      height: '50%',
                      backgroundColor: '#dc2626',
                      borderRadius: '8px 8px 0 0'
                    }}>
                      {/* Chariot top */}
                      <div style={{ 
                        position: 'absolute',
                        top: '-20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '120%',
                        height: '40%',
                        backgroundColor: '#16a34a',
                        borderRadius: '50% 50% 0 0'
                      }}></div>
                    </div>
                    {/* Crowd */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '0',
                      left: '0',
                      width: '100%',
                      height: '20%',
                      backgroundColor: '#fbbf24'
                    }}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '32px' }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '16px',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                  }}>
                    JAGANNATH RATH YATRA
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.8', 
                    fontSize: '16px',
                    textAlign: 'center',
                    margin: '0'
                  }}>
                    Every summer in Odisha, the Jagannath Rath Yatra draws thousands to Puri's ancient streets, where three towering chariots carry Lord Jagannath, Balabhadra, and Subhadra on a sacred journey. Adorned with rich textile decorations, the chariots move through the city as a sea of devotees joins in, pulling them forward with chants, prayers, and a shared sense of devotion.
                  </p>
                </div>
              </div>
            </div>

            {/* Landscape Carousel */}
            <div style={{ marginBottom: '48px' }}>
                <div style={{ 
                      position: 'relative',
                maxWidth: '1200px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px'
              }}>
                {/* Left Arrow */}
                <button 
                  onClick={() => {
                    setLandscapeCarouselCurrentIndex(prev => {
                      const newIndex = prev - 1;
                      return newIndex < 0 ? 3 : newIndex; // 5 items, show 2 → start indices 0..3
                    });
                  }}
                      style={{ 
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '',
                    border: '1px solid #2C3E50',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    flexShrink: 0
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Images Container */}
                <div 
                  className="landscape-cards-container"
                      style={{ 
                    display: 'flex', 
                    gap: '24px',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                    scrollSnapType: 'x mandatory',
                    flex: 1
                  }}
                >
                  {(() => {
                    const landscapeCards = [
                      { src: 'img-10.png', alt: 'Ancient Temple Architecture' },
                      { src: 'img-11.png', alt: 'Temple Complex' },
                      { src: 'img-12.png', alt: 'Ancient Ruins' },
                      { src: 'img-13.png', alt: 'Temple Architecture' },
                      { src: 'img-14.png', alt: 'Jagannath Temple' }
                    ];

                    const extended = [...landscapeCards, ...landscapeCards, ...landscapeCards];
                    const startIndex = landscapeCards.length + landscapeCarouselCurrentIndex;
                    const visible = extended.slice(startIndex, startIndex + 2);

                    return visible.map((card, index) => (
                      <div key={`${card.alt}-${startIndex + index}`} style={{ 
                        minWidth: '560px',
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  scrollSnapAlign: 'start'
                }}>
                  <div style={{ height: '462px', backgroundColor: '#f3f4f6' }}>
                    <img 
                            src={card.src}
                            alt={card.alt}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                      </div>
                    </div>
                    ));
                  })()}
              </div>

                {/* Right Arrow */}
                <button 
                  onClick={() => {
                    setLandscapeCarouselCurrentIndex(prev => {
                      const newIndex = prev + 1;
                      return newIndex > 3 ? 0 : newIndex; // wrap for two-visible
                    });
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '',
                    border: '1px solid #2C3E50',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    flexShrink: 0
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}

        {experiencesTab === 'cultural' && (
          <>
            {/* Cultural Hero Image */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
                <img 
                  src="cultural.png" 
                  alt="Traditional Indian Masks and Sculptures - Cultural Heritage" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    maxWidth: '100%',
                    borderRadius: '8px'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback design if image fails to load */}
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '500px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  fontSize: '18px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Elephant Head Sculpture */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '30%', 
                    left: '15%',
                    width: '20%',
                    height: '30%',
                    backgroundColor: '#16a34a',
                    borderRadius: '50% 50% 0 0'
                  }}>
                    {/* Tusks */}
                    <div style={{ 
                      position: 'absolute',
                      bottom: '0',
                      left: '20%',
                      width: '60%',
                      height: '20%',
                      backgroundColor: '#fbbf24',
                      borderRadius: '0 0 50% 50%'
                    }}></div>
                  </div>
                  {/* Tiger Mask */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '40%', 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '25%',
                    height: '35%',
                    backgroundColor: '#f59e0b',
                    borderRadius: '50% 50% 0 0'
                  }}>
                    {/* Eyes */}
                    <div style={{ 
                      position: 'absolute',
                      top: '30%',
                      left: '25%',
                      width: '15%',
                      height: '15%',
                      backgroundColor: '#000000',
                      borderRadius: '50%'
                    }}></div>
                    <div style={{ 
                      position: 'absolute',
                      top: '30%',
                      right: '25%',
                      width: '15%',
                      height: '15%',
                      backgroundColor: '#000000',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                  {/* Human Masks */}
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '35%', 
                    right: '15%',
                    width: '18%',
                    height: '25%',
                    backgroundColor: '#dc2626',
                    borderRadius: '50% 50% 0 0'
                  }}>
                    {/* Eyes */}
                    <div style={{ 
                      position: 'absolute',
                      top: '40%',
                      left: '30%',
                      width: '12%',
                      height: '12%',
                      backgroundColor: '#000000',
                      borderRadius: '50%'
                    }}></div>
                    <div style={{ 
                      position: 'absolute',
                      top: '40%',
                      right: '30%',
                      width: '12%',
                      height: '12%',
                      backgroundColor: '#000000',
                      borderRadius: '50%'
                    }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Content */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '24px', textTransform: 'uppercase' }}>ART, CULTURE AND HERITAGE</h2>
              <div style={{ maxWidth: '800px', margin: '0 auto', color: '#374151', lineHeight: '1.8', fontSize: '16px' }}>
                <p>
                  Distinctive and vibrant, Odisha's cultural heritage is rich in performative arts, handicrafts, and exquisite monuments. Experience this the Hidden India way, unravelling stories, and forging connections with the community. Unfiltered, authentic, and unobtrusive, we offer a window to Odisha culture with minimal disruption and the highest level of wholesome fulfilment.
                </p>
              </div>
            </div>

            {/* Three Column Cultural Section */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr', 
                gap: '32px',
                maxWidth: '1200px',
                margin: '0 auto'
              }}>
                {/* Udaygiri Caves */}
                <div style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ height: '250px', backgroundColor: '#f3f4f6' }}>
                    <img 
                      src="caves.png" 
                      alt="Udaygiri Caves - Stone Structure" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#d2691e',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Cave Structure */}
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '20%', 
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '60%',
                        backgroundColor: '#8b4513',
                        borderRadius: '8px 8px 0 0'
                      }}>
                        {/* Pillars */}
                        <div style={{ 
                          position: 'absolute',
                          bottom: '0',
                          left: '10%',
                          width: '15%',
                          height: '100%',
                          backgroundColor: '#a0522d',
                          borderRadius: '8px'
                        }}></div>
                        <div style={{ 
                          position: 'absolute',
                          bottom: '0',
                          left: '30%',
                          width: '15%',
                          height: '100%',
                          backgroundColor: '#a0522d',
                          borderRadius: '8px'
                        }}></div>
                        <div style={{ 
                          position: 'absolute',
                          bottom: '0',
                          right: '30%',
                          width: '15%',
                          height: '100%',
                          backgroundColor: '#a0522d',
                          borderRadius: '8px'
                        }}></div>
                        <div style={{ 
                          position: 'absolute',
                          bottom: '0',
                          right: '10%',
                          width: '15%',
                          height: '100%',
                          backgroundColor: '#a0522d',
                          borderRadius: '8px'
                        }}></div>
                        {/* Cave Opening */}
                        <div style={{ 
                          position: 'absolute',
                          top: '20%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '40%',
                          height: '40%',
                          backgroundColor: '#000000',
                          borderRadius: '8px'
                        }}></div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#374151', 
                      marginBottom: '12px',
                      textTransform: 'uppercase'
                    }}>
                      UDAYGIRI CAVES
                    </h3>
                    <p style={{ 
                      color: '#6b7280', 
                      lineHeight: '1.6', 
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Constructed in 2nd Century BC, Udaygiri caves feature intricate carvings depicting popular legends, historical events, and religious rituals.
                    </p>
                  </div>
                </div>

                {/* Metal Craft */}
                <div style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ height: '250px', backgroundColor: '#f3f4f6' }}>
                    <img 
                      src="craft.png" 
                      alt="Metal Craft - Aquatic Sculptures" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#374151',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Turtle Sculpture */}
                      <div style={{ 
                        position: 'absolute', 
                        bottom: '30%', 
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '40%',
                        backgroundColor: '#6b7280',
                        borderRadius: '50% 50% 0 0'
                      }}>
                        {/* Shell Pattern */}
                        <div style={{ 
                          position: 'absolute',
                          top: '20%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '80%',
                          height: '60%',
                          backgroundColor: '#9ca3af',
                          borderRadius: '50%'
                        }}></div>
                      </div>
                      {/* Cylindrical Object */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '20%', 
                        right: '20%',
                        width: '15%',
                        height: '30%',
                        backgroundColor: '#6b7280',
                        borderRadius: '8px'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#374151', 
                      marginBottom: '12px',
                      textTransform: 'uppercase'
                    }}>
                      METAL CRAFT
                    </h3>
                    <p style={{ 
                      color: '#6b7280', 
                      lineHeight: '1.6', 
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Artisans skillfully mold metal into stunning aquatic sculptures, capturing the essence of movement and showcasing exceptional craftsmanship at its finest.
                    </p>
                  </div>
                </div>

                {/* Ikat Weaving */}
                <div style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  overflow: 'hidden', 
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ height: '250px', backgroundColor: '#f3f4f6' }}>
                    <img 
                      src="weaving.png" 
                      alt="Ikat Weaving - Hands on Loom" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '100%', 
                      backgroundColor: '#dc2626',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      {/* Weaving Pattern */}
                      <div style={{ 
                        position: 'absolute', 
                        top: '20%', 
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '60%',
                        backgroundColor: '#b91c1c',
                        borderRadius: '8px'
                      }}>
                        {/* Pattern Lines */}
                        <div style={{ 
                          position: 'absolute',
                          top: '10%',
                          left: '0',
                          width: '100%',
                          height: '2px',
                          backgroundColor: '#fbbf24'
                        }}></div>
                        <div style={{ 
                          position: 'absolute',
                          top: '30%',
                          left: '0',
                          width: '100%',
                          height: '2px',
                          backgroundColor: '#fbbf24'
                        }}></div>
                        <div style={{ 
                          position: 'absolute',
                          top: '50%',
                          left: '0',
                          width: '100%',
                          height: '2px',
                          backgroundColor: '#fbbf24'
                        }}></div>
                        <div style={{ 
                          position: 'absolute',
                          top: '70%',
                          left: '0',
                          width: '100%',
                          height: '2px',
                          backgroundColor: '#fbbf24'
                        }}></div>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#374151', 
                      marginBottom: '12px',
                      textTransform: 'uppercase'
                    }}>
                      IKAT WEAVING
                    </h3>
                    <p style={{ 
                      color: '#6b7280', 
                      lineHeight: '1.6', 
                      fontSize: '14px',
                      margin: '0'
                    }}>
                      Admire the intricate art of Ikat weaving in motion, where the warp and weft threads are tye-dyed to reveal a intricate and colourful kaleidoscopic pattern.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURED EXPERIENCES Section */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                {/* Section Title */}
                <div style={{ 
                  textAlign: 'center', 
                  padding: '32px 32px 24px 32px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <h2 style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '0',
                    textTransform: 'uppercase'
                  }}>
                    FEATURED EXPERIENCES
                  </h2>
                </div>

                {/* Main Image */}
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '400px',
                  backgroundColor: '#f3f4f6'
                }}>
                  <img 
                    src="raghuraj.png" 
                    alt="Raghurajpur Art Village - Silhouette and Handcrafted Objects" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback design if image fails to load */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f3f4f6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    fontSize: '18px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Person Silhouette */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '20%', 
                      left: '15%',
                      width: '15%',
                      height: '40%',
                      backgroundColor: '#000000',
                      borderRadius: '50% 50% 0 0'
                    }}>
                      {/* Head */}
                      <div style={{ 
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '60%',
                        height: '30%',
                        backgroundColor: '#000000',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    {/* Hanging Objects */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '20%', 
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: '60%',
                      backgroundColor: '#8b4513'
                    }}>
                      {/* Multiple hanging objects */}
                      <div style={{ 
                        position: 'absolute',
                        top: '10%',
                        left: '20%',
                        width: '15%',
                        height: '20%',
                        backgroundColor: '#a0522d',
                        borderRadius: '50%'
                      }}></div>
                      <div style={{ 
                        position: 'absolute',
                        top: '30%',
                        left: '40%',
                        width: '12%',
                        height: '15%',
                        backgroundColor: '#8b4513',
                        borderRadius: '50%'
                      }}></div>
                      <div style={{ 
                        position: 'absolute',
                        top: '50%',
                        left: '60%',
                        width: '18%',
                        height: '25%',
                        backgroundColor: '#a0522d',
                        borderRadius: '50%'
                      }}></div>
                      <div style={{ 
                        position: 'absolute',
                        top: '20%',
                        right: '20%',
                        width: '14%',
                        height: '18%',
                        backgroundColor: '#8b4513',
                        borderRadius: '50%'
                      }}></div>
                    </div>
                    {/* Hand Silhouette */}
                    <div style={{ 
                      position: 'absolute', 
                      bottom: '30%', 
                      right: '10%',
                      width: '8%',
                      height: '25%',
                      backgroundColor: '#000000',
                      borderRadius: '8px'
                    }}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: '32px' }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '16px',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                  }}>
                    RAGHURAJPUR ART VILLAGE
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.8', 
                    fontSize: '16px',
                    textAlign: 'center',
                    margin: '0'
                  }}>
                    Navigate town lanes, visit artisans' homes & studios and unravel the stories behind Pattachitra paintings, delve into Chadhiapalli mask making and its symbolism in Odisha. A haven for art enthusiasts and discerning travellers alike. Watch the intricacies of creating beautiful handicrafts in motion- the artisans are happy to indulge all interested visitors with the stories behind their artwork. Guests can also try their hand at these crafts themselves.
                  </p>
                </div>
              </div>
            </div>

            {/* Raghurajpur Carousel Section */}
            <div style={{ marginBottom: '48px' }}>
              <div style={{ 
                backgroundColor: 'transparent', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'relative',
                  padding: '16px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}>
                  {/* Left Arrow */}
                  <button 
                    onClick={() => {
                      setRaghurajpurCurrentIndex(prev => {
                        const newIndex = prev - 1;
                        return newIndex < 0 ? 2 : newIndex; // 5 items, show 3 → start indices 0..2
                      });
                    }}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '',
                      border: '1px solid #2C3E50',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      flexShrink: 0
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Cards Container */}
                  <div 
                    className="raghurajpur-cards-container"
                    style={{ 
                    display: 'flex',
                      gap: '20px',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch',
                    padding: '0 32px',
                    scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                      flex: 1
                    }}
                  >
                    {(() => {
                      const cards = [
                        { src: 'img-30.png', alt: 'Raghurajpur Odisha Rambha', title: 'Raghurajpur Rambha' },
                        { src: 'img-31.png', alt: 'Raghurajpur Painting', title: 'Raghurajpur Painting' },
                        { src: 'img-32.png', alt: 'Raghurajpur Temple Odisha', title: 'Raghurajpur Temple' },
                        { src: 'img-33.png', alt: 'Raghurajpur Pattachitra Art', title: 'Raghurajpur Pattachitra' },
                        { src: 'img-34.png', alt: 'Raghurajpur Odisha Visit', title: 'Raghurajpur Visit' }
                      ];
                      const extended = [...cards, ...cards, ...cards];
                      const startIndex = cards.length + raghurajpurCurrentIndex;
                      const visible = extended.slice(startIndex, startIndex + 3);

                      return visible.map((card, index) => (
                        <div key={`${card.alt}-${startIndex + index}`} style={{ 
                      flex: '0 0 300px',
                      scrollSnapAlign: 'start',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      backgroundColor: '#f3f4f6'
                    }}>
                      <img 
                            src={card.src}
                            alt={card.alt}
                        style={{ 
                          width: '100%', 
                          height: '200px', 
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const nextSibling = target.nextSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      <div style={{
                        display: 'none',
                        width: '100%',
                        height: '200px',
                        backgroundColor: '#f3f4f6',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#6b7280',
                        fontSize: '14px'
                      }}>
                            {card.title}
                      </div>
                    </div>
                      ));
                    })()}
                    </div>

                  {/* Right Arrow */}
                  <button 
                    onClick={() => {
                      setRaghurajpurCurrentIndex(prev => {
                        const newIndex = prev + 1;
                        return newIndex > 2 ? 0 : newIndex; // wrap for three-visible
                      });
                    }}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '',
                      border: '1px solid #2C3E50',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 10,
                      flexShrink: 0
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );

  const renderWildlifePage = () => (
    <>
      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', color: '#374151', marginBottom: '16px', fontFamily: '"Montserrat", sans-serif' }}>Wildlife</h1>
      </div>

      {/* Sub-navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        backgroundColor: 'rgb(241,236,229)',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Wildlife', 'Spiritual', 'Cultural'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'Overview') {
                  setCurrentPage('experiences');
                  setExperiencesTab('overview');
                } else if (tab === 'Wildlife') {
                  setCurrentPage('wildlife');
                  setExperiencesTab('wildlife');
                } else if (tab === 'Spiritual') {
                  setCurrentPage('experiences');
                  setExperiencesTab('spiritual');
                } else if (tab === 'Cultural') {
                  setCurrentPage('experiences');
                  setExperiencesTab('cultural');
                } else {
                  setCurrentPage('experiences');
                  setExperiencesTab(tab.toLowerCase());
                }
              }}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                color: experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280',
                fontWeight: experiencesTab === tab.toLowerCase() ? '600' : '400',
                borderBottom: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'none',
                outline: 'none',
                textDecoration: 'none',
                boxShadow: 'none',
                transform: 'none',
                filter: 'none',
                opacity: '1',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280';
                target.style.backgroundColor = 'transparent';
                target.style.borderBottom = 'none';
                target.style.setProperty('color', experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280', 'important');
                target.style.setProperty('background-color', 'transparent', 'important');
                target.style.setProperty('border-bottom', 'none', 'important');
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.color = experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280';
                target.style.backgroundColor = 'transparent';
                target.style.borderBottom = 'none';
                target.style.setProperty('color', experiencesTab === tab.toLowerCase() ? '#000000' : '#6b7280', 'important');
                target.style.setProperty('background-color', 'transparent', 'important');
                target.style.setProperty('border-bottom', 'none', 'important');
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Wildlife Image */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="/image-90.png" 
              alt="Wildlife - Three Antelopes in Natural Setting" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                maxWidth: '100%',
                borderRadius: '8px'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback design if image fails to load */}
            <div style={{
              display: 'none',
              width: '100%',
              height: '500px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '18px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Antelope 1 */}
              <div style={{ 
                position: 'absolute', 
                top: '40%', 
                left: '20%',
                width: '15%',
                height: '25%',
                backgroundColor: '#8b4513',
                borderRadius: '50% 50% 0 0'
              }}></div>
              {/* Antelope 2 */}
              <div style={{ 
                position: 'absolute', 
                top: '35%', 
                left: '45%',
                width: '20%',
                height: '30%',
                backgroundColor: '#2d1810',
                borderRadius: '50% 50% 0 0'
              }}></div>
              {/* Antelope 3 */}
              <div style={{ 
                position: 'absolute', 
                top: '42%', 
                left: '70%',
                width: '15%',
                height: '25%',
                backgroundColor: '#8b4513',
                borderRadius: '50% 50% 0 0'
              }}></div>
              {/* Grass */}
              <div style={{ 
                position: 'absolute', 
                bottom: '0',
                left: '0',
                width: '100%',
                height: '20%',
                backgroundColor: '#22c55e'
              }}></div>
            </div>
          </div>
        </div>

        {/* Wildlife Content */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '24px', textTransform: 'uppercase' }}>WILDLIFE EXPERIENCES</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#374151', lineHeight: '1.8', fontSize: '16px' }}>
            <p style={{ marginBottom: '16px' }}>
            Rambha Palace is situated in a globally recognised biodiversity hotspot, with resident naturalists to take you around the area. Chilika Lake is home to an imposing variety of migratory and resident bird species including, flamingos, sea eagles, pelicans and a wide range of elusive animals from melanistic tigers to fishing cats. India’s largest brakish water lagoon is also home to the unmistakable Irawaddy dolphin. Watching the Olive-Riddley turtle nesting is another exciting expedition to embark on.
            </p>
            <p style={{ marginBottom: '16px' }}>
             
            </p>
            <p>
             
            </p>
          </div>
        </div>

        {/* Wildlife Carousel */}
        <div style={{ marginBottom: '48px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            width: '100%',
            // overflow: 'hidden',
            borderRadius: '12px',
            // boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Carousel Cards */}
            <div 
              id="wildlife-carousel"
              style={{ 
                display: 'flex', 
                gap: '24px',
                padding: '0 24px',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory',
                transition: 'transform 0.3s ease-in-out',
                width: '100%'
              }}
              onScroll={(e) => {
                const carousel = e.currentTarget;
                const maxScroll = carousel.scrollWidth - carousel.clientWidth;

                // 🔄 Infinite Loop Reset
                if (carousel.scrollLeft <= 0) {
                  carousel.scrollLeft = maxScroll - carousel.clientWidth;
                } else if (carousel.scrollLeft >= maxScroll) {
                  carousel.scrollLeft = carousel.clientWidth;
                }

                // Dynamic scaling + opacity effects
                const items = carousel.querySelectorAll('.wildlife-card');
                items.forEach((el) => {
                  if (el instanceof HTMLElement) {
                    const box = el.getBoundingClientRect();
                    const center = window.innerWidth / 2;
                    const offset = Math.abs(box.left + box.width / 2 - center);
                    const scale = Math.max(0.9, 1.05 - offset / 1000);
                    const opacity = Math.max(0.5, 1 - offset / 800);
                    el.style.transform = `scale(${scale})`;
                    el.style.opacity = opacity.toString();
                  }
                });
              }}
            >
              {/* Card 1: Diving Dolphins */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/Dolphin.png" 
                    alt="Diving Dolphins" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Dolphin image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#87ceeb',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 50% 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🐬
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    DIVING DOLPHINS
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Endangered species of Irrawaddy dolphins can be spotted frolicking in Chilika Lake. Spot them happy in their habitat while you drift slowly in a boat.
                  </p>
                </div>
              </div>

              {/* Card 2: Turtle Treasure */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/Turtle.png" 
                    alt="Turtle Treasure" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Turtle image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#f4a460',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 50% 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🐢
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    TURTLE TREASURE
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Experience the magic of Odisha's coastline witness the endangered Olive sea turtles nesting along the serene shores, a rare spectacle.
                  </p>
                </div>
              </div>

              {/* Card 3: Tracking Fishing Cats */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/FishingCats.png" 
                    alt="Tracking Fishing Cats" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Fishing Cats image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#228b22',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 0 0 50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🐱
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    TRACKING FISHING CATS
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Join a boat safari through wetlands to spot elusive predators patrolling the banks or, with luck, hunting in action.
                  </p>
                </div>
              </div>

              {/* Card 4: Bouncing Blackbucks */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/Blackbuck.png" 
                    alt="Bouncing Blackbucks" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Blackbuck image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#8b4513',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 50% 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🦌
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    BOUNCING BLACKBUCKS
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Ride out in jeeps and spot these graceful and critically endangered creatures which have found refuge in the surrounding paddy fields.
                  </p>
                </div>
              </div>

              {/* 🔄 Duplicate set 1 for infinite loop effect */}
              {/* Card 1: Diving Dolphins */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/Dolphin.png" 
                    alt="Diving Dolphins" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Dolphin image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#87ceeb',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 50% 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🐬
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    DIVING DOLPHINS
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Endangered species of Irrawaddy dolphins can be spotted frolicking in Chilika Lake. Spot them happy in their habitat while you drift slowly in a boat.
                  </p>
                </div>
              </div>

              {/* Card 2: Turtle Treasure */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/Turtle.png" 
                    alt="Turtle Treasure" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Turtle image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#f4a460',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 50% 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🐢
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    TURTLE TREASURE
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Experience the magic of Odisha's coastline witness the endangered Olive sea turtles nesting along the serene shores, a rare spectacle.
                  </p>
                </div>
              </div>

              {/* Card 3: Tracking Fishing Cats */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/FishingCats.png" 
                    alt="Tracking Fishing Cats" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Fishing Cats image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#228b22',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 0 0 50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🐱
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    TRACKING FISHING CATS
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Join a boat safari through wetlands to spot elusive predators patrolling the banks or, with luck, hunting in action.
                  </p>
                </div>
              </div>

              {/* Card 4: Bouncing Blackbucks */}
              <div 
                className="wildlife-card"
                style={{ 
                  flex: '0 0 400px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flexShrink: 0,
                  scrollSnapAlign: 'center',
                  padding: '0 12px',
                  boxSizing: 'border-box',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                  <img 
                    src="/Blackbuck.png" 
                    alt="Bouncing Blackbucks" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback for Blackbuck image */}
                  <div style={{ 
                    display: 'none', 
                    width: '100%', 
                    height: '100%', 
                    backgroundColor: '#8b4513',
                    position: 'relative',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px'
                  }}>
                    <div style={{ 
                      width: '60%',
                      height: '40%',
                      backgroundColor: '#e5e7eb',
                      borderRadius: '50% 50% 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#9ca3af',
                      fontSize: '24px'
                    }}>
                      🦌
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600', 
                    color: '#000000', 
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    fontFamily: '"Montserrat", sans-serif'
                  }}>
                    BOUNCING BLACKBUCKS
                  </h3>
                  <p style={{ 
                    fontSize: '14px',
                    color: '#6b7280', 
                    lineHeight: '1.5',
                    fontFamily: '"Lato", sans-serif'
                  }}>
                    Ride out in jeeps and spot these graceful and critically endangered creatures which have found refuge in the surrounding paddy fields.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons positioned below the carousel */}
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '24px',
              gap: '32px'
            }}>
              {/* Prev Button */}
              <button
                onClick={() => {
                  const carousel = document.getElementById('wildlife-carousel');
                  if (carousel) {
                    const firstItem = carousel.querySelector('.wildlife-card') as HTMLElement;
                    if (firstItem) {
                      const itemWidth = firstItem.offsetWidth; // 👈 get card width with padding
                      carousel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
                    }
                  }
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  zIndex: 10
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={() => {
                  const carousel = document.getElementById('wildlife-carousel');
                  if (carousel) {
                    const firstItem = carousel.querySelector('.wildlife-card') as HTMLElement;
                    if (firstItem) {
                      const itemWidth = firstItem.offsetWidth; // 👈 same here
                      carousel.scrollBy({ left: itemWidth, behavior: 'smooth' });
                    }
                  }
                }}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  zIndex: 10
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Experiences Section */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: '#374151', 
              marginBottom: '24px', 
              textTransform: 'uppercase',
              fontFamily: '"Montserrat", sans-serif'
            }}>
              FEATURED EXPERIENCES
            </h2>
          </div>

          {/* Chilika Lake Cruise */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Image */}
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="/chilika.png" 
                alt="Chilika Lake Cruise" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxWidth: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'block';
                  }
                }}
              />
              {/* Fallback for Chilika image */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '400px',
                backgroundColor: '#f4a460',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '18px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Sunset gradient */}
                <div style={{ 
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #ff7f50, #ff6347, #ff4500)'
                }}></div>
                {/* Boat silhouette */}
                <div style={{ 
                  position: 'absolute',
                  bottom: '30%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '60px',
                  backgroundColor: '#2d1810',
                  borderRadius: '60px 60px 0 0'
                }}></div>
                {/* Sun */}
                <div style={{ 
                  position: 'absolute',
                  top: '20%',
                  right: '20%',
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ffd700',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px #ffd700'
                }}></div>
              </div>
            </div>

            {/* Content */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#374151', 
                marginBottom: '16px',
                textTransform: 'uppercase',
                fontFamily: '"Montserrat", sans-serif'
              }}>
                CHILIKA LAKE CRUISE
              </h3>
              <p style={{ 
                fontSize: '16px', 
                color: '#6b7280', 
                lineHeight: '1.8',
                fontFamily: '"Lato", sans-serif',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Asia's largest brackish water lagoon – travellers can visit the Chilika Lake for an introspective breakfast at sunrise, or an immersive and educative experience with wildlife. With over 150 species of birds, fishing cats prowling the coast and Irrawaddy dolphins bobbing in the shallow waters, the lake has plenty more to offer than mesmerising sunsets in the horizon.
              </p>
            </div>
          </div>
        </div>

        {/* Landscape Images Carousel */}
        <div style={{ marginBottom: '48px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {/* Landscape Carousel Cards - State-based Carousel */}
            <div 
              className="landscape-carousel-container"
              style={{ 
                display: 'flex', 
                gap: '0px',
                justifyContent: 'center',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                padding: '0 20px'
              }}
            >
              {/* Landscape Carousel Cards - State-based Carousel */}
              {(() => {
                const landscapeCarouselCards = [
                  {
                    image: '/img-1.png',
                    alt: 'Landscape View 1',
                    fallbackBg: '#22c55e',
                    fallbackGradient: 'linear-gradient(to bottom, #22c55e, #16a34a)',
                    fallbackPattern: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #15803d 2px, #15803d 4px)',
                    patternHeight: '30%',
                    patternType: 'grass'
                  },
                  {
                    image: '/img-2.png',
                    alt: 'Landscape View 2',
                    fallbackBg: '#0ea5e9',
                    fallbackGradient: 'linear-gradient(to bottom, #0ea5e9, #0284c7)',
                    fallbackPattern: 'linear-gradient(to bottom, #0ea5e9, #0284c7)',
                    patternHeight: '40%',
                    patternType: 'water'
                  },
                  {
                    image: '/img-3.png',
                    alt: 'Landscape View 3',
                    fallbackBg: '#1e293b',
                    fallbackGradient: 'linear-gradient(to bottom, #1e293b, #0f172a)',
                    fallbackPattern: 'radial-gradient(ellipse at center, #334155 0%, #1e293b 70%)',
                    patternHeight: '50%',
                    patternType: 'foliage'
                  },
                  {
                    image: '/img-4.png',
                    alt: 'Landscape View 4',
                    fallbackBg: '#059669',
                    fallbackGradient: 'linear-gradient(to bottom, #059669, #047857)',
                    fallbackPattern: 'radial-gradient(ellipse at center, #10b981 0%, #059669 70%)',
                    patternHeight: '60%',
                    patternType: 'forest'
                  },
                  {
                    image: '/img-5.png',
                    alt: 'Landscape View 5',
                    fallbackBg: '#7c3aed',
                    fallbackGradient: 'linear-gradient(to bottom, #7c3aed, #6d28d9)',
                    fallbackPattern: 'radial-gradient(ellipse at center, #8b5cf6 0%, #7c3aed 70%)',
                    patternHeight: '50%',
                    patternType: 'mountain'
                  },
                  {
                    image: '/img-6.png',
                    alt: 'Landscape View 6',
                    fallbackBg: '#dc2626',
                    fallbackGradient: 'linear-gradient(to bottom, #dc2626, #b91c1c)',
                    fallbackPattern: 'radial-gradient(ellipse at center, #ef4444 0%, #dc2626 70%)',
                    patternHeight: '40%',
                    patternType: 'sunset'
                  }
                ];

                // Create infinite loop by duplicating cards
                const extendedLandscapeCards = [...landscapeCarouselCards, ...landscapeCarouselCards, ...landscapeCarouselCards];
                const startIndex = landscapeCarouselCards.length + landscapeCarouselCurrentIndex;
                const visibleLandscapeCards = extendedLandscapeCards.slice(startIndex, startIndex + 3);

                return visibleLandscapeCards.map((card, index) => (
                  <div key={`${card.alt}-${startIndex + index}`} style={{ 
                    minWidth: '844px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0,
                    scrollSnapAlign: 'center',
                    marginRight: '-50px',
                    opacity: 0.8,
                    transform: 'scale(0.8)',
                    transition: 'all 0.3s ease-in-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                    e.currentTarget.style.transform = 'scale(0.8)';
                  }}
                  >
                    {/* Image */}
                    <div style={{ position: 'relative', width: '100%', height: '462px' }}>
                      <img 
                        src={card.image} 
                        alt={card.alt} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const nextSibling = target.nextSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback design if image fails to load */}
                      <div style={{ 
                        display: 'none', 
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: card.fallbackBg,
                        position: 'relative',
                        overflow: 'hidden',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <div style={{ 
                          width: '100%',
                          height: '100%',
                          background: card.fallbackGradient,
                          position: 'relative'
                        }}>
                          {/* Dynamic pattern based on card type */}
                          <div style={{ 
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            width: '100%',
                            height: card.patternHeight,
                            background: card.fallbackPattern
                          }}></div>
                          {/* Special elements for specific cards */}
                          {card.patternType === 'water' && (
                            <div style={{ 
                              position: 'absolute',
                              bottom: '40%',
                              left: '20%',
                              width: '60%',
                              height: '30%',
                              backgroundColor: '#16a34a',
                              borderRadius: '50% 50% 0 0'
                            }}></div>
                          )}
                          {card.patternType === 'foliage' && (
                            <div style={{ 
                              position: 'absolute',
                              bottom: '20%',
                              right: '20%',
                              width: '80px',
                              height: '40px',
                              backgroundColor: '#475569',
                              borderRadius: '40px 40px 0 0'
                            }}></div>
                          )}
                          {card.patternType === 'sunset' && (
                            <div style={{ 
                              position: 'absolute',
                              top: '20%',
                              right: '20%',
                              width: '60px',
                              height: '60px',
                              backgroundColor: '#fbbf24',
                              borderRadius: '50%',
                              boxShadow: '0 0 20px #fbbf24'
                            }}></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Simple Navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px', 
              marginTop: '32px' 
            }}>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setLandscapeCarouselCurrentIndex(prev => {
                    const newIndex = prev - 1;
                    // Handle infinite loop - when going below 0, wrap to the end
                    return newIndex < 0 ? 5 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setLandscapeCarouselCurrentIndex(prev => {
                    const newIndex = prev + 1;
                    // Handle infinite loop - when going above 5, wrap to 0
                    return newIndex > 5 ? 0 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Back to Experiences Button */}
        
      </div>
    </>
  );

  const [diningCurrentIndex, setDiningCurrentIndex] = useState(0);
  const [diningExperiencesCurrentIndex, setDiningExperiencesCurrentIndex] = useState(0);
  const [foodCarouselCurrentIndex, setFoodCarouselCurrentIndex] = useState(0);

  const renderDiningPage = () => {
    // Define dining cards data
    const diningCards = [
      {
        title: 'POOL CAFE',
        image: './image-16.png',
        description: 'Enjoy a post-swim mocktail or light bite by the pool. With lounge chairs you sink into, tall column windows, and a wood-fired pizza oven, the pool café is ideal to delight in fresh food and drinks.'
      },
      {
        title: 'THE DINING ROOM',
        image: './image-17.png',
        description: 'Feast like royalty and relish each morsel like discerning connoisseurs in the same room where lavish spreads have been laid out for over 200 years. A regal space with high ceilings adorned with chandeliers.'
      },
      {
        title: 'THE BAR',
        image: './image-18.png',
        description: 'An art deco inspired chic bar perfect for midnight conversations, or a morning mimosa. Sommeliers guide guests through exclusive wine tastings and bartenders craft exclusive cocktails to suit your flavour palette.'
      }
    ];

    // Define dining experiences cards data
    const diningExperiencesCards = [
      {
        title: 'Orchard Feast',
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2025/01/OrchardFeast.png',
        description: 'An outdoor celebration of flavour & food - feast in the palace gardens with an elegant tablescape. Candle lit starry nights or bright Sunday brunches; the orchard offers it all.'
      },
      {
        title: 'Palace Garden High Tea',
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2025/01/image-45.png',
        description: 'Delight in high tea while gazing at lush greenery and serene palace fountains, an enchanting experience that transports you to the grandeur and timeless splendor of a magnificent bygone era.'
      },
      {
        title: 'Breakfast on Island',
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2025/01/image-46.png',
        description: 'Set sail from the banks of Chilika Lake and cruise through calming waters. Enjoy breakfast aboard the boat, or step onto the island for a refreshing morning trail.'
      },
      {
        title: 'Romantic Beach Getaway',
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2025/01/pixelcut-export.png',
        description: 'Allow the palace butlers to orchestrate a candlelit feast by the lake. Relish a sumptuous banquet of your preferred cuisine, while the gentle whispers of waves caress the shore.'
      }
    ];

    // Create infinite loop effect by duplicating cards
    const extendedCards = [...diningCards, ...diningCards, ...diningCards];
    const startIndex = diningCards.length + diningCurrentIndex;
    const visibleCards = extendedCards.slice(startIndex, startIndex + 3);

    // Create infinite loop effect for dining experiences
    const extendedExperiencesCards = [...diningExperiencesCards, ...diningExperiencesCards, ...diningExperiencesCards];
    const experiencesStartIndex = diningExperiencesCards.length + diningExperiencesCurrentIndex;
    const visibleExperiencesCards = extendedExperiencesCards.slice(experiencesStartIndex, experiencesStartIndex + 4);

    // Define food carousel cards data
    const foodCarouselCards = [
      {
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/image-3.png'
      },
      {
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/12-2-768x462.png'
      },
      {
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/7-1-768x462.png'
      },
      {
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/10-1-768x462.png'
      },
      {
        image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/9-1-768x462.png'
      }
    ];

    // Create infinite loop effect for food carousel
    const extendedFoodCarouselCards = [...foodCarouselCards, ...foodCarouselCards, ...foodCarouselCards];
    const foodCarouselStartIndex = foodCarouselCards.length + foodCarouselCurrentIndex;
    const visibleFoodCarouselCards = extendedFoodCarouselCards.slice(foodCarouselStartIndex, foodCarouselStartIndex + 5);

    return (
      <>
        {/* Main Content Area */}
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Dining Room Image */}
          <div style={{ marginBottom: '48px' }}>
            <img 
              src="./image-15.png" 
              alt="Luxurious Dining Room at Rambha Palace" 
              style={{ 
                width: '1024px', 
                height: 'auto', 
                margin: '0 auto',
                maxWidth: '100%',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const nextSibling = target.nextSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'block';
                }
              }}
            />
            {/* Fallback design if image fails to load */}
            <div style={{
              display: 'none',
              width: '100%',
              height: '500px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6b7280',
              fontSize: '18px'
            }}>
              Dining Room Image
            </div>
          </div>

          {/* Text Content */}
          <div style={{ 
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              fontFamily: '"Montserrat", sans-serif',
              color: '#000000',
              lineHeight: '29.26px',
              marginBottom: '16px', 
              textAlign: 'left',
              textTransform: 'uppercase',
              marginLeft: '128px'
            }}>
              CULINARY JOURNEY FROM WEST TO EAST
            </h2>
            <p style={{ 
             color: '#374151', 
            //  lineHeight: '1.6', 
             fontSize: '16px',
             textAlign: 'center',
             maxWidth: '1200px',
             margin: '0 auto',
             fontFamily: 'Montserrat, sans-serif'
            }}>
             Rambha Palace serves the finest meals on the Eastern coast of India – inventive and delectable. Experience delicacies from across regions and fresh produce across seasons. Exemplifying the orchard and sea-to-table philosophy, a team of exceptionally talented chefs take you on a culinary sojourn across the globe, offering Seven cuisines from the East to the West. Savour the impeccably laid out food in the same dining room that has hosted centuries of royalty.
            </p>
          </div>

          {/* Dining Establishments Section */}
          <div style={{ marginTop: '64px' }}>
            {/* Cards Container with Scroll */}
            <div style={{ 
              position: 'relative',
              // maxWidth: '100%',
              maxWidth: '1200px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              {/* Left Arrow */}
              <button 
                onClick={() => {
                  setDiningCurrentIndex(prev => {
                    const newIndex = prev - 1;
                    // Handle infinite loop - when going below 0, wrap to the end
                    return newIndex < 0 ? 2 : newIndex;
                  });
                }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '',
                  border: '1px solid #2C3E50',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  flexShrink: 0
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Cards */}
              <div 
                className="dining-cards-container"
                style={{ 
                  display: 'flex', 
                  gap: '24px',
                  overflowX: 'auto',
                  scrollBehavior: 'smooth',
                  scrollbarWidth: 'none', // Hide scrollbar for Firefox
                  msOverflowStyle: 'none', // Hide scrollbar for IE/Edge
                  WebkitOverflowScrolling: 'touch',
                  scrollSnapType: 'x mandatory',
                  flex: 1
                }}
              >
                {visibleCards.map((card, index) => (
                  <div 
                    key={`${card.title}-${startIndex + index}`}
                    style={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px', 
                      overflow: 'hidden', 
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      minWidth: '350px',
                      flex: '1',
                      scrollSnapAlign: 'start'
                    }}
                  >
                    <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img 
                        src={card.image} 
                        alt={`${card.title} at Rambha Palace`} 
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const nextSibling = target.nextSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback design if image fails to load */}
                      <div style={{ 
                        display: 'none', 
                        width: '100%', 
                        height: '100%', 
                        backgroundColor: '#87ceeb',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Pool */}
                        <div style={{ 
                          position: 'absolute', 
                          top: '30%', 
                          left: '20%',
                          width: '60%',
                          height: '40%',
                          backgroundColor: '#1e90ff',
                          borderRadius: '8px'
                        }}></div>
                        {/* Lounge chairs */}
                        <div style={{ 
                          position: 'absolute', 
                          bottom: '20%', 
                          right: '20%',
                          width: '20%',
                          height: '15%',
                          backgroundColor: '#ffffff',
                          borderRadius: '4px'
                        }}></div>
                      </div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#374151', marginBottom: '12px', textTransform: 'uppercase' }}>{card.title}</h3>
                      <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button 
                onClick={() => {
                  setDiningCurrentIndex(prev => {
                    const newIndex = prev + 1;
                    // Handle infinite loop - when going above 2, wrap to 0
                    return newIndex > 2 ? 0 : newIndex;
                  });
                }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '',
                  border: '1px solid #2C3E50',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  flexShrink: 0
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        {/* Food Carousel Section */}
        <div style={{ marginTop: '256px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            {/* Left Arrow */}
            <button 
              onClick={() => {
                setFoodCarouselCurrentIndex(prev => {
                  const newIndex = prev - 1;
                  // Handle infinite loop - when going below 0, wrap to the end
                  return newIndex < 0 ? 4 : newIndex;
                });
              }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #2C3E50',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                flexShrink: 0
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Food Images Container */}
            <div 
              className="food-carousel-container"
              style={{ 
                display: 'flex', 
                gap: '24px',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                alignItems: 'center',
                flex: 1
              }}
            >
              {visibleFoodCarouselCards.map((card, index) => (
                <div 
                  key={`food-${foodCarouselStartIndex + index}`}
                  style={{ 
                    minWidth: '700px', 
                    height: '400px', 
                    flex: '0 0 auto', 
                    borderRadius: '8px', 
                    overflow: 'hidden' 
                  }}
                >
                  <img 
                    src={card.image} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }} 
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => {
                setFoodCarouselCurrentIndex(prev => {
                  const newIndex = prev + 1;
                  // Handle infinite loop - when going above 4, wrap to 0
                  return newIndex > 4 ? 0 : newIndex;
                });
              }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #2C3E50',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                flexShrink: 0
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Dining Experiences Section */}
        <div style={{ marginTop: '192px' }}>
          {/* Section Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#000000', 
              marginBottom: '16px',
              lineHeight: '29.26px',
              fontFamily: 'Montserrat, sans-serif',
              textTransform: 'uppercase'
            }}>
              DINING EXPERIENCES
            </h2>
          </div>

          {/* Dining Experiences Carousel */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            {/* Left Arrow */}
            <button 
              onClick={() => {
                setDiningExperiencesCurrentIndex(prev => {
                  const newIndex = prev - 1;
                  // Handle infinite loop - when going below 0, wrap to the end
                  return newIndex < 0 ? 3 : newIndex;
                });
              }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '',
                border: '1px solid #2C3E50',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                flexShrink: 0
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div 
              className="dining-experiences-container"
              style={{ 
                display: 'flex', 
                gap: '24px',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                flex: 1
              }}
            >
              {visibleExperiencesCards.map((card, index) => (
                <div 
                  key={`${card.title}-${experiencesStartIndex + index}`}
                  style={{ 
                    minWidth: '331px',
                    width: '331px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    flex: '0 0 auto'
                  }}
                >
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'block';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{
                      display: 'none',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '8px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b7280',
                      fontSize: '14px'
                    }}>
                      {card.title}
                    </div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '500', color: '#000000',fontFamily:'Montserrat, sans-serif', marginBottom: '12px', lineHeight: '19.5px' }}>{card.title}</h3>
                    <p style={{ color: '#3A3A3A', fontFamily:'Lato, sans-serif',lineHeight: '24px', fontSize: '14px', fontWeight: '500' }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => {
                setDiningExperiencesCurrentIndex(prev => {
                  const newIndex = prev + 1;
                  // Handle infinite loop - when going above 3, wrap to 0
                  return newIndex > 3 ? 0 : newIndex;
                });
              }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '',
                border: '1px solid #2C3E50',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                flexShrink: 0
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#2C3E50" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/*  Section */}
        <div style={{ marginTop: '128px' }}>
          {/* Section Title */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              color: '#374151', 
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              FEATURED EXPERIENCES
            </h2>
          </div>

          {/* Featured Experience Carousel */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {/* Carousel Container */}
            <div 
              className="featured-experiences-container"
              style={{ 
                display: 'flex', 
                gap: '0',
                padding: '0 80px',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Featured Experience Card */}
              <div style={{ 
                minWidth: '100%',
                width: '100%',
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                flex: '0 0 auto'
              }}>
                {/* Large Image */}
                <div style={{ height: '400px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/RoyalOdiaCuisine-1-qyb3qauvvmxdgvtzg6byh5o6u0t6w8wf0o8cjb5c34.png" 
                    alt="Royal Odia Cuisine" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  {/* Fallback design if image fails to load */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '8px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    fontSize: '18px'
                  }}>
                    Royal Odia Cuisine
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '32px' }}>
                  <h3 style={{ 
                    fontSize: '24px', 
                    fontWeight: 'bold', 
                    color: '#374151', 
                    marginBottom: '16px',
                    textAlign: 'center'
                  }}>
                    Royal Odia Cuisine
                  </h3>
                  <p style={{ 
                    color: '#374151', 
                    lineHeight: '1.8', 
                    fontSize: '16px',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto'
                  }}>
                    Royal Odia Cuisine is known for balancing deep flavours with astounding simplicity. Relish rice as the staple grain, and a prominent blend of five key spices – mustard, cumin, fenugreek, nigella, and fennel. Seafood, lentils, and vegetables cooked in classic Odia style are prepared with recipes which were lost for decades and then found in the palace kitchens. We celebrate Odisha's fragrant, colourful cuisines and culinary heritage in its most authentic form.
                  </p>
                </div>
              </div>
            </div>

            {/* Left Arrow */}
     
          </div>
        </div>

        {/* Culinary Community Section */}
        <div style={{ 
         marginTop: '128px',
         backgroundColor: '#ebc9c4', // Light beige background
         padding: '70px 0',
         position: 'relative',
         width: '100vw',       // ✅ force full screen width
         left: '50%',
         right: '50%',
         marginLeft: '-50vw',  // ✅ remove body margin constraints
         marginRight: '-50vw'
        }}>
          {/* Container */}
          <div style={{ 
            width: '100%',       // ✅ stretch full width
            margin: '0 auto', 
            padding: '0 80px',   // ✅ you can increase/decrease side padding
            position: 'relative',
            boxSizing: 'border-box'
          }}>
            {/* Pink Content Block */}
            <div style={{ 
              // backgroundColor: '#fdf2f8', // Light pink background
              borderRadius: '12px',
              padding: '60px',
              maxWidth: '100%',
              marginLeft: '0',
              // boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              overflow: 'hidden'
            }}>
              {/* Left Content */}
              <div style={{ flex: '1', maxWidth: '400px' }}>
                {/* Small heading */}
                <p style={{ 
                  fontSize: '16px', 
                  color: '#F1ECF5', 
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: '400',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  Seasonal and Local ingredients from
                </p>
                
                {/* Main heading */}
                <h2 style={{ 
                  fontFamily: '"Montserrat", sans-serif',
                  fontSize: '24px', 
                  fontWeight: '600', 
                  color: '#000000', 
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  lineHeight: '1.2'
                }}>
                  THE CULINARY COMMUNITY
                </h2>
                
                {/* Description text */}
                <div style={{ 
                  width: '100%', 
                  maxWidth: '369px',
                  opacity: 1
                }}>
                  <p style={{ 
                    fontFamily: 'Lato, sans-serif',
                    fontSize: '14px', 
                    fontWeight: '500', 
                    lineHeight: '24px', 
                    textAlign: 'justify',
                    color: '#7A7A7A'
                  }}>
                    Expertly weaving a tapestry of rich flavors, our skilled chefs present an array of cuisines infused with their unique flair. With a deep understanding of the nuances of textures, spices, and seasonal produce, each dish is crafted and presented to deliver an elevated culinary experience.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className='ml-12' style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                <div style={{ 
                  width: '600px', 
                  height: '450px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src="https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/DiningConcept.png" 
                    alt="Culinary Community" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback design if image fails to load */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '8px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    fontSize: '18px',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Culinary Community</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* People behind Hidden India Section */}
        <div style={{ 
          marginTop: '128px',
          // backgroundColor: '#ebc9c4', // Light beige background
          padding: '80px 0',
          position: 'relative'
        }}>
          {/* Container */}
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '64px'
          }}>
            {/* Left Content */}
            <div style={{ flex: '1', maxWidth: '500px' }}>
              {/* Main heading */}
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: '600',
                fontFamily: '"Montserrat", sans-serif',
                color: '#000000', 
                marginBottom: '24px',
                lineHeight: '1.2',
                textTransform: 'uppercase'
              }}>
                DISCOVER THE CULINARY MASTERY OF OUR TALENTED CHEFS
              </h2>
              
              {/* Description text */}
              <p style={{ 
                fontSize: '12px', 
                color: '#3A3A3A',
                fontFamily: '"Lato", sans-serif',
                lineHeight: '1.6',
                marginBottom: '32px'
              }}>
                Local chefs proudly showcase Odissi cuisine, which is born from decades of appreciation for homegrown produce and culinary traditions.
              </p>
            </div>

            {/* Right Images - Three Chef Cards */}
            <div style={{ 
              flex: '1', 
              display: 'flex', 
              gap: '24px',
              justifyContent: 'center'
            }}>
              {/* First Chef Card */}
              <div style={{ 
                width: '200px', 
                height: '300px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Component-52-3-qyb3q49qn987hs17lhg2g6gydqmskiiq4aw37fwh8e.png" 
                  alt="Chef 1" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback design if image fails to load */}
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  fontSize: '16px',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Chef 1</span>
                </div>
              </div>

              {/* Second Chef Card */}
              <div style={{ 
                width: '200px', 
                height: '300px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Component-53-qxgwn1eairccagcym62wgd76ggrhewjz52r3dcuqgu-1-qyb3q65cjwdz3qeaxjmc7r34g0og7ebdpzu5zusxa6.png" 
                  alt="Chef 2" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback design if image fails to load */}
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  fontSize: '16px',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Chef 2</span>
                </div>
              </div>

              {/* Third Chef Card */}
              <div style={{ 
                width: '200px', 
                height: '300px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/chef-qyb3qbsdowlp1e640m23mpnw0bwnhkxrqrr2vikk8u.png" 
                  alt="Chef 3" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback design if image fails to load */}
                <div style={{
                  display: 'none',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '12px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#6b7280',
                  fontSize: '16px',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Chef 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  };

  const renderContactPage = () => (
    <>
      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#374151', marginBottom: '16px' }}>Contact Us</h1>
        <p style={{ 
          color: '#6b7280', 
          fontSize: '16px', 
          lineHeight: '1.6',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          From the moment you dream of your stay to the time you arrive, we're here to make every detail seamless and unforgettable. You envision and we're ready to bring it to life and guide you along every step of your journey.
        </p>
      </div>

      {/* Hidden India Central Reservations */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '64px',
        padding: '48px 24px'
      }}>
        <h2 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          color: '#374151', 
          marginBottom: '24px',
          textTransform: 'uppercase'
        }}>
          Hidden India Central Reservations
        </h2>
        <p style={{ 
          color: '#6b7280', 
          fontSize: '16px', 
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '0 auto 24px auto'
        }}>
          Our central reservations team is available 24 hours a day, 7 days a week, to assist with travel planning, multi-destination itineraries, restaurants, or wellness sessions.
        </p>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '8px',
            color: '#374151',
            fontSize: '16px'
          }}>
            <span style={{ fontWeight: 'bold' }}>Email:</span>
            <a href="mailto:reservations@hiddenindia.com" style={{ color: '#d97706', textDecoration: 'none' }}>
              reservations@hiddenindia.com
            </a>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '8px',
            color: '#374151',
            fontSize: '16px'
          }}>
            <span style={{ fontWeight: 'bold' }}>Tel:</span>
            <a href="tel:+917800208002" style={{ color: '#d97706', textDecoration: 'none' }}>
              +91 7800 208 002
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto',
        padding: '48px'
      }}>
        <form style={{ display: 'grid', gap: '24px' }}>
          {/* First Row - Title and Name */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
            {/* Title */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500', 
                color: '#374151',
                fontSize: '14px'
              }}>
                Title
              </label>
              <select style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #d1d5db', 
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }}>
                <option value="">Select Title</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
                <option value="dr">Dr.</option>
              </select>
            </div>

            {/* First Name */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500', 
                color: '#374151',
                fontSize: '14px'
              }}>
                First Name
              </label>
              <input 
                type="text" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500', 
                color: '#374151',
                fontSize: '14px'
              }}>
                Last Name
              </label>
              <input 
                type="text" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Second Row - Email and Phone */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Email */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500', 
                color: '#374151',
                fontSize: '14px'
              }}>
                Email
              </label>
              <input 
                type="email" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500', 
                color: '#374151',
                fontSize: '14px'
              }}>
                Phone
              </label>
              <input 
                type="tel" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Third Row - Country/Region and Enquiry Type */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* Country/Region */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500', 
                color: '#374151',
                fontSize: '14px'
              }}>
                Country/Region
              </label>
              <input 
                type="text" 
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  border: '1px solid #d1d5db', 
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
                placeholder="Enter your country or region"
              />
            </div>

            {/* Enquiry Type */}
            <div>
              <label style={{ 
                display: 'block', 
                marginBottom: '8px', 
                fontWeight: '500', 
                color: '#374151',
                fontSize: '14px'
              }}>
                Enquiry Type
              </label>
              <select style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #d1d5db', 
                borderRadius: '6px',
                fontSize: '14px',
                backgroundColor: 'white'
              }}>
                <option value="">Select Enquiry Type</option>
                <option value="stay">Stay</option>
                <option value="dining">Dining</option>
                <option value="wellness">Wellness</option>
                <option value="buy-outs">Buy-Outs</option>
                <option value="experiences">Experiences</option>
                <option value="media and collaborations">Media and Collaborations</option>
                <option value="celebrations and events trade">Celebrations and Events Trade</option>
                <option value="other">Other</option>
                
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '500', 
              color: '#374151',
              fontSize: '14px'
            }}>
              Message
            </label>
            <textarea 
              rows={6}
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #d1d5db', 
                borderRadius: '6px',
                fontSize: '14px',
                resize: 'vertical',
                fontFamily: 'inherit'
              }}
              placeholder="Enter your message here..."
            />
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button 
              type="submit"
              style={{ 
                backgroundColor: '#6b7280', 
                color: 'white', 
                padding: '12px 32px', 
                border: 'none', 
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#4b5563';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#6b7280';
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Footer Section */}
      <div style={{ 
        marginTop: '64px',
        padding: '48px 24px',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Left Column - Contact Info */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              color: '#3C3C3C',
              fontFamily: '"Lato", sans-serif',
              fontSize: '16px',
              // fontWeight: '600',
              marginBottom: '8px'
            }}>
              Hidden India Rambha Palace
            </div>
            <div style={{ 
              color: '#7A7A7A',
              fontSize: '14px',
              fontFamily: '"Lato", sans-serif',
              // fontWeight: '400',
              lineHeight: '1.6'
            }}>
              rambhapalace@hiddenindia.com
            </div>
          </div>

          {/* Middle Column - Address */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              color: '#3C3C3C',
              font: '14px"Lato", sans-serif',
              lineHeight: '1.6',
              marginBottom: '8px'
            }}>
              Tehsil, PS, Rambha, Khallikot, Odisha, India, 761030.
            </div>
            <div style={{ 
              color: '#7A7A7A',
              fontSize: '14px',
              fontWeight: '400',
              cursor: 'pointer'
            }}>
              Get Directions
            </div>
          </div>

          <IconContainer/>
        </div>
      </div>
    </>
  );

  const renderPalaceSuitePage = () => (
    <>

      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '200', fontFamily: '"Montserrat", sans-serif', color: '#000000', marginBottom: '16px' }}>Palace Suite</h1>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        backgroundColor: 'rgb(241,236,229)',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Rambha Villa', 'Palace Suite', 'Palace Family Suite', 'Generator Suite', 'Ice Mill Suite', 'Printing Press Suite'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'Overview') {
                  setCurrentPage('accommodation');
                  setActiveTab('overview');
                } else if (tab === 'Rambha Villa') {
                  setCurrentPage('accommodation');
                  setActiveTab('rambha-villa');
                } else if (tab === 'Palace Suite') {
                  setPalaceSuiteTab('palace-suite');
                } else if (tab === 'Palace Family Suite') {
                  setCurrentPage('palace-family-suite');
                  setPalaceSuiteTab('palace-family-suite');
                } else if (tab === 'Generator Suite') {
                  setCurrentPage('generator-suite');
                  setPalaceSuiteTab('generator-suite');
                } else if (tab === 'Ice Mill Suite') {
                  setCurrentPage('ice-mill-suite');
                  setPalaceSuiteTab('ice-mill-suite');
                } else if (tab === 'Printing Press Suite') {
                  setCurrentPage('printing-press-suite');
                  setPalaceSuiteTab('printing-press-suite');
                } else {
                  setPalaceSuiteTab(tab.toLowerCase().replace(' ', '-'));
                }
              }}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Large Room Image */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ aspectRatio: '16/10', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/image-60.webp" 
                alt="Palace Suite" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback room design if image doesn't load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Four-poster bed */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '40%',
                  backgroundColor: '#ffffff',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Bed posts */}
                  <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                </div>
                
                {/* Green sofa */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  left: '10%',
                  width: '25%',
                  height: '15%',
                  backgroundColor: '#228b22',
                  borderRadius: '8px 8px 0 0'
                }}></div>
                
                {/* Window */}
                <div style={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%',
                  width: '20%',
                  height: '30%',
                  backgroundColor: '#87ceeb',
                  border: '2px solid #d1d5db'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* PALACE SUITE Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000', marginBottom: '24px', fontFamily: '"Montserrat", sans-serif' }}>PALACE SUITE</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#3A3A3A', lineHeight: '1.8', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
            <p style={{ marginBottom: '16px' }}>
              The Palace Suites are individually designed within the original palace block, reflecting the regal charm of the era with authentic vintage Odia handicrafts. Each suite boasts a king-size four-poster bed with sumptuous crested linen, offering the perfect blend of luxury and comfort.
            </p>
            <p style={{ marginBottom: '16px' }}>
              The suites feature an ante room with picture windows that overlook the serene palace gardens, while the marble-clad bathrooms come with a spacious bathtub. Additionally, a dedicated palace butler service ensures that every guest's needs are met with the highest level of care.
            </p>
            <p>
              Experience the luxury and grandeur of the palace block, once home to the royal family in a bygone era.
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: 'transparent', 
            color: '#000000', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            // e.currentTarget.style.backgroundColor = '#000000';
            // e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            // e.currentTarget.style.backgroundColor = 'transparent';
            // e.currentTarget.style.color = '#000000';
          }}>
            Floor Plan
          </button>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: '#000000', 
            color: '#ffffff', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}>
            Check Rates
          </button>
        </div>

        {/* Image Carousel */}
        <div style={{ marginBottom: '48px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {/* Palace Suite Carousel Images - State-based Carousel */}
            <div 
              className="palace-suite-carousel-container"
              style={{ 
                display: 'flex', 
                gap: '16px',
                justifyContent: 'center',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                padding: '0 20px'
              }}
            >
              {/* Palace Suite Carousel Cards - State-based Carousel */}
              {(() => {
                const palaceSuiteCarouselCards = [
                  {
                    image: '/image-70.png',
                    alt: 'Palace Suite Bedroom',
                    fallback: '🛏️'
                  },
                  {
                    image: '/image-71.png',
                    alt: 'Palace Suite Bathroom',
                    fallback: '🛁'
                  },
                  {
                    image: '/image-73.png',
                    alt: 'Palace Suite Bathroom Detail',
                    fallback: '🧴'
                  },
                  {
                    image: '/image-74.png',
                    alt: 'Palace Suite Additional View',
                    fallback: '🏰'
                  }
                ];

                // Create infinite loop by duplicating cards
                const extendedPalaceSuiteCards = [...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards];
                const startIndex = palaceSuiteCarouselCards.length + palaceSuiteCarouselCurrentIndex;
                const visiblePalaceSuiteCards = extendedPalaceSuiteCards.slice(startIndex, startIndex + 3);

                return visiblePalaceSuiteCards.map((card, index) => (
                  <div key={`${card.alt}-${startIndex + index}`} style={{ 
                    minWidth: '280px',
                    position: 'relative', 
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0,
                    scrollSnapAlign: 'start'
                  }}>
                    <img 
                      src={card.image} 
                      alt={card.alt} 
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '250px', 
                      backgroundColor: '#f8f9fa',
                      position: 'relative',
                      overflow: 'hidden',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ 
                        width: '60%',
                        height: '40%',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9ca3af',
                        fontSize: '24px'
                      }}>
                        {card.fallback}
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Simple Navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px', 
              marginTop: '32px' 
            }}>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev - 1;
                    // Handle infinite loop - when going below 0, wrap to the end
                    return newIndex < 0 ? 3 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev + 1;
                    // Handle infinite loop - when going above 3, wrap to 0
                    return newIndex > 3 ? 0 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

{/* AMENITIES Section */}
<div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>AMENITIES</h2>
          </div>

          {/* Key Amenities Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* 1 ANTE ROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>1 ANTE ROOM</span>
            </div>

            {/* 2 EN SUITE BATHROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛁
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>2 EN SUITE BATHROOM</span>
            </div>

            {/* PALACE GARDEN VIEW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🏔️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>PALACE GARDEN VIEW</span>
            </div>

            {/* 1 KING BED */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>1 KING BED</span>
            </div>

            {/* 591 Sq. Ft. */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                ⬜
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>591 Sq. Ft.</span>
            </div>

            {/* DESIGNED BY CHANNA DASWATTE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🏰
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>DESIGNED BY CHANNA DASWATTE</span>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{ 
            height: '1px', 
            backgroundColor: '#e5e7eb', 
            marginBottom: '24px' 
          }}></div>

          {/* ROOM FEATURES Section */}
          <div>
            

            {/* Expandable Categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* ROOM FEATURES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsRoomFeaturesExpanded(!isRoomFeaturesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>ROOM FEATURES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isRoomFeaturesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Room Features Content */}
              {isRoomFeaturesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Nespresso Coffee Machine</div>
                    <div>Tea and Coffee Menu</div>
                    <div>In Room Safe</div>
                    <div>Generously Stocked Refrigerators</div>
                    <div>Down Duvets and Pillows</div>
                    <div>Pillow Menu</div>
                    <div>Clothes Steamer</div>
                  </div>
                </div>
              )}

              {/* BATH Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsBathExpanded(!isBathExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>BATH</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isBathExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Bath Content */}
              {isBathExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Standalone Bathtub</div>
                    <div>Dyson Hairdryer</div>
                    <div>Indulgent Bathrobes</div>
                    <div>Weighing Scale</div>
                    <div>Premium Toiletries</div>
                  </div>
                </div>
              )}

              {/* TECHNOLOGY Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsTechnologyExpanded(!isTechnologyExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>TECHNOLOGY</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isTechnologyExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Technology Content */}
              {isTechnologyExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Wifi</div>
                    <div>65 Inch Smart TV</div>
                    <div>Bang and Olufsen Speaker</div>
                    <div>Cordless Telephone</div>
                  </div>
                </div>
              )}

              {/* SERVICES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>SERVICES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isServicesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Services Content */}
              {isServicesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Palace Butler Service</div>
                    <div>24 Hour In-Room Dining</div>
                    <div>Complimentary Laundry</div>
                    <div>Concierge Services</div>
                    <div>Twice Daily House-keeping Service</div>
                    <div>Babysitter</div>
                    <div>In-house Doctor on Call</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* OTHER SUITES Section */}
        <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>OTHER SUITES</h2>
          </div>

          {/* Suites Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '32px'
          }}>
            {/* GENERATOR SUITES */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('generator-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-75.png" 
                  alt="Generator Suites" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Generator Suites image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    🏭
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  GENERATOR SUITES
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  Once the heart of the royal palace's power generation, these suites have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs.
                </p>
              </div>
            </div>

            {/* FAMILY PALACE SUITE */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('palace-family-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-76.png" 
                  alt="Family Palace Suite" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Family Palace Suite image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    👨‍👩‍👧‍👦
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  FAMILY PALACE SUITE
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  A fusion of two palace suites, featuring a spacious lounge- an expansive, lush private retreat perfect for families and added privacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Accommodation Button */}
        
        </div>
    </>
  );

  const renderPalaceFamilySuitePage = () => (
    <>
      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '200', fontFamily: '"Montserrat", sans-serif', color: '#000000', marginBottom: '16px' }}>Palace Family Suite</h1>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        backgroundColor: 'rgb(241,236,229)',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Rambha Villa', 'Palace Suite', 'Palace Family Suite', 'Generator Suite', 'Ice Mill Suite', 'Printing Press Suite'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'Overview') {
                  setCurrentPage('accommodation');
                  setActiveTab('overview');
                } else if (tab === 'Rambha Villa') {
                  setCurrentPage('accommodation');
                  setActiveTab('rambha-villa');
                } else if (tab === 'Palace Suite') {
                  setCurrentPage('palace-suite');
                  setPalaceSuiteTab('palace-suite');
                } else if (tab === 'Palace Family Suite') {
                  setCurrentPage('palace-family-suite');
                  setPalaceSuiteTab('palace-family-suite');
                } else if (tab === 'Generator Suite') {
                  setCurrentPage('generator-suite');
                  setPalaceSuiteTab('generator-suite');
                } else if (tab === 'Ice Mill Suite') {
                  setCurrentPage('ice-mill-suite');
                  setPalaceSuiteTab('ice-mill-suite');
                } else if (tab === 'Printing Press Suite') {
                  setCurrentPage('printing-press-suite');
                  setPalaceSuiteTab('printing-press-suite');
                } else {
                  setPalaceSuiteTab(tab.toLowerCase().replace(' ', '-'));
                }
              }}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Large Room Image */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ aspectRatio: '16/10', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Gallery4-qyb3q4a0jsod7m3jilhkhpbyobpmed6anrny6df3ao.webp" 
                alt="Palace Family Suite" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback room design if image doesn't load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Four-poster bed */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '40%',
                  backgroundColor: '#ffffff',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Bed posts */}
                  <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                </div>
                
                {/* Green sofa */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  left: '10%',
                  width: '25%',
                  height: '15%',
                  backgroundColor: '#228b22',
                  borderRadius: '8px 8px 0 0'
                }}></div>
                
                {/* Window */}
                <div style={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%',
                  width: '20%',
                  height: '30%',
                  backgroundColor: '#87ceeb',
                  border: '2px solid #d1d5db'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* PALACE FAMILY SUITE Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000', marginBottom: '24px', fontFamily: '"Montserrat", sans-serif' }}>PALACE FAMILY SUITE</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#3A3A3A', lineHeight: '1.8', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
            <p style={{ marginBottom: '16px' }}>
            The Family Suite is a fusion of two palace suites, providing an expansive, luxurious space that is perfect for families or larger groups. This suite features a spacious lounge and offers a lush, private retreat with ample room for relaxation. Whether you’re enjoying the elegant interiors or the serene outdoor views, this suite ensures the ultimate comfort for all guests. Ideal for families, this suite combines two palace suites into one expansive retreat.
            </p>
            
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: 'transparent', 
            color: '#000000', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            // e.currentTarget.style.backgroundColor = '#000000';
            // e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            // e.currentTarget.style.backgroundColor = 'transparent';
            // e.currentTarget.style.color = '#000000';
          }}>
            Floor Plan
          </button>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: '#000000', 
            color: '#ffffff', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}>
            Check Rates
          </button>
        </div>

        {/* Image Carousel */}
        <div style={{ marginBottom: '48px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {/* Palace Suite Carousel Images - State-based Carousel */}
            <div 
              className="palace-suite-carousel-container"
              style={{ 
                display: 'flex', 
                gap: '16px',
                justifyContent: 'center',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                padding: '0 20px'
              }}
            >
              {/* Palace Suite Carousel Cards - State-based Carousel */}
              {(() => {
                const palaceSuiteCarouselCards = [
                  {
                    image: '/image-70.png',
                    alt: 'Palace Suite Bedroom',
                    fallback: '🛏️'
                  },
                  {
                    image: '/image-71.png',
                    alt: 'Palace Suite Bathroom',
                    fallback: '🛁'
                  },
                  {
                    image: '/image-73.png',
                    alt: 'Palace Suite Bathroom Detail',
                    fallback: '🧴'
                  },
                  {
                    image: '/image-74.png',
                    alt: 'Palace Suite Additional View',
                    fallback: '🏰'
                  }
                ];

                // Create infinite loop by duplicating cards
                const extendedPalaceSuiteCards = [...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards];
                const startIndex = palaceSuiteCarouselCards.length + palaceSuiteCarouselCurrentIndex;
                const visiblePalaceSuiteCards = extendedPalaceSuiteCards.slice(startIndex, startIndex + 3);

                return visiblePalaceSuiteCards.map((card, index) => (
                  <div key={`${card.alt}-${startIndex + index}`} style={{ 
                    minWidth: '280px',
                    position: 'relative', 
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0,
                    scrollSnapAlign: 'start'
                  }}>
                    <img 
                      src={card.image} 
                      alt={card.alt} 
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '250px', 
                      backgroundColor: '#f8f9fa',
                      position: 'relative',
                      overflow: 'hidden',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ 
                        width: '60%',
                        height: '40%',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9ca3af',
                        fontSize: '24px'
                      }}>
                        {card.fallback}
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Simple Navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px', 
              marginTop: '32px' 
            }}>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev - 1;
                    // Handle infinite loop - when going below 0, wrap to the end
                    return newIndex < 0 ? 3 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev + 1;
                    // Handle infinite loop - when going above 3, wrap to 0
                    return newIndex > 3 ? 0 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        
         {/* AMENITIES Section */}
         <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>AMENITIES</h2>
          </div>

          {/* Key Amenities Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* 1 ANTE ROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>
              1 Private Lounge & 2 Ante rooms</span>
            </div>

            {/* 2 EN SUITE BATHROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛁
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>2 EN SUITE BATHROOM</span>
            </div>

            {/* PALACE GARDEN VIEW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🏔️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>PALACE GARDEN VIEW</span>
            </div>

            {/* 1 KING BED */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>2 KING BEDS</span>
            </div>

            {/* 591 Sq. Ft. */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                ⬜
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>1428 Sq. Ft.</span>
            </div>

            {/* DESIGNED BY CHANNA DASWATTE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🏰
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>DESIGNED BY CHANNA DASWATTE</span>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{ 
            height: '1px', 
            backgroundColor: '#e5e7eb', 
            marginBottom: '24px' 
          }}></div>

          {/* ROOM FEATURES Section */}
          <div>
            

            {/* Expandable Categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* ROOM FEATURES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsRoomFeaturesExpanded(!isRoomFeaturesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>ROOM FEATURES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isRoomFeaturesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Room Features Content */}
              {isRoomFeaturesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Nespresso Coffee Machine</div>
                    <div>Tea and Coffee Menu</div>
                    <div>In Room Safe</div>
                    <div>Generously Stocked Refrigerators</div>
                    <div>Down Duvets and Pillows</div>
                    <div>Pillow Menu</div>
                    <div>Clothes Steamer</div>
                  </div>
                </div>
              )}

              {/* BATH Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsBathExpanded(!isBathExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>BATH</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isBathExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Bath Content */}
              {isBathExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Standalone Bathtub</div>
                    <div>Dyson Hairdryer</div>
                    <div>Indulgent Bathrobes</div>
                    <div>Weighing Scale</div>
                    <div>Premium Toiletries</div>
                  </div>
                </div>
              )}

              {/* TECHNOLOGY Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsTechnologyExpanded(!isTechnologyExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>TECHNOLOGY</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isTechnologyExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Technology Content */}
              {isTechnologyExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Wifi</div>
                    <div>65 Inch Smart TV</div>
                    <div>Bang and Olufsen Speaker</div>
                    <div>Cordless Telephone</div>
                  </div>
                </div>
              )}

              {/* SERVICES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>SERVICES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isServicesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Services Content */}
              {isServicesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Palace Butler Service</div>
                    <div>24 Hour In-Room Dining</div>
                    <div>Complimentary Laundry</div>
                    <div>Concierge Services</div>
                    <div>Twice Daily House-keeping Service</div>
                    <div>Babysitter</div>
                    <div>In-house Doctor on Call</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>OTHER SUITES</h2>
          </div>

          {/* Suites Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '32px'
          }}>
            {/* GENERATOR SUITES */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('generator-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-75.png" 
                  alt="Generator Suites" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Generator Suites image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    🏭
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  GENERATOR SUITES
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  Once the heart of the royal palace's power generation, these suites have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs.
                </p>
              </div>
            </div>

            {/* FAMILY PALACE SUITE */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('ice-mill-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-76.png" 
                  alt="ICE MILL Suite" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Family Palace Suite image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    👨‍👩‍👧‍👦
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                 ICE MILL SUITE
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  The Ice Mill suites are beautifully adorned with traditional Orissa handloom art and paintings, creating a unique, cultural ambiance.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );

  const renderGeneratorSuitePage = () => (
    <>
      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '200', fontFamily: '"Montserrat", sans-serif', color: '#000000', marginBottom: '16px' }}>Generator Suite</h1>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        backgroundColor: 'rgb(241,236,229)',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Rambha Villa', 'Palace Suite', 'Palace Family Suite', 'Generator Suite', 'Ice Mill Suite', 'Printing Press Suite'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'Overview') {
                  setCurrentPage('accommodation');
                  setActiveTab('overview');
                } else if (tab === 'Rambha Villa') {
                  setCurrentPage('accommodation');
                  setActiveTab('rambha-villa');
                } else if (tab === 'Palace Suite') {
                  setCurrentPage('palace-suite');
                  setPalaceSuiteTab('palace-suite');
                } else if (tab === 'Palace Family Suite') {
                  setCurrentPage('palace-family-suite');
                  setPalaceSuiteTab('palace-family-suite');
                } else if (tab === 'Generator Suite') {
                  setCurrentPage('generator-suite');
                  setPalaceSuiteTab('generator-suite');
                } else if (tab === 'Ice Mill Suite') {
                  setCurrentPage('ice-mill-suite');
                  setPalaceSuiteTab('ice-mill-suite');
                } else if (tab === 'Printing Press Suite') {
                  setCurrentPage('printing-press-suite');
                  setPalaceSuiteTab('printing-press-suite');
                } else {
                  setPalaceSuiteTab(tab.toLowerCase().replace(' ', '-'));
                }
              }}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Large Room Image */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ aspectRatio: '16/10', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/image-77.png" 
                alt="Generator Suite" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback room design if image doesn't load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Four-poster bed */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '40%',
                  backgroundColor: '#ffffff',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Bed posts */}
                  <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                </div>
                
                {/* Green sofa */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  left: '10%',
                  width: '25%',
                  height: '15%',
                  backgroundColor: '#228b22',
                  borderRadius: '8px 8px 0 0'
                }}></div>
                
                {/* Window */}
                <div style={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%',
                  width: '20%',
                  height: '30%',
                  backgroundColor: '#87ceeb',
                  border: '2px solid #d1d5db'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* GENERATOR SUITE Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000', marginBottom: '24px', fontFamily: '"Montserrat", sans-serif' }}>GENERATOR SUITE</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#3A3A3A', lineHeight: '1.8', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
            <p style={{ marginBottom: '16px' }}>
            The Generator suites are uniquely designed, blending modern comfort with the charm of traditional Orissa handloom art and paintings. Once the heart of the royal palace’s power generation, these rooms have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs. Each suite features a king-size bed dressed in sumptuous crested linen, accompanied by a comfortable sofa and a wooden coffee table. With dedicated palace butler service, guests can enjoy personalized attention throughout their stay. The luxurious marble bathroom is equipped with a bathtub, offering a serene retreat for relaxation.
            </p>
            
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: 'transparent', 
            color: '#000000', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            // e.currentTarget.style.backgroundColor = '#000000';
            // e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            // e.currentTarget.style.backgroundColor = 'transparent';
            // e.currentTarget.style.color = '#000000';
          }}>
            Floor Plan
          </button>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: '#000000', 
            color: '#ffffff', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}>
            Check Rates
          </button>
        </div>

        {/* Image Carousel */}
        <div style={{ marginBottom: '48px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {/* Palace Suite Carousel Images - State-based Carousel */}
            <div 
              className="palace-suite-carousel-container"
              style={{ 
                display: 'flex', 
                gap: '16px',
                justifyContent: 'center',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                padding: '0 20px'
              }}
            >
              {/* Palace Suite Carousel Cards - State-based Carousel */}
              {(() => {
                const palaceSuiteCarouselCards = [
                  {
                    image: '/image-70.png',
                    alt: 'Palace Suite Bedroom',
                    fallback: '🛏️'
                  },
                  {
                    image: '/image-71.png',
                    alt: 'Palace Suite Bathroom',
                    fallback: '🛁'
                  },
                  {
                    image: '/image-73.png',
                    alt: 'Palace Suite Bathroom Detail',
                    fallback: '🧴'
                  },
                  {
                    image: '/image-74.png',
                    alt: 'Palace Suite Additional View',
                    fallback: '🏰'
                  }
                ];

                // Create infinite loop by duplicating cards
                const extendedPalaceSuiteCards = [...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards];
                const startIndex = palaceSuiteCarouselCards.length + palaceSuiteCarouselCurrentIndex;
                const visiblePalaceSuiteCards = extendedPalaceSuiteCards.slice(startIndex, startIndex + 3);

                return visiblePalaceSuiteCards.map((card, index) => (
                  <div key={`${card.alt}-${startIndex + index}`} style={{ 
                    minWidth: '280px',
                    position: 'relative', 
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0,
                    scrollSnapAlign: 'start'
                  }}>
                    <img 
                      src={card.image} 
                      alt={card.alt} 
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '250px', 
                      backgroundColor: '#f8f9fa',
                      position: 'relative',
                      overflow: 'hidden',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ 
                        width: '60%',
                        height: '40%',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9ca3af',
                        fontSize: '24px'
                      }}>
                        {card.fallback}
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Simple Navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px', 
              marginTop: '32px' 
            }}>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev - 1;
                    // Handle infinite loop - when going below 0, wrap to the end
                    return newIndex < 0 ? 3 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev + 1;
                    // Handle infinite loop - when going above 3, wrap to 0
                    return newIndex > 3 ? 0 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* AMENITIES Section */}
        <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>AMENITIES</h2>
          </div>

          {/* Key Amenities Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* 1 ANTE ROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>
              1 King Bed</span>
            </div>

            {/* 2 EN SUITE BATHROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛁
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>En Suite Bathroom & Outdoor Bathtub</span>
            </div>

            {/* PALACE GARDEN VIEW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🏔️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>Orchard View</span>
            </div>

            {/* 1 KING BED */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>550 Sq. Ft.</span>
            </div>

            {/* 591 Sq. Ft. */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                ⬜
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>DESIGNED BY CHANNA DASWATTE</span>
            </div>

            {/* DESIGNED BY CHANNA DASWATTE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}></span>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{ 
            height: '1px', 
            backgroundColor: '#e5e7eb', 
            marginBottom: '24px' 
          }}></div>

          {/* ROOM FEATURES Section */}
          <div>
            

            {/* Expandable Categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* ROOM FEATURES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsRoomFeaturesExpanded(!isRoomFeaturesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>ROOM FEATURES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isRoomFeaturesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Room Features Content */}
              {isRoomFeaturesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Nespresso Coffee Machine</div>
                    <div>Tea and Coffee Menu</div>
                    <div>In Room Safe</div>
                    <div>Generously Stocked Refrigerators</div>
                    <div>Down Duvets and Pillows</div>
                    <div>Pillow Menu</div>
                    <div>Clothes Steamer</div>
                  </div>
                </div>
              )}

              {/* BATH Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsBathExpanded(!isBathExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>BATH</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isBathExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Bath Content */}
              {isBathExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Standalone Bathtub</div>
                    <div>Dyson Hairdryer</div>
                    <div>Indulgent Bathrobes</div>
                    <div>Weighing Scale</div>
                    <div>Premium Toiletries</div>
                  </div>
                </div>
              )}

              {/* TECHNOLOGY Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsTechnologyExpanded(!isTechnologyExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>TECHNOLOGY</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isTechnologyExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Technology Content */}
              {isTechnologyExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Wifi</div>
                    <div>65 Inch Smart TV</div>
                    <div>Bang and Olufsen Speaker</div>
                    <div>Cordless Telephone</div>
                  </div>
                </div>
              )}

              {/* SERVICES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>SERVICES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isServicesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Services Content */}
              {isServicesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Palace Butler Service</div>
                    <div>24 Hour In-Room Dining</div>
                    <div>Complimentary Laundry</div>
                    <div>Concierge Services</div>
                    <div>Twice Daily House-keeping Service</div>
                    <div>Babysitter</div>
                    <div>In-house Doctor on Call</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>OTHER SUITES</h2>
          </div>

          {/* Suites Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '32px'
          }}>
            {/* GENERATOR SUITES */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('ice-mill-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-75.png" 
                  alt="Generator Suites" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Generator Suites image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    🏭
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  ICE MILL SUITE
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  The Ice Mill suites are beautifully adorned with traditional Orissa handloom art and paintings, creating a unique, cultural ambiance.                </p>
              </div>
            </div>

            {/* FAMILY PALACE SUITE */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('palace-family-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-76.png" 
                  alt="Family Palace Suite" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Family Palace Suite image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    👨‍👩‍👧‍👦
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  FAMILY PALACE SUITE
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  A fusion of two palace suites, featuring a spacious lounge- an expansive, lush private retreat perfect for families and added privacy.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );

  const renderIceMillSuitePage = () => (
    <>

      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '200', fontFamily: '"Montserrat", sans-serif', color: '#000000', marginBottom: '16px' }}>Ice Mill Suite</h1>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        backgroundColor: 'rgb(241,236,229)',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Rambha Villa', 'Palace Suite', 'Palace Family Suite', 'Generator Suite', 'Ice Mill Suite', 'Printing Press Suite'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'Overview') {
                  setCurrentPage('accommodation');
                  setActiveTab('overview');
                } else if (tab === 'Rambha Villa') {
                  setCurrentPage('accommodation');
                  setActiveTab('rambha-villa');
                } else if (tab === 'Palace Suite') {
                  setCurrentPage('palace-suite');
                  setPalaceSuiteTab('palace-suite');
                } else if (tab === 'Palace Family Suite') {
                  setCurrentPage('palace-family-suite');
                  setPalaceSuiteTab('palace-family-suite');
                } else if (tab === 'Generator Suite') {
                  setCurrentPage('generator-suite');
                  setPalaceSuiteTab('generator-suite');
                } else if (tab === 'Ice Mill Suite') {
                  setCurrentPage('ice-mill-suite');
                  setPalaceSuiteTab('ice-mill-suite');
                } else if (tab === 'Printing Press Suite') {
                  setCurrentPage('printing-press-suite');
                  setPalaceSuiteTab('printing-press-suite');
                } else {
                  setPalaceSuiteTab(tab.toLowerCase().replace(' ', '-'));
                }
              }}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Large Room Image */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ aspectRatio: '16/10', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/image-78.png" 
                alt="Ice Mill Suite" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback room design if image doesn't load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Four-poster bed */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '40%',
                  backgroundColor: '#ffffff',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Bed posts */}
                  <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                </div>
                
                {/* Green sofa */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  left: '10%',
                  width: '25%',
                  height: '15%',
                  backgroundColor: '#228b22',
                  borderRadius: '8px 8px 0 0'
                }}></div>
                
                {/* Window */}
                <div style={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%',
                  width: '20%',
                  height: '30%',
                  backgroundColor: '#87ceeb',
                  border: '2px solid #d1d5db'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* ICE MILL SUITE Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000', marginBottom: '24px', fontFamily: '"Montserrat", sans-serif' }}>ICE MILL SUITE</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#3A3A3A', lineHeight: '1.8', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
            <p style={{ marginBottom: '16px' }}>
            The Ice Mill suites are beautifully adorned with traditional Orissa handloom art and paintings, creating a unique, cultural ambiance. Once used to store ice blocks for preserving the palace’s fresh catches, these rooms have been reimagined into a lavish retreat with an outdoor seating verandah. The suites feature a king-size bed with sumptuous crested linen, a comfortable sofa, and a wooden coffee table. Guests are treated to dedicated palace butler service, ensuring a seamless experience. The marble bathroom is spacious and luxurious, complete with a bathtub for added indulgence.
            </p>
           
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: 'transparent', 
            color: '#000000', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            // e.currentTarget.style.backgroundColor = '#000000';
            // e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            // e.currentTarget.style.backgroundColor = 'transparent';
            // e.currentTarget.style.color = '#000000';
          }}>
            Floor Plan
          </button>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: '#000000', 
            color: '#ffffff', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}>
            Check Rates
          </button>
        </div>

        {/* Image Carousel */}
        <div style={{ marginBottom: '48px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {/* Palace Suite Carousel Images - State-based Carousel */}
            <div 
              className="palace-suite-carousel-container"
              style={{ 
                display: 'flex', 
                gap: '16px',
                justifyContent: 'center',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                padding: '0 20px'
              }}
            >
              {/* Palace Suite Carousel Cards - State-based Carousel */}
              {(() => {
                const palaceSuiteCarouselCards = [
                  {
                    image: '/image-70.png',
                    alt: 'Palace Suite Bedroom',
                    fallback: '🛏️'
                  },
                  {
                    image: '/image-71.png',
                    alt: 'Palace Suite Bathroom',
                    fallback: '🛁'
                  },
                  {
                    image: '/image-73.png',
                    alt: 'Palace Suite Bathroom Detail',
                    fallback: '🧴'
                  },
                  {
                    image: '/image-74.png',
                    alt: 'Palace Suite Additional View',
                    fallback: '🏰'
                  }
                ];

                // Create infinite loop by duplicating cards
                const extendedPalaceSuiteCards = [...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards];
                const startIndex = palaceSuiteCarouselCards.length + palaceSuiteCarouselCurrentIndex;
                const visiblePalaceSuiteCards = extendedPalaceSuiteCards.slice(startIndex, startIndex + 3);

                return visiblePalaceSuiteCards.map((card, index) => (
                  <div key={`${card.alt}-${startIndex + index}`} style={{ 
                    minWidth: '280px',
                    position: 'relative', 
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0,
                    scrollSnapAlign: 'start'
                  }}>
                    <img 
                      src={card.image} 
                      alt={card.alt} 
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '250px', 
                      backgroundColor: '#f8f9fa',
                      position: 'relative',
                      overflow: 'hidden',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ 
                        width: '60%',
                        height: '40%',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9ca3af',
                        fontSize: '24px'
                      }}>
                        {card.fallback}
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Simple Navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px', 
              marginTop: '32px' 
            }}>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev - 1;
                    // Handle infinite loop - when going below 0, wrap to the end
                    return newIndex < 0 ? 3 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev + 1;
                    // Handle infinite loop - when going above 3, wrap to 0
                    return newIndex > 3 ? 0 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* AMENITIES Section */}
        <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>AMENITIES</h2>
          </div>

          {/* Key Amenities Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* 1 ANTE ROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>King Bed or 2 Twin Beds</span>
            </div>

            {/* 2 EN SUITE BATHROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛁
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>En Suite Bathroom</span>
            </div>

            {/* PALACE GARDEN VIEW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🏔️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>Orchard View</span>
            </div>

            {/* 1 KING BED */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>454 Sq. Ft.</span>
            </div>

            {/* 591 Sq. Ft. */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                ⬜
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>Designed by Channa Daswatte</span>
            </div>

            {/* DESIGNED BY CHANNA DASWATTE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}></span>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{ 
            height: '1px', 
            backgroundColor: '#e5e7eb', 
            marginBottom: '24px' 
          }}></div>

          {/* ROOM FEATURES Section */}
          <div>
            

            {/* Expandable Categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* ROOM FEATURES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsRoomFeaturesExpanded(!isRoomFeaturesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>ROOM FEATURES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isRoomFeaturesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Room Features Content */}
              {isRoomFeaturesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Nespresso Coffee Machine</div>
                    <div>Tea and Coffee Menu</div>
                    <div>In Room Safe</div>
                    <div>Generously Stocked Refrigerators</div>
                    <div>Down Duvets and Pillows</div>
                    <div>Pillow Menu</div>
                    <div>Clothes Steamer</div>
                  </div>
                </div>
              )}

              {/* BATH Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsBathExpanded(!isBathExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>BATH</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isBathExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Bath Content */}
              {isBathExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Standalone Bathtub</div>
                    <div>Dyson Hairdryer</div>
                    <div>Indulgent Bathrobes</div>
                    <div>Weighing Scale</div>
                    <div>Premium Toiletries</div>
                  </div>
                </div>
              )}

              {/* TECHNOLOGY Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsTechnologyExpanded(!isTechnologyExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>TECHNOLOGY</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isTechnologyExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Technology Content */}
              {isTechnologyExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Wifi</div>
                    <div>65 Inch Smart TV</div>
                    <div>Bang and Olufsen Speaker</div>
                    <div>Cordless Telephone</div>
                  </div>
                </div>
              )}

              {/* SERVICES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>SERVICES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isServicesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Services Content */}
              {isServicesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Palace Butler Service</div>
                    <div>24 Hour In-Room Dining</div>
                    <div>Complimentary Laundry</div>
                    <div>Concierge Services</div>
                    <div>Twice Daily House-keeping Service</div>
                    <div>Babysitter</div>
                    <div>In-house Doctor on Call</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* OTHER SUITES Section */}
        <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>OTHER SUITES</h2>
          </div>

          {/* Suites Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '32px'
          }}>
            {/* GENERATOR SUITES */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('generator-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-75.png" 
                  alt="Generator Suites" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Generator Suites image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    🏭
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  GENERATOR SUITES
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  Once the heart of the royal palace's power generation, these suites have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs.
                </p>
              </div>
            </div>

            {/* FAMILY PALACE SUITE */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('palace-family-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-76.png" 
                  alt="Family Palace Suite" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Family Palace Suite image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    👨‍👩‍👧‍👦
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  FAMILY PALACE SUITE
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  A fusion of two palace suites, featuring a spacious lounge- an expansive, lush private retreat perfect for families and added privacy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Accommodation Button */}
       
      </div>
    </>
  );

  const renderPrintingPressSuitePage = () => (
    <>

      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '200', fontFamily: '"Montserrat", sans-serif', color: '#000000', marginBottom: '16px' }}>Printing Press Suite</h1>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '32px', 
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: isHeaderSticky ? 48 : 0,
        zIndex: 1000,
        backgroundColor: 'rgb(241,236,229)',
        marginTop: isHeaderSticky ? '-1px' : '0'
      }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Rambha Villa', 'Palace Suite', 'Palace Family Suite', 'Generator Suite', 'Ice Mill Suite', 'Printing Press Suite'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'Overview') {
                  setCurrentPage('accommodation');
                  setActiveTab('overview');
                } else if (tab === 'Rambha Villa') {
                  setCurrentPage('accommodation');
                  setActiveTab('rambha-villa');
                } else if (tab === 'Palace Suite') {
                  setCurrentPage('palace-suite');
                  setPalaceSuiteTab('palace-suite');
                } else if (tab === 'Palace Family Suite') {
                  setCurrentPage('palace-family-suite');
                  setPalaceSuiteTab('palace-family-suite');
                } else if (tab === 'Generator Suite') {
                  setCurrentPage('generator-suite');
                  setPalaceSuiteTab('generator-suite');
                } else if (tab === 'Ice Mill Suite') {
                  setCurrentPage('ice-mill-suite');
                  setPalaceSuiteTab('ice-mill-suite');
                } else if (tab === 'Printing Press Suite') {
                  setCurrentPage('printing-press-suite');
                  setPalaceSuiteTab('printing-press-suite');
                } else {
                  setPalaceSuiteTab(tab.toLowerCase().replace(' ', '-'));
                }
              }}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
        {/* Large Room Image */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ aspectRatio: '16/10', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/image-80.webp" 
                alt="Printing Press Suite" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback room design if image doesn't load */}
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                backgroundColor: '#f8f9fa',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Four-poster bed */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  width: '60%',
                  height: '40%',
                  backgroundColor: '#ffffff',
                  border: '2px solid #d1d5db',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  {/* Bed posts */}
                  <div style={{ position: 'absolute', top: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', top: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', left: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                  <div style={{ position: 'absolute', bottom: '-20px', right: '10px', width: '8px', height: '20px', backgroundColor: '#8b4513' }}></div>
                </div>
                
                {/* Green sofa */}
                <div style={{ 
                  position: 'absolute', 
                  bottom: '20%', 
                  left: '10%',
                  width: '25%',
                  height: '15%',
                  backgroundColor: '#228b22',
                  borderRadius: '8px 8px 0 0'
                }}></div>
                
                {/* Window */}
                <div style={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '5%',
                  width: '20%',
                  height: '30%',
                  backgroundColor: '#87ceeb',
                  border: '2px solid #d1d5db'
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* PRINTING PRESS SUITE Section */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#000000', marginBottom: '24px', fontFamily: '"Montserrat", sans-serif' }}>PRINTING PRESS SUITE</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#3A3A3A', lineHeight: '1.8', fontSize: '16px', fontFamily: '"Lato", sans-serif' }}>
            <p style={{ marginBottom: '16px' }}>
              The Printing Press Suites are individually designed within the original palace block, reflecting the regal charm of the era with authentic vintage Odia handicrafts. Each suite boasts a king-size four-poster bed with sumptuous crested linen, offering the perfect blend of luxury and comfort.
            </p>
            <p style={{ marginBottom: '16px' }}>
              The suites feature an ante room with picture windows that overlook the serene palace gardens, while the marble-clad bathrooms come with a spacious bathtub. Additionally, a dedicated palace butler service ensures that every guest's needs are met with the highest level of care.
            </p>
            <p>
              Experience the luxury and grandeur of the palace block, once home to the royal family in a bygone era.
            </p>
          </div>
        </div>

        {/* Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '48px' }}>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: 'transparent', 
            color: '#000000', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            // e.currentTarget.style.backgroundColor = '#000000';
            // e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            // e.currentTarget.style.backgroundColor = 'transparent';
            // e.currentTarget.style.color = '#000000';
          }}>
            Floor Plan
          </button>
          <button style={{ 
            padding: '16px 32px', 
            backgroundColor: '#000000', 
            color: '#ffffff', 
            border: '1px solid #000000', 
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#000000';
          }}>
            Check Rates
          </button>
        </div>

        {/* Image Carousel */}
        <div style={{ marginBottom: '48px' }}>
          {/* Carousel Container */}
          <div style={{ 
            position: 'relative',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {/* Palace Suite Carousel Images - State-based Carousel */}
            <div 
              className="palace-suite-carousel-container"
              style={{ 
                display: 'flex', 
                gap: '16px',
                justifyContent: 'center',
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory',
                padding: '0 20px'
              }}
            >
              {/* Palace Suite Carousel Cards - State-based Carousel */}
              {(() => {
                const palaceSuiteCarouselCards = [
                  {
                    image: '/image-70.png',
                    alt: 'Palace Suite Bedroom',
                    fallback: '🛏️'
                  },
                  {
                    image: '/image-71.png',
                    alt: 'Palace Suite Bathroom',
                    fallback: '🛁'
                  },
                  {
                    image: '/image-73.png',
                    alt: 'Palace Suite Bathroom Detail',
                    fallback: '🧴'
                  },
                  {
                    image: '/image-74.png',
                    alt: 'Palace Suite Additional View',
                    fallback: '🏰'
                  }
                ];

                // Create infinite loop by duplicating cards
                const extendedPalaceSuiteCards = [...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards, ...palaceSuiteCarouselCards];
                const startIndex = palaceSuiteCarouselCards.length + palaceSuiteCarouselCurrentIndex;
                const visiblePalaceSuiteCards = extendedPalaceSuiteCards.slice(startIndex, startIndex + 3);

                return visiblePalaceSuiteCards.map((card, index) => (
                  <div key={`${card.alt}-${startIndex + index}`} style={{ 
                    minWidth: '280px',
                    position: 'relative', 
                    borderRadius: '8px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    flexShrink: 0,
                    scrollSnapAlign: 'start'
                  }}>
                    <img 
                      src={card.image} 
                      alt={card.alt} 
                      style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback design if image fails to load */}
                    <div style={{ 
                      display: 'none', 
                      width: '100%', 
                      height: '250px', 
                      backgroundColor: '#f8f9fa',
                      position: 'relative',
                      overflow: 'hidden',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ 
                        width: '60%',
                        height: '40%',
                        backgroundColor: '#e5e7eb',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#9ca3af',
                        fontSize: '24px'
                      }}>
                        {card.fallback}
                      </div>
                    </div>
                  </div>
                ));
              })()}
            </div>

            {/* Simple Navigation */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '16px', 
              marginTop: '32px' 
            }}>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev - 1;
                    // Handle infinite loop - when going below 0, wrap to the end
                    return newIndex < 0 ? 3 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                  border: '2px solid #d1d5db',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onClick={() => {
                  setPalaceSuiteCarouselCurrentIndex(prev => {
                    const newIndex = prev + 1;
                    // Handle infinite loop - when going above 3, wrap to 0
                    return newIndex > 3 ? 0 : newIndex;
                  });
                }}
              >
                <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

{/* AMENITIES Section */}
<div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>AMENITIES</h2>
          </div>

          {/* Key Amenities Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            marginBottom: '32px'
          }}>
            {/* 1 ANTE ROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>King Bed</span>
            </div>

            {/* 2 EN SUITE BATHROOM */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛁
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>En Suite Bathroom</span>
            </div>

            {/* PALACE GARDEN VIEW */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🏔️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>Orchard View</span>
            </div>

            {/* 1 KING BED */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                🛏️
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>443 Sq. Ft.</span>
            </div>

            {/* 591 Sq. Ft. */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                ⬜
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>Designed by Channa Daswatte</span>
            </div>

            {/* DESIGNED BY CHANNA DASWATTE */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '24px', 
                height: '24px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '16px'
              }}>
                
              </div>
              <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}></span>
            </div>
          </div>

          {/* Divider Line */}
          <div style={{ 
            height: '1px', 
            backgroundColor: '#e5e7eb', 
            marginBottom: '24px' 
          }}></div>

          {/* ROOM FEATURES Section */}
          <div>
            

            {/* Expandable Categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* ROOM FEATURES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsRoomFeaturesExpanded(!isRoomFeaturesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>ROOM FEATURES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isRoomFeaturesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Room Features Content */}
              {isRoomFeaturesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Nespresso Coffee Machine</div>
                    <div>Tea and Coffee Menu</div>
                    <div>In Room Safe</div>
                    <div>Generously Stocked Refrigerators</div>
                    <div>Down Duvets and Pillows</div>
                    <div>Pillow Menu</div>
                    <div>Clothes Steamer</div>
                  </div>
                </div>
              )}

              {/* BATH Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsBathExpanded(!isBathExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>BATH</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isBathExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Bath Content */}
              {isBathExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    // color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Standalone Bathtub</div>
                    <div>Dyson Hairdryer</div>
                    <div>Indulgent Bathrobes</div>
                    <div>Weighing Scale</div>
                    <div>Premium Toiletries</div>
                  </div>
                </div>
              )}

              {/* TECHNOLOGY Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsTechnologyExpanded(!isTechnologyExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>TECHNOLOGY</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isTechnologyExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Technology Content */}
              {isTechnologyExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Wifi</div>
                    <div>65 Inch Smart TV</div>
                    <div>Bang and Olufsen Speaker</div>
                    <div>Cordless Telephone</div>
                  </div>
                </div>
              )}

              {/* SERVICES Category */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid #f3f4f6',
                cursor: 'pointer'
              }}
              onClick={() => setIsServicesExpanded(!isServicesExpanded)}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <span style={{ fontSize: '16px', color: '#000000', fontWeight: '500' }}>SERVICES</span>
                <span style={{ fontSize: '18px', color: '#6b7280', fontWeight: 'bold' }}>
                  {isServicesExpanded ? '−' : '+'}
                </span>
              </div>
              
              {/* Services Content */}
              {isServicesExpanded && (
                <div style={{ 
                  padding: '16px 0',
                  // borderBottom: '1px solid #f3f4f6',
                  // backgroundColor: '#fafafa'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '8px',
                    color: '#6b7280',
                    fontSize: '14px',
                    lineHeight: '1.5'
                  }}>
                    <div>Palace Butler Service</div>
                    <div>24 Hour In-Room Dining</div>
                    <div>Complimentary Laundry</div>
                    <div>Concierge Services</div>
                    <div>Twice Daily House-keeping Service</div>
                    <div>Babysitter</div>
                    <div>In-house Doctor on Call</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* OTHER SUITES Section */}
        <div style={{ marginBottom: '48px' }}>
          {/* Main Title */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', fontFamily: '"Montserrat", sans-serif' }}>OTHER SUITES</h2>
          </div>

          {/* Suites Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '32px'
          }}>
            {/* GENERATOR SUITES */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('generator-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-75.png" 
                  alt="Generator Suites" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Generator Suites image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    🏭
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  GENERATOR SUITES
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  Once the heart of the royal palace's power generation, these suites have now been transformed into a luxurious retreat, offering orchard views and outdoor bathtubs.
                </p>
              </div>
            </div>

            {/* FAMILY PALACE SUITE */}
            <div 
              style={{ 
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
              }}
              onClick={() => setCurrentPage('palace-family-suite')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <img 
                  src="/image-76.png" 
                  alt="Family Palace Suite" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const nextSibling = target.nextSibling as HTMLElement;
                    if (nextSibling) {
                      nextSibling.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback for Family Palace Suite image */}
                <div style={{ 
                  display: 'none', 
                  width: '100%', 
                  height: '100%', 
                  backgroundColor: '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ 
                    width: '60%',
                    height: '40%',
                    backgroundColor: '#e5e7eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    fontSize: '24px'
                  }}>
                    👨‍👩‍👧‍👦
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#000000', 
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  fontFamily: '"Montserrat", sans-serif'
                }}>
                  FAMILY PALACE SUITE
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6b7280', 
                  lineHeight: '1.6',
                  fontFamily: '"Lato", sans-serif'
                }}>
                  A fusion of two palace suites, featuring a spacious lounge- an expansive, lush private retreat perfect for families and added privacy.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Back to Accommodation Button */}
       
      </div>
    </>
  );

  const renderWellnessPage = () => (
    <>
      {/* Main Wellness Image */}
      <div style={{ marginBottom: '64px' }}>
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: '600px',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
          <img 
            src="./image-19.png" 
            alt="Wellness Meditation" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const nextSibling = target.nextSibling as HTMLElement;
              if (nextSibling) {
                nextSibling.style.display = 'flex';
              }
            }}
          />
          {/* Fallback design if image fails to load */}
          <div style={{ 
            display: 'none', 
            width: '100%', 
            height: '100%', 
            backgroundColor: '#f8f8f5',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Meditation person */}
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              width: '20%',
              height: '40%',
              backgroundColor: '#e5e7eb',
              borderRadius: '50% 50% 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ 
                width: '60%', 
                height: '60%', 
                backgroundColor: '#9ca3af',
                borderRadius: '50%'
              }}></div>
            </div>
            
            {/* Tree branches */}
            <div style={{ 
              position: 'absolute', 
              top: '20%', 
              left: '10%',
              width: '80%',
              height: '30%',
              backgroundColor: '#22c55e',
              borderRadius: '50% 50% 0 0'
            }}></div>
            
            {/* Pink building in background */}
            <div style={{ 
              position: 'absolute', 
              bottom: '20%', 
              right: '10%',
              width: '30%',
              height: '40%',
              backgroundColor: '#fdf2f8',
              borderRadius: '8px'
            }}></div>
          </div>
        </div>
      </div>

      {/* Wellness Content */}
      <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontFamily: '"Montserrat", sans-serif',
          fontSize: '24px', 
          fontWeight: '600', 
          color: '#000000', 
          marginBottom: '32px',
          lineHeight: '29.26px',
          textTransform: 'uppercase'
        }}>
          WELL BEYOND WELLNESS WITH MANTNAM
        </h1>
        
        <p style={{ 
          // fontSize: '18px', 
          fontFamily: '14px"Lato", sans-serif',
          color: '#3A3A3A', 
          lineHeight: '1.8',
          textAlign: 'center'
        }}>
          MANTNAM draws upon the timeless wisdom of the Vedas and Ayurveda to revitalize your "mann, tann and atma," signifying mind, body, and soul. Embracing the use of nutrition, fitness & relaxation through the practices of Yoga, Meditation, Ayurvedic massages, Naadi Shastra (neuropathy), and a multitude of other transformative experiences, a new era of wellness awaits, to enchant your spirit and nourish your soul.
        </p>
      </div>

            {/* Simple Wellness Cards Section */}
      <div style={{ marginTop: '80px' }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* Cards Container */}
          <div 
            className="wellness-cards-container"
            style={{ 
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
              padding: '0 20px'
            }}
          >
            {/* Wellness Cards - State-based Carousel */}
            {(() => {
              const wellnessCards = [
                {
                  title: 'GYM',
                  image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2025/01/Gymnasium.png',
                  description: 'A state-of-the-art gym overlooking the pool—an inviting space where guests can work on strength and endurance in a modern space designed for movement. It\'s right around the corner from the Mantnam spa, where guests can reward themselves after a workout.'
                },
                {
                  title: 'SPA',
                  image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2025/01/WellnessGallery1.png',
                  description: 'The spa at Rambha is the heart of holistic renewal, blending Ayurvedic treatments with restorative techniques in architecture inspired by ancient Indian design with a water body as a central element to cleanse, relax, and invigorate the senses.'
                },
                {
                  title: 'YOGA AND MEDITATION',
                  image: 'https://hiddenindia.com/rambhapalace/wp-content/uploads/2025/01/YogaMeditation-e1730189981250.png',
                  description: 'Guided private sessions of yoga & meditation strengthen neural pathways, promote mindfulness, enhancing cognitive function, reducing stress, and fostering a clearer, focused mind. Sprawling gardens and secluded palace spots offer ideal settings for these practices.'
                }
              ];

              // Create infinite loop by duplicating cards
              const extendedCards = [...wellnessCards, ...wellnessCards, ...wellnessCards];
              const startIndex = wellnessCards.length + wellnessCurrentIndex;
              const visibleCards = extendedCards.slice(startIndex, startIndex + 3);

              return visibleCards.map((card, index) => (
                <div key={`${card.title}-${startIndex + index}`} style={{ 
                  width: '350px',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start'
                }}>
                  <div style={{ height: '200px', backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const nextSibling = target.nextSibling as HTMLElement;
                        if (nextSibling) {
                          nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div style={{
                      display: 'none',
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#f3f4f6',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b7280',
                      fontSize: '16px'
                    }}>
                      {card.title}
                    </div>
                  </div>
                  <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold', 
                      color: '#111827', 
                      marginBottom: '12px',
                      textTransform: 'uppercase'
                    }}>
                      {card.title}
                    </h3>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#374151', 
                      lineHeight: '1.6',
                      textAlign: 'center'
                    }}>
                      {card.description}
                    </p>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* Simple Navigation */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            marginTop: '32px' 
          }}>
            <button 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '2px solid #d1d5db',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => {
                setWellnessCurrentIndex(prev => {
                  const newIndex = prev - 1;
                  // Handle infinite loop - when going below 0, wrap to the end
                  return newIndex < 0 ? 2 : newIndex;
                });
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '2px solid #d1d5db',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => {
                setWellnessCurrentIndex(prev => {
                  const newIndex = prev + 1;
                  // Handle infinite loop - when going above 2, wrap to 0
                  return newIndex > 2 ? 0 : newIndex;
                });
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Wellness Gallery Carousel Section */}
      <div style={{ marginTop: '80px' }}>
        {/* Carousel Container */}
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          {/* Cards Container */}
          <div 
            className="wellness-gallery-cards-container"
            style={{ 
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              overflowX: 'auto',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              scrollSnapType: 'x mandatory',
              padding: '0 20px'
            }}
          >
            {/* Wellness Gallery Cards - State-based Carousel */}
            {(() => {
              const wellnessGalleryCards = [
                {
                  image: './image-20.png',
                  alt: 'Wellness Gallery 1',
                  fallback: 'Gallery 1'
                },
                {
                  image: './image-21.png',
                  alt: 'Wellness Gallery 2',
                  fallback: 'Gallery 2'
                },
                {
                  image: './image-22.png',
                  alt: 'Wellness Gallery 3',
                  fallback: 'Gallery 3'
                },
                {
                  image: './image-23.png',
                  alt: 'Wellness Gallery 4',
                  fallback: 'Gallery 4'
                },
                {
                  image: './image-24.png',
                  alt: 'Wellness Gallery 5',
                  fallback: 'Gallery 5'
                },
                {
                  image: './image-25.png',
                  alt: 'Wellness Gallery 6',
                  fallback: 'Gallery 6'
                }
              ];

              // Create infinite loop by duplicating cards
              const extendedGalleryCards = [...wellnessGalleryCards, ...wellnessGalleryCards, ...wellnessGalleryCards];
              const startIndex = wellnessGalleryCards.length + wellnessGalleryCurrentIndex;
              const visibleGalleryCards = extendedGalleryCards.slice(startIndex, startIndex + 3);

              return visibleGalleryCards.map((card, index) => (
                <div key={`${card.alt}-${startIndex + index}`} style={{ 
                  minWidth: '500px',
                  height: '350px',
                  backgroundColor: '#f3f4f6',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start'
                }}>
                  <img 
                    src={card.image} 
                    alt={card.alt} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback design if image fails to load */}
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f3f4f6',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    fontSize: '16px',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    <svg width="32" height="32" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{card.fallback}</span>
                  </div>
                </div>
              ));
            })()}
          </div>

          {/* Simple Navigation */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '16px', 
            marginTop: '32px' 
          }}>
            <button 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '2px solid #d1d5db',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => {
                setWellnessGalleryCurrentIndex(prev => {
                  const newIndex = prev - 1;
                  // Handle infinite loop - when going below 0, wrap to the end
                  return newIndex < 0 ? 5 : newIndex;
                });
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '2px solid #d1d5db',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => {
                setWellnessGalleryCurrentIndex(prev => {
                  const newIndex = prev + 1;
                  // Handle infinite loop - when going above 5, wrap to 0
                  return newIndex > 5 ? 0 : newIndex;
                });
              }}
            >
              <svg width="16" height="16" fill="none" stroke="#374151" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Treatments and Therapies Section */}
      <div style={{ marginTop: '80px' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            TREATMENTS AND THERAPIES
          </h2>
        </div>

        {/* Three Column Layout */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          gap: '32px',
          justifyContent: 'center'
        }}>
          {/* Potli Massage Card */}
          <div style={{
            flex: '1',
            maxWidth: '350px',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Image */}
            <div style={{ height: '250px', backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
              <img
                src="./image-26.png"
                alt="Potli Massage"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback design if image fails to load */}
              <div style={{
                display: 'none',
                width: '100%',
                height: '100%',
                backgroundColor: '#f3f4f6',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '16px',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Potli Massage</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '16px',
                textAlign: 'center',
                textTransform: 'uppercase'
              }}>
                POTLI MASSAGE
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Filled with an elixir created from a custom blend of herbs, oils and spices, heated potlis (muslin bags) are placed on specific points in the body to reap their therapeutic benefits.
              </p>
            </div>
          </div>

          {/* Ancient Therapies Card */}
          <div style={{
            flex: '1',
            maxWidth: '350px',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Image */}
            <div style={{ height: '250px', backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
              <img
                src="./image-27.png"
                alt="Ancient Therapies"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback design if image fails to load */}
              <div style={{
                display: 'none',
                width: '100%',
                height: '100%',
                backgroundColor: '#f3f4f6',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '16px',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Ancient Therapies</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '16px',
                textAlign: 'center',
                textTransform: 'uppercase'
              }}>
                ANCIENT THERAPIES
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                A symphony of nature's gentle elixirs- the pinnacle of rejuvenation. From the ancient art of Thai massage to Ayurvedic treatments, our massage menu is a transcendent journey across the world of wellness.
              </p>
            </div>
          </div>

          {/* Foot Recovery Card */}
          <div style={{
            flex: '1',
            maxWidth: '350px',
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Image */}
            <div style={{ height: '250px', backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
              <img
                src="./image-28.png"
                alt="Foot Recovery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback design if image fails to load */}
              <div style={{
                display: 'none',
                width: '100%',
                height: '100%',
                backgroundColor: '#f3f4f6',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '16px',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Foot Recovery</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '24px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '16px',
                textAlign: 'center',
                textTransform: 'uppercase'
              }}>
                FOOT RECOVERY
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                With all the exploration Odisha has to offer, your feet are bound to need an invigorating recovery treatment. Reward yourself with a pampering foot massage, designed to boost circulation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Experiences Section */}
      <div style={{ marginTop: '80px' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            FEATURED EXPERIENCES
          </h2>
        </div>

        {/* Large Featured Card */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            {/* Image */}
            <div style={{ height: '400px', backgroundColor: '#f3f4f6', overflow: 'hidden' }}>
              <img
                src="./image-29.png"
                alt="Yoga in the Lap of Nature"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback design if image fails to load */}
              <div style={{
                display: 'none',
                width: '100%',
                height: '100%',
                backgroundColor: '#f3f4f6',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280',
                fontSize: '16px',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <svg width="48" height="48" fill="none" stroke="#6b7280" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Yoga in the Lap of Nature</span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '32px' }}>
              <h3 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#111827',
                marginBottom: '16px',
                textAlign: 'center',
                textTransform: 'uppercase'
              }}>
                YOGA IN THE LAP OF NATURE
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#374151',
                lineHeight: '1.6',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Experience the ultimate connection between mind, body, and nature with our signature yoga sessions. Set against the breathtaking backdrop of Rambha Palace's lush gardens and serene landscapes, each session is designed to harmonize your inner self with the natural world around you. Our expert instructors guide you through ancient practices while the gentle breeze and natural sounds create a truly immersive wellness experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MANTNAM Section */}
            <div
        style={{
          marginTop: "80px",
          backgroundColor: "#ebc9c4",
          padding: "80px 24px",
          width: "100vw",   // full viewport width
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "64px",
      width: "100%",  // stretch
      justifyContent: "space-between",
    }}
  >
    {/* Left Content */}
    <div style={{ flex: 1 , marginLeft: "200px"}} >
      <h3
        style={{
          fontSize: "12px",
          fontWeight: "400",
          color: "#F1ECE5",
          marginBottom: "16px",
          fontStyle: "italic",
          fontFamily: '"Montserrat", sans-serif',
          textTransform: "uppercase",
        }}
      >
        Ancient wisdom and modern techniques
      </h3>
      <h2
        style={{
          fontSize: "20px",
          fontFamily: '"Montserrat", sans-serif',
          fontWeight: "600",
          color: "#000000",
          marginBottom: "24px",
          textTransform: "uppercase",
        }}
      >
        MANTNAM
      </h2>
      <p
        style={{
          fontFamily: '"Lato"',
          fontSize: "14px",
          fontWeight: "400",
          textAlign: "justify",
          color: "#7A7A7A",
          lineHeight: "1.6",
          maxWidth: "600px", // optional: control text width
        }}
      >
        Mantnam conceptualises wellness as a holistic endeavour. Its attainment
        requires an equilibrium of mind, body and soul through recalibration
        and training. Combining ancient techniques and modern equipment, it
        provides a space which can be used to accomplish various goals for
        guests-anti-aging, detoxing, muscle strengthening, flexibility,
        de-stressing, and beautifying your body from the inside out.
      </p>
    </div>

    {/* Right Image */}
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src="./image-30.png"
        alt="Mantnam Logo"
        style={{
          width: "100%",     // responsive
          maxWidth: "500px", // optional
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  </div>
</div>


    </>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'rgb(241,236,229)' }}>
      {/* Browser Interface - REMOVED */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '8px 16px', display: 'none', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{ padding: '4px', borderRadius: '4px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button style={{ padding: '4px', borderRadius: '4px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button style={{ padding: '4px', borderRadius: '4px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
        <div style={{ flex: 1, margin: '0 16px' }}>
          <div style={{ backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '4px 12px', fontSize: '14px', color: '#4b5563' }}>
            {currentPage === 'home' ? 'localhost:3000/' : 
             currentPage === 'accommodation' ? 'localhost:3000/accommodation/' :
             currentPage === 'experiences' ? 'localhost:3000/experiences/' :
             currentPage === 'dining' ? 'localhost:3000/dining/' :
             currentPage === 'wellness' ? 'localhost:3000/wellness/' :
             currentPage === 'contact' ? 'localhost:3000/contact/' :
             currentPage === 'palace-suite' ? 'localhost:3000/palace-suite/' :
             currentPage === 'palace-family-suite' ? 'localhost:3000/palace-family-suite/' :
             currentPage === 'generator-suite' ? 'localhost:3000/generator-suite/' :
             'localhost:3000/'}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{ padding: '4px', borderRadius: '4px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button style={{ padding: '4px', borderRadius: '4px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </button>
          <button style={{ padding: '4px', borderRadius: '4px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button style={{ padding: '4px', borderRadius: '4px' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Website Header - Light Beige Background */}
      <header style={{ backgroundColor: 'rgb(241,236,229)', padding: '20px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            height: '80px',
            position: 'relative'
          }}>
            {/* Menu Button */}
            <button style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              color: '#4b5563',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '12px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease'
            }}>
              <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span style={{ 
                fontFamily: '"Lato", Sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                color: '#000000',
                letterSpacing: '0.5px'
              }}>Menu</span>
            </button>
            
            {/* Logo - Hidden India - Centered */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
              <img 
                fetchPriority="high" 
                width="1024" 
                height="114" 
                src="https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/hidden-india-logo.png" 
                className="attachment-large size-large wp-image-2367" 
                alt="Hidden India Logo" 
                srcSet="https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/hidden-india-logo-1024x114.png 1024w, https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/hidden-india-logo-300x33.png 300w, https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/hidden-india-logo-768x86.png 768w, https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/hidden-india-logo-1536x171.png 1536w, https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/hidden-india-logo-2048x228.png 2048w" 
                sizes="(max-width: 1024px) 100vw, 1024px"
                style={{ 
                  height: 'auto',
                  maxWidth: '220px',
                  width: 'auto'
                }}
              />
            </div>
            
            {/* Book Now Button */}
            <button style={{ 
              border: '1px solid #000000', 
              padding: '12px 24px', 
              fontSize: '14px', 
              fontWeight: '500',
              backgroundColor: 'transparent',
              color: '#000000',
              cursor: 'pointer',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              fontFamily: '"Lato", Sans-serif',
              letterSpacing: '0.5px'
            }}>
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar - Light Pink Background */}
      <nav style={{ 
        backgroundColor: '#ebc9c4',
        position: isHeaderSticky ? 'fixed' : 'relative',
        top: isHeaderSticky ? '0' : 'auto', // Position at the top when sticky
        left: '0',
        right: '0',
        zIndex: isHeaderSticky ? '1000' : 'auto',
        boxShadow: isHeaderSticky ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
            {/* Logo - Show when header is sticky */}
            {isHeaderSticky && (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <img 
                  width="768" 
                  height="377" 
                  src="https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/TigerBlack-768x377.png" 
                  alt="Rambha Palace Logo" 
                  style={{ 
                    height: '35px',
                    width: 'auto',
                    maxWidth: '100px'
                  }}
                />
              </div>
            )}
            
            {/* Navigation Links - Centered when no logo, left-aligned when logo is present */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: isHeaderSticky ? 'flex-start' : 'center', 
              gap: '16px',
              flex: isHeaderSticky ? '1' : 'auto',
              marginLeft: isHeaderSticky ? '16px' : '0'
            }}>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
                style={{ 
                  color: '#050505', 
                  fill: '#050505', 
                  paddingLeft: '15px', 
                  paddingRight: '15px', 
                  fontFamily: '"Lato", Sans-serif', 
                  fontSize: '14px', 
                  fontWeight: currentPage === 'home' ? '700' : '500', 
                  wordSpacing: '2px' 
                }}
              >
                Rambha Palace
              </a>
              <span style={{ 
                color: '#9ca3af', 
                fontWeight: currentPage === 'home' ? 'black' : 'normal' 
              }}>{'>'}</span>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('accommodation'); }}
                style={{ 
                  color: '#000000', 
                  fill: '#000000', 
                  paddingLeft: '13px', 
                  paddingRight: '25px', 
                  fontFamily: '"Lato", Sans-serif', 
                  fontSize: '14px', 
                  fontWeight: currentPage === 'accommodation' ? '700' : '500', 
                  wordSpacing: '2px' 
                }}
              >
                Accommodation
              </a>
              <span style={{ color: 'black' }}>•</span>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('experiences'); }}
                style={{ 
                  color: '#000000', 
                  fill: '#000000', 
                  paddingLeft: '13px', 
                  paddingRight: '25px', 
                  fontFamily: '"Lato", Sans-serif', 
                  fontSize: '14px', 
                  fontWeight: currentPage === 'experiences' ? '700' : '500', 
                  wordSpacing: '2px' 
                }}
              >
                Experiences
              </a>
              <span style={{ color: 'black' }}>•</span>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('dining'); }}
                style={{ 
                  color: '#000000', 
                  fill: '#000000', 
                 paddingLeft: '13px', 
                  paddingRight: '25px',
                  fontFamily: '"Lato", Sans-serif', 
                  fontSize: '14px', 
                  fontWeight: currentPage === 'dining' ? '700' : '500', 
                  wordSpacing: '2px' 
                }}
              >
                Dining
              </a>
              <span style={{ color: 'black' }}>•</span>
              <a 
                href="/wellness" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('wellness'); }}
                style={{ 
                  color: '#000000', 
                  fill: '#000000', 
                  paddingLeft: '13px', 
                  paddingRight: '25px',
                  fontFamily: '"Lato", Sans-serif', 
                  fontSize: '14px', 
                  fontWeight: currentPage === 'wellness' ? '700' : '500', 
                  wordSpacing: '2px' 
                }}
              >
                Wellness
              </a>
              <span style={{ color: 'black' }}>•</span>
                          <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
                style={{ 
                  color: '#000000', 
                  fill: '#000000', 
                  paddingLeft: '13px', 
                  paddingRight: '25px', 
                  fontFamily: '"Lato", Sans-serif', 
                  fontSize: '14px', 
                  fontWeight: currentPage === 'contact' ? '700' : '500', 
                  wordSpacing: '2px' 
                }}
              >
                Contact Us
              </a>
            </div>
            
            {/* Right side spacer when logo is present */}
            {isHeaderSticky && (
              <div style={{ width: '100px' }}></div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '32px 16px',
        paddingTop: isHeaderSticky ? '80px' : '32px', // Add extra padding when navigation is sticky
        transition: 'padding-top 0.3s ease'
      }}>
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'accommodation' && renderAccommodationPage()}
        {currentPage === 'experiences' && renderExperiencesPage()}
        {currentPage === 'wildlife' && renderWildlifePage()}
        {currentPage === 'dining' && renderDiningPage()}
        {currentPage === 'wellness' && renderWellnessPage()}
        {currentPage === 'contact' && renderContactPage()}
        {currentPage === 'palace-suite' && renderPalaceSuitePage()}
        {currentPage === 'palace-family-suite' && renderPalaceFamilySuitePage()}
        {currentPage === 'generator-suite' && renderGeneratorSuitePage()}
        {currentPage === 'ice-mill-suite' && renderIceMillSuitePage()}
        {currentPage === 'printing-press-suite' && renderPrintingPressSuitePage()}
        {(currentPage === 'overview' || currentPage === 'rambha-villa') && renderAccommodationPage()}
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#AFACA8', 
        padding: '64px 0 32px 0',
        color: '#334155',
        marginTop: '64px'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr', 
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Left Column - Hidden India Properties */}
            <div style={{marginLeft: '48px'}}>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#FFFFFF', 
                font:'16px Lato, sans-serif',
                marginBottom: '24px',
                textTransform: 'uppercase'
              }}>
                Hidden India Properties
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ color: 'white', fontSize: '14px' }}>
                    Mahavan, Kanha, Madhya Pradesh
                  </span>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ color: 'white', fontSize: '14px' }}>
                    Sariska Lodge, Sariska, Rajasthan
                  </span>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ color: 'white', fontSize: '14px' }}>
                    Bijapur Lodge, Jawai, Rajasthan
                  </span>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ color: 'white', fontSize: '14px' }}>
                    Oceannaire, Goa
                  </span>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <span style={{ color: 'white', fontSize: '14px' }}>
                    Long House, Goa
                  </span>
                </li>
              </ul>
            </div>

            {/* Middle Column - Contact Us and Follow Us */}
            <div>
              {/* Contact Us */}
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#FFFFFF', 
                font:'16px Lato, sans-serif',
                marginBottom: '24px',
                textTransform: 'uppercase'
                }}>
                  Contact Us
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '12px' }}>
                    <a 
                      href="tel:917800208002" 
                      style={{ 
                        color: 'white', 
                        fontSize: '14px',
                        textDecoration: 'none'
                      }}
                    >
                      Tel: +91 7800 208 002
                    </a>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <a 
                      href="mailto:reservations@hiddenindia.com" 
                      style={{ 
                        color: 'white', 
                        fontSize: '14px',
                        textDecoration: 'none'
                      }}
                    >
                      Email: reservations@hiddenindia.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us */}
              <div>
                <p style={{ 
                  font:'12px Lato, sans-serif',
                  fontWeight: 'bold', 
                  color: 'white', 
                  marginBottom: '24px',
                  textTransform: 'uppercase'
                }}>
                  Follow Us
                </p>
                <div style={{ 
                  display: 'flex', 
                  gap: '16px',
                  alignItems: 'center'
                }}>
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/hiddenindiaexperiences/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      // display: 'flex',
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      // width: '40px',
                      // height: '40px',
                      // backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      // borderRadius: '50%',
                      // textDecoration: 'none'
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><path d="M24 12.5777C24 10.4649 23.4915 8.49457 22.4746 6.66681C21.4743 4.88936 20.1156 3.45567 18.3984 2.36572C16.6479 1.24224 14.7223 0.625998 12.6217 0.517004C10.5211 0.408009 8.53725 0.823027 6.67005 1.76206C4.85286 2.66755 3.36077 3.95033 2.19377 5.6104C0.993429 7.32078 0.284893 9.22399 0.0681646 11.32C-0.148564 13.4161 0.151522 15.4283 0.968422 17.3567C1.76865 19.218 2.96899 20.7858 4.56945 22.0602C6.20325 23.3514 8.05378 24.1646 10.121 24.5V16.0739H7.07016V12.5777H10.121V9.9115C10.121 8.41911 10.5295 7.26209 11.3464 6.44044C12.1633 5.61879 13.2636 5.20796 14.6473 5.20796C15.5476 5.22473 16.4478 5.30857 17.3481 5.45949V8.42749H15.8227C15.5726 8.39396 15.3184 8.41911 15.0599 8.50295C14.8015 8.58679 14.5806 8.72094 14.3973 8.90539C14.2139 9.08985 14.0763 9.30364 13.9846 9.54678C13.8929 9.78993 13.8554 10.0456 13.8721 10.3139V12.5777H17.1981L16.6729 16.0739H13.8721V24.5C15.7893 24.1982 17.5315 23.4687 19.0986 22.3117C20.6157 21.1882 21.8077 19.7881 22.6746 18.1112C23.5582 16.3673 24 14.5228 24 12.5777Z" fill="white"></path></svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/_hiddenindia_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      // display: 'flex',
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      // width: '40px',
                      // height: '40px',
                      // backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      // borderRadius: '50%',
                      // textDecoration: 'none'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none">
                      <path d="M12 2.65C13.5333 2.65 14.5833 2.65833 15.15 2.675C15.6167 2.675 16.1833 2.69167 16.85 2.725C17.6167 2.74167 18.3583 2.88333 19.075 3.15C19.6083 3.33333 20.075 3.625 20.475 4.025C20.875 4.425 21.1667 4.89167 21.35 5.425C21.6167 6.14167 21.7583 6.88333 21.775 7.65C21.8083 8.33333 21.825 8.9 21.825 9.35C21.8417 9.93333 21.85 10.9875 21.85 12.5125C21.85 14.0375 21.8417 15.0833 21.825 15.65C21.825 16.1167 21.8083 16.6833 21.775 17.35C21.7583 18.1167 21.6167 18.8583 21.35 19.575C21.15 20.1083 20.8542 20.5708 20.4625 20.9625C20.0708 21.3542 19.6083 21.65 19.075 21.85C18.3583 22.1167 17.6167 22.2583 16.85 22.275C16.1833 22.3083 15.6167 22.325 15.15 22.325C14.5833 22.3417 13.5333 22.35 12 22.35C10.4667 22.35 9.41667 22.3417 8.85 22.325C8.38333 22.325 7.81667 22.3083 7.15 22.275C6.38333 22.2583 5.64167 22.1167 4.925 21.85C4.40833 21.65 3.95 21.3542 3.55 20.9625C3.15 20.5708 2.85 20.1083 2.65 19.575C2.38333 18.8583 2.24167 18.1167 2.225 17.35C2.19167 16.6667 2.175 16.1 2.175 15.65C2.15833 15.0667 2.15 14.0125 2.15 12.4875C2.15 10.9625 2.15833 9.91667 2.175 9.35C2.175 8.88333 2.19167 8.31667 2.225 7.65C2.24167 6.88333 2.38333 6.14167 2.65 5.425C2.83333 4.89167 3.125 4.425 3.525 4.025C3.925 3.625 4.39167 3.33333 4.925 3.15C5.64167 2.88333 6.38333 2.74167 7.15 2.725C7.83333 2.69167 8.4 2.675 8.85 2.675C9.43333 2.65833 10.4833 2.65 12 2.65ZM12 0.5C10.45 0.5 9.375 0.508333 8.775 0.525C8.30833 0.525 7.73333 0.541666 7.05 0.574999C6.05 0.591667 5.08333 0.775 4.15 1.125C3.33333 1.44167 2.61667 1.90417 2 2.5125C1.38333 3.12083 0.925 3.83333 0.625 4.65C0.275 5.58333 0.0916667 6.55 0.075 7.55C0.0416667 8.23333 0.025 8.80833 0.025 9.275C0.00833333 9.875 0 10.95 0 12.5C0 14.05 0.00833333 15.125 0.025 15.725C0.025 16.1917 0.0416667 16.7667 0.075 17.45C0.0916667 18.45 0.275 19.4167 0.625 20.35C0.941667 21.1667 1.40417 21.8792 2.0125 22.4875C2.62083 23.0958 3.33333 23.5583 4.15 23.875C5.08333 24.225 6.05 24.4083 7.05 24.425C7.73333 24.4583 8.31667 24.475 8.8 24.475C9.38333 24.4917 10.4542 24.5 12.0125 24.5C13.5708 24.5 14.6417 24.4917 15.225 24.475C15.6917 24.475 16.2667 24.4583 16.95 24.425C17.95 24.4083 18.925 24.225 19.875 23.875C20.675 23.5583 21.3792 23.0958 21.9875 22.4875C22.5958 21.8792 23.0583 21.1667 23.375 20.35C23.725 19.4167 23.9083 18.45 23.925 17.45C23.9583 16.7667 23.9833 16.1917 24 15.725C24 15.125 24 14.05 24 12.5C24 10.95 24 9.875 24 9.275C23.9833 8.80833 23.9583 8.23333 23.925 7.55C23.9083 6.55 23.725 5.58333 23.375 4.65C23.0583 3.83333 22.5958 3.12083 21.9875 2.5125C21.3792 1.90417 20.675 1.44167 19.875 1.125C18.925 0.775 17.95 0.591667 16.95 0.574999C16.25 0.541666 15.675 0.525 15.225 0.525C14.6083 0.508333 13.5333 0.5 12 0.5ZM12 6.35C10.8833 6.35 9.85417 6.625 8.9125 7.175C7.97083 7.725 7.225 8.47083 6.675 9.4125C6.125 10.3542 5.85 11.3833 5.85 12.5C5.85 13.6167 6.125 14.6458 6.675 15.5875C7.225 16.5292 7.97083 17.275 8.9125 17.825C9.85417 18.375 10.8833 18.65 12 18.65C13.1167 18.65 14.1458 18.375 15.0875 17.825C16.0292 17.275 16.775 16.5292 17.325 15.5875C17.875 14.6458 18.15 13.6167 18.15 12.5C18.15 11.3833 17.875 10.3542 17.325 9.4125C16.775 8.47083 16.0292 7.725 15.0875 7.175C14.1458 6.625 13.1167 6.35 12 6.35ZM12 16.5C11.2833 16.5 10.6167 16.3208 10 15.9625C9.38333 15.6042 8.89583 15.1167 8.5375 14.5C8.17917 13.8833 8 13.2167 8 12.5C8 11.7833 8.17917 11.1167 8.5375 10.5C8.89583 9.88333 9.38333 9.39583 10 9.0375C10.6167 8.67917 11.2833 8.5 12 8.5C12.7167 8.5 13.3833 8.67917 14 9.0375C14.6167 9.39583 15.1042 9.88333 15.4625 10.5C15.8208 11.1167 16 11.7833 16 12.5C16 13.2167 15.8208 13.8833 15.4625 14.5C15.1042 15.1167 14.6167 15.6042 14 15.9625C13.3833 16.3208 12.7167 16.5 12 16.5ZM18.4 4.65C18.7 4.65 18.9708 4.73333 19.2125 4.9C19.4542 5.06667 19.6292 5.28333 19.7375 5.55C19.8458 5.81667 19.8708 6.09167 19.8125 6.375C19.7542 6.65833 19.625 6.90417 19.425 7.1125C19.225 7.32083 18.9792 7.45417 18.6875 7.5125C18.3958 7.57083 18.1167 7.54167 17.85 7.425C17.5833 7.30833 17.3708 7.12917 17.2125 6.8875C17.0542 6.64583 16.975 6.38333 16.975 6.1C16.975 5.7 17.1125 5.35833 17.3875 5.075C17.6625 4.79167 18 4.65 18.4 4.65Z" fill="white"/>
                    </svg>
                  </a>

                  {/* Pinterest */}
                  <a 
                    href="https://in.pinterest.com/HiddenIndiaexperiences/_saved/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      // display: 'flex',
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      // width: '40px',
                      // height: '40px',
                      // backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      // borderRadius: '50%',
                      // textDecoration: 'none'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none">
                      <path d="M22.3912 6.47651C21.3181 4.63807 19.8625 3.18246 18.024 2.1094C16.1855 1.03639 14.1778 0.5 12.0005 0.5C9.82331 0.5 7.81544 1.03639 5.977 2.1094C4.13829 3.18229 2.68268 4.63791 1.60967 6.47651C0.536393 8.31522 0 10.3229 0 12.5001C0 14.9273 0.661393 17.1308 1.98434 19.1095C3.30724 21.0892 5.04164 22.5526 7.18754 23.5005C7.14584 22.386 7.21359 21.4641 7.39053 20.735L8.93754 14.2032C8.67703 13.6927 8.54683 13.0578 8.54683 12.297C8.54683 11.4118 8.77061 10.6722 9.21862 10.0782C9.66663 9.48444 10.2134 9.18759 10.8593 9.18759C11.38 9.18759 11.781 9.35944 12.0624 9.70313C12.3438 10.047 12.484 10.4792 12.484 11.0002C12.484 11.3229 12.4239 11.7163 12.304 12.1798C12.1843 12.6434 12.0282 13.1799 11.8355 13.7893C11.6428 14.3986 11.5046 14.8859 11.4214 15.2501C11.2756 15.8854 11.3953 16.4297 11.7808 16.8831C12.1662 17.3362 12.6768 17.563 13.3123 17.563C14.4268 17.563 15.3408 16.9433 16.0545 15.7038C16.7681 14.4639 17.1247 12.9587 17.1247 11.1879C17.1247 9.8231 16.6846 8.71364 15.8041 7.85971C14.9238 7.00546 13.6973 6.57814 12.1243 6.57814C10.3641 6.57814 8.9395 7.14332 7.85096 8.27352C6.76235 9.40388 6.21808 10.7556 6.21808 12.3284C6.21808 13.266 6.48373 14.0526 7.01493 14.6879C7.19197 14.8961 7.24933 15.1201 7.18677 15.3599C7.16592 15.4224 7.12433 15.5786 7.06177 15.8284C6.99949 16.0783 6.95762 16.2401 6.93694 16.3128C6.85369 16.6462 6.65563 16.7503 6.34313 16.6252C5.54114 16.2922 4.93163 15.7139 4.51509 14.8909C4.09839 14.068 3.88999 13.1147 3.88999 12.0316C3.88999 11.3337 4.00202 10.6358 4.22602 9.93792C4.4498 9.2398 4.79892 8.56544 5.27275 7.91433C5.74687 7.26307 6.31457 6.68749 6.97607 6.18771C7.6373 5.68776 8.44208 5.28677 9.39003 4.98467C10.338 4.68256 11.3587 4.53151 12.4526 4.53151C13.932 4.53151 15.2599 4.85961 16.4368 5.51586C17.6141 6.17216 18.5124 7.021 19.1323 8.06276C19.7522 9.10457 20.062 10.2192 20.062 11.4067C20.062 12.9692 19.7912 14.3754 19.2497 15.6255C18.7081 16.8755 17.9424 17.8572 16.9526 18.5706C15.9629 19.2844 14.838 19.6412 13.5772 19.6412C12.942 19.6412 12.3482 19.4926 11.7959 19.1959C11.244 18.8989 10.8636 18.5476 10.6554 18.1412C10.1866 19.9847 9.9053 21.0839 9.81149 21.438C9.6136 22.1773 9.2074 23.0316 8.59269 24.0003C9.70735 24.3337 10.8427 24.5 11.999 24.5C14.1761 24.5 16.1841 23.9636 18.0225 22.8904C19.8611 21.8176 21.3167 20.362 22.3895 18.5236C23.4625 16.6848 23.9989 14.6769 23.9989 12.4999C23.9995 10.3229 23.4638 8.31495 22.3912 6.47651Z" fill="white"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/hidden-india" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      // display: 'flex',
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      // width: '40px',
                      // height: '40px',
                      // backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      // borderRadius: '50%',
                      // textDecoration: 'none'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none">
                      <path d="M20.7273 0.5H3.27273C2.40475 0.5 1.57232 0.844804 0.95856 1.45856C0.344804 2.07232 0 2.90475 0 3.77273L0 21.2273C0 22.0953 0.344804 22.9277 0.95856 23.5414C1.57232 24.1552 2.40475 24.5 3.27273 24.5H20.7273C21.5953 24.5 22.4277 24.1552 23.0414 23.5414C23.6552 22.9277 24 22.0953 24 21.2273V3.77273C24 2.90475 23.6552 2.07232 23.0414 1.45856C22.4277 0.844804 21.5953 0.5 20.7273 0.5ZM8.18182 19.4927C8.182 19.5593 8.16904 19.6252 8.1437 19.6867C8.11836 19.7483 8.08112 19.8042 8.03412 19.8513C7.98713 19.8985 7.9313 19.9359 7.86983 19.9614C7.80836 19.9869 7.74246 20 7.67591 20H5.52C5.45333 20.0002 5.38729 19.9872 5.32566 19.9618C5.26404 19.9363 5.20804 19.899 5.1609 19.8518C5.11376 19.8047 5.0764 19.7487 5.05097 19.6871C5.02555 19.6254 5.01255 19.5594 5.01273 19.4927V10.4545C5.01273 10.32 5.06617 10.191 5.1613 10.0958C5.25644 10.0007 5.38546 9.94727 5.52 9.94727H7.67591C7.81021 9.94763 7.93889 10.0012 8.03372 10.0963C8.12856 10.1914 8.18182 10.3202 8.18182 10.4545V19.4927ZM6.59727 9.09091C6.19272 9.09091 5.79725 8.97095 5.46088 8.74619C5.12451 8.52143 4.86234 8.20197 4.70752 7.82822C4.5527 7.45446 4.5122 7.04319 4.59112 6.64641C4.67005 6.24963 4.86486 5.88516 5.15092 5.5991C5.43698 5.31304 5.80145 5.11823 6.19822 5.0393C6.595 4.96038 7.00628 5.00089 7.38003 5.1557C7.75379 5.31052 8.07325 5.57269 8.29801 5.90906C8.52276 6.24543 8.64273 6.6409 8.64273 7.04545C8.64273 7.58794 8.42723 8.10821 8.04363 8.49181C7.66003 8.87541 7.13976 9.09091 6.59727 9.09091ZM19.4509 19.5282C19.4511 19.5895 19.4391 19.6502 19.4158 19.7069C19.3924 19.7635 19.3581 19.815 19.3147 19.8584C19.2714 19.9017 19.2199 19.936 19.1632 19.9594C19.1066 19.9828 19.0458 19.9947 18.9845 19.9945H16.6664C16.6051 19.9947 16.5443 19.9828 16.4877 19.9594C16.431 19.936 16.3795 19.9017 16.3362 19.8584C16.2929 19.815 16.2585 19.7635 16.2351 19.7069C16.2118 19.6502 16.1998 19.5895 16.2 19.5282V15.2941C16.2 14.6614 16.3855 12.5232 14.5459 12.5232C13.1209 12.5232 12.8305 13.9864 12.7732 14.6436V19.5336C12.7732 19.6562 12.725 19.7738 12.639 19.861C12.553 19.9483 12.4361 19.9982 12.3136 20H10.0745C10.0134 20 9.95279 19.9879 9.89628 19.9645C9.83978 19.941 9.78846 19.9066 9.74526 19.8633C9.70206 19.82 9.66784 19.7686 9.64455 19.712C9.62126 19.6554 9.60937 19.5948 9.60955 19.5336V10.415C9.60937 10.3538 9.62126 10.2932 9.64455 10.2366C9.66784 10.1801 9.70206 10.1286 9.74526 10.0853C9.78846 10.042 9.83978 10.0076 9.89628 9.98416C9.95279 9.96071 10.0134 9.94864 10.0745 9.94864H12.3136C12.4373 9.94864 12.5559 9.99777 12.6434 10.0852C12.7309 10.1727 12.78 10.2913 12.78 10.415V11.2032C13.3091 10.4082 14.0932 9.79727 15.7664 9.79727C19.4727 9.79727 19.4482 13.2582 19.4482 15.1591L19.4509 19.5282Z" fill="white"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a 
                    href="https://www.youtube.com/@hiddenindiaexperiences" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      // display: 'flex',
                      // alignItems: 'center',
                      // justifyContent: 'center',
                      // width: '40px',
                      // height: '40px',
                      // backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      // borderRadius: '50%',
                      // textDecoration: 'none'
                    }}
                  >
                    <svg width="24" height="20" viewBox="0 0 32 25" fill="none">
                      <path d="M31.3015 4.25C31.124 3.5119 30.7803 2.86905 30.2703 2.32143C29.7602 1.77381 29.1615 1.40476 28.474 1.21428C27.4317 0.92857 25.0367 0.726189 21.289 0.607141C19.4262 0.535713 17.6632 0.499998 16 0.499998L13.3056 0.535713C11.2211 0.559523 9.40263 0.619047 7.85031 0.714285C5.69924 0.833332 4.2578 0.999998 3.52599 1.21428C2.83853 1.40476 2.23978 1.77381 1.72973 2.32143C1.21968 2.86905 0.875953 3.5119 0.698545 4.25C0.232848 6.98809 0 9.73809 0 12.5C0 15.2619 0.232848 18.0119 0.698545 20.75C0.875953 21.4881 1.21968 22.131 1.72973 22.6786C2.23978 23.2262 2.83853 23.5952 3.52599 23.7857C4.2578 24 5.69924 24.1667 7.85031 24.2857C9.40263 24.381 11.2211 24.4405 13.3056 24.4643L16 24.5L18.6944 24.4643C20.7789 24.4405 22.5974 24.381 24.1497 24.2857C26.3008 24.1667 27.7422 24 28.474 23.7857C29.1615 23.5952 29.7602 23.2262 30.2703 22.6786C30.7803 22.131 31.124 21.4881 31.3015 20.75C31.7672 18.0119 32 15.2619 32 12.5C32 9.73809 31.7672 6.98809 31.3015 4.25ZM12.8067 17.6429V7.35714L21.0894 12.5L12.8067 17.6429Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Hidden India Logo and Copyright */}
            <div style={{ textAlign: 'right' }}>
              {/* Hidden India Logo */}
              <div style={{ marginBottom: '24px' }}>
                <img 
                  src="https://hiddenindia.com/rambhapalace/wp-content/uploads/2024/11/HiddenIndia-WhiteLogo.svg" 
                  alt="Hidden India Logo"
                  style={{ 
                    width: '318px', 
                    height: 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>
              
              {/* Copyright */}
              <div style={{ marginBottom: '16px' }}>
                <h2 style={{ 
                  fontSize: '14px', 
                  fontWeight: '400', 
                  color: '#FFFFFF',
                  font:'13px Lato, sans-serif',
                  margin: 0,
                  textAlign:'left',
                  maxWidth:'696px'
                }}>
                  COPYRIGHT 2024,Hidden India EXPERIENCES PRIVATE LIMITED.
                </h2>
              </div>
              
              {/* Language Selector */}
              <div>
                <h2 style={{ 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  color: '#FFFFFF',
                  font:'16px Lato, sans-serif',
                  margin: 0,
                  marginTop: '64px',
                  marginRight: '48px'

                }}>
                  English
                </h2>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
