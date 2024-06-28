import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import { useEffect, useState } from "react";
import { useGetScryfallCardsListData } from "../stateHooks/scryfallCardsListDataState/useGetScryfallCardsListData";

export const useGetScryfallCard = (card: ICard) => {
  const [scryfallCard, setScryfallCard] = useState<IScryfallData>();
  const scryfallData = useGetScryfallCardsListData();
  const foundCard = scryfallData.find((data) => data.id === card.id);

  useEffect(() => {
    setScryfallCard(foundCard);
  }, [foundCard]);

  return scryfallCard;
};
