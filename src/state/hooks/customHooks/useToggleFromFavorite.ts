import ISet from "interfaces/ISet";
import useSetSetsList from "../stateHooks/setsListState/useSetSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import { useCallback } from "react";

export const useToggleFromFavorite = () => {
  const updateSetsList = useSetSetsList();
  const setsList = useGetSetsList();

  return useCallback((selectedSet: ISet, checkStatus: boolean = false) => {
    const index = setsList.findIndex(set => set.id === selectedSet.id)

    const updatedSet: ISet = {
      ...setsList[index],
      collect: checkStatus
    }

    updateSetsList([...setsList.slice(0, index), updatedSet, ...setsList.slice(index + 1)])

  }, [updateSetsList, setsList]
  )
}
