import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Preloader.module.css';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Animate Progress Bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.inOut'
    })
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: 'power2.in'
    }, "-=0.2")
    .to(containerRef.current, {
      y: '-100%',
      duration: 1,
      ease: 'power4.inOut'
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <h1 className={styles.logo} ref={textRef}>Subas</h1>
        <div className={styles.progressTrack}>
          <div className={styles.progressBar} ref={progressRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
