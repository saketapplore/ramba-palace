import React, { useState } from "react";

export default function TempleCarousel() {
  const templeCards = [
    {
      key: "jagannath",
      image: "/jagannath.png",
      title: "Jagannath Temple",
      description:
        "A UNESCO heritage site constructed in 800 CE, the temple is a major pilgrimage site for Hindus. Known for its annual Rath Yatra festival, this ancient temple showcases exquisite Kalinga architecture and houses the deities of Lord Jagannath, Balabhadra, and Subhadra.",
    },
    {
      key: "konark",
      image: "/konark.png",
      title: "Konark Sun Temple",
      description:
        "Dedicated to the Hindu Sun God, Konark Temple was hewn from stone in the 13th century. This architectural marvel is designed as a massive chariot with 12 pairs of wheels and 7 horses. The temple's intricate carvings and sculptures make it one of India's most magnificent monuments.",
    },
    {
      key: "shanti",
      image: "/shanti.png",
      title: "Shanti Stupa, Dhauligiri",
      description:
        "As you stand before the 'peace pagoda' site, the peaceful atmosphere envelops you completely. This white stupa was built by the Japanese Buddhist organization to promote world peace. The serene location offers panoramic views and serves as a symbol of harmony and tranquility.",
    },
    {
      key: "lingaraj",
      image: "/lingaraj.png",
      title: "Lingaraj Temple",
      description:
        "The largest temple in Bhubaneswar, dedicated to Lord Shiva, exemplifies the essence of Kalinga architecture. Built in the 11th century, this magnificent temple features a 55-meter high tower and intricate stone carvings. It remains an active place of worship and a testament to ancient Indian craftsmanship.",
    },
  ];

  const [templeCurrentIndex, setTempleCurrentIndex] = useState(0);

  const nextSlide = () => {
    setTempleCurrentIndex((prev) => (prev + 1) % templeCards.length);
  };

  const prevSlide = () => {
    setTempleCurrentIndex((prev) =>
      prev === 0 ? templeCards.length - 1 : prev - 1
    );
  };

  // pick visible cards based on screen size
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const visible = isMobile 
    ? [templeCards[templeCurrentIndex]] // Show only one card on mobile
    : [
        templeCards[templeCurrentIndex],
        templeCards[(templeCurrentIndex + 1) % templeCards.length],
        templeCards[(templeCurrentIndex + 2) % templeCards.length],
      ];

  return (
    <div style={{ marginBottom: "48px" }}>
      {/* Mobile-specific styles */}
      <style>{`
        @media (max-width: 768px) {
          .temple-carousel-main {
            padding: 0 30px !important;
            gap: 10px !important;
          }
          .temple-cards-container {
            gap: 0 !important;
            overflow: visible !important;
            justify-content: center !important;
            padding: 0 !important;
          }
          .temple-card {
            min-width: 100% !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
          }
          .temple-card .temple-image-container {
            height: 250px !important;
            position: relative !important;
            overflow: hidden !important;
          }
          .temple-card .temple-image-container img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
            object-position: center !important;
          }
          .temple-navigation {
            width: 45px !important;
            height: 45px !important;
            background-color: rgba(255, 255, 255, 0.9) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
            z-index: 10 !important;
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
          .temple-navigation:first-child {
            left: 15px !important;
          }
          .temple-navigation:last-child {
            right: 15px !important;
          }
        }
        @media (max-width: 480px) {
          .temple-carousel-main {
            padding: 0 25px !important;
            gap: 8px !important;
          }
          .temple-card {
            min-width: 100% !important;
            max-width: 100% !important;
            width: 100% !important;
            margin: 0 !important;
            min-height: auto !important;
          }
          .temple-card .temple-image-container {
            height: 200px !important;
          }
          .temple-card h3 {
            font-size: 18px !important;
            margin-bottom: 8px !important;
            line-height: 1.2 !important;
          }
          .temple-card p {
            font-size: 13px !important;
            line-height: 1.5 !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
            white-space: normal !important;
          }
          .temple-card > div:last-child {
            padding: 16px !important;
            flex: 1 !important;
          }
          .temple-navigation {
            width: 40px !important;
            height: 40px !important;
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
          }
          .temple-navigation:first-child {
            left: 12px !important;
          }
          .temple-navigation:last-child {
            right: 12px !important;
          }
        }
      `}</style>
      <div
        className="temple-carousel-main"
        style={{
          position: "relative",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        {/* Left Arrow */}
        <button
          className="temple-navigation"
          onClick={prevSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "1px solid #2C3E50",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="#2C3E50"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Cards */}
        <div
          className="temple-cards-container"
          style={{
            display: "flex",
            gap: "24px",
            flex: 1,
            overflow: "hidden",
          }}
        >
          {visible.map((card) => (
            <div
              key={card.key}
              className="temple-card"
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                overflow: "visible",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                minWidth: "350px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="temple-image-container"
                style={{
                  height: "200px",
                  backgroundColor: "#f3f4f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ 
                padding: "24px", 
                flex: 1,
                display: "flex",
                flexDirection: "column"
              }}>
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: "bold",
                    color: "#374151",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                    lineHeight: "1.3"
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: "1.6",
                    fontSize: "14px",
                    margin: 0,
                    flex: 1,
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                  }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="temple-navigation"
          onClick={nextSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "1px solid #2C3E50",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="#2C3E50"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile indicator dots */}
      {isMobile && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '20px'
        }}>
          {templeCards.map((_, index) => (
            <button
              key={index}
              onClick={() => setTempleCurrentIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: index === templeCurrentIndex ? '#2C3E50' : '#d1d5db',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
