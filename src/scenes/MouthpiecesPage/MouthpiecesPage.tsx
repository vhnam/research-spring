import React from 'react';
import Glider from 'react-glider';

import imgMouthpieceTrumpet01 from '../../assets/img/mouthpiece-bach-trumpet-01.png';
import imgMouthpieceTrumpet02 from '../../assets/img/mouthpiece-bach-trumpet-02.png';
import imgMouthpieceTrumpet03 from '../../assets/img/mouthpiece-bach-trumpet-03.png';
import imgMouthpieceTrumpet04 from '../../assets/img/mouthpiece-bach-trumpet-04.png';
import imgMouthpieceCornet01 from '../../assets/img/mouthpiece-bach-cornet-01.png';
import imgMouthpieceCornet02 from '../../assets/img/mouthpiece-bach-cornet-02.png';
import imgMouthpieceCornet03 from '../../assets/img/mouthpiece-bach-cornet-03.png';
import imgMouthpieceCornet04 from '../../assets/img/mouthpiece-bach-cornet-04.png';
import imgMouthpieceTrombone01 from '../../assets/img/mouthpiece-bach-trombone-01.png';
import imgMouthpieceTrombone02 from '../../assets/img/mouthpiece-bach-trombone-02.png';
import imgMouthpieceTrombone03 from '../../assets/img/mouthpiece-bach-trombone-03.png';
import imgMouthpieceFrenchHorn01 from '../../assets/img/mouthpiece-bach-french-horn-01.png';
import imgMouthpieceFrenchHorn02 from '../../assets/img/mouthpiece-bach-french-horn-02.png';
import imgMouthpieceFrenchHorn03 from '../../assets/img/mouthpiece-bach-french-horn-03.png';

import styles from '../../assets/css/content.module.css';
import localStyles from './MouthpiecesPage.module.css';

const MouthpiecesPage = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h1 className={styles.heading}>
        <strong>Mouthpiece</strong>
      </h1>
      <p className={styles.headingDescription}>
        The history of Bach starts with mouthpieces. A century ago, trumpet
        player Vincent Bach began experimenting with designs and manufacturing
        processes to replace a broken mouthpiece. Soon after, Vincent Bach’s
        mouthpieces, and later his trumpets, set the standard for excellence.
        <br />
        <br />
        We continue that standard today through constant innovation and
        dedication to the craft. In the Bach workshop, crafting a mouthpiece
        begins with innovative, yet classic designs and is then carved by a
        computer-numeric-controlled machine that shapes and cuts solid brass
        bars. Each step is precise within one ten-thousandth of an inch.
      </p>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img
            className={localStyles.image}
            src={imgMouthpieceTrumpet01}
            alt="Trumpet mouthpieces (01)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceTrumpet02}
            alt="Trumpet mouthpieces (02)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceTrumpet03}
            alt="Trumpet mouthpieces (03)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceTrumpet04}
            alt="Trumpet mouthpieces (04)"
          />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach Trumpet mouthpieces
        </figcaption>
      </figure>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img
            className={localStyles.image}
            src={imgMouthpieceCornet01}
            alt="Cornet mouthpiece (01)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceCornet02}
            alt="Cornet mouthpiece (02)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceCornet03}
            alt="Cornet mouthpiece (03)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceCornet04}
            alt="Cornet mouthpiece (04)"
          />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach Cornet mouthpieces
        </figcaption>
      </figure>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img
            className={localStyles.image}
            src={imgMouthpieceTrombone01}
            alt="Trombone mouthpiece (01)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceTrombone02}
            alt="Trombone mouthpiece (02)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceTrombone03}
            alt="Trombone mouthpiece (03)"
          />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach Trombone mouthpieces
        </figcaption>
      </figure>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img
            className={localStyles.image}
            src={imgMouthpieceFrenchHorn01}
            alt="French horn mouthpiece (01)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceFrenchHorn02}
            alt="French horn mouthpiece (02)"
          />
          <img
            className={localStyles.image}
            src={imgMouthpieceFrenchHorn03}
            alt="French horn mouthpiece (03)"
          />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach French horn mouthpieces
        </figcaption>
      </figure>
    </section>

    <aside className={styles.note}>
      <div>
        <h2 className={styles.heading}>Source</h2>
        <ul>
          <li>
            Woodwind &amp; Brasswind,
            <a href="https://www.wwbw.com/Bach-Trumpet-Mouthpieces.wwbw">
              "Bach Trumpet Mouthpieces"
            </a>
          </li>
          <li>
            Woodwind &amp; Brasswind,
            <a href="https://www.wwbw.com/Bach-Cornet-Mouthpieces.wwbw">
              "Bach Cornet Mouthpieces"
            </a>
          </li>
          <li>
            Woodwind &amp; Brasswind,
            <a href="https://www.wwbw.com/Bach-Trombone-Baritone-Euphonium-Mouthpieces.wwbw">
              "Bach Trombone, Baritone &amp; Euphonium Mouthpieces"
            </a>
          </li>
          <li>
            Woodwind &amp; Brasswind,
            <a href="https://www.wwbw.com/Bach-French-Horn-Mouthpieces.wwbw">
              "Bach French Horn Mouthpieces"
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
);

export default MouthpiecesPage;
