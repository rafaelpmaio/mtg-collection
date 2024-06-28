import { useRecoilValue } from "recoil"
import { scryfallCardsListDataState } from "state/atom"

export const useGetScryfallCardsListData = () => {
    const cardsListData = useRecoilValue(scryfallCardsListDataState);
    return cardsListData
}