import { useSetScryfallCardsListData } from "../../stateHooks/scryfallCardsListDataState/useSetScryfallCardsListData";
import { useGetSetsSavedInMemory } from "../../stateHooks/saveSetInMemoryState/useGetSetsSavedInMemory";
import { useGetSelectedSet } from "../../stateHooks/selectedSetState/useGetSelectedSet";
import ICard from "interfaces/ICard";
import { useSaveSetInMemory } from "../../stateHooks/saveSetInMemoryState/useSaveSetInMemory";
import { httpScryfall } from "httpApi";
import { IScryfallData } from "interfaces/IScryfallData";
import { toast } from "react-toastify";

export const useBuildScryfallImgArr = () => {
  const setScryfallData = useSetScryfallCardsListData();
  const saveSetInMemory = useSaveSetInMemory();
  const setsInMemory = useGetSetsSavedInMemory();
  const selectedSet = useGetSelectedSet();

  return (cardsList: ICard[]) => {
    if (!selectedSet) {
      toast.error("no Set found!");
      return;
    }

    // if (!setsInMemory.includes(selectedSet.id)) {
    const loading = toast.loading('give me a minute to load the cards!')
    const scryfallCardArray: Promise<IScryfallData>[] = cardsList.map(
      (card) => {
        let scryfallCard = httpScryfall
          .get(card.scryfallId)
          .then((scryfallResponse) => {
            const scryfallData = scryfallResponse.data;
            let scryfallCard: IScryfallData = {
              id: card.id,
              prices: scryfallData.prices,
              images: scryfallData.image_uris,
            };
            return scryfallCard;
          });
        return scryfallCard;
      }
    );

    Promise.all(scryfallCardArray).then((scryfallCardArray) => {
      setScryfallData(scryfallCardArray);
      saveSetInMemory(selectedSet);
      toast.update(loading, { render: 'There they are!', type: "success", isLoading: false, autoClose: 2000 })
    });
    // }
  };
};
