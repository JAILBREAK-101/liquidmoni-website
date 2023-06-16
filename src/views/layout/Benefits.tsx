import { benefitSectionData } from "../../shared/data/benefitSectionData"
import mapImage from "../../../public/images/benefits/THE MAP.png";

export function Benefits() {
    return (
        <section className="benefits">
            <p className="benefits__uptext">Say hello to <span className="benefits__highlight">Liquidmoni</span></p>
            <h2 className="benefits__text">Send and Receive up to <span className="benefits__highlight">$5000</span> daily from anywhere: Whether you're a freelancer, small business owner, or non-profit organization.</h2>
            <section className="benefits__each">
                {benefitSectionData.map(benefit => {
                    return (
                        <div className="benefits__each-text" key={benefit.id}>
                            <img src={benefit.image} alt={benefit.image.slice(20)} />
                            <p className="">{benefit.text}</p>
                        </div>
                    )
                })}
            </section>

            <section className="map-image">
                <img src={mapImage} className="map-image" alt="map-image" />
            </section>

        </section>
    )
}