import React, {FC, useState} from 'react';
import {Link} from 'react-router-dom';
import {useHover} from 'react-use-gesture';

import styles from './NavItem.module.css';

interface NavItemProps {
  label: string;
  to: string;
  index: number;
  page: number;
  total: number;
  onClick: () => void;
  onPreload: () => void;
}

const NavItem: FC<NavItemProps> = ({
  label,
  to,
  total,
  index,
  page,
  onClick,
  onPreload,
}) => {
  const [isHovering, setHovering] = useState<boolean>(false);

  const bind = useHover(({hovering}) => {
    setHovering(hovering);
  });

  return (
    <li
      {...bind()}
      key={label.toLowerCase()}
      className={styles.navItem}
      style={{
        zIndex: 10 * index,
        bottom:
          index <= page
            ? `${62 * index}px`
            : isHovering
            ? `${window.innerWidth - 62 * (total - index) - 12}px`
            : `${window.innerWidth - 62 * (total - index)}px`,
        height: isHovering && index > page ? '74px' : '62px',
      }}
      onClick={onClick}
      onMouseEnter={onPreload}
    >
      <Link to={to}>{label}</Link>
    </li>
  );
};

export default NavItem;
