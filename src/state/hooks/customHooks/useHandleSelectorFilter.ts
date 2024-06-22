import { useGetSelectedSet } from "../stateHooks/selectedSetState/useGetSelectedSet";
import { useSetFilteredCardsList } from "../stateHooks/filteredCardsListState/useSetFilteredCardsList";
import { useSetFilteredSetsList } from "../stateHooks/filteredSetsListState/useSetFilteredSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import useSetCardsSetsList from "../stateHooks/setsListState/useSetCardsSetsList";
import ISet from "interfaces/ISet";
import ICard from "interfaces/ICard";
import { useCallback } from "react";

type FilterFunction = () => ISet[];


export const useHandleSelectorFilter = () => {
  const setsList = useGetSetsList();
  const selectedSet = useGetSelectedSet();
  const setFilteredSetsList = useSetFilteredSetsList();
  const setFilteredCardsList = useSetFilteredCardsList();

  const cardsList = selectedSet?.cards || [];
  console.log(cardsList)

  const filterOptions_sets: Record<string, FilterFunction> = {
    All: () => setsList,
    Favorite: () => setsList.filter(collection => collection.collect),
    Completed: () => setsList.filter(collection => collection.isCompleted),
  };

  //renderizando muitas vezes as cartas, problema NÃO está aqui!, o DropdownMenu está renderizando 6x mesmo sem a função

  console.log("entrou no useHandleSelectorFilter")

  const handleFilterChange = useCallback((option: string) => {

    const filteredList = filterOptions_sets[option] ? filterOptions_sets[option]() : [];
    setFilteredSetsList(filteredList);
    if (option === "Number") {
      setFilteredCardsList(cardsList);
    }

    if (option === "Collected") {
      const filteredCards = cardsList.filter((card) => card.isCollected);
      setFilteredCardsList(filteredCards);
    }
    if (option === "Missing") {
      const filteredCards = cardsList.filter((card) => !card.isCollected);
      setFilteredCardsList(filteredCards)
    }
  },[cardsList, filterOptions_sets, setFilteredSetsList, setFilteredCardsList]) //pode retirar o setcardslist quando criar a filterOptions_cards

return handleFilterChange;
};


// const cardsFilterOptions: Record<string, CardsFilterFunction> = {
//   Number: () => updatedCollection?.cards || [],
//   Collected: () => updatedCollection?.cards.filter((card) => card.isCollected) || [],
//   Missing: () => updatedCollection?.cards.filter((card) => !card.isCollected) || [],
// };

// return (option: string) => {
//   const setsFilteredList = setsFilterOptions[option] ? setsFilterOptions[option]() : [];
//   setFilteredSetsList(setsFilteredList);
  
//   const cardsFilteredList = cardsFilterOptions[option] ? cardsFilterOptions[option]() : [];
//   setFilteredCardsList(cardsFilteredList)
// };