import ISet from "interfaces/ISet";
import { Link } from "react-router-dom";
import { useToggleSetFromCollectList } from "state/hooks/customHooks/useToggleSetFromCollectList";
import { useSetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useSetSelectedSet";
import styles from "./_set.module.scss";
import Checkbox from "components/Checkbox/Checkbox";
import "keyrune";
import { percentage } from "utils/percentage";

interface SetProps {
  set: ISet;
}

const Set = ({ set }: SetProps) => {
  const toggleSetFromCollectList = useToggleSetFromCollectList();
  const setSelectedSet = useSetSelectedSet();

  return (
    <li
      className={`${styles.container} ${
        !set.collect ? styles.uncollecting : ""
      } ${set.isCompleted ? styles.completed : ""}`}
      onClick={() => setSelectedSet(set)}
    >
      <Link to={`/collection/${set.name}`}>
        <i
          className={`ss ss-${set.image} ss-3x  ${
            set.isCompleted ? "ss-rare" : "ss-common"
          }`}
        ></i>
        <p>{set.name}</p>
        <p>{`${percentage(set.collectedCardsTotal, set.totalSetSize)}%`}</p>
      </Link>
      <Checkbox
        checkToggleFunction={(checkStatus) =>
          toggleSetFromCollectList(set, checkStatus)
        }
      />
    </li>
  );
};

export default Set;
