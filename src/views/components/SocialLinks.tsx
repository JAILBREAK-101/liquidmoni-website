import { Link } from "react-router-dom";
import { socialLinks } from "../../shared/data/components/socialLinks";

export function SocialLinks() {
    return (
        <section className="social-links">
            {socialLinks.map(link => <Link to={link.linkUrl}><img src={link.icon} alt={link.icon.slice(0, 4)}/></Link>)}            
        </section>
    )
}