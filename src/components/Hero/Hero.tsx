import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 }); // Start shortly after mount

    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' },
      "-=0.3"
    );

    // Floating Orbs Animation
    gsap.to(`.${styles.orb}`, {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.hero} id="hero" data-scroll-section>
      <div className={styles.background}>
        <iframe 
          src='https://my.spline.design/orb-QYvvWtSzIRGS0CVIwk6J00i0/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className={styles.splineFrame}
          title="3D Orb"
        ></iframe>
      </div>
      
      {/* Ambient Orbs */}
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>

      
      <div className={styles.content}>
        <h2 className={styles.subtitle} ref={subtitleRef}>Web Developer</h2>
        <h1 className={styles.title} ref={titleRef}>
          Hi, I’m <span className={styles.highlight}>Subas</span>
        </h1>
        <button className={styles.cta} ref={ctaRef}>
          Hire Me
        </button>
      </div>

      <div className={styles.overlay}></div>
    </section>
  );
};

export default Hero;
