
import Link from 'next/link';
import styles from '@/app/about/page.module.css';

const AboutPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About Pookie's</h1>
      <p className={styles.text}>
        Welcome to Pookie's! I am the Pookie, founded in 2024 with the creation of our website.
      </p>

      <h2 className={styles.title}>Our Story</h2>
      <p className={styles.text}>
        At Pookie's, we believe in the power of community and connection. Our journey started when I had an assignment to create a website.
      </p>

      <h2 className={styles.title}>What We Offer</h2>
      <p className={styles.text}>
        We offer a wide range of products and collaboration opportunities!
      </p>

      <h2 className={styles.title}>Join Us</h2>
      <p className={styles.text}>
        If you're wondering about the perks, you'll receive the mythical title{' '}
        <span className={styles.highlight}>Pookie's</span>.
      </p>

      <p className={styles.text}>
        Thank you for being a part of Pookie's journey (which started just a week ago!).
      </p>

      <footer className={styles.footer}>
        <p>Thanks for visiting! We can't wait to share our journey with you.</p>
      </footer>
    </main>
  );
};

export default AboutPage;
