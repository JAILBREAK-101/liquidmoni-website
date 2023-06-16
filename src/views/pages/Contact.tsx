import { Formik, Form, FormikHelpers } from "formik";
import ContactBackgroundImage from "/public/images/contact-us/contact-us-bg-text.png";
import { contactUsData } from "../../shared/data/contactUsData"
import { Footer } from "../layout/Footer";

export default function Contact() {
  return (
    <div className='contact'>
      <section className="contact__header">
          <div style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }} className="contact__hero-image">
          </div>

          <section className="contact__header-body">
            {contactUsData.map((eachData): JSX.Element => {
              return (
                <section className="contact__header-info" key={eachData.id}>
                  <div className="contact__card">
                      <div className="contact__img-block">
                          <img className="contact__img" src={eachData.image} alt="mail-icon" />
                      </div>

                      <div className="contact__detail-block">
                          <span className="contact__detail">{eachData.information}</span>
                      </div>
                  </div>
                </section>
              )
            })}
          </section>
      </section>

      <Footer />
    </div>
  )
}
