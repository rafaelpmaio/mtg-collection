import { useRecoilValue } from "recoil";
import { cardsSetsListState } from "state/atom";

export const useGetSetsList = () => {
  const list = useRecoilValue(cardsSetsListState);
  return list;
};
