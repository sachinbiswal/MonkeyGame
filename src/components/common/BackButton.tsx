import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


interface BackButtonProps {
  route: string;
}

const BackButton: React.FC<BackButtonProps> = ({ route }) => {
  return (
    <Container>
      <Link to={`${route}`}>
        <img src="/back.png" alt="" />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;

  img {
    width: 100%;
    max-width: 100px;
  }
`;

export default BackButton;
