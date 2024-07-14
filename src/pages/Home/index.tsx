import { useState } from "react";
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
  const setsList = useGetFilteredSetsList();
  const handleFilter = useHandleSelectorFilter();

  const [showMore, setShowMore] = useState(20)
  const loadMoreSets = () => {
    setShowMore(prev => prev + 20);
  }

  return (
    <Box
      component="section"
      textAlign="center"
    >
      <DropdownMenu handleFilter={handleFilter} options={options} />
      <Box
        display="grid"
        gridTemplateColumns={{
          xs:"repeat(auto-fit, minmax(min(100%, max(150px, 100%/5 - 0.5rem)), 1fr))",
          sm:"repeat(auto-fit, minmax(min(100%, max(280px, 100%/5 - 0.5rem)), 1fr))"
        }}
        gap="0.5rem"
        justifyItems={{
          xs:"center",
          sm:"stretch"
        }}
        marginBottom={2}
      >
        {
          setsList.slice(0, showMore).map((set) => (
            <MTGSet set={set} key={set.id} />
          ))
        }
      </Box>
      <Button variant="contained" onClick={loadMoreSets}>Show More</Button>
    </Box >
  );
};

export default Home;

