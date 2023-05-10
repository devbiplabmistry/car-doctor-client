import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg'
import { BsGoogle, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
               <img src={logo} alt="" />
                <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach
                <br /> trainer who is also a serial .</p>
                <div className="icon flex gap-2">
                    <BsGoogle></BsGoogle>
                    <BsTwitter></BsTwitter>
                    <BsInstagram></BsInstagram>
                    <BsLinkedin></BsLinkedin>
                </div>
            </div>
            <div>
                <span className="footer-title">About</span>
                <Link className="link link-hover">Home</Link>
                <Link className="link link-hover">service</Link>
                <Link className="link link-hover">Contact</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">Why car Doctor ?</Link>
                <Link className="link link-hover">About</Link>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <Link className="link link-hover">Support Center</Link>
                <Link className="link link-hover">Feedback</Link>
                <Link className="link link-hover">Accesbility</Link>          
            </div>
        </footer>
    );
};

export default Footer;