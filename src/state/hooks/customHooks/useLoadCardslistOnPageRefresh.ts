import { useLocation } from "react-router-dom";
import { useSetCardsList } from "../stateHooks/cardsListState/useSetCardsList";
import { useGetSelectedSet } from "../stateHooks/selectedSetState/useGetSelectedSet";
import { useSetSelectedSet } from "../stateHooks/selectedSetState/useSetSelectedSet";
import ISet from "interfaces/ISet";

export const useLoadCardslistOnPageRefresh = () => {
    const location = useLocation();
    const setName = location.pathname.slice(12).replaceAll("%20", " ");

    const setCardsList = useSetCardsList();
    const selectedSet = useGetSelectedSet();
    const setSelectedSet = useSetSelectedSet();

    return (setsList: ISet[]) => {

        if (!selectedSet) {
            const set = setsList.find(set => set.name === setName);
            if (set) {
                setCardsList(set.cards);
                setSelectedSet(set)
            }
        };

    }

}