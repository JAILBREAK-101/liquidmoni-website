import NavBar from '../components/NavBar'

export default function Hero() {
  return (
    <>
    <div className=''>
      <NavBar />

      {/* THE HERO SECTION DETAILS */}
      <section className="hero">
        {/* THE LEFT SIDE */}
        <>
            <h1 className=''>Secure and Efficient Payments Solution</h1>
            <p className=''>The payment solution that makes it easy for you to receive payments in your local currency from anywhere in the world.</p>

            {/* FOR FORM VALIDATION */}
            <form action="#" className=''>
                <fieldset>
                    <legend>
                        <label htmlFor="email" hidden={true}>Email</label>
                        <input type="email" className='' id='email'/>
                        <button className=''>Get Notified</button>
                    </legend>
                </fieldset>
            </form>

            <section className="count">
                <div className="200">
                    <p className=''>200</p>
                    <span>Recognized Countries</span>
                </div>
                <div className="120">
                    <p className=''>120+</p>
                    <span>Currencies around the Globe</span>
                </div>
            </section>
        </>

        {/* THE RIGHT SIDE (THE IPHONE IMAGE WILL COME IN HERE*/}
        <>
        
        </>
      </section>
    </div>
    </>
  )
}
