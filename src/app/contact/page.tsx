'use client';

import styles from '@/app/contact/page.module.css';

const ContactPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.text}>We would love to hear from you! Please fill out the form below or reach out directly via email.</p>

      <h2 className={styles.subtitle}>Get in Touch</h2>
      <form className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Your Name</label>
          <input type="text" id="name" className={styles.input} placeholder="Enter your name" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Your Email</label>
          <input type="email" id="email" className={styles.input} placeholder="Enter your email" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>Your Message</label>
          <textarea id="message" className={styles.textarea} placeholder="Enter your message" required></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>

      <h3 className={styles.subtitle}>Or Reach Us At:</h3>
      <p className={styles.text}>
        Email: <a href="mailto:info@pookies.com" className={styles.highlight}>info@pookies.com</a>
      </p>

      <p className={styles.text}>Or follow us on our social media channels:</p>
      <ul className={styles.socialLinks}>
        <li className={styles.socialLinkItem}>
          <a href="https://facebook.com/pookies" target="_blank" className={styles.highlight}>
            Facebook
          </a>
        </li>
        <li className={styles.socialLinkItem}>
          <a href="https://instagram.com/pookies" target="_blank" className={styles.highlight}>
            Instagram
          </a>
        </li>
      </ul>

      <footer className={styles.footer}>
        <p>Thanks for reaching out! We can&apos;t wait to connect with you.</p>
      </footer>
    </main>
  );
};

export default ContactPage;
