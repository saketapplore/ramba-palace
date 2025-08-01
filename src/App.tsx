import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('overview');

  const renderHomePage = () => (
    <>
      {/* Large Video */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1024px', margin: '0 auto' }}>
          <div style={{ aspectRatio: '16/9', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
            <video 
              className="elementor-video" 
              src="https://rambhapalace.growwithwhats.app/wp-content/uploads/2024/11/Hidden_India.mp4" 
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
                width: '200px', 
                height: 'auto', 
                maxWidth: '100%',
                display: 'block',
                margin: '0 auto'
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
              width: '200px', 
              height: '200px', 
              margin: '0 auto',
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
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>RAMBHA PALACE</h1>
        <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '4px' }}>CHILIKA LAKE, ODISHA</p>
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

      {/* Experience the Luxury - ACCOMMODATION Section */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', marginTop: '64px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase' }}>Experience the Luxury</p>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#374151', marginBottom: '32px', textTransform: 'uppercase' }}>ACCOMMODATION</h2>
      </div>

      {/* The Spirit of Odisha - HIGHLIGHTS & HAPPENINGS Section */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', marginTop: '64px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase' }}>The Spirit of Odisha</p>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#374151', marginBottom: '32px', textTransform: 'uppercase' }}>HIGHLIGHTS & HAPPENINGS</h2>
      </div>

      {/* LATEST OFFERS Section */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', marginTop: '64px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#374151', marginBottom: '32px', textTransform: 'uppercase' }}>LATEST OFFERS</h2>
      </div>

      {/* EAT. PRAY. LOVE. Section */}
      <div style={{ maxWidth: '1024px', margin: '0 auto', marginTop: '64px' }}>
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
                fontSize: '28px', 
                fontWeight: 'bold', 
                color: '#374151', 
                marginBottom: '16px',
                textTransform: 'uppercase'
              }}>
                EAT. PRAY. LOVE.
              </h2>
            </div>

            {/* Description */}
            <div style={{ color: '#374151', lineHeight: '1.8', fontSize: '16px', textAlign: 'center' }}>
              <p>
                Where will your spiritual journey take you? Embark on a journey toward achieving mental peace and harmony while connecting with your spiritual self. Attune to your inner being, enhance your intuition, and forge connections with your inner self. Personalised itineraries offer you the opportunity to explore any ancient temple that captivates your spirit or sparks your spiritual curiosity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden India Playlist Section */}
      <div style={{ 
        backgroundColor: '#fdf2f8', 
        marginTop: '64px', 
        padding: '64px 0',
        width: '100%'
      }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left Section - Text Content */}
            <div>
              {/* Subtitle */}
              <p style={{ 
                fontSize: '16px', 
                color: '#92400e', 
                fontStyle: 'italic', 
                marginBottom: '8px',
                fontWeight: '400'
              }}>
                Experience Rambha with a
              </p>
              
              {/* Main Title */}
              <h2 style={{ 
                fontSize: '36px', 
                fontWeight: 'bold', 
                color: '#374151', 
                marginBottom: '24px',
                textTransform: 'uppercase'
              }}>
                HIDDEN INDIA PLAYLIST
              </h2>
              
              {/* Description */}
              <p style={{ 
                fontSize: '18px', 
                color: '#6b7280', 
                lineHeight: '1.8',
                textAlign: 'left'
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
        backgroundColor: '#faf8f3', 
        marginTop: '64px', 
        padding: '64px 0',
        width: '100%'
      }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 16px' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ 
              fontSize: '14px', 
              color: '#9ca3af', 
              marginBottom: '8px', 
              textTransform: 'uppercase'
            }}>
              Discover Hidden India
            </p>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#374151', 
              marginBottom: '32px',
              textTransform: 'uppercase'
            }}>
              FINDING RAMBHA
            </h2>
          </div>

          {/* Directions and Contact Info */}
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            textAlign: 'center', 
            marginBottom: '48px' 
          }}>
            <p style={{ 
              fontSize: '18px', 
              color: '#374151', 
              lineHeight: '1.8',
              marginBottom: '24px'
            }}>
              From Bhubaneswar Airport, guests can embark on a scenic two-and-a-half-hour drive through Odisha's lush landscapes arriving directly at the palace gates.
            </p>
            <p style={{ 
              fontSize: '18px', 
              color: '#374151', 
              lineHeight: '1.8',
              marginBottom: '32px'
            }}>
              Please contact our reservations team at{' '}
              <span style={{ color: '#d97706', fontWeight: '600' }}>reservations@hiddenindia.com</span>
              {' '}or{' '}
              <span style={{ color: '#d97706', fontWeight: '600' }}>+91 7800 208 002</span>
              {' '}to arrange your preferred transfer.
            </p>
            <a 
              href="https://maps.app.goo.gl/SkTYhSF9e2BDNjCo7" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: '#d97706', 
                textDecoration: 'underline',
                fontSize: '18px',
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
              padding: '32px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              {/* Map Container */}
              <div style={{ 
                position: 'relative',
                width: '100%',
                height: '400px',
                backgroundColor: '#f5f5dc',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                {/* India Map Outline */}
                <svg 
                  viewBox="0 0 841.89 595.276" 
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    left: '0'
                  }}
                >
                  {/* India Outline */}
                  <rect 
                    xmlns="http://www.w3.org/2000/svg" 
                    x="0" 
                    className="st0" 
                    width="841.89" 
                    height="595.276"
                    fill="#f5f5dc"
                    stroke="#a0a0a0"
                    strokeWidth="1"
                  />
                  
                  {/* Detailed India Map Path */}
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path className="st1" d="M225.496,262.524l0-0.001l0.008-0.022l0.411-0.637l0.134-0.089l0.309-0.139l0.121-0.076l0.054-0.006 l0.17,0.033l0.068-0.004l0.062-0.068l-0.042-0.074l-0.072-0.062l-0.031-0.039l0.02-0.121l-0.007-0.168l0.039-0.17l0.155-0.129 l0.174-0.033l0.063,0.079l0.041,0.147l0.106,0.177l0.245,0.111l0.236-0.102l0.206-0.225l0.156-0.25l-0.023-0.133l-0.066-0.191 l0.01-0.159l0.211-0.038l0.108,0.075l0.061,0.152l0.025,0.177l-0.004,0.149l0.55-0.4l0.797-0.127l2.009,0.016l1.704,0.012 l1.348,0.01l0.011-2.628l0.008-1.986l0.006-1.522l0.37-0.796l0.896,0.04l0.253,0.391l0.101,1.102l0.33,0.262l0.175-0.143 l0.539-1.011l0.054-0.152l0.031-0.155l0.09-0.112l0.24-0.021l0.155,0.063l0.152,0.128l0.129,0.154l0.333,0.608l0.241,0.247 l0.313,0.035l0.467-0.174l0.703-0.392l0.332-0.061l0.418,0.124l0.973,0.479l0.32,0.066l0.683-0.102l1.288-0.477l4.877,0.132 l0.505,0.23l1.352,1.438l0.761,0.381l0.941,0.114l3.508-0.05l0.759-0.167l0.625-0.531l0.188-0.346l0.418-1.18l0.185-0.309 l0.204-0.115l0.603-0.057l0.996-0.335l0.355-0.022l0.342-0.074l0.631-0.464l0.336-0.158l0.945-0.054l0.304-0.116l0.788-0.561 l1.807-0.436l0.725,0.016l0.213,0.456l-0.104,0.193l-0.298,0.199l-0.095,0.118l-0.014,0.208l0.168,0.667l0.084,0.754l0.129,0.274 l0.295,0.283l0.636,0.317l2.315,0.184l0.355-0.099l0.649-0.337l0.354-0.129l0.3-0.068l0.105-0.129l-0.225-0.315l-0.062-0.333 l0.27-0.341l1.057-0.719l0.322-0.104l0.329,0.025l0.377,0.164l0.338,0.012l0.18-0.14l0.125-0.213l0.186-0.21l0.829-0.3l0.168-0.178 l-0.134-0.473l-0.604-0.197l-0.691-0.116l-0.397-0.229l-0.048-0.138l-0.021-0.141l0.002-0.144l0.027-0.147l0.041-0.382l0.058-0.13 l0.024-0.126l-0.018-0.118l-0.064-0.107l-0.335-0.297l-0.051-0.541l0.137-0.594l0.248-0.454l1.144-0.559l0.354-0.257l-0.125-0.195 l0.521,0.102l0.743,0.504l1.6,0.459l0.22,0.016l0.284-0.016l0.268-0.2l0.225-0.117l0.277-0.09l0.448-0.077l0.241,0.043l0.386,0.182 l0.348,0.073l0.261-0.043l0.263-0.121l0.523-0.397l0.184-0.108l0.336-0.087l1.327-0.031l0.45,0.034l0.33,0.083l0.322,0.266 l0.18,0.11l0.293,0.085l0.257-0.007l1.711-0.383l0.205,0.03l0.105,0.106l0.045,0.188l0.075,0.203l0.155,0.14l0.398,0.132 l0.236,0.008l0.125-0.049l0.03-0.105l-0.02-0.252l0.005-0.12l0.068-0.149l0.136-0.138l0.266-0.123l0.182-0.031l0.161,0.019 l0.111,0.071l0.177,0.268l0.141,0.113l0.329,0.093l0.246-0.023l0.227-0.085l0.164-0.136l0.277-0.339l0.093-0.074l0.137-0.072 l0.825-0.213l0.284-0.035l0.175,0.128l0.134,0.215l0.205,0.413l0.323,0.229l1.268,0.429l0.579,0.075l1.031-0.102l0.632-0.157 l0.277-0.033l0.155,0.062l0.086,0.135l0.016,0.152l-0.021,0.112l-0.064,0.077l-0.145,0.063l-0.198,0.045l-0.811,0.061l-0.102,0.032 l-0.087,0.055l-0.061,0.078l0.027,0.13l0.114,0.165l0.343,0.298l0.237,0.136l0.245,0.066l0.204,0.003l0.273,0.032l0.134,0.06 l0.068,0.083l0.05,0.16l0.068,0.143l0.118,0.146l0.145,0.05h0.15l0.218-0.044l0.2-0.016l0.282,0.043l0.086,0.108l0.02,0.143 l-0.034,0.167l-0.005,0.037l0.023,0.194l0.055,0.143l0.175,0.32l0.15,0.347l0.145,0.215l0.136,0.081l0.138,0.016l0.114-0.032 l0.084-0.049l0.053-0.051l0.054-0.069l0.038-0.066l0.279-0.993l0.047-0.09l0.034-0.056l0.043-0.051l0.118-0.06l0.177-0.038 l0.336,0.028l0.193,0.066l0.757,0.505l0.279,0.102l0.247,0.055l0.327,0.04l0.164,0.054l0.161,0.111l0.102,0.141l0.096,0.175 l0.198,0.525l0.096,0.173l0.134,0.145l0.236,0.183l0.279,0.113l0.23,0.069l0.85,0.06l0.682,0.011l0.436,0.095l0.63,0.215 l0.239,0.009l0.23-0.062l0.434-0.304l0.091-0.105l0.064-0.097l0.036-0.113l0.012-0.095l-0.002-0.195l0.011-0.079l0.034-0.093 l0.053-0.068l0.047-0.078l0.023-0.085l0.016-0.135l0.004-0.262l0.011-0.091l0.029-0.113l0.075-0.152l0.095-0.151l0.177-0.189 l0.089-0.061l0.091-0.017l0.171-0.012l0.257-0.048l0.557-0.19l0.305-0.033l0.197,0.036l0.068,0.068l0.027,0.048l0.013,0.027 l0.041,0.132l0.023,0.145v0.412l-0.039,0.397l-0.148,0.412l-0.005,0.093l0.03,0.094l0.098,0.126l0.134,0.105l0.175,0.083 l0.873,0.303l0.134,0.013l0.105-0.037l0.114-0.096l0.182-0.109l0.125-0.012l0.139,0.07l0.07,0.146l0.011,0.202l-0.057,0.245 l-0.093,0.179l-0.132,0.134l-0.132,0.066l-0.204,0.054h-0.263l-0.241-0.027l-0.175-0.038l-0.077,0.015l-0.036,0.102l-0.018,0.171 l-0.057,0.153l-0.145,0.154l-0.15,0.115l-0.107,0.133l-0.47,1.241l-0.048,0.237l0.03,0.19l0.261,0.469l0.125,0.381l0.097,0.186 l0.175,0.201l0.393,0.196l0.141,0.11l0.237,0.303l0.129,0.093l0.347,0.155l0.123,0.136l0.071,0.15l0.055,0.3l0.07,0.166 l0.377,0.464l0.273,0.264l0.177,0.012l0.672-0.452l0.155-0.126l0.155-0.199l0.121-0.218l0.2-0.498l0.118-0.174l0.15-0.096 l0.127,0.064l0.595,0.895l0.129,0.288l0.048,0.249l-0.007,0.407l0.007,0.099l0.011,0.047l0.118,0.267l0.207,0.323l0.098,0.523 l-0.096,0.102l-0.216,0.167l-0.25,0.138l-0.275,0.197l-0.125,0.176l-0.071,0.199l-0.011,0.232l0.038,0.471l-0.009,0.233 l-0.141,0.854l0.021,0.132l0.061,0.059l0.575-0.031l0.145,0.037l0.145,0.089l0.12,0.157l0.1,0.204l0.112,0.326l0.139,0.254 l0.186,0.182l0.225,0.096l0.455,0.079l0.154,0.078l0.082,0.088l0.123,0.195l0.016,0.13l-0.038,0.122l-0.071,0.161l-0.043,0.193 l-0.005,0.472l-0.032,0.278l0.016,0.23l0.059,0.088l0.163,0.053l0.188-0.061l0.209-0.151l0.345-0.336l0.171-0.121l0.232,0.004 l0.252,0.147l0.362,0.483l0.089,0.362l-0.025,0.397l-0.064,0.322l0.02,0.367l0.091,0.238l0.134,0.267l0.038,0.196l-0.036,0.25 l-0.188,0.425l0.145,0.248l0.673-0.059l0.186,0.1l0.371,0.38l0.213,0.024l1.363-0.467l0.241,0.019l0.145,0.079l0.109,0.195 l0.647,1.03l0.516,0.571l0.177,0.077l0.152,0.033l0.123-0.022l0.143-0.045l0.096-0.059l0.064-0.074l0.043-0.082l0.068-0.172 l0.05-0.087l0.137-0.001l0.227,0.065l0.625,0.537l0.593,0.614l0.927,0.492l0.239,0.216l0.143,0.232l0.029,0.228l-0.023,0.249v0.282 l0.05,0.304l0.223,0.393l0.221,0.165l0.207,0.063l0.182-0.036l0.137-0.052l0.113-0.07l0.225-0.207l0.145,0.006l0.221,0.096 l0.473,0.304l0.2,0.274l0.132,0.235l0.066,0.196l0.307,0.532l0.129,0.087l0.195,0.084l0.15,0.098l0.112,0.118l0.139,0.274 l0.127,0.353l0.354,0.923l0.191,1.651l0.075,0.284l0.098,0.166l0.096,0.041l0.112,0.012l0.132-0.021l0.134-0.06l0.145-0.096 l0.202,0.037l0.243,0.15l0.438,0.576l0.123,0.346l-0.016,0.344l-1.413,2.868l-0.129,0.185l-0.15,0.164l-0.175,0.147l-0.209,0.123 l-0.136,0.052l-0.212,0.031l-0.445-0.007l-0.197,0.033l-0.139,0.048l-1.298,1.012l-0.629,0.729l-0.168,0.119l-0.2,0.084 l-0.177,0.036l-0.171-0.01l-0.979-0.309l-0.095-0.009l-0.125,0.016l-0.137,0.077l-0.155,0.127l-0.148,0.342l0.014,0.219 l0.179,0.208l0.791,0.76l0.282,0.204l0.257,0.117l0.196-0.005l0.691-0.108l0.555,0.033l0.432,0.103l0.225,0.114l0.155,0.16 l0.037,0.171l-0.021,0.191l-0.084,0.179l-0.093,0.13l-0.172,0.181l-0.218,0.163l-0.263,0.146l-0.284,0.105l-0.543,0.113 l-0.205,0.002l-0.171-0.039l-0.118-0.074l-0.246-0.253l-0.127-0.1l-0.121-0.053l-0.113-0.014l-0.112,0.027l-0.107,0.069 l-0.112,0.176l-0.109,0.267l-0.052,0.494l0.038,0.325l0.091,0.344l0.03,0.245l-0.025,0.556l0.036,0.182l0.091,0.146l0.289,0.261 l0.141,0.192l0.175,0.394l0.078,0.314l0.054,0.43l0.054,0.194l0.104,0.163l0.159,0.164l0.141,0.242l0.021,0.161l-0.221,0.711 l-0.004,1.358l-1.171,0.213l-1.493,0.729l-0.166,0.249l-0.3" 
                          fill="#e5e7eb" 
                          stroke="#d1d5db" 
                          strokeWidth="0.5"/>
                  </g>
                  
                  {/* Location Markers - Better positioned */}
                  {/* Delhi */}
                  <circle cx="420" cy="120" r="4" fill="#374151" />
                  <text x="430" y="125" fontSize="10" fill="#374151">Delhi</text>
                  
                  {/* Hidden India Sariska Lodge */}
                  <circle cx="380" cy="140" r="4" fill="#3b82f6" />
                  <text x="390" y="145" fontSize="10" fill="#374151">Hidden India Sariska Lodge</text>
                  
                  {/* Agra */}
                  <circle cx="400" cy="160" r="4" fill="#374151" />
                  <text x="410" y="165" fontSize="10" fill="#374151">Agra</text>
                  
                  {/* Jaipur */}
                  <circle cx="360" cy="180" r="4" fill="#374151" />
                  <text x="370" y="185" fontSize="10" fill="#374151">Jaipur</text>
                  
                  {/* Hidden India Bijapur Lodge */}
                  <circle cx="280" cy="320" r="4" fill="#3b82f6" />
                  <text x="290" y="325" fontSize="10" fill="#374151">Hidden India Bijapur Lodge</text>
                  
                  {/* Mumbai */}
                  <circle cx="220" cy="280" r="4" fill="#374151" />
                  <text x="230" y="285" fontSize="10" fill="#374151">Mumbai</text>
                  
                  {/* Hyderabad */}
                  <circle cx="320" cy="340" r="4" fill="#374151" />
                  <text x="330" y="345" fontSize="10" fill="#374151">Hyderabad</text>
                  
                  {/* Bengaluru */}
                  <circle cx="280" cy="380" r="4" fill="#374151" />
                  <text x="290" y="385" fontSize="10" fill="#374151">Bengaluru</text>
                  
                  {/* Guwahati */}
                  <circle cx="620" cy="150" r="4" fill="#374151" />
                  <text x="630" y="155" fontSize="10" fill="#374151">Guwahati</text>
                  
                  {/* Kolkata */}
                  <circle cx="580" cy="220" r="4" fill="#374151" />
                  <text x="590" y="225" fontSize="10" fill="#374151">Kolkata</text>
                  
                  {/* Bhubaneswar */}
                  <circle cx="540" cy="260" r="4" fill="#374151" />
                  <text x="550" y="265" fontSize="10" fill="#374151">Bhubaneswar</text>
                  
                  {/* Hidden India Rambha Palace - Highlighted */}
                  <circle cx="500" cy="280" r="6" fill="#d97706" />
                  <text x="510" y="285" fontSize="12" fill="#d97706" fontWeight="bold">Hidden India Rambha Palace</text>
                </svg>
              </div>
              
              {/* Map Labels */}
              <div style={{ 
                marginTop: '24px',
                textAlign: 'center'
              }}>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#374151', 
                  fontWeight: '500',
                  marginBottom: '8px'
                }}>
                  Hidden India Map
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#6b7280'
                }}>
                  Rambha Palace
                </p>
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

        {/* Four Additional Cards Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '48px' }}>
          {/* Third Card - Generator Suite */}
          <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Gallery7-1-qyb3q81db4tii1y2wn42rodt1v7395l80a9w3h9ils.webp" 
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
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '12px' }}>GENERATOR SUITES</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
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
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Gallery7-1-qyb3q81db4tii1y2wn42rodt1v7395l80a9w3h9ils.webp" 
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
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '12px' }}>ICE MILL SUITES</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
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
              src="https://hiddenindia.com/rambhapalace/wp-content/uploads/elementor/thumbs/Gallery7-1-qyb3q81db4tii1y2wn42rodt1v7395l80a9w3h9ils.webp" 
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
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '12px' }}>PRINTING PRESS SUITES</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
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
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#374151', marginBottom: '12px' }}>RAMBHA VILLA</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '14px' }}>
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
