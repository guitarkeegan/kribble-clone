import Image from "next/image"

type MarquessParams = {
    key: number;
    name: string;
    role: string;
    image: string;
    tags: string[];
    alt: string;
    type: string;
}

export default function MarqueeItem({ key, name, role, image, tags, alt, type }: MarquessParams) {
    return (
        <div className="hero-marquee-item relative overflow-hidden">
            {
                type === "image"
                    ?
                    <Image
                        style={{objectFit: "contain", borderRadius: "26px", filter: "brightness(0.7)"}}
                        width={218}
                        height={272}
                        alt={alt} src={image} 
                        key={key}
                        />
                    :
                    <video
                        key={key}
                        style={{objectFit: "contain", borderRadius: "26px", filter: "brightness(0.7)" }}
                        width="218" height="272" autoPlay muted loop playsInline>
                        <source src={image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            }

            <div className="item-info flex flex-col gap-1 absolute bottom-8 left-3 z-10">
                <div className="item-name text-white text-sm font-semibold">
                    {name}
                </div>
                <div className="item-title text-white text-sm font-semibold">{role}</div>
                <div className="item-tags text-white font-semibold">
                    {
                        tags.map((tag, i) => (

                            <div key={i} className="tag text-white text-xs border-solid-white border-lg">
                                {tag}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}