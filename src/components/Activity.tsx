import React, { useEffect, useState } from "react";
import Progress from "./common/Progress";
import BackButton from "./common/BackButton";
import styled from "styled-components";
import { Fruit, fruitsData } from './common/fruitsData';
import { shuffleArray } from './common/shuffle';
import Card from "./common/Card";
import { useDispatch, useSelector } from "react-redux";
import { selectScore, setScore } from "../store/scoreSlice";
import { useNavigate } from "react-router-dom";
import MatchedText from "./common/MatchedText";


const Activity: React.FC = () => {
  const dispatch = useDispatch();
  const [imageData, setImageData] = useState<Fruit[]>([]);
  const [lettersData, setLettersData] = useState<Fruit[]>([]);
  const [flippedPinkCard, setFlippedPinkCard] = useState<string | null>(null);
  const [flippedBlueCard, setFlippedBlueCard] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(60); 
  const [isMatchedAnimation, setIsMatchedAnimation] = useState(false);
  const score = useSelector(selectScore);
  const navigate = useNavigate();

  useEffect(() => {
    let shuffledImages = shuffleArray([...fruitsData]);
    setImageData(shuffledImages);

    let shuffledLetters = shuffleArray([...fruitsData]);
    setLettersData(shuffledLetters);
  }, []);

  useEffect(() => {
    if (score === 6) {
      setTimeout(() => {
        navigate("/result");
      }, 1200);
    }
  }, [score]);

  useEffect(() => {
    if (isMatchedAnimation) {
      setTimeout(() => {
        setIsMatchedAnimation(false);
      }, 1500);
    }
  }, [isMatchedAnimation]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(intervalId);
      navigate("/result");
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const handleCardClick = (cardId: string, cardType: string) => {
    if (!isCardMatched(cardId)) {
      if (cardType === "pink" && flippedPinkCard === null) {
        setFlippedPinkCard(cardId);
      } else if (
        cardType === "blue" &&
        flippedPinkCard !== null &&
        flippedBlueCard === null
      ) {
        setFlippedBlueCard(cardId);

        if (flippedPinkCard !== null && flippedPinkCard === cardId) {
          setTimeout(() => {
            setMatchedPairs([...matchedPairs, cardId]);
          }, 1000);
          dispatch(setScore(score + 1));
          console.log("Match! Score:", score + 1);
          setIsMatchedAnimation(true);
        }

        setTimeout(() => {
          setFlippedPinkCard(null);
          setFlippedBlueCard(null);
        }, 1000);
      }
    }
  };

  const isCardMatched = (cardId: string) => matchedPairs.includes(cardId);

  return (
    <>
      <Progress />
      <BackButton route="/instructions" />
      <TimerContainer>
        <p>Time Remaining: {String(timer).padStart(2, "0")}s</p>
      </TimerContainer>
      <Container>
        <CardContainer>
          {imageData.map((ele) => (
            <Card
              key={ele.id}
              data={ele}
              type="pink"
              onCardClick={(cardId) => handleCardClick(cardId, "pink")}
              isFlipped={flippedPinkCard === ele.id}
              isMatched={isCardMatched(ele.id)}
            />
          ))}
        </CardContainer>
        <CardContainer>
          {lettersData.map((ele) => (
            <Card
              key={ele.id}
              data={ele}
              type="blue"
              onCardClick={(cardId) => handleCardClick(cardId, "blue")}
              isFlipped={flippedBlueCard === ele.id}
              isMatched={isCardMatched(ele.id)}
            />
          ))}
        </CardContainer>
      </Container>
      {isMatchedAnimation && <MatchedText />}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  padding: 2em;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
`;

const TimerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  p {
    font-size: 1.5rem;
    font-weight: 800;
    color: #8ead28;
  }
`;

export default Activity;
