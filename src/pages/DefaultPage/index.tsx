import { Outlet } from "react-router-dom";
import DropdownMenu from "components/DropdownMenu";
import { Box } from "@mui/material";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";
import { useHandleSelectorFilter } from "state/hooks/customHooks/useHandleSelectorFilter";
import HeaderInfos from "components/HeaderInfos";

const DefaultPage = () => {
  const set = useGetSelectedSet();
  const handleFilter = useHandleSelectorFilter();

  console.log("renderizou o DefaultPage")

  return (
    <Box component="main" sx={{ padding: "10px" }}>
      <Box
        height={200}
        textAlign="center"
        component="section"
      >
        <HeaderInfos set={set}/>
        <DropdownMenu
          handleFilter={handleFilter} />
      </Box>
      <Outlet />
    </Box >
  );
};

export default DefaultPage;
