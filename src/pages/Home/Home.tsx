import SetsList from "./SetsList/SetsList";
import styles from "./_home.module.scss";
import { useEffect } from "react";
import data from 'assets/data.json'
import useSetSetsList from "state/hooks/stateHooks/setsListState/useSetSetsList";


const Home = () => {
  const buildSets = useSetSetsList();

  useEffect(() => {
    buildSets(data);
  }, [])

  return (
    <div className={styles.container}>
      <SetsList />
    </div>
  );
};

export default Home;

