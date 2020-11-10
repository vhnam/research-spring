import React from 'react';

import TransitionPage from '../../components/Transition';

import imgVincentBachAndHisCornet from '../../assets/img/vincent-bach-and-his-cornet.jpg';
import imgShipToNewYork from '../../assets/img/ship-to-new-york.jpg';
import imgVincentBachFact from '../../assets/img/vincent-bach-fact.jpg';

import styles from '../../assets/css/content.module.css';

const AboutPage = () => (
  <TransitionPage>
    <div className={styles.container}>
      <section className={styles.section}>
        <h1 className={styles.heading}>
          About <strong>Vincent Bach</strong>
        </h1>
      </section>
      <section className={styles.section}>
        <p>
          Vincent Bach was born in 1890 as Vincenz Schrotenbach in Baden, near
          Vienna. He grew up in a household in which singing and theatre
          productions were regular leisure activities. He began taking violin
          lessons at the age of six. But he soon played truant and finally
          stopped completely. The reason he gave was: "If I held the bow
          wrongly, I felt the teacher's heavy cane on my hand. After attending a
          grandiose performance by the Viennese Tonkuenstler Orchestra, the
          young Vincenz Schrotenbach was thrilled by the trumpet. At this time,
          his mother had remarried and his new stepfather had a bad impression
          of music because he thought that musicians were ‘lazy people‘ who
          ‘just want to have a good time‘. Undeterred by this, Vincenz saved his
          lunch money, bought a used trumpet and began practicing in a nearby
          room out of earshot of his disapproving stepfather. The young man's
          talent was unmistakable and soon he took lessons with the legendary
          Georg Stellwagen, a solo trumpeter in the Tonkünstler Orchestra. At
          the youthful age of 15 he enrolled - at his stepfather's insistence -
          at the Vienna School of Mechanical Engineering.
          <br />
          <br />
          After graduating in 1911, Vincenz Schrotenbach took a job as an
          engineer in the development of elevators and lifts. However, he played
          three to four nights a week at societies and clubs in Vienna. When an
          English opera house director heard him one day and offered him payment
          for a concert tour, he quit his job and soon performed all over
          Europe. At the suggestion of this opera director, Vincenz Schrotenbach
          changed his stage name to Vincent Bach. One of his first performances
          was in an animal show. While waiting to go on stage, he accidentally
          bumped into the cage of an alligator and was bitten by one of the
          animals. Despite this accident Vincent still performed the show.
        </p>
      </section>
      <section className={styles.sectionWithImg}>
        <img
          src={imgVincentBachAndHisCornet}
          alt="Vincent Bach - Cornet Virtuose"
        />
      </section>
      <section className={styles.section}>
        <p>
          Vincent Bach came to New York with just $5 in his pocket
          <br />
          <br />
          1914 was a decisive year in Bach's life. At that time he was
          performing in England when the First World War broke out. As an
          Austrian citizen, he was no longer able to leave England and he risked
          a long imprisonment as he was now considered an enemy of the country.
          To escape arrest, he pretended to be a Swedish citizen. Thus Bach
          managed to get on board a ship to New York City.
        </p>
      </section>
      <section className={styles.section}>
        <img src={imgShipToNewYork} alt="Ship to New York" />
      </section>
      <section className={styles.section}>
        <p>
          Arriving with only $5 in his pocket, he quickly found employment as a
          musician; first with Oscar Hammerstein's Lexington Opera House and
          later with the Boston Symphony Orchestra and the Diaghilev Ballet
          Orchestra at the Metropolitan Opera. In 1917, when the USA also joined
          World War I, Bach was drafted into the 306th Field Artillery Regiment
          as Kapellmeister. There Vincent had a lot of free time, which he used
          to experiment with the construction and improvement of mouthpieces.
        </p>
      </section>
      <section className={styles.sectionWithImg}>
        <img src={imgVincentBachFact} alt="Vincent Bach - Fact" />
      </section>
      <section className={styles.section}>
        <p>
          A year earlier, a craftsman in Pittsburgh had accidentally damaged
          Bach's favourite mouthpiece while removing a dent. Bach spent the next
          12 months trying to repair the damage himself. This gave him a feeling
          for the relationship between bore, cup size and rim shape. He finally
          convinced the managers of the Selmer store in New York to let him use
          their lathe and he began to make a few mouthpieces. One of them
          increased his range by a fifth. When some musicians realised that this
          mouthpiece made it possible to hit a high F, Vincent Bach was
          literally flooded with orders for them.
        </p>
      </section>
      <aside className={styles.note}>
        <div>
          <h2 className={styles.heading}>Source</h2>
          <ul>
            <li>
              Julius Nickolai,
              <a href="https://blog.gewamusic.com/en/reports/900/winds/130-years-vincent-bach-the-story-1.html">
                "130 YEARS VINCENT BACH: THE STORY #1"
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </TransitionPage>
);

export default AboutPage;
