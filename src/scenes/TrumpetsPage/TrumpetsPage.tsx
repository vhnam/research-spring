import React from 'react';
import Glider from 'react-glider';

import imgTrumpetBach190Strad50thAnniversary01 from '../../assets/img/trumpet-bach-190-strad-50th-anniversary-01.jpg';
import imgTrumpetBach190Strad50thAnniversary02 from '../../assets/img/trumpet-bach-190-strad-50th-anniversary-02.jpg';
import imgTrumpetBach190Strad50thAnniversary03 from '../../assets/img/trumpet-bach-190-strad-50th-anniversary-03.jpg';
import imgTrumpetBach180Strad01 from '../../assets/img/trumpet-bach-180-strad-01.jpg';
import imgTrumpetBach180Strad02 from '../../assets/img/trumpet-bach-180-strad-02.jpg';
import imgTrumpetBach180Strad03 from '../../assets/img/trumpet-bach-180-strad-03.jpg';
import imgTrumpetBachArtisan01 from '../../assets/img/trumpet-bach-artisan-01.jpg';
import imgTrumpetBachArtisan02 from '../../assets/img/trumpet-bach-artisan-02.jpg';
import imgTrumpetBachArtisan03 from '../../assets/img/trumpet-bach-artisan-03.jpg';
import imgTrumpetBachCommercial01 from '../../assets/img/trumpet-bach-commercial-01.jpg';
import imgTrumpetBachCommercial02 from '../../assets/img/trumpet-bach-commercial-02.jpg';
import imgTrumpetBachCommercial03 from '../../assets/img/trumpet-bach-commercial-03.jpg';
import imgTrumpetBachMariachi01 from '../../assets/img/trumpet-bach-mariachi-01.jpg';
import imgTrumpetBachMariachi02 from '../../assets/img/trumpet-bach-mariachi-02.jpg';
import imgTrumpetBachMariachi03 from '../../assets/img/trumpet-bach-mariachi-03.jpg';

import styles from '../../assets/css/content.module.css';

const TrumpetsPage = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h1 className={styles.heading}>
        <strong>Trumpet</strong>
      </h1>
      <p className={styles.headingDescription}>
        Bach trumpets trace their history back to 1925 when master craftsman
        Vincent Bach introduced the first Bach Stradivarius professional
        trumpet. Today, Vincent Bach offers a complete line of USA-made student
        trumpets, intermediate trumpets, and professional trumpets. Each Bach
        trumpet is handcrafted using the highest quality brass found here in the
        Midwest region of the United States. Vincent Bach professional and
        intermediate trumpet models are made in Elkhart, Indiana while a full
        line of Bach student trumpets are made in Eastlake, Ohio. Each
        handcrafted Bach trumpet offers the highest degree of durability,
        unparalleled performance, and a signature Bach sound that is preferred
        by more professionals than any other brand for their musical instrument.
      </p>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img
            src={imgTrumpetBach180Strad01}
            alt="Bach 180S Stradivarius (01)"
          />
          <img
            src={imgTrumpetBach180Strad02}
            alt="Bach 180S Stradivarius (02)"
          />
          <img
            src={imgTrumpetBach180Strad03}
            alt="Bach 180S Stradivarius (03)"
          />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach 180S Stradivarius
        </figcaption>
      </figure>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img src={imgTrumpetBachArtisan01} alt="Bach Artisan (01)" />
          <img src={imgTrumpetBachArtisan02} alt="Bach Artisan (02)" />
          <img src={imgTrumpetBachArtisan03} alt="Bach Artisan (03)" />
        </Glider>
        <figcaption className={styles.caption}>Vincent Bach Artisan</figcaption>
      </figure>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img
            src={imgTrumpetBach190Strad50thAnniversary01}
            alt="Bach 190 Stradivarius 50th Anniversary Trumpet (01)"
          />
          <img
            src={imgTrumpetBach190Strad50thAnniversary02}
            alt="Bach 190 Stradivarius 50th Anniversary Trumpet (02)"
          />
          <img
            src={imgTrumpetBach190Strad50thAnniversary03}
            alt="Bach 190 Stradivarius 50th Anniversary Trumpet (03)"
          />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach 190 Stradivarius 50th Anniversary
        </figcaption>
      </figure>
    </section>
    <section className={styles.section}>
      <figure>
        {' '}
        <Glider hasArrows={true}>
          <img src={imgTrumpetBachCommercial01} alt="Bach Commercial (01)" />
          <img src={imgTrumpetBachCommercial02} alt="Bach Commercial (02)" />
          <img src={imgTrumpetBachCommercial03} alt="Bach Commercial (03)" />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach Commercial
        </figcaption>
      </figure>
    </section>
    <section className={styles.section}>
      <figure>
        <Glider hasArrows={true}>
          <img src={imgTrumpetBachMariachi01} alt="Bach Mariachi (01)" />
          <img src={imgTrumpetBachMariachi02} alt="Bach Mariachi (02)" />
          <img src={imgTrumpetBachMariachi03} alt="Bach Mariachi (03)" />
        </Glider>
        <figcaption className={styles.caption}>
          Vincent Bach Mariachi
        </figcaption>
      </figure>
    </section>
    <aside className={styles.note}>
      <div>
        <h2 className={styles.heading}>Source</h2>
        <ul>
          <li>
            Kessler and Sons,
            <a href="https://www.kesslerandsons.com/product/bach-190s-anniversary-trumpet/">
              "Bach 190 Stradivarius 50th Anniversary Trumpet"
            </a>
          </li>
          <li>
            Kessler and Sons,
            <a href="https://www.kesslerandsons.com/product/bach-180s-stradivarius-trumpets/">
              "Bach 180S Series Stradivarius Silver Plated Professional
              Trumpets"
            </a>
          </li>
          <li>
            Kessler and Sons,
            <a href="https://www.kesslerandsons.com/product/bach-artisan-trumpet-ab190/">
              "Bach Artisan Trumpet – AB190"
            </a>
          </li>
          <li>
            Kessler and Sons,
            <a href="https://www.kesslerandsons.com/product/bach-commercial-lt190-stradivarius-trumpet/">
              "Bach Commercial LT190 Stradivarius Trumpet"
            </a>
          </li>
          <li>
            Kessler and Sons,
            <a href="https://www.kesslerandsons.com/product/bach-mariachi-trumpet-lr190/">
              "Bach Mariachi Trumpet – Bach LR190 Stradivarius"
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
);

export default TrumpetsPage;
