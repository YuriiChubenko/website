// components/GlassmorphicBox.tsx

import React, { ReactNode } from 'react';
import styles from '../styles/GlassmorphicBox.module.css';

interface GlassmorphicBoxProps {
    children: ReactNode;
}

const GlassmorphicBox: React.FC<GlassmorphicBoxProps> = ({ children }) => {
    return (
        <div className={styles.glassmorphicBox}>
            {children}
        </div>
    );
}

export default GlassmorphicBox;
