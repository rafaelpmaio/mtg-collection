import { Outlet, useLocation } from "react-router-dom";
import styles from "./_defaultPage.module.scss";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import { useEffect } from "react";
import { useSetDropdownMenuOptions } from "state/hooks/stateHooks/dropdownMenuOptionsState/useSetDropdownMenuOptions";
import { useGetDropdownMenuOptions } from "state/hooks/stateHooks/dropdownMenuOptionsState/useGetDropdownMenuOptions";
import { getDropdownOptions } from "utils/getDropdownOptions";
import { useGetUpdatedSet } from "state/hooks/customHooks/useGetUpdatedSet";
import { totalSetCost } from "utils/totalSetCost";
import { useGetScryfallData } from "state/hooks/stateHooks/scryfallDataState/useGetScryfallData";
import { Box } from "@mui/material";

const DefaultPage = () => {
  const setDropdownMenuOptions = useSetDropdownMenuOptions();
  const dropdownMenuOptions = useGetDropdownMenuOptions();
  const location = useLocation();
  const pathname = location.pathname;
  const set = useGetUpdatedSet();

  const scryfallData = useGetScryfallData();

  useEffect(() => {
    setDropdownMenuOptions(getDropdownOptions(pathname));
  }, [location]);

  return (
    <>
      <Box component="main" sx={{ padding: "10px" }}>
        <section className={styles.header}>
          <div className={styles.set_infos}>
            <h2 className={styles.set_name}>{set?.name}</h2>
            <p>
              Collected:{" "}
              <b>
                {set?.collectedCardsTotal} /{set?.totalSetSize}{" "}
              </b>
            </p>
            {String(pathname).includes("/collection") ? (
              <>
                <p>
                  Total Set Cost (usd):
                  <b>{set ? totalSetCost(set, scryfallData) : "0"}</b>
                </p>
                {/* <p>
                  Total Invested (usd): <b>{set ? totalInvested(set) : "0"}</b>
                </p> */}
              </>
            ) : (
              ""
            )}
          </div>
          <DropdownMenu
            options={dropdownMenuOptions}
            defaultOption={dropdownMenuOptions[0]}
          />
        </section>
        <Outlet />
      </Box >
    </>
  );
};

export default DefaultPage;
