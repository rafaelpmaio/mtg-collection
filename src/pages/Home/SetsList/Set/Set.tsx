import ISet from "interfaces/ISet";
import { Link } from "react-router-dom";
import { useToggleSetFromCollectList } from "state/hooks/customHooks/useToggleSetFromCollectList";
import { useSetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useSetSelectedSet";
import styles from "./_set.module.scss";
import "keyrune";
import { percentage } from "utils/percentage";
import { Card, CardActions, CardContent, Stack, Typography, Box, CardMedia, Checkbox, Grid, LinearProgress } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface SetProps {
  set: ISet;
}

const Set = ({ set }: SetProps) => {
  const toggleSetFromCollectList = useToggleSetFromCollectList();
  const setSelectedSet = useSetSelectedSet();

  return (
    <Card
      elevation={4}
      onClick={() => setSelectedSet(set)}
    >
      <Stack direction="row">
        <Link to={`/collection/${set.name}`} style={{width:"100%"}}>
          <Stack direction="row" >
            <CardMedia
              component="i"
              className={`ss ss-${set.image} ss-2x  ${set.isCompleted ? "ss-rare" : "ss-common"}`}
              sx={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:"10px"
              }}
            />
            <CardContent sx={{
              width:"100%"
            }}>
              <Typography variant="body2" >{set.name}</Typography>
              <LinearProgress
                variant="determinate"
                color="success"
                value={percentage(set.collectedCardsTotal, set.totalSetSize)}
              />
            </CardContent>
          </Stack>
        </Link>
        <CardActions>
          <Checkbox
            icon={<StarOutlineIcon />}
            checkedIcon={<StarIcon />}
            color="primary"
          // checkToggleFunction={(checkStatus) =>
          //   toggleSetFromCollectList(set, checkStatus)
          // }
          />
        </CardActions>
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
    //   <Checkbox
    //     checkToggleFunction={(checkStatus) =>
    //       toggleSetFromCollectList(set, checkStatus)
    //     }
    //   />
    // </li>
  );
};

export default Set;
