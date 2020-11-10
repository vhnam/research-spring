import React, {FC, useEffect, useState} from 'react';
import {animated, useSpring} from 'react-spring';

const Transition: FC = ({children}) => {
  const [state, set] = useState<boolean>(false);
  const {x} = useSpring({
    from: {x: 0},
    x: state ? 1 : 0,
    config: {duration: 500},
  });

  useEffect(() => {
    set(true);
    return () => {
      set(false);
    };
  }, []);

  return (
    <animated.div
      style={{
        backgroundColor: x.interpolate({
          range: [0, 1],
          output: ['#333', '#212121'],
        }),
        opacity: x.interpolate({range: [0, 1], output: [0.3, 1]}),
      }}
    >
      {children}
    </animated.div>
  );
};

export default Transition;
