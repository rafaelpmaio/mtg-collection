import { IScryfallData } from "interfaces/IScryfallData"
import { useSetRecoilState } from "recoil"
import { scryfallCardsListDataState } from "state/atom"

export const useSetScryfallCardsListData = () => {
    const setData = useSetRecoilState(scryfallCardsListDataState)

    return (cardsListData: IScryfallData[]) => {
        setData(data => [...data, ...cardsListData])
    }
}