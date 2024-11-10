import Image from 'next/image';
import styles from '@/app/collaboration/page.module.css';

const CollaborationPage = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Collaboration</h1>
      <p className={styles.text}>Some amazing people Pookie's collaborated with</p>

      <div className={styles.collaborators}>
        <div className={styles.collaborator}>
          <Image
            src="/a.jpg"
            alt="Collaborator A"
            className={styles['collaborator-img']}
            width={300}
            height={300}
          />
          <p>Our Pookie's with Black Widow</p>
        </div>

        <div className={styles.collaborator}>
          <Image
            src="/b.jpg"
            alt="Collaborator B"
            className={styles['collaborator-img']}
            width={300}
            height={300}
          />
          <p>Our Pookie's with Iron Man</p>
        </div>

        <div className={styles.collaborator}>
          <Image
            src="/c.jpg"
            alt="Collaborator C"
            className={styles['collaborator-img']}
            width={300}
            height={300}
          />
          <p>Our Pookie's with Ben 10</p>
        </div>

        <div className={styles.collaborator}>
          <Image
            src="/d.jpg"
            alt="Collaborator D"
            className={styles['collaborator-img']}
            width={300}
            height={300}
          />
          <p>Our Pookie's with Spider Man</p>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Thanks for checking out our amazing collaborations!</p>
      </footer>
    </main>
  );
};

export default CollaborationPage;
