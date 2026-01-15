import React, { useRef } from 'react';
import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react';
import styles from './Projects.module.css';



const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const projects = [
        { title: "Project Alpha", desc: "E-commerce Platform", image: "https://placehold.co/600x400/1a1a1a/FFF", tech: ["React", "Node", "Stripe"] },
        { title: "Project Beta", desc: "Social Dashboard", image: "https://placehold.co/600x400/2a2a2a/FFF", tech: ["Vue", "Firebase", "D3"] },
        { title: "Project Gamma", desc: "AI Chat Interface", image: "https://placehold.co/600x400/3a3a3a/FFF", tech: ["Next.js", "OpenAI", "Tailwind"] },
        { title: "Project Delta", desc: "Crypto Portfolio", image: "https://placehold.co/600x400/4a4a4a/FFF", tech: ["React Native", "Web3", "Graph"] },
        { title: "Project Epsilon", desc: "Travel App", image: "https://placehold.co/600x400/5a5a5a/FFF", tech: ["Flutter", "Dart", "Firebase"] },
        { title: "Project Zeta", desc: "Dev Tools", image: "https://placehold.co/600x400/6a6a6a/FFF", tech: ["Rust", "Tauri", "Svelte"] },
    ];

    return (
        <section className={styles.projects} id="projects" ref={sectionRef} data-scroll-section>
            <div className={styles.header}>
                <h2>Selected Works</h2>
                <p>Explore some of my selected works</p>
            </div>
            
            <div className={styles.trackContainer}>
                <div className={styles.track} ref={trackRef}>
                    {projects.map((project, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.cardImage}>
                                <img src={project.image} alt={project.title} />
                                <div className={styles.overlay}>
                                    <button className={styles.iconBtn}><GithubLogo size={24} /></button>
                                    <button className={styles.iconBtn}><ArrowUpRight size={24} /></button>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className={styles.tags}>
                                    {project.tech.map((t, k) => <span key={k}>{t}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
