import React from 'react';
import styles from './NightBackground.module.css';
export default function NightBackground() {
  return (
    <div className={`${styles.backgroundContainer} -z-50`}>
      <div className={`${styles.stars} h-full w-full`}></div>
      <div className={`${styles.twinkling} h-full w-full`}></div>
      <div className={`${styles.clouds} h-full w-full`}></div>
    </div>
  );
}
