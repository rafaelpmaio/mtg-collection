import ICard from "interfaces/ICard";
import useSetSetsList from "../stateHooks/setsListState/useSetSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import ISet from "interfaces/ISet";
import { useSetCardsList } from "../stateHooks/cardsListState/useSetCardsList";
import { useGetCardsList } from "../stateHooks/cardsListState/useGetCardsList";
import { useGetSelectedSet } from "../stateHooks/selectedSetState/useGetSelectedSet";
import { useSetSelectedSet } from "../stateHooks/selectedSetState/useSetSelectedSet";

export const useToggleCardCollectStatus = () => {
  const prevList = useGetSetsList();
  const cardsList = useGetCardsList();
  const updateSetsList = useSetSetsList();
  const updateCardsList = useSetCardsList();
  const selectedSet = useGetSelectedSet();
  const updateSelectedSet = useSetSelectedSet()

  return (card: ICard, checked: boolean = false) => {

    const updatedCard: ICard = {
      ...card,
      isCollected: checked
    }

    const updatedCardsList: ICard[] = cardsList.map(card =>
      card.id === updatedCard.id ? updatedCard : card
    )

    console.log("updatedCardsList", updatedCardsList)
    console.log("updatedCardsList2", cardsList)

    const collectedTotal = updatedCardsList.reduce((accumulator, card) => accumulator + Number(card.isCollected), 0);
    console.log("completed", collectedTotal === cardsList.length)

    const setsList: ISet[] = prevList.map((set) => {
      if (set.id === selectedSet?.id) {
        set = {
          ...set,
          collectedCardsTotal: collectedTotal,
          isCompleted: collectedTotal === cardsList.length,
          cards: updatedCardsList,
        };
        updateSelectedSet(set)
        return set;

      }
      return set;
    })

    updateSetsList(setsList);
    updateCardsList(updatedCardsList)

  };
};
