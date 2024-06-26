import { Stack, Typography } from "@mui/material"
import ISet from "interfaces/ISet"
import { useLocation } from "react-router-dom";
import { useGetScryfallData } from "state/hooks/stateHooks/scryfallDataState/useGetScryfallData";
import { calculateTotalSetCost } from "utils/calculateTotalSetCost";

interface HeaderInfosProps {
    set: ISet | null
}

const HeaderInfos = ({ set }: HeaderInfosProps) => {
    const pathname = useLocation().pathname;
    const scryfallData = useGetScryfallData();

    return (
        <Stack spacing={1}>
            <Typography
                variant="h4"
                component="h1"
                sx={{ fontFamily: "inherit" }}>
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
    )
}

export default HeaderInfos;