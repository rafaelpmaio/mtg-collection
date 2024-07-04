import { useGetCardsList } from "../stateHooks/cardsListState/useGetCardsList";
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
  const cardsList = useGetCardsList();
  const setFilteredSetsList = useSetFilteredSetsList();
  const setFilteredCardsList = useSetFilteredCardsList();

  console.log("entrou no useHandleSelectorFilter")

  console.log("cardslist do handle", cardsList)

  const filterOptions_sets: Record<string, SetsFilterFunction> = {
    All: () => setsList,
    Favorite: () => setsList.filter(collection => collection.collect),
    Completed: () => setsList.filter(collection => collection.isCompleted),
  };


  const filterOptions_cards: Record<string, CardsFilterFunction> = {
    Number: () => cardsList,
    Collected: () => cardsList.filter((card) => card.isCollected),
    Missing: () => cardsList.filter((card) => !card.isCollected),
  };

  const handleFilterChange = useCallback((option: string) => {

    const filteredSetsList = filterOptions_sets[option] ? filterOptions_sets[option]() : [];
    setFilteredSetsList(filteredSetsList);

    const filteredCardsList = filterOptions_cards[option] ? filterOptions_cards[option]() : [];
    setFilteredCardsList(filteredCardsList)

  }, [setsList, cardsList, filterOptions_sets, filterOptions_cards, setFilteredSetsList, setFilteredCardsList])

  return handleFilterChange;
};
