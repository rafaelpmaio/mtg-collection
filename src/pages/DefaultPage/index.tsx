import { Outlet, useLocation } from "react-router-dom";
import DropdownMenu from "components/DropdownMenu";
import { calculateTotalSetCost } from "utils/calculateTotalSetCost";
import { useGetScryfallData } from "state/hooks/stateHooks/scryfallDataState/useGetScryfallData";
import { Box, Stack, Typography } from "@mui/material";
import { useGetSelectedSet } from "state/hooks/stateHooks/selectedSetState/useGetSelectedSet";

const DefaultPage = () => {
  const pathname = useLocation().pathname;
  const set = useGetSelectedSet();

  const scryfallData = useGetScryfallData();

  console.log("renderizou o DefaultPage")

  return (
      <Box component="main" sx={{ padding: "10px" }}>
        <Box
          height={200}
          textAlign="center"
          component="section"
        >
          <Stack spacing={1}>
            <Typography
              variant="h4"
              component="h1"
              sx={{fontFamily:"inherit"}}>
              {set?.name}
            </Typography>
            <Typography variant="body1"> Collected:
              <b>
                {set?.collectedCardsTotal} /{set?.totalSetSize}
              </b>
            </Typography>
            {String(pathname).includes("/collection")
              &&
              <Typography> Total Set Cost: US$
                <b>
                  {set && calculateTotalSetCost(set, scryfallData)}
                </b>
              </Typography>
            }
          </Stack>
          <DropdownMenu />
        </Box>
        <Outlet />
      </Box >
  );
};

export default DefaultPage;
