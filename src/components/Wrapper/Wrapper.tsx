import React, {FC, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import config from '../../config';
import routes from '../../router';

import NavItem from '../NavItem';

import styles from './Wrapper.module.css';

const links = [
  {to: config.paths.homepage, label: 'Homepage'},
  {to: config.paths.about, label: 'About'},
  {to: config.paths.company, label: 'Company'},
  {to: config.paths.trumpets, label: 'Trumpets'},
  {to: config.paths.trombones, label: 'Trombone'},
  {to: config.paths.mouthpieces, label: 'Mouthpieces'},
];

const paths = {
  [config.paths.homepage]: 0,
  [config.paths.about]: 1,
  [config.paths.company]: 2,
  [config.paths.trumpets]: 3,
  [config.paths.trombones]: 4,
  [config.paths.mouthpieces]: 5,
};

const Wrapper: FC = ({children}) => {
  const [page, setPage] = useState<number>(0);

  const location = useLocation();

  useEffect(() => {
    setPage(paths[location.pathname]);
  }, [location]);

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navigation}>
          {links.map((link, index: number) => (
            <NavItem
              key={link.label.toLowerCase()}
              to={link.to}
              label={link.label}
              page={page}
              total={links.length}
              index={index}
              onClick={() => setPage(index)}
              onPreload={() => routes[index].component.preload()}
            />
          ))}
        </ul>
      </nav>
      <main
        className={styles.main}
        style={{
          paddingLeft: `${(page + 1) * 62}px`,
          paddingRight:
            page === 0 || page === links.length - 1
              ? 0
              : `${(links.length - page - 1) * 62 - 16}px`,
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Wrapper;
