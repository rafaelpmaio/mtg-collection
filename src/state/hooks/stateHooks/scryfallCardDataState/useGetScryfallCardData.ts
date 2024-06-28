import { useRecoilValue } from "recoil"
import { scryfallCardDataState } from "state/atom"

export const useGetScryfallCardData = () => {
    const cardData = useRecoilValue(scryfallCardDataState);
    return cardData;
}