import React, { useState } from 'react';
import { PaperPlaneRight, Envelope, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section className={`${styles.contact} contact-section`} id="contact" data-scroll-section>
            {/* Ambient Orbs */}
            <div className={`${styles.orb} ${styles.orb1}`}></div>
            <div className={`${styles.orb} ${styles.orb2}`}></div>
            
            <div className={styles.container}>
                <div className={styles.info}>
                    <h2>Let's Build the Future</h2>
                    <p>Open for collaborations and new opportunities.</p>
                    
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink}><Envelope size={32} /></a>
                        <a href="#" className={styles.socialLink}><LinkedinLogo size={32} /></a>
                        <a href="#" className={styles.socialLink}><GithubLogo size={32} /></a>
                    </div>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.group}>
                        <input type="text" placeholder="Name" required className={styles.input} />
                    </div>
                    <div className={styles.group}>
                        <input type="email" placeholder="Email" required className={styles.input} />
                    </div>
                    <div className={styles.group}>
                        <textarea placeholder="Message" rows={5} required className={styles.textarea}></textarea>
                    </div>
                    
                    <button type="submit" className={`${styles.submitBtn} ${status === 'success' ? styles.success : ''}`}>
                        {status === 'idle' && <>Send Message <PaperPlaneRight size={20} /></>}
                        {status === 'sending' && 'Sending...'}
                        {status === 'success' && 'Message Sent!'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
