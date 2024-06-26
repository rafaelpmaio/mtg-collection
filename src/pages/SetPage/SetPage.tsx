import { useGetFilteredCardsList } from "state/hooks/stateHooks/filteredCardsListState/useGetFilteredCardsList";
import CardsList from "./CardsList/CardList";
import styles from "./_setPage.module.scss";
import { useBuildScryfallData } from "state/hooks/customHooks/builders/useBuildScryfallData";
import { useEffect } from "react";
import { useUpdateCompletedSetStatus } from "state/hooks/customHooks/useUpdateCompletedSetStatus";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";

const SetPage = () => {
  const set = useGetSelectedSet();
  const cardsList = useGetFilteredCardsList();
  const buildScryfallData = useBuildScryfallData();
  const updateCompletedStatus = useUpdateCompletedSetStatus();

  useEffect(() => {
    updateCompletedStatus(set ? set : undefined);
    buildScryfallData(cardsList);
  }, []);

  return (
    <div className={styles.container}>
      <CardsList cardsList={cardsList || []} />
    </div>
  );
};

export default SetPage;
