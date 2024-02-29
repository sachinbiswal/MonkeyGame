import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface BottomButtonProps {
  src: string;
  route: string;
}

const BottomButton: React.FC<BottomButtonProps> = ({ src, route }) => {
  return (
    <Container>
      <Link to={`${route}`}>
        <img src={`/${src}.png`} alt="" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  z-index: 5;

  img {
    width: 100%;
    max-width: 220px;
  }
`;

export default BottomButton;
