import { Stack, Typography } from "@mui/material"
import ISet from "interfaces/ISet"
import { useState } from "react";
import Confetti from 'react-confetti';
import { useLocation } from "react-router-dom";
import { useWindowSize } from "react-use";
import { useGetSetsList } from "state/hooks/stateHooks/setsListState/useGetSetsList";

interface HeaderInfosProps {
    set: ISet | null
}

const HeaderInfos = ({ set }: HeaderInfosProps) => {
    const path = useLocation().pathname;
    const { width, height } = useWindowSize()
    const [recycle, setRecycle] = useState(true)
    const setsList = useGetSetsList();
    const setsCompleted = setsList.reduce((accumulator, set) => {
        return set.isCompleted ? accumulator + 1 : accumulator
    }, 0)

    setTimeout(() => {
        setRecycle(false)
    }, 6000)

    return (
        path.includes("collection/")
            ?
            <>
                {set?.isCompleted &&
                    <Confetti width={width} height={height} numberOfPieces={500} recycle={recycle} />}
                <Stack spacing={1}>
                    <Stack direction="row" spacing={2}>
                        <i className={`ss ss-${set?.image} ss-2x  ${set?.isCompleted ? "ss-rare" : "ss-common"}`} />
                        <Typography
                            variant="h4"
                            component="h1"
                            fontFamily="inherit"
                        >
                            {set?.name}
                        </Typography>
                    </Stack>
                    <Typography variant="body1"> Collected:
                        <b>
                            {set?.collectedCardsTotal} /{set?.totalSetSize}
                        </b>
                    </Typography>
                </Stack>
            </>
            : <Stack spacing={1}>
                <Typography
                    variant="h4"
                    component="h1"
                    fontFamily="inherit"
                >
                    Let's Keep Grinding!
                </Typography>
                <Typography variant="body1"> Sets Completed:
                    <b>
                        {setsCompleted} / {setsList.length}
                    </b>
                </Typography>
            </Stack>

        // {set?.isCompleted && <Confetti width={width} height={height} numberOfPieces={500} recycle={recycle} />}

    )
}

export default HeaderInfos;