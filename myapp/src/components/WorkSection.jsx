import React, { useEffect, useRef } from "react";

// --- IMAGES ---
import gitHubIcon from "../assets/images/social-links/github.svg";
import shoppingImg from "../assets/images/work/Shop.jpg"; // Replaced StudyNotion
import DeepHireImg from "../assets/images/work/DeepHire.jpg"; // Placeholder for DeepHire
import ChatImg from "../assets/images/work/chatapp.jpg"; // Placeholder for SafePassage
import CredImg from "../assets/images/work/credit.jpg"; // Placeholder for SafePassage

const WorkSection = () => {
  const projectRefs = useRef([]);

  // --- DATA FROM RESUME ---
  const projects = [
    {
      id: 0,
      title: "DeepHire",
      category: "AI-Powered Recruitment Platform",
      description:
        " Built a low-latency AI recruitment platform with Next.js, FastAPI, Groq Llama, Redis, and MongoDB, improving semantic job-match accuracy by 20% through prompt optimization and implementing Prometheus monitoring, latency tracking, and caching for scalable, observable performance.",
      tech: ["Next.js", "PostgreSQL", "FastAPI", "MongoDB", "Redis"],
      image: DeepHireImg,
      githubLink: "https://github.com/Darklight2223/DeepHire", // Update this
      liveLink: "",
    },
    {
      id: 1,
      title: "Knowledge Based Copilot",
      category: "RAG-based LLM Application",
      description:
        "Built a full-stack RAG platform using Next.js, FastAPI, MongoDB Atlas, and Groq Llama, enabling natural-language Q&A over uploaded PDFs with grounded responses, source citations, and page-level references through an interactive real-time chat interface.",
      tech: ["Python", "Groq", "RAG", "MongoDB", "FastAPI"],
      image: ChatImg,
      githubLink: "https://github.com/Darklight2223/knowledge-base-app",
      liveLink: "https://knowledge-base-app-2k5o.vercel.app/",
    },
    {
      id: 2,
      title: "AI Shopping Agent",
      category: "E-commerce Platform",
      description:
        "A multimodal AI shopping agent using Next.js, FastAPI, LangGraph, Groq Llama, PostgreSQL, and Supabase pgvector, enabling real-time text and image-based product discovery with memory, tool calling, and multi-step agent workflows, while implementing semantic retrieval with dense vector embeddings for accurate product matching.",
      tech: ["Next.js", "FastAPI", "LangGraph", "Groq", "PostgreSQL", "Supabase"],
      image: shoppingImg,
      githubLink: "https://github.com/Darklight2223/shopping_agent",
      liveLink: "",
    },
    {
      id: 3,
      title: "Credit Card Fraud Detection Engine",
      category: "Fintech and Machine Learning",
      description:
        "A real-time fraud detection engine using XGBoost, LightGBM, FastAPI, and SHAP, achieving sub-100ms inference latency with feature-level explanations, while addressing extreme class imbalance through SMOTE and achieving 97.7% ROC-AUC, 94% precision, and 91% recall on the fraud class.",
      tech: ["Python", "Machine Learning", "FastAPI", "Explainable AI"],
      image: CredImg,
      githubLink: "https://github.com/Darklight2223/Credit-Card-Fraud-Detection",
      liveLink: "",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when visible
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-12");
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () =>
      projectRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="py-24" id="work">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          <span className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Featured Projects
          </span>
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              // Animation Base State: Invisible & shifted down
              className={`flex flex-col lg:flex-row gap-10 items-center opacity-0 translate-y-12 transition-all duration-1000 ease-out ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* --- IMAGE SECTION --- */}
              <div className="w-full lg:w-3/5 aspect-video group relative overflow-hidden rounded-2xl border border-gray-800 shadow-2xl">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* --- TEXT SECTION --- */}
              <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-2">
                  {project.category}
                </span>

                <h3 className="text-3xl font-bold mb-4 ">{project.title}</h3>

                <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg mb-6 hover:border-blue-500/30 transition-colors">
                  <p className="leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack Badges */}
                <ul className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300"
                      // Using your theme variables so badges fit perfectly in Light & Dark mode
                      style={{
                        backgroundColor: "var(--bg-color-secondary)",
                        borderColor: "var(--border)",
                        color: "var(--sub)",
                      }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex items-center gap-6">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 transition-colors hover:opacity-80"
                    // This ensures text is White in Dark Mode and Black in Light Mode
                    style={{ color: "var(--important)" }}
                  >
                    <img
                      src={gitHubIcon}
                      alt="Github"
                      className="w-6 h-6 transition-all duration-300"
                      // This flips the icon color automatically based on the theme
                      style={{ filter: "var(--icon-filter)" }}
                    />
                    <span className="font-medium">Source Code</span>
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    // specific styles for background and text color to ensure visibility
                    className="flex items-center gap-2 transition-colors hover:opacity-80"
                    // This ensures text is White in Dark Mode and Black in Light Mode
                    style={{ color: "var(--important)" }}
                  >
                    {/* <span className="font-medium">Source Code</span> */}
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
