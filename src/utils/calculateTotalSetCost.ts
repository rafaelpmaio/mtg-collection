import { IScryfallData } from "interfaces/IScryfallData";
import ISet from "interfaces/ISet";
import { getValueWithKey } from "./getValueWithKey";

export const calculateTotalSetCost = (set: ISet, scryfallData: IScryfallData[]) => {

  const cardsList = set.cards;
  const totalCost =
    cardsList.reduce(function (accumulator, card) {
      const scryfallCardData =
        scryfallData.find(scryfallCard => scryfallCard.id === card.id);

      return accumulator + Number(getValueWithKey('usd', scryfallCardData?.prices));
    }, 0);

  return !isNaN(totalCost) ? totalCost.toFixed(2) : "0"
};
