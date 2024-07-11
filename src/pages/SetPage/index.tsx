import { useGetFilteredCardsList } from "state/hooks/stateHooks/filteredCardsListState/useGetFilteredCardsList";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import DropdownMenu from "components/DropdownMenu";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import MTGCard from "./MTGCard";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetFilteredSetsList } from "state/hooks/stateHooks/filteredSetsListState/useGetFilteredSetsList";
import { useSetCardsList } from "state/hooks/stateHooks/cardsListState/useSetCardsList";
import { useSetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useSetSelectedSet";

const options = [
  "All",
  "Collected",
  "Missing"
]

// 2º fazer com que o set seja encontrado ao atualizar a página
// refazer lógica da requisição http para programar 30% dos isCollected para true e 30% favoritados, também aproveitar para mudar o "collect" para "favorite"
// incluir fireworks quando o set for completo react-fireworks parece bem simples


const SetPage = () => {
  const location = useLocation();
  const setName = location.pathname.slice(12).replace("%20", " ");

  const setsList = useGetFilteredSetsList();

  // aqui seta a cardsList e o handleFilter se encarrega de atualizar o filteredCardsList 
  const setCardsList = useSetCardsList();
  const cardsList = useGetFilteredCardsList();
  const setSelectedSet = useSetSelectedSet();

  const handleFilter = useHandleSelectorFilter();


  const set = setsList.find(set => set.name === setName);
  useEffect(() => {
    if (set) { setCardsList(set.cards); setSelectedSet(set) };
    console.log("entrou aqui setslist", setsList);
    console.log("entrou aqui set", set && set);
  }, [set])

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
