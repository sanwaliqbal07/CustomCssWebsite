import styles from '@/app/page.module.css';

const Home = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Welcome to Pookie&apos;s!</h1>
      <p className={styles.text}>Where whimsy meets community. Join the fun!</p>

      {/* Buttons Container */}
      <div className={styles.buttons}>
        <a href="about" className={styles.btn}>Learn More About Us</a>
        <a href="contact" className={styles.btn}>Contact Us</a>
      </div>

      <h2 className={styles.title}>Why Choose Pookie&apos;s?</h2>
      <p className={styles.text}>At Pookie&apos;s, we celebrate creativity, connection, and all things fun!</p>

      <h2 className={styles.title}>Join the Adventure!</h2>
      <p className={styles.text}>
        Be part of our quirky community! Get exclusive updates and events, and the legendary title of{'Pookie'}
        <span className={styles.highlight}>Pookie&apos;s!</span>
      </p>

      <footer className={styles.footer}>
        <p>Thanks for stopping by! We can&apos;t wait to share our journey with you.</p>
      </footer>
    </main>
  );
};

export default Home;
