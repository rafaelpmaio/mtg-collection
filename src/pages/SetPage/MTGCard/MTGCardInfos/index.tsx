import { Box, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useRequestScryfallData } from "state/hooks/customHooks/builders/useRequestScryfallData";

const MTGCardInfos = ({ card }: { card: ICard }) => {

    const [scryfallCard, setScryfallCard] = useState<IScryfallData>();
    const requestData = useRequestScryfallData();
    const imageSmall = scryfallCard?.images && scryfallCard?.images.small
    const priceUsd = scryfallCard?.prices.usd;

    const { ref, inView } = useInView({
        threshold: 0.1
    })

    useEffect(() => {
        if (inView) requestData(card, setScryfallCard);
    }, [inView])



    return (
        <Box ref={ref}>
            <Link to={card.tcgLink ? card.tcgLink : ""}>
                {
                    imageSmall
                        ? <CardMedia component="img" image={imageSmall} aria-label={card.name} height={300} loading="lazy" />
                        : <Skeleton variant="rectangular" height={300} width="100%" animation="wave" />
                }
            </Link>
            <CardContent sx={{ padding: "5px" }}>
                <Typography variant="body2">nº: {card.number}</Typography>
                <Typography variant="body2" fontWeight="bold"> {card.name} </Typography>
                <Typography variant="body2" >
                    Current Price: US${" "}
                    <b>{priceUsd ? priceUsd : "0"}</b>
                </Typography>
            </CardContent>
        </Box>
    )
}

export default MTGCardInfos;