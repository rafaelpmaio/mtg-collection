import { Stack, Typography } from "@mui/material"
import ISet from "interfaces/ISet"
import { useState } from "react";
import Confetti from 'react-confetti';
import { useWindowSize } from "react-use";

interface HeaderInfosProps {
    set: ISet | null
}

const HeaderInfos = ({ set }: HeaderInfosProps) => {
    const { width, height } = useWindowSize()
    const [recycle, setRecycle] = useState(true)

    setTimeout(() => {
        setRecycle(false)
    }, 6000)

    return (
        <>
            {set?.isCompleted &&
                <Confetti width={width} height={height} numberOfPieces={500} recycle={recycle} />
            }
            <Stack spacing={1}>
                <Typography
                    variant="h4"
                    component="h1"
                    fontFamily="inherit"
                >
                    {set?.name}
                </Typography>
                <Typography variant="body1"> Collected:
                    <b>
                        {set?.collectedCardsTotal} /{set?.totalSetSize}
                    </b>
                </Typography>
            </Stack>
        </>
    )
}

export default HeaderInfos;