import React from "react";
import styles from "./Footer.module.css";

type ParticleStyle = {
  left: string;
  animationDelay: string;
  animationDuration: string;
};

const particles: ParticleStyle[] = [...Array(10)].map(() => ({
  left: `${Math.random() * 100}%`,
  animationDelay: `${Math.random() * 5}s`,
  animationDuration: `${5 + Math.random() * 5}s`,
}));

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer} data-scroll-section>
      <div className={styles.particles}>
        {/* Simple CSS-based particles */}
        {particles.map((style, i) => (
          <div key={i} className={styles.particle} style={style} />
        ))}
      </div>

      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Subas. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
