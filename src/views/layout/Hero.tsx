import { EmailForm } from "../../shared/form/components/EmailForm";
import imageDivider from "../../../public/images/svg-images/Hero-group-text-stripes.svg";
import Iphone13 from "../../../public/images/hero/Hero-mockup-image.png";

export default function Hero() {
  return (
    <>
    <div className='hero'>
      {/* THE HERO SECTION DETAILS */}

      <section className="hero__left-alignment">
        {/* THE LEFT SIDE */}

          <h1 className="hero__header-text">Virtual Transaction Mechanism</h1>
          
          <p className="hero__content-text">The Liquidmoni App makes it easy for you to receive and send money in your local currency from anywhere in the world.</p>
          <EmailForm />

          <section className="hero__text-group">
              <div className="hero__text">
                  <p className='hero__big-text'>200</p>
                  <span className="hero__small-text">Recognized Countries</span>
              </div>

              <img src={imageDivider} alt="image-divider" className="image-divider" />
              
              <div className="hero__text">
                  <p className='hero__big-text'>120+</p>
                  <span className="hero__small-text">Currencies around the Globe</span>
              </div>
          </section>
      </section>

      {/* THE RIGHT SIDE */}
      <section className="hero__right-alignment">
        <img src = {Iphone13} className = "hero__image" alt="Iphone13" />
      </section>
    </div>
    </>
  )
}
