import { FaqComponent } from "../../shared/faq/FaqComponent";
export default function Faq() {
  return (
    <section className='Faq' title='FAQ'>
      <h1 className='Faq__header'>Frequently asked questions</h1>
      <p className='Faq__text'>Every you need to know about the product and billing.</p>

      <FaqComponent />
    </section>
  )
}


