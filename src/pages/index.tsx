import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio Digital</title>
        <meta name="description" content="Seu app favorito para comer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/food-favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>Desc</div>
        <div className={styles.center}>Center</div>
        <div className={styles.grid}>Grid</div>
      </main>
    </>
  );
}
