import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer>
            <span>Contact: </span>
            <div className="social-links">
                <div className="github">
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="facebook">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
            </div>
        </footer>
    );
}
