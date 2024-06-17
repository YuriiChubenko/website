import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <> {/* Fragment to avoid unnecessary root element */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            <main className={styles.main}>
                <h1 className={styles.title}>Yurii Chubenko</h1>
                <h2 className={styles.subtitle}>Welcome to my website!</h2>
                <p className={styles.description}>
                    Brought to life to give you my project portfolio, my current contacts, and positions.
                </p>
                <h2 className={styles.contactTitle}>Contact me:</h2>
                <ul className={styles.contactList}>
                    <li>
                        <strong>Personal: </strong>
                        <a href="mailto:y.v.chubenko@gmail.com">y.v.chubenko@gmail.com</a>
                    </li>
                    <li>
                        <strong>TU Graz:</strong> <a href="mailto:yurii.chubenko@student.tugraz.at">yurii.chubenko@student.tugraz.at</a> (TU Graz student)
                    </li>
                    <li>
                        <strong>BEST Graz:</strong> <a href="mailto:yurii.chubenko@best-eu.org">yurii.chubenko@best-eu.org</a> (Hackathon organization, Secretary of XIX Board, Full Member)
                    </li>
                    <li>
                        <strong>Aerospace Team Graz:</strong> <a href="mailto:y.chubenko@astg.at">y.chubenko@astg.at</a> (Member, Flight Computer Module)
                    </li>
                    <li>
                        <strong>UniVie | Projekt MmF:</strong> <a href="mailto:chubenkoy24@univie.ac.at">chubenkoy24@univie.ac.at</a> (Extern, Project Coordination @ Projekt MmF)
                    </li>

                    {/* Add similar structure for other contacts */}
                </ul>
            </main>
        </>
    );
}