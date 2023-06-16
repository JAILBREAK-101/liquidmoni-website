import { Footer } from "../layout/Footer";
import AboutBackground from "../../../public/images/about-us/about-bg.png";
import FirstGridImage from "../../../public/images/about-us/image1.png";
import SecondGridImage from "../../../public/images/about-us/image2.png";
import WavyLine from "../../../public/images/about-us/special-line.png";

export default function About() {

  return (
    <section className='about'>
      
      <div style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }} 
      className = "about__image-text">
        <h1 className="about__text">About Us</h1>
      </div>

      <div className="about__contents">
        <section className="about__container">
            <section className="about__container-header">
                <h2 className="about__container-text">Our Mission</h2>
                <img className="about__container__line-divider" src={WavyLine}
                    alt="Line Divider" />
                <p className="about__container-statement">
                    To remain the effectice option to currency exchange available, helping customers to
                    cushion
                    the
                    art
                    of money transportation across the globe, reliable and dependable payment system serving
                    the
                    customer at their convenience around the world achiecing the utmost customer
                    satisfaction.
                </p>
            </section>

            <img className="about__container-image" src={FirstGridImage} alt="mission image" />
        </section>

        <section className="about__container">
            <img className="about__container-image" src={SecondGridImage} alt="overview image" />
            <section className="about__container-header">
                <h2 className="about__container-text">
                    Overview
                </h2>
                <img className="about__container__line-divider" src={WavyLine}
                    alt="Line Divider" />
                <p className="about__container-statement">
                    Liquidmoni, We are an international payment gateway bridging gaps of international
                    transaction
                    between senders and receiveres withing remitting approval location. Our aim is to ensure
                    fast,
                    reliable and dependable currency conversion and transfer from liquid wallet to local
                    bank
                    account in
                    local currency. Our financial, compliance and support team are a guarantee of dedication
                    to
                    ensure
                    smooth service delivery and customer satisfaction. We have pride in a team of best in
                    compliance,
                    developers, finance, operation, suppport and marketing.
                </p>
            </section>
        </section>
      </div>

      <Footer />
    </section>
  )
}
