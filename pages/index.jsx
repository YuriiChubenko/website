import Image from 'next/image';
import NeumorphicBox from '../components/NeumorphicBox';
import GlassmorphicBox from '../components/GlassmorphicBox';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <> {/* Fragment to avoid unnecessary root element */}

            <main className={styles.main}>
                <GlassmorphicBox>
                    <h1 className={styles.title}>Yurii Chubenko</h1>
                    <h2 className={styles.subtitle}>Student & Engineer</h2>
                    <h2 className={styles.contactTitle}>Please contact me here:</h2>
                    <ul className={styles.contactList}>
                        <li>
                            <strong>Personal: </strong>
                            <a href="mailto:y.v.chubenko@gmail.com">y.v.chubenko@gmail.com</a>
                        </li>
                        <li>
                            <strong>TU Graz:</strong> <a href="mailto:yurii.chubenko@student.tugraz.at">yurii.chubenko@student.tugraz.at</a> (Student)
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
                </GlassmorphicBox>
            </main>
        </>
    );
}