import React, { useEffect, useRef } from "react";

// --- Import Skills based on your Resume ---
// Ensure these images exist in your assets folder!
import cppLogo from "../assets/images/skills/CPP.png";
import pythonLogo from "../assets/images/skills/Python.png";
import jsLogo from "../assets/images/skills/Javascript.svg";

import reactLogo from "../assets/images/skills/React.png";
import nextLogo from "../assets/images/skills/NextJsCircle.png";
import tailwindLogo from "../assets/images/skills/Tailwind.png";

import nodeLogo from "../assets/images/skills/NodeJs.svg";
import pgLogo from "../assets/images/skills/PostgreSQL.png";
import mongoLogo from "../assets/images/skills/MongoDB.svg";

import dockerLogo from "../assets/images/skills/Docker.svg";
import jenkinsLogo from "../assets/images/skills/Jenkins.png";
import gitLogo from "../assets/images/skills/Git.svg";

function Client() {
  const logosWrappersRef = useRef([]);

  // Group skills into sets of 3 for the animation logic
  const skillGroups = [
    { name: "Languages", icons: [cppLogo, pythonLogo, jsLogo] },
    { name: "Frontend", icons: [nextLogo, reactLogo, tailwindLogo] },
    { name: "Backend", icons: [nodeLogo, pgLogo, mongoLogo] },
    { name: "DevOps", icons: [dockerLogo, jenkinsLogo, gitLogo] },
  ];

  useEffect(() => {
    const logosWrappers = logosWrappersRef.current;
    const intervals = []; // To store interval IDs for cleanup

    const sleep = (number) => new Promise((res) => setTimeout(res, number));

    const startAnimation = async () => {
      for (let i = 0; i < logosWrappers.length; i++) {
        const logoWrapper = logosWrappers[i];
        if (!logoWrapper) continue;

        const logos = Array.from(logoWrapper.children);

        // Stagger the start time for each column
        await sleep(1400 * i);

        const intervalId = setInterval(() => {
          // Logic: Rotate the array elements
          let temp = logos[0];
          logos[0] = logos[1];
          logos[1] = logos[2];
          logos[2] = temp;

          // Apply classes for the "Scroll Up" effect
          // Item 0: Moves to top (hidden)
          logos[0].classList.add("hide", "to-top");
          logos[0].classList.remove("to-bottom");

          // Item 1: Becomes visible in center
          logos[1].classList.remove("hide", "to-top", "to-bottom");

          // Item 2: Moves to bottom (hidden) waiting to come up
          logos[2].classList.add("hide", "to-bottom");
          logos[2].classList.remove("to-top");
        }, 5600);

        intervals.push(intervalId);
      }
    };

    startAnimation();

    // CLEANUP: Important to stop animation when leaving page
    return () => {
      intervals.forEach((id) => clearInterval(id));
    };
  }, []);

  return (
    <section className="client">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
          Technical Expertise
        </h2>
        <div className="logos">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="logo-group"
              ref={(el) => (logosWrappersRef.current[index] = el)}
            >
              {/* Image 1: Hidden Top */}
              <img
                loading="lazy"
                src={group.icons[0]}
                alt={group.name}
                className="logo hide to-top"
              />
              {/* Image 2: Visible Center */}
              <img
                loading="lazy"
                src={group.icons[1]}
                alt={group.name}
                className="logo"
              />
              {/* Image 3: Hidden Bottom */}
              <img
                loading="lazy"
                src={group.icons[2]}
                alt={group.name}
                className="logo hide to-bottom"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;
