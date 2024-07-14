import { useSetScryfallCardsListData } from "../../stateHooks/scryfallCardsListDataState/useSetScryfallCardsListData";
import { useGetSetsSavedInMemory } from "../../stateHooks/saveSetInMemoryState/useGetSetsSavedInMemory";
import { useGetSelectedSet } from "../../stateHooks/selectedSetState/useGetSelectedSet";
import ICard from "interfaces/ICard";
import { useSaveSetInMemory } from "../../stateHooks/saveSetInMemoryState/useSaveSetInMemory";
import { httpScryfall } from "httpApi";
import { IScryfallData } from "interfaces/IScryfallData";
import { useGetScryfallCardsListData } from "state/hooks/stateHooks/scryfallCardsListDataState/useGetScryfallCardsListData";

export const useRequestScryfallData = () => {
  const scryfallCardsList = useGetScryfallCardsListData();
  // const saveSetInMemory = useSaveSetInMemory();
  // const setsInMemory = useGetSetsSavedInMemory();
  // const selectedSet = useGetSelectedSet();

  return (card: ICard, setScryfallCard: (card: IScryfallData) => void) => {

    // if (!setsInMemory.includes(selectedSet.id)) {
    // const scryfallCardData: Promise<IScryfallData> = 
    httpScryfall
      .get(card.scryfallId)
      .then((scryfallResponse) => {
        const data = scryfallResponse.data;
        let scryfallCard: IScryfallData = {
          id: card.id,
          prices: data.prices,
          images: data.image_uris,
        };
        setScryfallCard(scryfallCard);
      }).catch(error => console.error("Failed to request Scryfall card data", error));

    // scryfallCardData.then((data) => {
    // setScryfallData(scryfallCardArray);
    // saveSetInMemory(selectedSet);
    // toast.update(loading, { render: 'There they are!', type: "success", isLoading: false, autoClose: 2000 })
    // });
    // }
  };
};
