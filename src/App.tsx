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

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#b0b0b0', 
        padding: '64px 0 32px 0',
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
            <div>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: 'white', 
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
                  color: 'white', 
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
                  fontSize: '20px', 
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      textDecoration: 'none'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 25" fill="none">
                      <path d="M24 12.5777C24 10.4649 23.4915 8.49457 22.4746 6.66681C21.4743 4.88936 20.1156 3.45567 18.3984 2.36572C16.6479 1.24224 14.7223 0.625998 12.6217 0.517004C10.5211 0.408009 8.53725 0.823027 6.67005 1.76206C4.85286 2.66755 3.36077 3.95033 2.19377 5.6104C0.993429 7.32078 0.284893 9.22399 0.0681646 11.32C-0.148564 13.4161 0.151522 15.4283 0.968422 17.3567C1.76865 19.218 2.96899 20.7858 4.56945 22.0602C6.20325 23.3514 8.05378 24.1646 10.121 24.5V16.0739H7.07016V12.5777H10.121V9.9115C10.121 8.41911 10.5295 7.26209 11.3464 6.44044C12.1633 5.61879 13.2636 5.20796 14.6473 5.20796C15.5476 5.22473 16.4478 5.30857 17.3481 5.45949V8.42749H15.8227C15.5726 8.39396 15.3184 8.41911 15.0599 8.50295C14.8015 8.58679 14.5806 8.72094 14.3973 8.90539C14.2139 9.08985 14.0763 9.30364 13.9846 9.54678C13.8929 9.78993 13.8554 10.0456 13.8721 10.3139V12.5777H17.1981L16.6729 16.0739H13.8721V24.5C15.7893 24.1982 17.5315 23.4687 19.0986 22.3117C20.6157 21.1882 21.8077 19.7881 22.6746 18.1112C23.5582 16.3673 24 14.5228 24 12.5777Z" fill="white"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/_hiddenindia_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      textDecoration: 'none'
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      textDecoration: 'none'
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      textDecoration: 'none'
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      textDecoration: 'none'
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
                    width: '200px', 
                    height: 'auto',
                    maxWidth: '100%'
                  }}
                />
              </div>
              
              {/* Copyright */}
              <div style={{ marginBottom: '16px' }}>
                <h2 style={{ 
                  fontSize: '14px', 
                  fontWeight: 'normal', 
                  color: 'white',
                  margin: 0
                }}>
                  COPYRIGHT 2024, Hidden India EXPERIENCES PRIVATE LIMITED.
                </h2>
              </div>
              
              {/* Language Selector */}
              <div>
                <h2 style={{ 
                  fontSize: '16px', 
                  fontWeight: 'bold', 
                  color: 'white',
                  margin: 0
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
