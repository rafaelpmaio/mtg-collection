import { useGetSelectedSet } from "../stateHooks/selectedSetState/useGetSelectedSet";
import { useSetFilteredCardsList } from "../stateHooks/filteredCardsListState/useSetFilteredCardsList";
import { useSetFilteredSetsList } from "../stateHooks/filteredSetsListState/useSetFilteredSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import ISet from "interfaces/ISet";
import { useCallback } from "react";
import ICard from "interfaces/ICard";

type SetsFilterFunction = () => ISet[];
type CardsFilterFunction = () => ICard[];


export const useHandleSelectorFilter = () => {
  const setsList = useGetSetsList();
  const selectedSet = useGetSelectedSet();
  const setFilteredSetsList = useSetFilteredSetsList();
  const setFilteredCardsList = useSetFilteredCardsList();

  const cardsList = selectedSet?.cards || [];
  console.log("entrou no useHandleSelectorFilter")

  const filterOptions_sets: Record<string, SetsFilterFunction> = {
    All: () => setsList,
    Favorite: () => setsList.filter(collection => collection.collect),
    Completed: () => setsList.filter(collection => collection.isCompleted),
  };

  const filterOptions_cards: Record<string, CardsFilterFunction> = {
    Number: () => cardsList || [],
    Collected: () => cardsList.filter((card) => card.isCollected) || [],
    Missing: () => cardsList.filter((card) => !card.isCollected) || [],
  };

  //renderizando muitas vezes as cartas, problema NÃO está aqui!, o DropdownMenu está renderizando 6x mesmo sem a função


  const handleFilterChange = useCallback((option: string) => {

    const filteredSetsList = filterOptions_sets[option] ? filterOptions_sets[option]() : [];
    setFilteredSetsList(filteredSetsList);

    const cardsFilteredList = filterOptions_cards[option] ? filterOptions_cards[option]() : [];
    setFilteredCardsList(cardsFilteredList)
    
  }, [cardsList, filterOptions_sets, setFilteredSetsList, setFilteredCardsList]) //pode retirar o setcardslist quando criar a filterOptions_cards

  return handleFilterChange;
};
