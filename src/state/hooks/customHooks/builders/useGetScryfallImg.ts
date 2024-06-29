import { useSetScryfallCardsListData } from "../../stateHooks/scryfallCardsListDataState/useSetScryfallCardsListData";
import { useGetSetsSavedInMemory } from "../../stateHooks/saveSetInMemoryState/useGetSetsSavedInMemory";
import { useGetSelectedSet } from "../../stateHooks/selectedSetState/useGetSelectedSet";
import ICard from "interfaces/ICard";
import { useSaveSetInMemory } from "../../stateHooks/saveSetInMemoryState/useSaveSetInMemory";
import { httpScryfall } from "httpApi";
import { IScryfallData } from "interfaces/IScryfallData";
import { useGetScryfallCardsListData } from "state/hooks/stateHooks/scryfallCardsListDataState/useGetScryfallCardsListData";

export const useGetScryfallImg = () => {
  const setScryfallData = useSetScryfallCardsListData();
  const scryfallCardsList = useGetScryfallCardsListData();
  // const saveSetInMemory = useSaveSetInMemory();
  // const setsInMemory = useGetSetsSavedInMemory();
  // const selectedSet = useGetSelectedSet();

  return (card: ICard) => {

    //não está funcionando como deveria, rever a lógica
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
        console.log("scryfallCard", scryfallCard)
        setScryfallData([...scryfallCardsList, scryfallCard]);
      });

    // scryfallCardData.then((data) => {
    // setScryfallData(scryfallCardArray);
    // saveSetInMemory(selectedSet);
    // toast.update(loading, { render: 'There they are!', type: "success", isLoading: false, autoClose: 2000 })
    // });
    // }
  };
};
