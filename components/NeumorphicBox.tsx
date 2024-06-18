// components/NeumorphicBox.tsx

import React, { ReactNode } from 'react';
import styles from '../styles/NeumorphicBox.module.css';

interface NeumorphicBoxProps {
    children: ReactNode;
}

const NeumorphicBox: React.FC<NeumorphicBoxProps> = ({ children }) => {
    return (
        <div className={styles.neumorphicBox}>
            {children}
        </div>
    );
}

export default NeumorphicBox;

