import { Box } from "@mui/material";
import Set from "./Set/Set";
import styles from "./_setsList.module.scss";
import { useGetFilteredSetsList } from "state/hooks/stateHooks/filteredSetsListState/useGetFilteredSetsList";

const SetsList = () => {
  const setsList = useGetFilteredSetsList();

  return (
    <ul className={styles.list}>
      {setsList.map((set) => (
        <Set set={set} key={set.id} />
      ))}
    </ul>
  );
};

export default SetsList;
