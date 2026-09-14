import { useState } from "react";

const CategoryIcons = {
  "AI & Machine Learning": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="skill-category-icon text-[var(--sec)]"
    >
      <path d="M12 2a3 3 0 0 0-3 3v1H7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2v2H7a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2h2v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3h-2v-2h2a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3Z" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  ),

  Programming: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="skill-category-icon text-[var(--sec)]"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),

  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="skill-category-icon text-[var(--sec)]"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01" />
      <path d="M10 8h.01" />
      <path d="M14 8h.01" />
    </svg>
  ),

  "Core Computer Science": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="skill-category-icon text-[var(--sec)]"
    >
      <rect width="14" height="14" x="5" y="5" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v4" />
      <path d="M15 1v4" />
      <path d="M9 19v4" />
      <path d="M15 19v4" />
      <path d="M19 9h4" />
      <path d="M19 14h4" />
      <path d="M1 9h4" />
      <path d="M1 14h4" />
    </svg>
  ),

  "Tools & Platforms": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="skill-category-icon text-[var(--sec)]"
    >
      <path d="M14.7 6.3a4 4 0 0 0-5.6 5.6l-6.8 6.8a2 2 0 0 0 2.8 2.8l6.8-6.8a4 4 0 0 0 5.6-5.6l-2.1 2.1-2.8-2.8z" />
      <path d="m18 2 4 4" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "AI & Machine Learning": [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Agents",
      "Generative AI",
    ],

    Programming: [
      "Python",
      "C++",
      "C",
      "Java",
      "JavaScript",
    ],

    "Web Development": [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    "Core Computer Science": [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
    ],

    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9 skills-container">
      {/* Section Heading */}
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6 skills-heading">
        Technical Skills
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;

          return (
            <li key={category} className="w-full">
              <div
                className={`skill-card md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left border border-[var(--white-icon-tr)] overflow-hidden ${
                  isOpen ? "skill-card-active" : ""
                }`}
              >
                {/* Category Header */}
                <button
                  type="button"
                  onClick={() => toggleItem(category)}
                  aria-expanded={isOpen}
                  className="skill-card-header w-full flex items-center gap-3 p-4 text-left cursor-pointer"
                >
                  <div
                    className={`skill-icon-wrapper ${
                      isOpen ? "skill-icon-active" : ""
                    }`}
                  >
                    {CategoryIcons[
                      category as keyof typeof CategoryIcons
                    ]}
                  </div>

                  <div className="flex items-center gap-2 flex-grow justify-between min-w-0">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-6 h-6 text-[var(--white)] flex-shrink-0 transition-transform duration-500 ease-out ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                    </svg>
                  </div>
                </button>

                {/* Skills */}
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-4 pb-4 pt-1 space-y-2 text-[var(--white-icon)] text-sm">
                      {items.map((item, index) => (
                        <li
                          key={item}
                          className={`skill-item ${
                            isOpen ? "skill-item-visible" : ""
                          }`}
                          style={
                            {
                              "--skill-delay": `${index * 70}ms`,
                            } as React.CSSProperties
                          }
                        >
                          <span className="skill-bullet">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <style>{`
        /* ================================
           SECTION HEADING
           ================================ */

        .skills-heading {
          animation: skillsHeadingIn 0.8s ease-out both;
        }

        @keyframes skillsHeadingIn {
          from {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }


        /* ================================
           SKILL CARD
           ================================ */

        .skill-card {
          position: relative;
          transform: translateY(0);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease,
            background-color 0.35s ease;
        }

        .skill-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          background: radial-gradient(
            circle at 20% 50%,
            rgba(164, 118, 255, 0.13),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .skill-card:hover {
          transform: translateY(-3px);
          border-color: rgba(164, 118, 255, 0.28);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
        }

        .skill-card:hover::before {
          opacity: 1;
        }

        .skill-card-active {
          border-color: rgba(164, 118, 255, 0.4);
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.18),
            0 0 24px rgba(164, 118, 255, 0.06);
        }


        /* ================================
           CATEGORY ICON
           ================================ */

        .skill-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition:
            transform 0.4s ease,
            filter 0.4s ease;
        }

        .skill-icon-wrapper:hover {
          transform: scale(1.08);
        }

        .skill-icon-active {
          transform: scale(1.08);
          filter: drop-shadow(0 0 8px rgba(164, 118, 255, 0.45));
        }


        /* ================================
           INDIVIDUAL SKILLS
           ================================ */

        .skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 0;
          transform: translateX(-10px);
          transition:
            opacity 0.35s ease var(--skill-delay),
            transform 0.35s ease var(--skill-delay),
            color 0.25s ease;
        }

        .skill-item-visible {
          opacity: 1;
          transform: translateX(0);
        }

        .skill-item:hover {
          color: var(--white);
        }

        .skill-bullet {
          color: var(--sec);
          font-size: 18px;
          line-height: 1;
          transition:
            transform 0.25s ease,
            text-shadow 0.25s ease;
        }

        .skill-item:hover .skill-bullet {
          transform: scale(1.4);
          text-shadow: 0 0 10px rgba(164, 118, 255, 0.65);
        }


        /* ================================
           MOBILE
           ================================ */

        @media (max-width: 768px) {
          .skill-card:hover {
            transform: translateY(-2px);
          }
        }


        /* ================================
           REDUCED MOTION
           ================================ */

        @media (prefers-reduced-motion: reduce) {
          .skills-heading {
            animation: none;
          }

          .skill-card,
          .skill-icon-wrapper,
          .skill-item,
          .skill-bullet {
            transition: none;
          }

          .skill-item {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsList;