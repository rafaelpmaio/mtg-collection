import ISet from "interfaces/ISet";
import { useSetRecoilState } from "recoil";
import { cardsSetsListState } from "state/atom";

const useSetCardsSetsList = () => {
  const setCardsSetsList = useSetRecoilState(cardsSetsListState);
  return (sets: ISet[]) => {
    setCardsSetsList(sets);
  };
};

export default useSetCardsSetsList;
