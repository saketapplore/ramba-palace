import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('overview');

  const renderHomePage = () => (
    <>
      {/* Large Forest Image */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ aspectRatio: '16/9', backgroundColor: '#1f2937', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1f2937 0%, #374151 50%, #4b5563 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              {/* Forest effect with light rays */}
              <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', background: 'radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.3) 0%, transparent 50%)' }}></div>
              <div style={{ position: 'absolute', top: '20%', left: '10%', width: '200px', height: '300px', background: 'linear-gradient(45deg, #374151 0%, #4b5563 100%)', borderRadius: '50% 50% 0 0', opacity: '0.7' }}></div>
              <div style={{ position: 'absolute', top: '30%', right: '15%', width: '150px', height: '250px', background: 'linear-gradient(45deg, #4b5563 0%, #6b7280 100%)', borderRadius: '50% 50% 0 0', opacity: '0.6' }}></div>
              <div style={{ position: 'absolute', bottom: '20%', left: '20%', width: '180px', height: '200px', background: 'linear-gradient(45deg, #1f2937 0%, #374151 100%)', borderRadius: '50% 50% 0 0', opacity: '0.8' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Rambha Palace Emblem and Content */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        {/* Shield-like Emblem with Crown */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
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
        
        {/* Title */}
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>RAMBHA PALACE</h1>
        <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '4px' }}>CHILIKA LAKE, ODISHA</p>
        
        {/* HIDDEN INDIA Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '16px' }}>
          <span style={{ color: '#9ca3af', fontSize: '16px', fontWeight: '300' }}>HIDDEN</span>
          <div style={{ width: '24px', height: '18px' }}>
            <svg style={{ width: '24px', height: '18px' }} viewBox="0 0 32 24" fill="none">
              <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="#d97706"/>
              <path d="M6 8c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#92400E"/>
              <path d="M18 8c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#92400E"/>
              <path d="M12 16c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z" fill="#92400E"/>
              <path d="M4 6c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#D97706"/>
              <path d="M20 6c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#D97706"/>
            </svg>
          </div>
          <span style={{ color: '#6b7280', fontSize: '16px', fontWeight: '300' }}>INDIA</span>
        </div>
      </div>

      {/* Description */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', color: '#374151', lineHeight: '1.6' }}>
        <p style={{ fontSize: '18px', marginBottom: '24px', textAlign: 'center' }}>
          A hidden gem on the east coast of India, Rambha Palace is a 200-year-old residence of the King of Khallikote 
          that underwent a meticulous six-year restoration. Nestled on the banks of the Chilika Lake, this majestic palace 
          offers serene views of calm waters and lush wetlands. With its stately courtyards and grand hallways, opulent suites, 
          and palace gardens teeming with vibrant birdlife, Rambha Palace stands as a testament to royal heritage and natural beauty.
        </p>
        
        <p style={{ fontSize: '18px', textAlign: 'center' }}>
          This peaceful retreat, with its proximity to sacred temples and a wellness center that seamlessly blends the elegance 
          of a bygone era with an intimate experience of ancient healing practices, offers guests a truly transformative experience 
          where luxury meets tradition in perfect harmony.
        </p>
      </div>
    </>
  );

  const renderAccommodationPage = () => (
    <>
      {/* Main Title */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#374151', marginBottom: '16px' }}>Accommodation</h1>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', gap: '0' }}>
          {['Overview', 'Rambha Villa', 'Palace Suite', 'Palace Family Suite', 'Generator Suite', 'Ice Mill Suite', 'Printing Press Suite'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
              style={{
                padding: '12px 24px',
                border: 'none',
                backgroundColor: 'transparent',
                color: activeTab === tab.toLowerCase().replace(' ', '-') ? '#d97706' : '#6b7280',
                fontWeight: activeTab === tab.toLowerCase().replace(' ', '-') ? '600' : '500',
                borderBottom: activeTab === tab.toLowerCase().replace(' ', '-') ? '2px solid #d97706' : 'none',
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
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#374151', marginBottom: '24px' }}>STAY AT RAMBHA</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', color: '#374151', lineHeight: '1.8', fontSize: '16px' }}>
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
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Gallery7-1-qyb3q81db4tii1y2wn42rodt1v7395l80a9w3h9ils.webp" 
              alt="Palace Suite" 
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
            {/* Fallback design for first card */}
            <div style={{ 
              display: 'none', 
              width: '100%', 
              height: '300px', 
              backgroundColor: '#8b0000',
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
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '12px' }}>PALACE SUITES</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
                Experience the luxury and grandeur of the original palace block. Once the residence of the royal family in a bygone era—unparalleled sophistication at Rambha.
              </p>
            </div>
            
            {/* Invisible Link Overlay */}
            <a 
              href="/rambhapalace/palace-suite/" 
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

          {/* Second Card - Family Palace Suite */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Gallery7-1-qyb3q81db4tii1y2wn42rodt1v7395l80a9w3h9ils.webp" 
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
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '12px' }}>FAMILY PALACE SUITE</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
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
      </div>
    </>
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf8f3' }}>
      {/* Browser Interface */}
      <div style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            {currentPage === 'home' ? 'hiddenindia.com/rambhapalace/' : 'hiddenindia.com/rambhapalace/accommodation/'}
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
      <header style={{ backgroundColor: '#faf8f3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            {/* Menu Button */}
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4b5563' }}>
              <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>Menu</span>
            </button>
            
            {/* Logo - HIDDEN INDIA with Tiger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
              <span style={{ color: '#9ca3af', fontSize: '18px', fontWeight: '300' }}>HIDDEN</span>
              {/* Tiger Graphic */}
              <div style={{ width: '32px', height: '24px' }}>
                <svg style={{ width: '32px', height: '24px' }} viewBox="0 0 32 24" fill="none">
                  <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="#d97706"/>
                  <path d="M6 8c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#92400E"/>
                  <path d="M18 8c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#92400E"/>
                  <path d="M12 16c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2z" fill="#92400E"/>
                  <path d="M4 6c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#D97706"/>
                  <path d="M20 6c0-1.1 0.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2z" fill="#D97706"/>
                </svg>
              </div>
              <span style={{ color: '#6b7280', fontSize: '18px', fontWeight: '300' }}>INDIA</span>
              {/* Golden line under logo */}
              <div style={{ position: 'absolute', bottom: '-4px', left: '50%', transform: 'translateX(-50%)', width: '64px', height: '2px', backgroundColor: '#d97706' }}></div>
            </div>
            
            {/* Book Now Button */}
            <button style={{ border: '1px solid black', padding: '8px 16px', fontSize: '14px', fontWeight: '500' }}>
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Bar - Light Pink Background */}
      <nav style={{ backgroundColor: '#fdf2f8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', padding: '12px 0' }}>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }}
              style={{ color: currentPage === 'home' ? '#d97706' : '#374151', fontWeight: '500' }}
            >
              Rambha Palace
            </a>
            <span style={{ color: '#9ca3af' }}>{'>'}</span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('accommodation'); }}
              style={{ color: currentPage === 'accommodation' ? '#d97706' : '#374151', fontWeight: '500' }}
            >
              Accommodation
            </a>
            <span style={{ color: 'black' }}>•</span>
            <a href="/experiences" style={{ color: '#374151', fontWeight: '500' }}>Experiences</a>
            <span style={{ color: 'black' }}>•</span>
            <a href="/dining" style={{ color: '#374151', fontWeight: '500' }}>Dining</a>
            <span style={{ color: 'black' }}>•</span>
            <a href="/wellness" style={{ color: '#374151', fontWeight: '500' }}>Wellness</a>
            <span style={{ color: 'black' }}>•</span>
            <a href="/contact" style={{ color: '#374151', fontWeight: '500' }}>Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 16px' }}>
        {currentPage === 'home' ? renderHomePage() : renderAccommodationPage()}
      </main>
    </div>
  );
}

export default App;
