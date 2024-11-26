import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = ({logo, aboutLinks, socialLinks, }) => {
    return (
        <div className="footer">
            <div className="copyrightContainer">
                <p>Copyright &copy; 2024</p>
            </div>
            <div className="logoContainer">
                <img src={logo} alt="Logo" className="logo"/>
                <br />
                <div className="links">
                    <a href={aboutLinks.aboutUs}>About Us</a>
                    <a href={aboutLinks.FAQ}>FAQs</a>
                    <a href={aboutLinks.contact}>Contact</a>
                </div>
            </div>

            <div className="linksContainer">
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className='socialLinks'>
                        <FaGithub style={{color: 'black'}}/>
                    </a>
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className='socialLinks'>
                        <FaInstagram style={{color: 'black'}}/>
                    </a>
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className='socialLinks'>
                        <FaFacebook style={{color: 'black'}}/>
                    </a>
            </div>

        </div>        

    )
}

export default Footer