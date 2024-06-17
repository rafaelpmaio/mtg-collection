import ISet from "interfaces/ISet";
import useSetCardsSetsList from "../stateHooks/setsListState/useSetCardsSetsList";
import { useGetSetsList } from "../stateHooks/setsListState/useGetSetsList";
import { toast } from "react-toastify";

export const useUpdateCompletedSetStatus = () => {
  const toggleCollectFromList = useSetCardsSetsList();
  const prevList = useGetSetsList();

  return (selectedSet: ISet | undefined) => {
    if (!selectedSet) {
      toast.error("we couldn't find the selected Set to update");
      return;
    }
    const cardsList = selectedSet.cards;
    const totalCardsCollected = cardsList.reduce(
      (accumulator, card) => accumulator + Number(card.isCollected),
      0
    );
    let isCompleted: boolean = false;

    totalCardsCollected === cardsList.length ? isCompleted = true : isCompleted = false

    toggleCollectFromList(
      prevList.map((set) => {
        if (set.id === selectedSet.id) {
          return {
            ...set,
            isCompleted: isCompleted,
          };
        }
        return set;
      })
    );
  };
};
