import React, { useRef } from "react";
import {
  FileHtml,
  FileCss,
  FileJs,
  Atom,
  Wind,
  BracketsCurly,
} from "@phosphor-icons/react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { icon: FileHtml, name: "HTML", color: "#E44D26" },
    { icon: FileCss, name: "CSS", color: "#264DE4" },
    { icon: FileJs, name: "JS", color: "#F7DF1E" },
    { icon: Atom, name: "React", color: "#61DAFB" },
    { icon: Wind, name: "GSAP", color: "#88CE02" },
    { icon: BracketsCurly, name: "Next.js", color: "#FFFFFF" },
  ];

  return (
    <section
      className="min-h-screen px-6 py-32 flex items-center justify-center bg-linear-to-b from-slate-900 to-slate-800"
      id="about"
      data-scroll-section
      ref={sectionRef}
    >
      <div className="max-w-5xl w-full grid grid-cols-2 gap-12 items-center md:grid-cols-1 md:text-center">
        <div>
          <div className="relative w-96 h-96 flex justify-center items-center">
            <div className="w-80 h-80 rounded-full bg-slate-700 border border-slate-600 flex justify-center items-center z-10 overflow-hidden transition-transform duration-500 ease-out hover:scale-105 hover:rotate-5">
              <img
                src="/profile22-Picsart.png"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed border-blue-500 opacity-50 animate-spin"
              style={{ animationDuration: "20s" }}
            ></div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-5xl mb-6 text-white">About Me</h2>
            <p className="text-lg leading-relaxed text-gray-300 mb-8 max-w-xl">
              I am a passionate creative developer focused on building immersive
              digital experiences. Merging technical mastery with artistic
              vision, I create websites that leave a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-700 border border-slate-600 rounded-xl p-4 flex flex-col items-center gap-2 transition-all duration-300 cursor-default hover:bg-slate-700/50 hover:-translate-y-1"
                style={{ "--hover-color": skill.color } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    skill.color;
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 5px 15px rgba(0,0,0,0.3), 0 0 10px ${skill.color}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "";
                }}
              >
                <skill.icon size={48} weight="duotone" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
