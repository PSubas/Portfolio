import React, { useRef } from "react";
import {
  FileHtml,
  FileCss,
  FileJs,
  Atom,
  Wind,
  BracketsCurly,
} from "@phosphor-icons/react";
import styles from "./About.module.css";

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
      className={styles.about}
      id="about"
      data-scroll-section
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
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
            <div className={styles.rotatingBorder}></div>
          </div>
        </div>

        <div className={styles.right}>
          <div>
            <h2 className={styles.heading}>About Me</h2>
            <p className={styles.bio}>
              I am a passionate creative developer focused on building immersive
              digital experiences. Merging technical mastery with artistic
              vision, I create websites that leave a lasting impression.
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div
                key={index}
                className={styles.skillCard}
                style={{ "--hover-color": skill.color } as React.CSSProperties}
              >
                <skill.icon size={48} weight="duotone" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
