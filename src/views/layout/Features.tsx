import { featuresSectionData } from "../../shared/data/featuresSectionData";

export function Features() {
    return (
        <section className="features">
            <h2 className="features__header">Easily connect with clients or customers</h2>
            <p className="features__text">Our virtual transaction mechanism offers a range of benefits for businesses and individuals</p>
            {/* Each Feature section */}
            <section className="features__card">
                {featuresSectionData.map(feature => {
                    return (
                        <div className="features__card-container" key={feature.id}>
                            <p className="features__card-container-text">{feature.text}</p>
                            <img className="features__card__image" src={feature.image} alt={feature.image.slice()} />
                        </div>
                    )
                })}
            </section>
        </section>
    )
}