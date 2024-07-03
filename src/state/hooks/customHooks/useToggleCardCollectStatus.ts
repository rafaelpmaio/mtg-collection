import ICard from "interfaces/ICard";
import useSetCardsSetsList from "../stateHooks/setsListState/useSetCardsSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import { useGetSelectedSet } from "../stateHooks/selectedSetState/useGetSelectedSet";
import { useSetFilteredCardsList } from "../stateHooks/filteredCardsListState/useSetFilteredCardsList";
import ISet from "interfaces/ISet";

export const useToggleCardCollectStatus = () => {
  const set = useGetSelectedSet();
  const prevList = useGetSetsList();
  const updateSetsList = useSetCardsSetsList();
  const updateFilteredList = useSetFilteredCardsList();

  const calculateCollectedTotal = (cardsList: ICard[]) => {
    const collectedTotal = cardsList.reduce(
      (accumulator, card) => accumulator + Number(card.isCollected),
      0
    );
    return collectedTotal;
  };

  return (card: ICard, checked: boolean = false) => {

    if (!set) throw Error("set not found")

      console.log("cardslist", checked)

    const updatedCard: ICard = {
      ...card,
      isCollected: checked 
    }

    const updatedCardsList: ICard[] = set.cards.map(card => 
      card.id === updatedCard.id ? updatedCard : card
    )

    //está usando duas referencias de set diferentes, setsList e filteredSetsList, por isso quando altera uma carta ele pega o id do setsList que ainda está como não coletado e a carta volta a ficar como iscollected false. Para resolver isso talvez utilizar o useState do checked e filtrar através dele. --> ou achar alguma forma de unificar as lsitas
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
    updateFilteredList(updatedCardsList)

  };
};
