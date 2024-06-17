import ISet from "interfaces/ISet";
import useSetCardsSetsList from "../stateHooks/setsListState/useSetCardsSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import { useCallback } from "react";

export const useToggleFromFavorite = () => {
  const setCardsSetList = useSetCardsSetsList();
  const setsList = useGetSetsList();

  return useCallback((selectedSet: ISet, checkStatus: boolean = false) => {
    setCardsSetList(
      setsList.map((set) => {
        if (set.id === selectedSet.id) {
          return {
            ...set,
            collect: checkStatus,
          };
        }
        return set;
      })
    );
  }, [setCardsSetList, setsList]
  )
}
