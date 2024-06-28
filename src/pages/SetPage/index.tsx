import { useGetFilteredCardsList } from "state/hooks/stateHooks/filteredCardsListState/useGetFilteredCardsList";
import { useBuildScryfallImgArr } from "state/hooks/customHooks/builders/useBuildScryfallImgArr";
import { useEffect } from "react";
import { useUpdateCompletedSetStatus } from "state/hooks/customHooks/useUpdateCompletedSetStatus";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";
import { Box } from "@mui/material";
import DropdownMenu from "components/DropdownMenu";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import MTGCard from "./MTGCard";

const options = [
  "Number",
  "Collected",
  "Missing"
]

const SetPage = () => {
  const set = useGetSelectedSet();
  const cardsList = useGetFilteredCardsList();
  const buildScryfallData = useBuildScryfallImgArr();
  const updateCompletedStatus = useUpdateCompletedSetStatus();
  const handleFilter = useHandleSelectorFilter();


  useEffect(() => {
    updateCompletedStatus(set ? set : undefined);
    buildScryfallData(cardsList);
  }, [cardsList]);

  return (
    <Box
      component="section"
      textAlign="center"
    >
      <DropdownMenu handleFilter={handleFilter} options={options} />
      <Box
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
    </Box>
  );
};

export default SetPage;
