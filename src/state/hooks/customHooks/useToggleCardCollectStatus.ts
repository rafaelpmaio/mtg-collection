import ICard from "interfaces/ICard";
import useSetSetsList from "../stateHooks/setsListState/useSetSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import ISet from "interfaces/ISet";
import { useGetFilteredCardsList } from "../stateHooks/filteredCardsListState/useGetFilteredCardsList";
import { useSetCardsList } from "../stateHooks/cardsListState/useSetCardsList";

export const useToggleCardCollectStatus = () => {
  const prevList = useGetSetsList();
  const cardsList = useGetFilteredCardsList();
  const updateSetsList = useSetSetsList();
  const updateCardsList = useSetCardsList();

  const calculateCollectedTotal = (cardsList: ICard[]) => {
    const collectedTotal = cardsList.reduce(
      (accumulator, card) => accumulator + Number(card.isCollected),
      0
    );
    return collectedTotal;
  };

  return (card: ICard, checked: boolean = false) => {

    const updatedCard: ICard = {
      ...card,
      isCollected: checked
    }

    const updatedCardsList: ICard[] = cardsList.map(card =>
      card.id === updatedCard.id ? updatedCard : card
    )

    const setsList: ISet[] = prevList.map((set) => {
      if (set.id === set.id) {
        set = {
          ...set,
          // collectedCardsTotal: collectedTotal,
          cards: [
            ...set.cards,
            updatedCard
          ],
        };
        return set;
      }
      return set;
    })

    // const collectedTotal = calculateCollectedTotal(updatedCardsList);

    updateSetsList(setsList);
    updateCardsList(updatedCardsList)

  };
};
