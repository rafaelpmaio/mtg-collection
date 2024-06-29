import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import ISet from "interfaces/ISet";
import { atom } from "recoil";

export const cardsSetsListState = atom<ISet[]>({
  key: "setsListState",
  default: [],
});

export const filteredSetsListState = atom<ISet[]>({
  key: "filteredSetsListState",
  default: [],
});

export const selectedSetState = atom<ISet | null>({
  key: "selectedSetState",
  default: null,
});

export const filteredCardsListState = atom<ICard[]>({
  key: "filteredCardsListState",
  default: [],
});

export const scryfallCardsListDataState = atom<IScryfallData[]>({
  key: 'scryfallCardsDataListState',
  default: []
})

export const saveSetInMemoryState = atom<string[]>({
  key: 'saveSetInMemoryState',
  default: []
})

