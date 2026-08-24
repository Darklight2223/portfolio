"use client";

import { useEffect, useRef, useState } from "react";

const Education = () => {
  const timelineRef = useRef([]);
  const lineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  const educationData = [
    {
      id: 1,
      year: "2022 - 2026",
      degree: "B.Tech in Computer Science and AI",
      institution: "Netaji Subhas University of Technology, New Delhi",
      score: "CGPA: 8.14",
    },
    {
      id: 2,
      year: "2022",
      degree: "Class XII (CBSE)",
      institution: "RPVV, New Delhi",
      score: "92.2%",
    },
    {
      id: 3,
      year: "2020",
      degree: "Class X (CBSE)",
      institution: "RPVV, New Delhi",
      score: "92.0%",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;

      const timelineSection = lineRef.current.parentElement;
      const rect = timelineSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollPercentage = Math.max(
        0,
        Math.min(
          1,
          (windowHeight - rect.top - 100) / (rect.height + windowHeight - 200)
        )
      );

      setLineHeight(scrollPercentage * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      timelineRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      className="mt-20 px-4 min-h-screen bg-gradient-to-b from-background to-muted/20"
      id="education"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Education Journey
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/40 -translate-x-1/2"></div>

          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 w-1 bg-[var(--important)] -translate-x-1/2 transition-all duration-300 ease-out"
            style={{ height: `${lineHeight}%` }}
          ></div>

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item relative mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              ref={(el) => (timelineRef.current[index] = el)}
            >
              <div className={`${index % 2 === 0 ? "" : "md:order-3"}`}>
                <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
                    {item.year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                    {item.degree}
                  </h3>
                  <h4 className="text-base md:text-lg text-muted-foreground mb-3">
                    {item.institution}
                  </h4>
                  <p className="text-sm md:text-base font-medium text-primary">
                    Score: {item.score}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 md:relative md:left-auto flex items-center justify-center -translate-x-1/2 md:translate-x-0 md:order-2">
                <div className="w-4 h-4 bg-primary rounded-full scale-0 transition-transform duration-500 ease-out border-[3px] border-background shadow-lg relative z-10 dot-element bg-[var(--important)]">
                  <div className="absolute inset-0 rounded-full bg-[var(--important)] animate-ping opacity-75"></div>
                </div>
              </div>

              <div
                className={`hidden md:block ${
                  index % 2 === 0 ? "md:order-3" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .timeline-item.active {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item.active .dot-element {
          transform: scale(1);
        }

        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
