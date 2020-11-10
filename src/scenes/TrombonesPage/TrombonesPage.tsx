import React from 'react';
import Glider from 'react-glider';

import TransitionPage from '../../components/Transition';

import imgTrombone36B42B from '../../assets/img/trombone-36b-42b.jpg';
import imgTrombone42AF01 from '../../assets/img/trombone-bach-42af-01.jpg';
import imgTrombone42AF02 from '../../assets/img/trombone-bach-42af-02.jpg';
import imgTrombone42AF03 from '../../assets/img/trombone-bach-42af-03.jpg';

import styles from '../../assets/css/content.module.css';
import localStyles from './TrombonesPage.module.css';

const TrombonesPage = () => (
  <TransitionPage>
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.heading}>
          <strong>Trombone</strong>
        </h1>
        <p className={styles.headingDescription}>
          Vincent Bach combined his unique talents as both a musician and an
          engineer to create Bach Stradivarius trombones, the most sought after
          trombone in today’s global market. Every Bach trombone is hand
          crafted, focusing on precision manufacturing and detail. Today, the
          Bach Stradivarius trombones remain the sound choice for the most
          discerning musicians worldwide.
        </p>
      </section>
      <section className={styles.sectionWithImg}>
        <figure>
          <img
            className={localStyles.image}
            src={imgTrombone36B42B}
            alt="Bach 36B &amp; 42B"
          />
          <figcaption className={styles.caption}>
            Vincent Bach Stradivarius 36B &amp; 42B with F-Rotor
          </figcaption>
        </figure>
      </section>
      <section className={styles.section}>
        <figure>
          <Glider hasArrows={true}>
            <img
              className={localStyles.image}
              src={imgTrombone42AF01}
              alt="Bach 42AF (01)"
            />
            <img
              className={localStyles.image}
              src={imgTrombone42AF02}
              alt="Bach 42AF (02)"
            />
            <img
              className={localStyles.image}
              src={imgTrombone42AF03}
              alt="Bach 42AF (03)"
            />
          </Glider>
          <figcaption className={styles.caption}>
            Vincent Bach Stradivarius 42AF with Infinity Rotor
          </figcaption>
        </figure>
      </section>
      <aside className={styles.note}>
        <div>
          <h2 className={styles.heading}>Source</h2>
          <ul>
            <li>
              Kessler and Sons,
              <a href="https://www.kesslerandsons.com/product/bach-stradivarius-trombones-f-rotor/">
                "Bach Stradivarius Trombones – 36B &amp; 42B F-Rotor Models"
              </a>
            </li>
            <li>
              Kessler and Sons,
              <a href="https://www.kesslerandsons.com/product/bach-42af-trombone-infinity-rotor/">
                " Bach 42AF Strad Trombone with Infinity Rotor"
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </TransitionPage>
);

export default TrombonesPage;
