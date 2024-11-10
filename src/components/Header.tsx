import styles from '@/components/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/logo.png" // replace with your logo image path
          alt="Pookies Logo"
          className={styles.logoImg}
          width={50}
          height={50}
        />
        <h1 className={styles.title}>Pookie&apos;s</h1>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li><Link href="/" className={styles.navLink}>Home</Link></li>
          <li><Link href="/about" className={styles.navLink}>About</Link></li>
          <li><Link href="/collaboration" className={styles.navLink}>Collaboration</Link></li>
          <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
