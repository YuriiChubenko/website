import React from 'react';
import styles from '../styles/NeumorphicBox.module.css'; // Create a CSS module for styling

const NeumorphicBox = ({ children }) => {
    return (
        <div className={styles.neumorphicBox}>
            {children}
        </div>
    );
}

export default NeumorphicBox;
