import ISet from "interfaces/ISet";
import useSetCardsSetsList from "../stateHooks/setsListState/useSetCardsSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import { useCallback } from "react";

export const useToggleFromFavorite = () => {
  const setCardsSetList = useSetCardsSetsList();
  const setsList = useGetSetsList();

  return useCallback((selectedSet: ISet, checkStatus: boolean = false) => {
    const index = setsList.findIndex(set => set.id === selectedSet.id)

    const updatedSet: ISet = {
      ...setsList[index],
      collect: checkStatus
    }

    setCardsSetList([...setsList.slice(0, index), updatedSet, ...setsList.slice(index + 1)])



  }, [setCardsSetList, setsList]
  )
}
