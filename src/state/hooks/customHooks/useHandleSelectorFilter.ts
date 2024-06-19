import { useGetSelectedSet } from "../stateHooks/selectedSetState/useGetSelectedSet";
import { useSetFilteredCardsList } from "../stateHooks/filteredCardsListState/useSetFilteredCardsList";
import { useSetFilteredSetsList } from "../stateHooks/filteredSetsListState/useSetFilteredSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import useSetCardsSetsList from "../stateHooks/setsListState/useSetCardsSetsList";
import ISet from "interfaces/ISet";
import ICard from "interfaces/ICard";

type FilterFunction = () => ISet[];


export const useHandleSelectorFilter = () => {
  const setsList = useGetSetsList();
  const selectedSet = useGetSelectedSet();
  const setFilteredSetsList = useSetFilteredSetsList();
  const setFilteredCardsList = useSetFilteredCardsList();

  //Ver se possivel utilizar apenas o selectedSet, parece desnecessário este filtro
  const updatedCollection = setsList.find(
    (collection) => collection.id === selectedSet?.id
  );

  const filterOptions: Record<string, FilterFunction> = {
    All: () => setsList,
    Favorite: () => setsList.filter(collection => collection.collect),
    Completed: () => setsList.filter(collection => collection.isCompleted),
  };

  return (option: string) => {

    const filteredList = filterOptions[option] ? filterOptions[option]() : [];
    setFilteredSetsList(filteredList);
    if (option === "Number") {
      //FALTA IMPLEMENTAR
      // const sortedList = updatedCollection?.cards.sort(
      //   (a, b) => Number(a.number) - Number(b.number)
      // );
      setFilteredCardsList(updatedCollection ? updatedCollection.cards : []);
    }

    if (option === "Collected") {
      return updatedCollection
        ? setFilteredCardsList(
          updatedCollection.cards.filter((card) => card.isCollected)
        )
        : null;
    }
    if (option === "Missing") {
      return updatedCollection
        ? setFilteredCardsList(
          updatedCollection.cards.filter((card) => !card.isCollected)
        )
        : null;
    }
  };
};
