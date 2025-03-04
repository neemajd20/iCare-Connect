import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Define the type for FeatureItem
const FeatureList = [
  {
    title: 'iCare-Student',
    Svg: require('@site/static/img/UDSM-logo.PNG.svg').default, // Ensure correct import
    description: (
      <p>A platform dedicated to student welfare and academic management.</p>
    ),
  },
];

// Feature component
function Feature({ title, Svg, description }) {
  return (
    <div className={clsx(styles.feature)}>
      <Svg className={styles.featureSvg} role="img" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

// Homepage Features component
export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features)}>
      {FeatureList.map((feature, idx) => (
        <Feature key={idx} {...feature} />
      ))}
    </section>
  );
}