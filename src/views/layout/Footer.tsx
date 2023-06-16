import { Link } from 'react-router-dom';
import { footerLinks } from '../../shared/data/components/footerLinks';
import { SocialLinks } from '../components/SocialLinks';

export function Footer(): JSX.Element {
    return (
        <footer className="footer">
            <section className="footer__header" title='footer-section--1'>
                <h2 className="footer__text">Learn how to grow 💪your business with  <span className='footer__highlight'>Liquidmoni</span></h2>
                <button className='footer__button'>
                    <Link className='' to={'/signup'}>Download Soon</Link>
                </button>
            </section>
 
            <section className="" title='footer-section--2'>
                <SocialLinks />
                {/* EACH FOOTER LINKS */}
                <div className='footer__bottom'>
                    {footerLinks.map(footerLink => {
                        return (
                            <div className='footer__category'>
                                <p className=''>{footerLink.title}</p>
                                <ul className='footer__list'>
                                    {footerLink.links.map(link => {
                                        return <li className='footer__list-item'><Link className='footer__link' to={link.url}>{link.link}</Link></li>
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </section>
        </footer>
    )
}