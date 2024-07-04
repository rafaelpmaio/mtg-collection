import ICard from "interfaces/ICard";
import { useToggleCardCollectStatus } from "state/hooks/customHooks/useToggleCardCollectStatus";
import { Card, CardActions, Checkbox, FormControlLabel } from "@mui/material";
import MTGCardInfos from "./MTGCardInfos";
import { useState } from "react";

interface CardProps {
  card: ICard;
}

const MTGCard = ({ card }: CardProps) => {

  const [collected, setCollected] = useState(card.isCollected)

  const toggleCardCollectStatus = useToggleCardCollectStatus();
  console.log("carta regarregada", card)

  return (
    <Card
      elevation={4}
      sx={{
        height: "420px",
        width: "210px",
        filter: !collected ? "grayscale(1)" : "",
        bgcolor: !collected ? "rgb(230, 230, 230)" : ""
      }}
    >
      <MTGCardInfos card={card} />
      <CardActions sx={{
        padding: "0"
      }}>
        <FormControlLabel
          sx={{
            margin:"auto"
          }}
          label="Got it!"
          control={
            <Checkbox
              checked={collected}
              sx={{
                padding: "0",
              }}
              onChange={(e) => {
                let checked = e.target.checked
                toggleCardCollectStatus(card, checked);
                setCollected(checked)
              }}
            />
          }
        />
      </CardActions>
    </Card >
  );
};

export default MTGCard;
