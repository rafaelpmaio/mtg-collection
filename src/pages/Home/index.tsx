import { useEffect } from "react";
import data from 'assets/data.json'
import useSetSetsList from "state/hooks/stateHooks/setsListState/useSetCardsSetsList";
import { useGetFilteredSetsList } from "state/hooks/stateHooks/filteredSetsListState/useGetFilteredSetsList";
import MTGSet from "./MTGSet"
import { Box } from "@mui/material";


const Home = () => {
  const buildSets = useSetSetsList();
  const setsList = useGetFilteredSetsList();

  useEffect(() => {
    buildSets(data);
  }, [])

  return (
    <Box
      component="section"
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, max(260px, 100%/5 - 0.5rem)), 1fr))",
        gap: "0.5rem",
      }}>
      {
        setsList.map((set) => (
          <MTGSet set={set} key={set.id} />
        ))
      }
    </Box >
  );
};

export default Home;

