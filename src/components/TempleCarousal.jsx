import React, { useState } from "react";

export default function TempleCarousel() {
  const templeCards = [
    {
      key: "jagannath",
      image: "/jagannath.png",
      title: "Jagannath Temple",
      description:
        "A UNESCO heritage site constructed in 800 CE; the temple is a major pilgrimage site...",
    },
    {
      key: "konark",
      image: "/konark.png",
      title: "Konark Sun Temple",
      description:
        "Dedicated to the Hindu Sun God, Konark Temple was hewn from stone in the 13th century...",
    },
    {
      key: "shanti",
      image: "/shanti.png",
      title: "Shanti Stupa, Dhauligiri",
      description:
        "As you stand before the 'peace pagoda' site, the peaceful atmosphere envelops you...",
    },
    {
      key: "lingaraj",
      image: "/lingaraj.png",
      title: "Lingaraj Temple",
      description:
        "The largest temple in Bhubaneswar, dedicated to Lord Shiva, exemplifies the essence of Kalinga architecture...",
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

  // pick 3 visible cards (loop properly)
  const visible = [
    templeCards[templeCurrentIndex],
    templeCards[(templeCurrentIndex + 1) % templeCards.length],
    templeCards[(templeCurrentIndex + 2) % templeCards.length],
  ];

  return (
    <div style={{ marginBottom: "48px" }}>
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          margin: "0 auto",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "",
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
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                minWidth: "350px",
                flex: 1,
              }}
            >
              <div
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
              <div style={{ padding: "24px" }}>
                <h3
                  style={{
                    fontSize: "21px",
                    fontWeight: "bold",
                    color: "#374151",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    lineHeight: "1.6",
                    fontSize: "14px",
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
          onClick={nextSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "",
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
    </div>
  );
}
