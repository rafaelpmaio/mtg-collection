export default interface ICard {
  id: string;
  name: string;
  scryfallId: string;
  number: string;
  rarity?: string;
  type?: string;
  types?: string[];
  manaCost?: string;
  manaValue?: number;
  colors?: string[];
  isPromo?: boolean;
  currentPrice?: string;
  pricePaid?: string;
  isCollected?: boolean;
  tcgLink?: string;
}
