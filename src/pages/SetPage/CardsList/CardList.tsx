import { Box } from "@mui/material";
import MTGCard from "./MTGCard";
import ICard from "interfaces/ICard";

interface cardsListProps {
  cardsList: ICard[];
}

const CardsList = ({ cardsList }: cardsListProps) => {
  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, max(230px, 100%/5 - 0.5rem)), 1fr))", //0.5 refers to column gap
        gap: "2rem .5rem",
        justifyItems: "center"
      }}>
      {cardsList.map((card) => (
        <MTGCard key={card.id} card={card} />
      ))}
    </Box>
  );
};

export default CardsList;
