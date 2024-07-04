import { useEffect, useState } from "react";
import data from 'assets/data.json'
import useSetSetsList from "state/hooks/stateHooks/setsListState/useSetSetsList";
import { useGetFilteredSetsList } from "state/hooks/stateHooks/filteredSetsListState/useGetFilteredSetsList";
import MTGSet from "./MTGSet"
import { Box, Button } from "@mui/material";
import DropdownMenu from "components/DropdownMenu";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";

const options = [
  "All",
  "Favorite",
  "Completed"
]

const Home = () => {
  const buildSets = useSetSetsList();
  const setsList = useGetFilteredSetsList();
  const handleFilter = useHandleSelectorFilter();

  const [showMoreSets, setShowMoreSets] = useState(20)
  const loadMoreSets = () => {
    setShowMoreSets(prev => prev + 20);
  }


  useEffect(() => {
    buildSets(data);
  }, [])

  return (
    <Box
      component="section"
      textAlign="center"
    >
      <DropdownMenu handleFilter={handleFilter} options={options} />
      <Box
        marginBottom={2}
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(min(100%, max(260px, 100%/5 - 0.5rem)), 1fr))"
        gap="0.5rem"
      >
        {
          setsList.slice(0, showMoreSets).map((set) => (
            <MTGSet set={set} key={set.id} />
          ))
        }
      </Box>
      <Button variant="contained" onClick={loadMoreSets}>Show More</Button>
    </Box >
  );
};

export default Home;

