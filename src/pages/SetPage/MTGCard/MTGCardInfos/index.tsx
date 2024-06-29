import { CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import ICard from "interfaces/ICard";
import { IScryfallData } from "interfaces/IScryfallData";
import { Link } from "react-router-dom";
import { useFindScryfallCard } from "state/hooks/customHooks/useFindScryfallCard";

const MTGCardInfos = ({ card }: { card: ICard }) => {

    const scryfallCard: IScryfallData | undefined = useFindScryfallCard(card);

    console.log("scryfallCard", scryfallCard)

    //imageSmall não está carregando no "Media Inserts"
    const imageSmall =
        scryfallCard &&
            scryfallCard?.images.small
            ? scryfallCard?.images.small
            : scryfallCard?.images.normal
    const priceUsd = scryfallCard?.prices.usd;

    return (
        <>
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
        </>
    )
}

export default MTGCardInfos;