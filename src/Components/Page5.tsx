import * as React from 'react';
import { IoArrowBackCircle } from 'react-icons/io5';
import Card from './Card';
import GameOverPopup from './GameOverPopup';
import Popup from './Popup';
import './play.css';
import fruitData from './fruitData.js.js';
import Card1 from './Card1.js';

interface Fruit {
  id: number;
  image: string;
  starting_alphabet: string;
}

interface Page5Props {
  onBack: () => void;
}

const duplicatedFruitData: Fruit[] = [...fruitData, ...fruitData];

const Page5: React.FC<Page5Props> = ({ onBack }) => {
  const [selectedLeftCard, setSelectedLeftCard] = React.useState<Fruit | null>(null);
  const [selectedRightCard, setSelectedRightCard] = React.useState<Fruit | null>(null);
  const [matchedPairs, setMatchedPairs] = React.useState<number[]>([]);
  const [failedMatch, setFailedMatch] = React.useState<string | null>(null);
  const [tries, setTries] = React.useState<number>(5);
  const [progress, setProgress] = React.useState<number>(0);
  const [matchCounter, setMatchCounter] = React.useState<number>(0);

  React.useEffect(() => {
    let matchTimeout: NodeJS.Timeout;

    if (selectedRightCard) {
      matchTimeout = setTimeout(() => {
        if (selectedLeftCard && selectedLeftCard.id === selectedRightCard.id && !matchedPairs.includes(selectedRightCard.id)) {
          setFailedMatch('It\'s a match!');
          setMatchedPairs((prev) => [...prev, selectedRightCard.id]);
          setProgress((prev) => prev + 1);
          setMatchCounter((prev) => prev + 1);
        } else {
          setFailedMatch('Wrong match!');
          setTries((prevTries) => prevTries - 1);
        }
        setSelectedLeftCard(null);
        setSelectedRightCard(null);
      }, 500); // 0.5-second delay
    }

    return () => {
      clearTimeout(matchTimeout);
    };
  }, [selectedRightCard, selectedLeftCard, matchedPairs]);

  const handleCardClick = (card: Fruit, side: string) => {
    if (side === 'left' && !selectedLeftCard && !matchedPairs.includes(card.id)) {
      setSelectedLeftCard(card);
      setFailedMatch(null);
    } else if (side === 'right' && selectedLeftCard && !selectedRightCard && !matchedPairs.includes(card.id)) {
      setSelectedRightCard(card);
    } else {
      return;
    }
  };

  const handleClosePopup = () => {
    setFailedMatch(null);
    setSelectedLeftCard(null);
    setSelectedRightCard(null);
  };

  const leftCards = duplicatedFruitData.slice(0, 6).filter((fruit) => !matchedPairs.includes(fruit.id));
  const rightCards = duplicatedFruitData.slice(6, 12).filter((fruit) => !matchedPairs.includes(fruit.id));

  const totalMatches = matchedPairs.length;

  return (
    <div className="game">
      <div className="back-button top-left" onClick={onBack}>
        <IoArrowBackCircle size={60} />
      </div>

      <div className="card-container">
        <div className="left-cards">
          {leftCards.map((fruit) => (
            <Card
              key={fruit.id}
              image={fruit.image}
              onClick={() => handleCardClick(fruit, 'left')}
              side="left"
            />
          ))}
        </div>
        <div className="right-cards">
          {rightCards.map((fruit) => (
            <Card1
              key={fruit.id}
              start_alphabet={fruit.starting_alphabet}
              onClick={() => handleCardClick(fruit, 'right')}
              side="right"
            />
          ))}
        </div>
      </div>

      {failedMatch && (
        <Popup content={<p>{failedMatch}</p>} onClose={handleClosePopup} />
      )}

      <div className="tries-info">Tries Left: {tries}</div>

      {(tries === 0 || totalMatches === duplicatedFruitData.length / 2) && (
        <GameOverPopup matchCounter={matchCounter} onClose={onBack} />
      )}

      <div className="progress-bar" style={{ width: `${(progress / 6) * 100}%` }}></div>
    </div>
  );
};

export default Page5;
