import ICard from "interfaces/ICard";
import CheckboxC from "components/CheckboxC";
import { useToggleCardCollectStatus } from "state/hooks/customHooks/useToggleCardCollectStatus";
import { Card, CardActions, FormControlLabel } from "@mui/material";
import MTGCardInfos from "./MTGCardInfos";


interface CardProps {
  card: ICard;
}

const MTGCard = ({ card }: CardProps) => {

  const toggleCardCollectStatus = useToggleCardCollectStatus();

  return (
    <Card
      elevation={4}
      sx={{
        height: "420px",
        filter: !card.isCollected ? "grayscale(1)" : "",
        bgcolor: !card.isCollected ? "rgb(230, 230, 230)" : ""
      }}
    >
      <MTGCardInfos card={card} />
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <FormControlLabel
          label
          control={
            <CheckboxC checkToggleFunction={(checkStatus) => toggleCardCollectStatus(card, checkStatus)} >
              Collected
            </CheckboxC>
          }
        />
      </CardActions>
    </Card >
  );
};

export default MTGCard;
