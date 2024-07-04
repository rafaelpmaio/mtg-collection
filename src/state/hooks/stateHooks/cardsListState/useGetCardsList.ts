import { useRecoilValue } from "recoil";
import { cardsListState } from "state/atom";

export const useGetCardsList = () => {
  const cardsList = useRecoilValue(cardsListState);
  return cardsList;
};
