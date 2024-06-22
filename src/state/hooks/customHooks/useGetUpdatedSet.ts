import ISet from "interfaces/ISet";
import { useMemo } from "react";
import { toast } from "react-toastify";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";
import { useGetSetsList } from "state/hooks/stateHooks/setsListState/useGetSetsList";

export const useGetUpdatedSet = () => {
  const setsList = useGetSetsList();
  const selectedSet = useGetSelectedSet();

  //O problema da renderização excessiva parece estar neste código --> setsList


  const set = useMemo(() => {

    if (!selectedSet) return undefined;

    const foundSet = setsList.find((set) => set.id === selectedSet.id);

    if (!foundSet) toast.error("could not find the selected SET");

    return foundSet;

  }, [setsList, selectedSet])
  return set;
};
