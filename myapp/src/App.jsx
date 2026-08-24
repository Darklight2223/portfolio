import React, { useState, useEffect } from "react";

import Client from "./components/Client";
import WorkSection from "./components/WorkSection";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import Education from "./components/Education";
import Snowfall from "react-snowfall";
import Published from "./components/Published";

export default function App() {
  const [navHidden, setNavHidden] = useState(true);

  const [loading, setLoading] = useState(true);

  const toggleNav = () => {
    setNavHidden(!navHidden);
    document.body.classList.toggle("lock-screen");
  };

  // useEffect(() => {
  //   document.body.addEventListener("keydown", (e) => {
  //     if (e.key === "Escape" && navHidden == false) {
  //       console.log("hello");
  //       toggleNav();
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && navHidden === false) {
        toggleNav();
      }
    };

    document.body.addEventListener("keydown", handleEscape);

    return () => {
      document.body.removeEventListener("keydown", handleEscape);
    };
  }, [navHidden]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // 1. State for Snow settings
  const [snowColor, setSnowColor] = useState("#ffffff");
  const [showSnow, setShowSnow] = useState(false);

  // 2. Handle "Winter Only" Logic
  useEffect(() => {
    const month = new Date().getMonth();
    // Month 11 = Dec, 0 = Jan, 1 = Feb.
    // This logic removes snow automatically when April (3) starts.
    if (month === 11 || month <= 2) {
      setShowSnow(true);
    } else {
      setShowSnow(false);
    }
  }, []);

  // 3. Handle "Theme Color" Logic
  useEffect(() => {
    // Function to check CSS variables or Body class
    const updateSnowColor = () => {
      // Check if 'dark' class is on body, OR check localStorage directly
      const isDark =
        document.body.classList.contains("dark") ||
        localStorage.getItem("theme") === "dark";
      setSnowColor(isDark ? "#fbfbfb" : "#0c0a0a");
    };

    // Run once on load
    updateSnowColor();

    // Watch for changes to the <body> class (this detects theme toggles)
    const observer = new MutationObserver(updateSnowColor);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {showSnow && (
            <Snowfall
              snowflakeCount={40}
              color={snowColor}
              style={{
                position: "fixed",
                width: "100vw",
                height: "100vh",
                zIndex: 9999,
              }}
            />
          )}
          <div>
            <header className="header">
              <div className="menu-btn-container">
                <div className="container">
                  <button
                    type="button"
                    className="menu-btn"
                    onClick={toggleNav}
                  >
                    {navHidden ? "menu" : "close"}
                  </button>
                </div>
              </div>

              <nav className={`nav ${navHidden ? "hidden" : ""}`}>
                <ol className="nav-items">
                  <li className="nav-item">
                    <a href="#" onClick={toggleNav}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#work" onClick={toggleNav}>
                      My Work
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#skills" onClick={toggleNav}>
                      My Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#contact"
                      data-focused="last-focused"
                      onClick={toggleNav}
                    >
                      Contact
                    </a>
                  </li>
                </ol>
              </nav>

              <Intro />
            </header>

            <main>
              <Client />

              <Education />

              <WorkSection />

              <Published />

              <Skills />

              {/* <Testimonials /> */}

              <Contact />
            </main>

            <Footer />
          </div>
        </>
      )}
    </>
  );
}
