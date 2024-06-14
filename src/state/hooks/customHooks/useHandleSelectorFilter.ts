import { useGetSelectedSet } from "../stateHooks/selectedSetState/useGetSelectedSet";
import { useSetFilteredCardsList } from "../stateHooks/filteredCardsListState/useSetFilteredCardsList";
import { useSetFilteredSetsList } from "../stateHooks/filteredSetsListState/useSetFilteredSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";

export const useHandleSelectorFilter = () => {
  const setsList = useGetSetsList();
  const selectedSet = useGetSelectedSet();
  const setFilteredSetsList = useSetFilteredSetsList();
  const setFilteredCardsList = useSetFilteredCardsList();

  const updatedCollection = setsList.find(
    (collection) => collection.id === selectedSet?.id
  );

  return (option: string) => {
    // Filters from HomePage
    if (option === "All Collections") {
      setFilteredSetsList(setsList);
    }
    if (option === "Favorite List") {
      setFilteredSetsList(setsList.filter((collection) => collection.collect));
    }
    if (option === "Completed Sets") {
      setFilteredSetsList(
        setsList.filter((collection) => collection.isCompleted)
      );
    }
    // Filters from CollectionPage
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
