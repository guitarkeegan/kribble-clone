import MarqueeItem from "./MarqueeItem";
import { cardData } from "@/data/card-data";

export default function Marquee() {
    return (
        <div className="marq overflow-hidden">
            <div className="hero-marquee overflow-hidden">
                <div className="hero-marquee-track">
                    {
                        cardData.map((card, i) => (
                            <MarqueeItem key={i} name={card.name} role={card.role} image={card.image} alt={card.alt} type={card.type} tags={card.tags} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}