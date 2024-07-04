import { render, screen } from "@testing-library/react";
import AppRoutes from "../components/AppRoutes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useGetFilteredSetsList } from "state/hooks/stateHooks/filteredSetsListState/useGetFilteredSetsList";

const collections = [
  {
    id: "1",
    name: "Alliances",
    collect: false,
    isCompleted: false,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
  {
    id: "2",
    name: "Homelands",
    collect: false,
    isCompleted: true,
    cards: [
      {
        id: "1",
        name: "Baron Sengir",
      },
      {
        id: "2",
        name: "Soraya the Falconer",
      },
      {
        id: "3",
        name: "Chandler",
      },
    ],
  },
  {
    id: "3",
    name: "Ice Age",
    collect: false,
    isCompleted: true,
    cards: [
      {
        id: "1",
        name: "Necropotence",
      },
      {
        id: "2",
        name: "Marton Stromgald",
      },
      {
        id: "3",
        name: "Altar of Bone",
      },
    ],
  },
  {
    id: "4",
    name: "Apocalipse",
    collect: false,
    isCompleted: true,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
  {
    id: "5",
    name: "Mirrodin",
    collect: false,
    isCompleted: true,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
  {
    id: "6",
    name: "Alpha",
    collect: false,
    isCompleted: false,
    cards: [
      {
        id: "1",
        name: "Force of Will",
      },
      {
        id: "2",
        name: "Helm of Obedience",
      },
      {
        id: "3",
        name: "Lake of the Dead",
      },
    ],
  },
];

jest.mock("state/hooks/useGetFilteredCollectionsList", () => {
  return {
    useGetFilteredCollectionsList: jest.fn(),
  };
});

describe("Component <AppRoutes/>", () => {
  beforeEach(() => {
    (useGetFilteredSetsList as jest.Mock).mockReturnValue(collections);
  });
  test("it should navigate to the page that corresponds to the clicked collection", async () => {
    const user = userEvent.setup();

    render(<AppRoutes />, { wrapper: BrowserRouter });

    const linkCollectionPage = screen.getByText("Alliances");
    user.click(linkCollectionPage);

    const collectionCard = await screen.findByText("Force of Will");

    expect(collectionCard).toBeInTheDocument();
  });
});
