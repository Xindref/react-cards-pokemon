import backOfCard from "./back.png";
import useFlip from "./hooks";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [currentDirection, flipCard] = useFlip();
  return (
    <img
      src={currentDirection ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
