import ICard from "interfaces/ICard";
import useSetSetsList from "../stateHooks/setsListState/useSetSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import ISet from "interfaces/ISet";
import { useSetCardsList } from "../stateHooks/cardsListState/useSetCardsList";
import { useGetCardsList } from "../stateHooks/cardsListState/useGetCardsList";

export const useToggleCardCollectStatus = () => {
  const prevList = useGetSetsList();
  const cardsList = useGetCardsList();
  const updateSetsList = useSetSetsList();
  const updateCardsList = useSetCardsList();

  return (card: ICard, checked: boolean = false) => {

    const updatedCard: ICard = {
      ...card,
      isCollected: checked
    }

    const updatedCardsList: ICard[] = cardsList.map(card =>
      card.id === updatedCard.id ? updatedCard : card
    )

    const collectedTotal = updatedCardsList.reduce((accumulator, card) => accumulator + Number(card.isCollected), 0);
    console.log("completed", collectedTotal === cardsList.length)

    const setsList: ISet[] = prevList.map((set) => {
      if (set.id === set.id) {
        set = {
          ...set,
          collectedCardsTotal: collectedTotal,
          isCompleted: collectedTotal === cardsList.length,
          cards: [
            ...set.cards,
            updatedCard
          ],
        };
        return set;
      }
      return set;
    })

    updateSetsList(setsList);
    updateCardsList(updatedCardsList)

  };
};
