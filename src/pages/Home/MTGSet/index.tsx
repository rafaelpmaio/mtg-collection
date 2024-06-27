import ISet from "interfaces/ISet";
import { Link } from "react-router-dom";
import { useToggleFromFavorite } from "state/hooks/customHooks/useToggleFromFavorite";
import { useSetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useSetSelectedSet";
import "keyrune";
import { Card, CardActions, CardContent, Stack, Typography, CardMedia, FormControlLabel, Checkbox, Skeleton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import React, { useEffect, useState } from "react";
import SetInfos from "./SetInfos";

interface SetProps {
  set: ISet;
  key: string
}

const MTGSet = ({ set, key }: SetProps) => {
  const toggleSetFromCollectList = useToggleFromFavorite();
  const setSelectedSet = useSetSelectedSet();

  const [favorite, setFavorite] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked)
  }

  useEffect(() => {
    toggleSetFromCollectList(set, favorite)

  }, [favorite])

  return (
    <Card
      elevation={4}
      onClick={() => setSelectedSet(set)}
      key={key}
    >
      <Stack direction="row">
        {
          set
            ? <>
              <Link to={`/collection/${set.name}`} style={{ width: "100%" }}>
                <SetInfos set={set} />
              </Link>
              <CardActions>
                <FormControlLabel label control={<Checkbox
                  checked={favorite}
                  icon={<StarOutlineIcon />}
                  checkedIcon={<StarIcon sx={{ color: '#FFD700' }} />}
                  color="primary"
                  onChange={handleChange}
                />} />
              </CardActions>
            </>
            : <Skeleton variant="rectangular" height={70} width="100%" animation="wave"/>
        }
      </Stack>
    </Card >



    // <li
    //   className={`${styles.container} ${
    //     !set.collect ? styles.uncollecting : ""
    //   } ${set.isCompleted ? styles.completed : ""}`}
    //   onClick={() => setSelectedSet(set)}
    // >
    //   <Link to={`/collection/${set.name}`}>
    //     <i
    //       className={`ss ss-${set.image} ss-3x  ${
    //         set.isCompleted ? "ss-rare" : "ss-common"
    //       }`}
    //     ></i>
    //     <p>{set.name}</p>
    //     <p>{`${percentage(set.collectedCardsTotal, set.totalSetSize)}%`}</p>
    //   </Link>
    //   <CheckboxC
    //     checkToggleFunction={(checkStatus) =>
    //       toggleSetFromCollectList(set, checkStatus)
    //     }
    //   />
    // </li>
  );
};

export default MTGSet;
