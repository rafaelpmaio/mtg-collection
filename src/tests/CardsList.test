import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import CardsList from "./CardList";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";
import ISet from "interfaces/ISet";

const set: ISet = {
  id: "1",
  name: "Alliances",
  image: "collection_logo_example.png",
  collect: false,
  isCompleted: false,
  totalSetSize:3,
  collectedCardsTotal:0,
  cards: [
    {
      id: "1",
      scryfallId: "card_example.jpg",
      name: "Force of Will",
      number: "1",
    },
    {
      id: "2",
      scryfallId: "card_example.jpg",
      name: "Helm of Obedience",
      number: "2",
    },
    {
      id: "3",
      scryfallId: "card_example.jpg",
      name: "Lake of the Dead",
      number: "3",
    },
  ],
};
jest.mock("state/hooks/useGetSelectedCollection", () => {
  return {
    useGetSelectedCollection: jest.fn(),
  };
});

describe("given an cards list", () => {
  beforeEach(() => {
    (useGetSelectedSet as jest.Mock).mockReturnValue(set);
  });
  test("the list is displayed on the screen", () => {
    render(<CardsList cardsList={set.cards}/>, { wrapper: RecoilRoot });

    const list = screen.getByRole("list");

    expect(list).toBeInTheDocument();
  });

  test("all the cards are displayed on screen", () => {
    render(<CardsList cardsList={set.cards}/>, { wrapper: RecoilRoot });

    const listItens = screen.getAllByRole("listitem");

    expect(listItens).toHaveLength(set.cards.length);
  });
});
