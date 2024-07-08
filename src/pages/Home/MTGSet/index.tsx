import ISet from "interfaces/ISet";
import { Link } from "react-router-dom";
import { useToggleFromFavorite } from "state/hooks/customHooks/useToggleFromFavorite";
import { useSetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useSetSelectedSet";
import "keyrune";
import { Card, CardActions, Stack, FormControlLabel, Checkbox, Skeleton, Button } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import React, { useEffect, useState } from "react";
import SetInfos from "./SetInfos";
import { useSetCardsList } from "state/hooks/stateHooks/cardsListState/useSetCardsList";

interface SetProps {
  set: ISet;
  key: string
}

const MTGSet = ({ set, key }: SetProps) => {
  const [favorite, setFavorite] = useState(set.collect);

  const toggleSetFromFavoriteList = useToggleFromFavorite();
  const setSelectedSet = useSetSelectedSet();
  const setCardsList = useSetCardsList();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked)
  }

  useEffect(() => {
    toggleSetFromFavoriteList(set, favorite)
  }, [favorite])

  return (
    <Card
      elevation={4}
      onClick={() => setSelectedSet(set)}
      key={key}
      sx={{
        maxHeighth: "80px",
        minWidth:"280px",
        maxWidth: "325px",
        filter: !favorite ? "grayscale(100%)" : "",

      }}
    >
      <Stack direction="row">
        {
          set
            ? <>
              <Link to={`/collection/${set.name}`} style={{ width: "100%" }} onClick={() =>  setCardsList(set.cards)}>
                <SetInfos set={set} />
              </Link>
              <CardActions>
                <FormControlLabel sx={{margin:"auto"}} label control={<Checkbox
                  checked={favorite}
                  icon={<StarOutlineIcon />}
                  checkedIcon={<StarIcon sx={{ color: '#FFD700' }} />}
                  color="primary"
                  onChange={handleChange}
                />} />
              </CardActions>
            </>
            : <Skeleton variant="rectangular" height={70} width="100%" animation="wave" />
        }
      </Stack>
    </Card >

  );
};

export default MTGSet;
