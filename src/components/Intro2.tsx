import React from "react";
import Monkey from "./common/Monkey";
import BottomButton from "./common/BottomButton";
import BackButton from "./common/BackButton";

const Intro2: React.FC = () => {
  return (
    <div>
      <BackButton route="/" />
      <Monkey text="Hi, I am Mizo and I love bananas 🍌" />
      <BottomButton route="/intro3" src="next" />
    </div>
  );
};

export default Intro2;
