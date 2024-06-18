import React from 'react';
import styles from '../styles/GlassmorphicBox.module.css'; // Create a CSS module for styling

const GlassmorphicBox = ({ children }) => {
    return (
        <div className={styles.glassmorphicBox}>
            {children}
        </div>
    );
}

export default GlassmorphicBox;
