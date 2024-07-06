import { useGetFilteredCardsList } from "state/hooks/stateHooks/filteredCardsListState/useGetFilteredCardsList";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import DropdownMenu from "components/DropdownMenu";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import MTGCard from "./MTGCard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect, useState } from "react";

const options = [
  "All",
  "Collected",
  "Missing"
]

const SetPage = () => {
  const cardsList = useGetFilteredCardsList();
  const handleFilter = useHandleSelectorFilter();

  const [showMore, setShowMore] = useState(0)
  const cardsShown = 20;

  const loadNextPage = () => {
    showMore + cardsShown < cardsList.length && setShowMore(prev => prev + cardsShown);
  }
  const loadPrevPage = () => {
    showMore > 0 && setShowMore(prev => prev - cardsShown);
  }

  useEffect(() => {
    setShowMore(0)
  }, [cardsList.length])

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
        {cardsList.slice(showMore, showMore + cardsShown)
          .map((card) => (
            <MTGCard key={card.id} card={card} />
          ))}
      </Box>
      <Stack direction="row" display="flex" justifyContent="center" alignItems="center">
        <IconButton color="primary" size="large" onClick={loadPrevPage}><ArrowCircleLeftIcon /></IconButton>
        <Typography variant="body2"> {showMore + 1} - {Math.min(showMore + cardsShown + 1, cardsList.length)}</Typography>
        <IconButton color="primary" size="large" onClick={loadNextPage}><ArrowCircleRightIcon /></IconButton>
      </Stack>
    </Box>
  );
};

export default SetPage;
