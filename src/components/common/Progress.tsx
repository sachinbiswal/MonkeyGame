import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectScore } from "../../store/scoreSlice";


const Progress: React.FC = () => {
  const score = useSelector(selectScore);

  return (
    <Container>
      <div className="progress" style={{ width: `${(score / 6) * 100}%` }}></div>
      <img src={score === 6 ? "banana-3.png" : "banana-2.png"} alt="" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 30px;
  align-self: center;
  margin-top: 30px;
  background-color: #e2f2f5;
  position: relative;
  border-radius: 12px;

  // Styled component for the progress bar
  .progress {
    border-radius: 12px;
    height: 100%;
    width: 0%;
    transition: all 0.2s ease-in-out;
    background-color: #ffcf25;
  }

  // Styled component for the banana image
  img {
    position: absolute;
    width: 100px;
    right: -30px;
    top: -20px;
  }
`;

export default Progress;
