import { useSetScryfallCardsListData } from "../../stateHooks/scryfallCardsListDataState/useSetScryfallCardsListData";
import { useGetSetsSavedInMemory } from "../../stateHooks/saveSetInMemoryState/useGetSetsSavedInMemory";
import { useGetSelectedSet } from "../../stateHooks/selectedSetState/useGetSelectedSet";
import ICard from "interfaces/ICard";
import { useSaveSetInMemory } from "../../stateHooks/saveSetInMemoryState/useSaveSetInMemory";
import { httpScryfall } from "httpApi";
import { IScryfallData } from "interfaces/IScryfallData";
import { toast } from "react-toastify";

export const useGetScryfallImg = () => {
  const setScryfallData = useSetScryfallCardsListData();
  const saveSetInMemory = useSaveSetInMemory();
  const setsInMemory = useGetSetsSavedInMemory();
  const selectedSet = useGetSelectedSet();

  return (card: ICard) => {
    if (!selectedSet) {
      toast.error("no Set found!");
      return;
    }

    //não está funcionando como deveria, rever a lógica
    // if (!setsInMemory.includes(selectedSet.id)) {
    const loading = toast.loading('give me a minute to load the cards!')
    const scryfallCardData: Promise<IScryfallData> = 
      httpScryfall
        .get(card.scryfallId)
        .then((scryfallResponse) => {
          const data = scryfallResponse.data;
          let scryfallCard: IScryfallData = {
            id: card.id,
            prices: data.prices,
            images: data.image_uris,
          };
          return scryfallCard;
        });

  scryfallCardData.then((data) => {
    // setScryfallData(scryfallCardArray);
    saveSetInMemory(selectedSet);
    toast.update(loading, { render: 'There they are!', type: "success", isLoading: false, autoClose: 2000 })
  });
  // }
};
};
