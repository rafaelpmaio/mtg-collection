import ICard from "./ICard";

export default interface ISet {
  id: string;
  name: string;
  image: string;
  totalSetSize: number;
  collectedCardsTotal: number;
  releaseDate?: string;
  block?: string; //the block name the set is
  isFavorite: boolean;
  isCompleted: boolean;
  cards: ICard[];
}
