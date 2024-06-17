import { LinearProgress } from "@mui/joy";
import { CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ISet from "interfaces/ISet";
import { useEffect } from "react";
import { percentage } from "utils/percentage";

interface SetInfosProps {
    set: ISet
}

export default function SetInfos({ set }: SetInfosProps) {
    var progress = 0;

    useEffect(() => {
        progress = percentage(set.collectedCardsTotal, set.totalSetSize);
    }, [set.collectedCardsTotal, set.totalSetSize]
    )

    return (
        <Stack direction="row" >
            <CardMedia
                component="i"
                className={`ss ss-${set.image} ss-2x  ${set.isCompleted ? "ss-rare" : "ss-common"}`}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px"
                }}
            />
            <CardContent sx={{
                width: "100%"
            }}>
                <Typography variant="body2" >{set.name}</Typography>
                <LinearProgress
                    variant="solid"
                    color={set.collect ? "success" : "neutral"}
                    value={progress}
                    size="lg"

                />
            </CardContent>
        </Stack>
    )
}