import ICard from "interfaces/ICard";
import { useGetUpdatedSet } from "./useGetUpdatedSet";
import useSetCardsSetsList from "../stateHooks/setsListState/useSetCardsSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import { toast } from "react-toastify";

export const useToggleCardCollectStatus = () => {
  const prevList = useGetSetsList();
  const updateSetsList = useSetCardsSetsList();
  const setOfTheCard = useGetUpdatedSet();
  const calculateCollectedTotal = (cardsList: ICard[]) => {
    const collectedTotal = cardsList.reduce(
      (accumulator, card) => accumulator + Number(card.isCollected),
      0
    );
    return collectedTotal;
  };

  return (selectedCard: ICard, checkStatus: boolean = false) => {
    if (!setOfTheCard) {
      toast.error("we could not find the Set of the selected card");
      return;
    }
    const updatedCardsList = setOfTheCard.cards.map((card) => {
      if (card.id === selectedCard.id) {
        return {
          ...card,
          isCollected: checkStatus,
        };
      }
      return card;
    });

    const collectedTotal = calculateCollectedTotal(updatedCardsList);

    updateSetsList(
      prevList.map((set) => {
        if (set.id === setOfTheCard.id) {
          set = {
            ...set,
            collectedCardsTotal: collectedTotal,
            cards: updatedCardsList,
          };
          return set;
        }
        return set;
      })
    );
  };
};
