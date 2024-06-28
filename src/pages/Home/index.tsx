import { useEffect } from "react";
import data from 'assets/data.json'
import useSetSetsList from "state/hooks/stateHooks/setsListState/useSetCardsSetsList";
import { useGetFilteredSetsList } from "state/hooks/stateHooks/filteredSetsListState/useGetFilteredSetsList";
import MTGSet from "./MTGSet"
import { Box } from "@mui/material";
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


  useEffect(() => {
    buildSets(data);
  }, [])

  return (
    <Box
      component="section"
      textAlign="center"
    >
      <DropdownMenu handleFilter={handleFilter} options={options}/>
      <Box
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
      </Box>
    </Box >
  );
};

export default Home;

