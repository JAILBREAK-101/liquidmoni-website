import { notifySectionData } from "../../shared/data/notifySectionData";
import notifyImage from "../../../public/images/notify/Notify-Mockup-Image.png";
import { EmailForm } from "../../shared/form/components/EmailForm";

export function Notify() {
    return (
        <section className="notification">
            <div className="notification__left">
                <h1 className="notification__header-text">What are you waiting for, get notified when we go live</h1>
                <p className="notification__text">With our virtual transaction mechanism, you can receive payments in your local currency, eliminating the need for costly currency conversions and enabling you to manage your finances more efficiently.</p>
    
                {/* mapped component */}
                <div className="notification__features">

                    {notifySectionData.map(data => <p key={data.id} className="notification__feature">
                        <img src={data.image} alt="Tick Image"></img>
                        <span className="">{data.text}</span>
                    </p>)}
                </div>
    
                <EmailForm />
            </div>
            <div className="notification-image">
                <img className="notification__right-image" src={notifyImage} alt={notifyImage.slice(16)} />
            </div>
        </section>

    )
}