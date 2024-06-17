import { render, screen } from "@testing-library/react";
import Set from "./Set";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockAddToList = jest.fn();
const mockRemoveFromList = jest.fn();
const mockSetCollection = jest.fn();

jest.mock("state/hooks/useAddToCollectList", () => {
  return {
    useAddToCollectList: () => mockAddToList,
  };
});
jest.mock("state/hooks/useRemoveFromCollectList", () => {
  return {
    useRemoveFromCollectList: () => mockRemoveFromList,
  };
});
jest.mock("state/hooks/useSetSelectedCollection", () => {
  return {
    useSetSelectedCollection: () => mockSetCollection,
  };
});

describe("given an set list item", () => {
  const set = {
    id: "1",
    name: "Alliances",
    image: "collection_logo_example.png",
    collect: true,
    collectedCardsAmt: 0,
    totalSetSize: 3,
    collectedCardsTotal:0,
    isCompleted: false,
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

  test("add collection to 'Collect List' when checkbox checked", async () => {
    const user = userEvent.setup();
    render(
      <RecoilRoot>
        <Set set={set} />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(mockAddToList).toHaveBeenCalledTimes(1);
  });

  test("remove collection from 'collect list' when checkbox unchecked", async () => {
    const user = userEvent.setup();
    render(
      <RecoilRoot>
        <Set set={set} />
      </RecoilRoot>,
      { wrapper: BrowserRouter }
    );
    const checkbox = screen.getByRole("checkbox");

    await user.click(checkbox);
    await user.click(checkbox);

    expect(checkbox).not.toBeChecked();
    expect(mockRemoveFromList).toHaveBeenCalledTimes(1);
  });

  // test("move to collection page when item is clicked", () => {
  //   render(
  //     <RecoilRoot>
  //       <ListItem collection={collection} />
  //     </RecoilRoot>
  //   );

  //   const item = screen.getByRole("listitem");
  //   userEvent.click(item);

  //   expect(mockSetCollection).toBeCalledTimes(1);
  // });
});
