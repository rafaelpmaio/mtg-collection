import ICard from "interfaces/ICard";
import { useSetRecoilState } from "recoil";
import { cardsListState } from "state/atom";

export const useSetCardsList = () => {
  const setFilteredCardsList = useSetRecoilState(cardsListState);

  return (cardsList: ICard[]) => {
    setFilteredCardsList(cardsList);
  };
};
