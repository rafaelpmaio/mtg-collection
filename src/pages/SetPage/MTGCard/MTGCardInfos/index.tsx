import { CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import ICard from "interfaces/ICard";
import { Link } from "react-router-dom";
import { useGetScryfallCard } from "state/hooks/customHooks/useGetScryfallCard";
import { getValueWithKey } from "utils/getValueWithKey";

const MTGCardInfos = ({ card }: { card: ICard }) => {
    const scryfallCard = useGetScryfallCard(card);
    const imageSmall = getValueWithKey("small", scryfallCard?.images);

    const priceUsd = getValueWithKey("usd", scryfallCard?.prices);

    return (
        <>
            <Link to={card.tcgLink ? card.tcgLink : ""}>
                {
                    imageSmall
                        ? <CardMedia component="img" image={imageSmall} aria-label={card.name} height={300} />
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
        </>
    )
}

export default MTGCardInfos;