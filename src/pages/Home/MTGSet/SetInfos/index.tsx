import { LinearProgress } from "@mui/joy";
import { CardContent, CardMedia, Stack, Typography } from "@mui/material";
import ISet from "interfaces/ISet";
import 'styles/abstract/_vars.css';

export default function SetInfos({ set }: { set: ISet }) {

    return (
        <Stack direction="row" >
            <CardMedia
                component="i"
                className={`ss ss-${set.image} ss-2x  ${set.isCompleted ? "ss-rare" : "ss-common"}`}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px",
                }}
            />
            <CardContent sx={{
                width: "100%",
            }}>
                <Typography
                    variant="body2"
                    marginBottom={1}
                    fontFamily="inherit"
                    color="#3E001F"
                    fontWeight="bold"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                >
                    {set.name}
                </Typography>
                <LinearProgress
                    variant="solid"
                    determinate
                    thickness={17}
                    value={Math.round((set.collectedCardsTotal / set.totalSetSize) * 100)}
                    sx={{
                        borderRadius: "2px",
                    }}
                >
                    <Typography
                        variant="body2"
                        margin={0}
                        padding={0}
                        fontSize={12}
                        color="white"
                        sx={{ mixBlendMode: 'screen' }}
                    >{Math.round((set.collectedCardsTotal / set.totalSetSize) * 100)}%</Typography>

                </LinearProgress>
            </CardContent>
        </Stack>
    )
}