import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";
import HeaderInfos from "components/HeaderInfos";
import useSetSetsList from "state/hooks/stateHooks/setsListState/useSetSetsList";
import { useEffect } from "react";
import data from 'assets/data.json'


const DefaultPage = () => {
  const buildSets = useSetSetsList();
  const set = useGetSelectedSet();

  useEffect(() => {
    buildSets(data);
  }, [])

  return (
    <Box
      component="main"
      sx={{ padding: "10px" }}
    >
      <Box
        height={100}
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        component="section"
      >
        <HeaderInfos set={set} />
      </Box>
      <Outlet />
    </Box >
  );
};

export default DefaultPage;
