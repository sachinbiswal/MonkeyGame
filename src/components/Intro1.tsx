import React from 'react';
import Monkey from './common/Monkey';
import BottomButton from './common/BottomButton';

const Intro1: React.FC = () => {
  return (
    <>
      <Monkey text="Welcome Kiddo!" />
      <BottomButton route="/intro2" src='start' />
    </>
  );
};

export default Intro1;
