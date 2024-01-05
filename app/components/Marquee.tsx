import MarqueeItem from "./MarqueeItem";
import { cardData } from "@/data/card-data";

export default function Marquee() {
    return (
        <div className="hero-marquee overflow-hidden flex">
            <div className="hero-marquee-track flex">
                {
                    cardData.map(card => (
                        <MarqueeItem name={card.name} role={card.role} image={card.image} alt={card.alt} type={card.type} tags={card.tags} />
                    ))
                }
            </div>
        </div>
    )
}