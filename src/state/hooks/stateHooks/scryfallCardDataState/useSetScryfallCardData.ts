import { IScryfallData } from "interfaces/IScryfallData";
import { useSetRecoilState } from "recoil"
import { scryfallCardDataState } from "state/atom"

export const useSetScryfallCardData = () => {
    const setData = useSetRecoilState(scryfallCardDataState);

    return (cardData: IScryfallData) => {
        setData(cardData);
    }
}