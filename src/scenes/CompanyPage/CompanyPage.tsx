import React from 'react';
import Glider from 'react-glider';

import imgFirstBachFactory from '../../assets/img/first-bach-factory.jpg';
import imgThirdBachFactory from '../../assets/img/third-bach-factory.jpg';
import imgTrumpetSketching from '../../assets/img/trumpet-sketching.jpg';
import imgFactoryInMtVenon01 from '../../assets/img/factory-in-mt-venon-01.jpg';
import imgFactoryInMtVenon02 from '../../assets/img/factory-in-mt-venon-02.jpg';
import imgFactoryInMtVenon03 from '../../assets/img/factory-in-mt-venon-03.jpg';

import styles from '../../assets/css/content.module.css';

const CompanyPage = () => (
  <div className={styles.container}>
    <section className={styles.section}>
      <h1 className={styles.heading}>
        Introducing <strong>Vincent Bach Corporation</strong>
      </h1>
    </section>
    <section className={styles.section}>
      <p>
        In 1919, Bach rented a small room at 204E 85th New York, bought a lathe
        for $300, and began making one mouthpiece a day between his
        performances. His most important innovation was to develop a complete
        series of mouthpieces based on a logical numbering of cup and bore
        sizes. In the past, it was common practice to market mouthpieces under
        an artist's name. Bach's numbering system thus demystified mouthpiece
        selection. This system is still in use today on popular models like the
        7C and 3C.
      </p>
    </section>
    <section className={styles.sectionWithImg}>
      <img
        src={imgFirstBachFactory}
        alt="The first Bach factory at 204E, 85th Street, New York (1918 - 1923)"
      />
    </section>
    <section className={styles.section}>
      <p>
        After Bach had sold his mouthpieces to all his acquaintances, the demand
        sank rapidly. Barely able to pay his rent, he placed an advertisement in
        "Metronome", the leading music magazine of the time, entitled "How to
        Become a Wizard on the Cornet Without Practicing". This caused Bach to
        once again start a rush of orders for his mouthpieces. Bach was now even
        able to hire two additional workers to expand the product range. He now
        gave up his concert activities in order to concentrate fully on his new
        business.
        <br />
        <br />
        "When You Go Bach, You Go Forward."
        <br />
        <br />
        In 1922 the production of Bach trumpets began. Most of today's trumpets
        are tuned in Bb, but much of the classical literature was originally
        written for trumpets in C or D. So Bach began to build these less used
        instruments and soon his small factory became a paradise for wind
        players who needed instruments for special requirements. For musicians
        who only needed one of these instruments once or twice a year and could
        not afford it, he developed a special rental program. From then on, he
        gradually expanded his trumpet program into a complete series. In 1928
        he also began building trombones. After numerous musicians called his
        instruments the "Stradivarius" of trumpets, he had the foresight to
        register "Stradivarius" as a trademark for himself, which is still valid
        today. He also coined the slogan: "When You Go Bach, You Go Forward."
      </p>
    </section>
    <section className={styles.section}>
      <Glider hasArrows={true}>
        <img
          src={imgThirdBachFactory}
          alt="The third Bach factory at 621E, 216 Str.Bronx, New York (1928 - 1952)"
        />
        <img src={imgTrumpetSketching} alt="Trumpet sketching" />
      </Glider>
    </section>
    <section className={styles.section}>
      <p>
        With now four facilities in New York City, Bach moved his production to
        a newly built factory in Mount Vernon in 1953. At that time it was one
        of the most modern and best equipped factories for brass instruments and
        mouthpieces in the USA.
      </p>
    </section>
    <section className={styles.section}>
      <Glider hasArrows={true}>
        <img src={imgFactoryInMtVenon01} alt="Factory in Mount Vernon (01)" />
        <img src={imgFactoryInMtVenon02} alt="Factory in Mount Vernon (02)" />
        <img src={imgFactoryInMtVenon03} alt="Factory in Mount Vernon (03)" />
      </Glider>
    </section>
    <section className={styles.section}>
      <p>
        At the peak of production, Bach employed 35 workers. The majority of the
        instruments were made to order. At the beginning of the 1960s, Vincent
        Bach began to think about his retirement, his hearing began to
        deteriorate and the daily stress of the business began to wear him down.
        Since he had no heir to continue the business, he offered the company
        for sale in 1961 at the age of 71. According to reports from the Selmer
        Company, they did not offer the most money, but Bach felt that this was
        where his legacy would be best kept. Prior to the acquisition of Bach,
        Selmer was primarily a woodwind instrument maker. Henri and Alexandre
        Selmer were both accomplished clarinettists and began making clarinets
        and their mouthpieces in France in 1885. In 1905 Alexandre Selmer was
        first clarinettist of the New York Philharmonic Orchestra. After
        emigrating to the USA, he set up an office in New York to distribute his
        brother's instruments from France. When he returned to Paris in 1910, he
        obtained the distribution rights for Selmer products in the USA and
        George Bundy the rights to the Selmer brand, thus founding "The Selmer
        Company".
      </p>
    </section>
    <aside className={styles.note}>
      <div>
        <h2 className={styles.heading}>Source</h2>
        <ul>
          <li>
            Julius Nickolai,
            <a href="https://blog.gewamusic.com/en/reports/902/winds/130-years-vincent-bach-the-story-2.html">
              "130 YEARS VINCENT BACH: THE STORY #2"
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
);

export default CompanyPage;
